export const objToArr = (objectArr) => {
    const newArr = [];
    objectArr.map((object) => {
        const newObj = { ...object };
        newArr.push({
            ...newObj,
            position: [newObj.position?.x, newObj.position?.y, newObj.position?.z],
            rotation: [newObj.rotation?.x, newObj.rotation?.y, newObj.rotation?.z],
            scale: [newObj.scale?.x, newObj.scale?.y, newObj.scale?.z],
        });
    });
    return newArr;
};
