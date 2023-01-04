export const floatAnimation = (time, objectRef) => {
    objectRef.rotation.x = -Math.PI / 1.75 + Math.cos(time / 4) / 8;
    objectRef.rotation.y = Math.sin(time / 4) / 8;
    objectRef.rotation.z = (1 + Math.sin(time / 1.5)) / 20;
    objectRef.position.y = (1 + Math.sin(time / 1.5)) / 10;
}