import { IInput } from "../../type";

export const Input = ({
	type,
	id,
	name,
	label,
	value,
	placeholder,
	isEnable,
	isEmpty,
	isValid,
	isRequired,
	error,
    callback,
    className,

}: IInput) => {
    const labelComponent = label ? <label className='input__label' htmlFor={name}>{label}</label> : ''
	return (
        <div className="input-container" key={name}>
        {labelComponent}
        <input 
            className={className}
            id={id}
            name={name}
            value ={value}
            type={type}
            placeholder={placeholder}
            data-empty={isEmpty}
            data-valid={isValid}
            required={isRequired}
            disabled={!isEnable}
                onChange={(e) => { callback(e) }}
                autoComplete=''
        />
        <p className='input__error'>
            {error}
        </p>
    </div>
	);
};
