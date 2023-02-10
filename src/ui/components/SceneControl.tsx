import { SceneControlTypes } from '../../types/enums';

const SceneControl = () => {
    return (
        <>
            <p>
                <label htmlFor="encoding">Choose Scene Controls: </label>
                <select name="encoding" id="encoding">
                    {Object.keys(SceneControlTypes)
                        .filter((v) => isNaN(Number(v)))
                        .map((encoding: string, index: number) => {
                            return (
                                <option value={encoding} key={index}>
                                    {encoding}
                                </option>
                            );
                        })}
                </select>
            </p>
        </>
    );
};

export default SceneControl;
