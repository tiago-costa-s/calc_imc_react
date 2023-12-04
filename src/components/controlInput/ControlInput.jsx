// Hooks
import { useState } from "react";

// CSS
import "./ControlInput.css";

const ControlInput = ({ position, label, variant, name, placeholder }) => {

    const [value, setValue] = useState("");

    const validateDigits = (text) => {
        return text.replace(/[^0-9,]/g, "");
    };

    const onChange = (e) => {
        const updateValue = validateDigits(e.target.value);
        setValue(updateValue);
    };

    return (

        <div className={`control-input ${position}`}>
            <label htmlFor={name}>{label}</label>
            <input
                className={variant}
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
        
    )

}

export default ControlInput;