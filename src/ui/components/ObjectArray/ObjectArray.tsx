import { IoMdRemoveCircle } from 'react-icons/io';
import Accordion from '../Accordion/Accordion';
import './ObjectArray.css';

type ObjectArray = {
    array: object[];
    title: string;
    removeElement: (key: number) => void;
};

const ObjectArray = ({ array, title, removeElement }: ObjectArray) => {
    return (
        <div>
            {array.length > 0 &&
                array.map((ele, key) => {
                    return (
                        <Accordion title={title + ' ' + (key + 1)} defaultExpanded={false} key={key}>
                            <p>
                                {Object.keys(ele).map((prop, propKey) => {
                                    return (
                                        <li key={propKey}>
                                            {prop}: {JSON.stringify(ele[prop as keyof typeof ele])}
                                        </li>
                                    );
                                })}
                                <button className="delete-button" onClick={() => removeElement(key)}>
                                    Remove {title} <IoMdRemoveCircle size={24} />
                                </button>
                            </p>
                        </Accordion>
                    );
                })}
        </div>
    );
};

export default ObjectArray;
