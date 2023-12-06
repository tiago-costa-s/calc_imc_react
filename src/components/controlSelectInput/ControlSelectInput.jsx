import './ControlSelectInput.css';

const ControlSelectInput = ({ position, label, variant, name, id, option }) => {

    return (

        <div className='container-select'>
            <label htmlFor="">{label}</label>

            <select className={variant} name={name}>
                <option value=''>- -</option>
                <option value='man'>Masculino</option>
                <option value='woman'>Feminino</option>
            </select>
        </div>

    )

}

export default ControlSelectInput;