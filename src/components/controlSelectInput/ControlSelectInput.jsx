// Hooks
import { useState } from 'react';
// CSS
import './ControlSelectInput.css';

const ControlSelectInput = ({ position, label, variant, name, id }) => {

    const [select, setSelect] = useState();

    const handleSelectChange = (e) => {
        const selectValue = e.target.value;
        setSelect(selectValue);
        console.log(typeof selectValue);
    };

    return (

        <div className={`container-select ${position}`} >
            <label htmlFor="">{label}</label>

            <select className={variant} name={name} value={select} onChange={handleSelectChange}>
                <option value=''>- -</option>
                <option value='man'>Masculino</option>
                <option value='woman'>Feminino</option>
            </select>
        </div >

    )

}

export default ControlSelectInput;