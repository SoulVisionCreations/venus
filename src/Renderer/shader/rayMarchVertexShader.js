export const rayMarchVertexShader = `in vec3 position;
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 CamPos;
in mat4 instanceMatrix;
out vec3 vOrigin;
out vec3 vDirection;
void main() {
    
    

    vOrigin = vec3(inverse(modelMatrix) * vec4(CamPos, 1.0)).xyz;
    vDirection = position - vOrigin;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(normalize(position), 1.0);
    
    gl_Position.x *= -1.0; // for mirroring the object
}`