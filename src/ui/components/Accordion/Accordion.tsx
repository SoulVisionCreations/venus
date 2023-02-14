import { useState } from 'react';
import { FcExpand, FcCollapse } from 'react-icons/fc';
import './Accordion.css';

type Accordion = {
    title: string;
    children: any;
    defaultExpanded: boolean;
};

const Accordion = ({ title, children, defaultExpanded }: Accordion) => {
    const [expandState, setExpandState] = useState(defaultExpanded);
    const handleOnClick = () => {
        setExpandState(!expandState);
    };
    return (
        <div className="accordion">
            <div className="accordion-header" onClick={handleOnClick} onKeyDown={handleOnClick} role="presentation">
                <div className="accordion-header-title">{title}</div>
                <div className="accordion-header-Icon">{expandState ? <FcCollapse /> : <FcExpand />}</div>
            </div>
            {expandState && <div className="accordion-content">{children}</div>}
        </div>
    );
};

export default Accordion;
