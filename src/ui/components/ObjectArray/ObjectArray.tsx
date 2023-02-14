import { AiFillDelete } from 'react-icons/ai';

type ObjectArray = {
    array: object[];
    title: string;
    removeElement: (key: number) => void;
};

const ObjectArray = ({ array, title, removeElement }: ObjectArray) => {
    return (
        <>
            {array.length > 0 &&
                array.map((ele, key) => {
                    return (
                        <p key={key}>
                            {title} {key}
                            <button onClick={() => removeElement(key)}>
                                <AiFillDelete />
                            </button>
                            {Object.keys(ele).map((prop, propKey) => {
                                return (
                                    <li key={propKey}>
                                        {prop}: {JSON.stringify(ele[prop as keyof typeof ele])}
                                    </li>
                                );
                            })}
                        </p>
                    );
                })}
        </>
    );
};

export default ObjectArray;
