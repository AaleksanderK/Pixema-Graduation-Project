import { IInput } from "../../type";

export const Input = ({className,type,id,value,label,placeholder,callback}: IInput) => {
    return ( 
        <div>
            <input
                className={className}
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
            />
        </div>
     );
}
 