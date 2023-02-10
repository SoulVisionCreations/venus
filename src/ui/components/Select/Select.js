const Select = ({ options, title }) => {
    return (
        <>
            <label htmlFor={title}>Choose {title}: </label>
            <select name={title} id={title}>
                {Object.keys(options)
                    .filter((v) => isNaN(Number(v)))
                    .map((value, index) => {
                        return (
                            <option value={value} key={index}>
                                {value}
                            </option>
                        );
                    })}
            </select>
        </>
    );
};

export default Select;
