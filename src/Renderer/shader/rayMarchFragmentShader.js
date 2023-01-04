export const rayMarchFragmentShader = `precision highp float;
precision highp sampler3D;
in vec3 vOrigin;
in vec3 vDirection;
out vec4 glColor;

uniform vec3 minPosition;
uniform vec3 gridSize;
uniform vec3 atlasSize;
uniform float voxelSize;
uniform float blockSize;
uniform float nearPlane;
uniform float steps;
uniform float noise;
uniform float contrast;
uniform float gamma;

uniform vec3 CropMin;
uniform vec3 CropMax;

uniform float selectedRegionLive[6];
uniform float selectedRegions[1];

uniform sampler3D mapAlpha;
uniform sampler3D mapColor;
uniform sampler3D mapIndex;

vec3 pancakeBlockIndex(vec3 posGrid, float blockSize, ivec3 iBlockGridBlocks) {
  ivec3 iBlockIndex = ivec3(floor(posGrid / blockSize));
  ivec3 iAtlasBlocks = ivec3(atlasSize) / ivec3(blockSize + 2.0);
  int linearIndex = iBlockIndex.x + iBlockGridBlocks.x *
    (iBlockIndex.z + iBlockGridBlocks.z * iBlockIndex.y);

  vec3 atlasBlockIndex = vec3(float(linearIndex % iAtlasBlocks.x), float((linearIndex / iAtlasBlocks.x) % iAtlasBlocks.y), float(linearIndex / (iAtlasBlocks.x * iAtlasBlocks.y)));

    // If we exceed the size of the atlas, indicate an empty voxel block.
  if(atlasBlockIndex.z >= float(iAtlasBlocks.z)) {
    atlasBlockIndex = vec3(-1.0, -1.0, -1.0);
  }

  return atlasBlockIndex;
}

vec3 ChangeRange(vec3 cValue, vec3 cMin, vec3 cMax, vec3 nMin, vec3 nMax) {
  vec3 nValue = vec3(0.0);
  nValue = ((cValue - cMin) / (cMax - cMin)) * (nMax - nMin) + nMin;
  // new_value = ((old_value - old_min) / (old_max - old_min)) * (new_max - new_min) + new_min;
  return nValue;
}

vec2 rayAabbIntersection(vec3 aabbMin, vec3 aabbMax, vec3 origin, vec3 invDirection) {
  vec3 t1 = (aabbMin - origin) * invDirection;
  vec3 t2 = (aabbMax - origin) * invDirection;
  vec3 tMin = min(t1, t2);
  vec3 tMax = max(t1, t2);
  return vec2(max(tMin.x, max(tMin.y, tMin.z)), min(tMax.x, min(tMax.y, tMax.z)));
}

int highlightRegion(vec3 posBlock) {
  int intersected = 0;
  if((posBlock.x > selectedRegionLive[0] && posBlock.x <= selectedRegionLive[3]) && (posBlock.y > selectedRegionLive[1] && posBlock.y <= selectedRegionLive[4]) && (posBlock.z > selectedRegionLive[2] && posBlock.z <= selectedRegionLive[5])) {
    intersected = 1;
  }
  return intersected;
}

vec3 removeAlpha(vec3 posBlock, vec3 color, float alpha) {
  if(selectedRegions.length() < 2) {
    return color;
  }
  for(int i = 0; i < selectedRegions.length(); i += 6) {
    if((posBlock.x > selectedRegions[i + 0] && posBlock.x <= selectedRegions[i + 3]) && (posBlock.y > selectedRegions[i + 1] && posBlock.y <= selectedRegions[i + 4]) && (posBlock.z > selectedRegions[i + 2] && posBlock.z <= selectedRegions[i + 5])) {
      color = vec3(0.);
    }
  }
  return color;
}

float removeAlpha_2(vec3 posBlock, float alpha) {
  if(selectedRegions.length() < 2) {
    return alpha;
  }
  for(int i = 0; i < selectedRegions.length(); i += 6) {
    if((posBlock.x > selectedRegions[i + 0] && posBlock.x <= selectedRegions[i + 3]) && (posBlock.y > selectedRegions[i + 1] && posBlock.y <= selectedRegions[i + 4]) && (posBlock.z > selectedRegions[i + 2] && posBlock.z <= selectedRegions[i + 5])) {
      alpha = 0.0;
    }
  }
  return alpha;
}

void main() {

    // Set up the ray parameters in world space..
  float nearWorld = nearPlane;
  vec3 originWorld = vOrigin;
  vec3 directionWorld = normalize(vDirection);

    // Now transform them to the voxel grid coordinate system.
  // vec3 originGrid = (originWorld - normalize(minPosition)) / (245.0 * voxelSize);
  vec3 originGrid = (originWorld - normalize(minPosition));
  vec3 directionGrid = directionWorld;
  vec3 invDirectionGrid = 1.0 / directionGrid;

  // float norBlocksize = blockSize / 490.0;

  ivec3 iGridSize = ivec3(round(gridSize)); //490
  int iBlockSize = int(round(blockSize)); //14 
  ivec3 iBlockGridBlocks = (iGridSize + iBlockSize - 1) / iBlockSize;
  ivec3 iBlockGridSize = iBlockGridBlocks * iBlockSize;
  vec3 blockGridSize = vec3(iBlockGridSize);
  // vec2 tMinMax = rayAabbIntersection(vec3(0.0, 0.0, 0.0), (gridSize), vOrigin, invDirectionGrid);
  vec2 tMinMax = rayAabbIntersection(CropMin, CropMax, vOrigin, invDirectionGrid);

    // Skip any rays that miss the scene bounding box.
  glColor = vec4(0.96, 0., 0., 0.0);
  if(tMinMax.x > tMinMax.y) {
    return;
  }

  // float t = max(nearWorld / voxelSize, tMinMax.x);  // 1.7
  float t = tMinMax.x;  // 1.7
  vec3 norPosGrid = originGrid + directionGrid * t; // FIRST grid pose

  vec3 posGrid = ChangeRange(norPosGrid, vec3(-0.5), vec3(0.5), vec3(0.0), gridSize);

  // vec3 posGrid = originGrid + tMinMax.x * directionWorld; // FIRST grid pose
  vec3 blockMin = floor(posGrid / blockSize) * blockSize;
  vec3 blockMax = blockMin + blockSize;
  vec2 tBlockMinMax = rayAabbIntersection(blockMin, blockMax, originGrid, invDirectionGrid);
  vec3 atlasBlockIndex;

  // vec3 posBlockGrid = (blockMin + blockMax) / (2.0 * blockGridSize);
  // vec3 norPosBlockGrid = ChangeRange(posBlockGrid, vec3(0.0), gridSize, vec3(-1.0), vec3(1.0));

  atlasBlockIndex = 255.0 * texture(mapIndex, norPosGrid).xyz;
  // atlasBlockIndex = 255.0 * texture(mapIndex, (blockMin + blockMax) / (2.0 * blockGridSize)).xyz;
  // atlasBlockIndex = pancakeBlockIndex(posGrid, norBlocksize, iBlockGridBlocks);

  float visibility = 1.0;
  vec3 color = vec3(0.0);
  int step = 0;
  int maxStep = int(ceil(length(gridSize)));
  vec3 inc = 1.0 / abs(directionGrid);
  float delta = min(inc.x, min(inc.y, inc.z));
  delta /= steps;
  int intersected_obj;

  for(float j = tMinMax.x; j < (tMinMax.y); j += delta) {
    // atlasBlockIndex.x = removeAlpha_2(norPosGrid, atlasBlockIndex.x);
    if(atlasBlockIndex.x > 254.0) {
      // continue;
    } else {

      vec3 posAtlas = (clamp(posGrid - blockMin, 0.0, blockSize));
      posAtlas += atlasBlockIndex * (blockSize + 2.0);
      posAtlas += 1.0; // Ac
      vec3 atlasUvw = (posAtlas) / (atlasSize);

      const int skipMipLevel = 2;
      const float miniBlockSize = float(1 << skipMipLevel);

      float atlasAlpha = texelFetch(mapAlpha, ivec3(posAtlas / miniBlockSize), skipMipLevel).x;
      atlasAlpha = removeAlpha_2(norPosGrid, atlasAlpha);

      if(atlasAlpha > 0.0) {
          // OK, we hit something, do a proper trilinear fetch at high res.
        atlasAlpha = textureLod(mapAlpha, atlasUvw, 0.0).x;
          // Only worth fetching the content if high res alpha is non-zero.

        if(atlasAlpha > 0.5 / 255.0) {
          vec4 atlasRgba = vec4(0.0, 0.0, 0.0, atlasAlpha);
          atlasRgba.rgb = texture(mapColor, (atlasUvw)).xyz;
          color += visibility * atlasRgba.rgb;
          visibility *= 1.0 - atlasRgba.a;
        }
      }
    }

    if(visibility < 1.0 / 255.0) {
        break;
    }

    norPosGrid += directionWorld * delta;
    posGrid = ChangeRange(norPosGrid, vec3(-0.5), vec3(0.5), vec3(0.0), gridSize);

    blockMin = floor(posGrid / blockSize) * blockSize;
    blockMax = blockMin + blockSize;
    tBlockMinMax = rayAabbIntersection(blockMin, blockMax, originGrid, invDirectionGrid);
    atlasBlockIndex = 255.0 * texture(mapIndex, norPosGrid).xyz;

  }

  color = vec3(1.0, 1.0, 1.0) * visibility + color;

  if(color == vec3(1.0) || (visibility > noise)) {
    glColor = vec4(0.0, 0.1843, 0.502, 0.0);
  } else {
    color *= contrast;
    color.rgb = pow(color.rgb, vec3(1.0 / gamma));
    glColor = vec4(color, 1.0);
  }

}`