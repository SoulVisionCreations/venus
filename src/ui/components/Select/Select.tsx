type Select = {
    title: string;
    options: any;
    defaultValue: any;
    onChange: (event: any) => void;
};

const Select = ({ title, options, defaultValue, onChange }: Select) => {
    return (
        <>
            <label htmlFor={title}>Choose {title}: </label>
            <select name={title} id={title} onChange={onChange}>
                {Object.keys(options)
                    .filter((v) => isNaN(Number(v)))
                    .map((value, index) => {
                        return (
                            <option value={options[value]} key={index} selected={defaultValue === value}>
                                {value}
                            </option>
                        );
                    })}
            </select>
        </>
    );
};

export default Select;
