import { Vector3 } from 'three';
import { InstanceMeshAnimationTypes } from '../../types/enums';
import { animationDefaults } from '../../constants/defaults';
import { createMatrix4, getInitialState } from '../utility';

// export const animateMesh = (time: Date, meshConfig, meshRef) => {
//   const [finalPosition, finalRotation, finalScale] = getAnimatedTransformation(
//     time,
//     meshConfig
//   )
//   meshRef.position.set(...finalPosition)
//   meshRef.rotation.set(...finalRotation)
//   meshRef.scale.set(...finalScale)
// }

export const getAnimatedTransformationMatrix = (time: number, instanceConfig: any) => {
    const [finalPosition, finalRotation, finalScale] = getAnimatedTransformation(time, instanceConfig);
    const matrix = createMatrix4(finalPosition, finalRotation, finalScale);
    return matrix;
};

export const getAnimatedTransformation = (time: number, instanceConfig: any) => {
    const [positionChange, rotationChange, scaleChange]: Array<Vector3> = [new Vector3(0, 0, 0), new Vector3(0, 0, 0), new Vector3(0, 0, 0)];

    instanceConfig.animations.forEach((animation: any) => {
        let [positionDelta, rotationDelta, scaleDelta]: Array<Vector3> = [new Vector3(0, 0, 0), new Vector3(0, 0, 0), new Vector3(0, 0, 0)];
        switch (animation.type) {
            case InstanceMeshAnimationTypes.Rotate:
                [positionDelta, rotationDelta, scaleDelta] = rotateAnimation(time, animation);
                break;
            case InstanceMeshAnimationTypes.Float:
                [positionDelta, rotationDelta, scaleDelta] = floatAnimation(time);
                break;
        }
        positionChange.add(positionDelta);
        rotationChange.add(rotationDelta);
        scaleChange.add(scaleDelta);
    });

    const [initialPosition, initialRotation, initialScale] = getInitialState(instanceConfig);
    const finalPosition = initialPosition.add(positionChange);
    const finalRotation = initialRotation.add(rotationChange);
    const finalScale = initialScale.add(scaleChange);
    return [finalPosition, finalRotation, finalScale];
};

export const floatAnimation = (time: number): Array<Vector3> => {
    const position = new Vector3(0, 0, 0);
    const rotation = new Vector3(0, 0, 0);
    const scale = new Vector3(0, 0, 0);
    rotation.x = (1 + Math.cos(time / 4)) / 10;
    rotation.y = Math.sin(time / 4) / 10;
    rotation.z = (1 + Math.sin(time / 1.5)) / 20;
    position.y = (1 + Math.sin(time / 1.5)) / 20;
    return [position, rotation, scale];
};

export const rotateAnimation = (time: number, animation: any): Array<Vector3> => {
    const position = new Vector3(0, 0, 0);
    const scale = new Vector3(0, 0, 0);
    const rotationArray: Vector3 = animation.rotationArray ? new Vector3(...animation.rotationArray) : new Vector3(...animationDefaults.rotationArray);
    rotationArray.multiplyScalar(time);
    return [position, rotationArray, scale];
};
