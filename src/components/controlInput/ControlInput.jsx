import { GiBodyHeight } from "react-icons/gi";

// Hooks
import { useState } from "react";

// CSS
import "./ControlInput.css";

const ControlInput = ({ position, label, variant, name, placeholder, icon }) => {

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
            <div className="container-input">
                <input
                    className={variant}
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {icon}
            </div>

        </div>

    )

}

export default ControlInput;