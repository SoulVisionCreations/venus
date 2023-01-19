import { AnimationTypes } from "../../Configs/types";
import { animationDefaults } from "../../Constants/defaults";

export const applyAnimations = (animations, time, objectRef) => {
    animations.forEach(animation => {
        switch(animation.type) {
            case AnimationTypes.Rotate :  
                rotateAnimation(time, objectRef, animation.rotationArray);
                break;
            case AnimationTypes.Float :  
                floatAnimation(time, objectRef);
                break;
        }
    }
)};

export const floatAnimation = (time, objectRef) => {
    objectRef.rotation.x = -Math.PI / 2.1 + Math.cos(time / 4) / 8;
    objectRef.rotation.y = Math.sin(time / 4) / 8;
    objectRef.rotation.z = (1 + Math.sin(time / 1.5)) / 20;
    objectRef.position.y = (1 + Math.sin(time / 1.5)) / 20;
}

export const rotateAnimation = (time, objectRef, rotationArray) => {
    rotationArray = rotationArray ? rotationArray : animationDefaults.rotationArray;
    rotationArray = rotationArray.map(r => r*time);
    objectRef.rotation.set(...rotationArray);
}
