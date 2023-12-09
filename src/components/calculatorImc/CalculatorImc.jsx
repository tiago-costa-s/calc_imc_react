// React Icons
import { FaWeightHanging } from 'react-icons/fa';
import { FaTextHeight } from 'react-icons/fa6';
// Componentes
import ControlSelectInput from '../controlSelectInput/ControlSelectInput';
import FormButton from '../formButton/FormButton';
// CSS
import './CalculatorImc.css';
import { useState } from 'react';

const CalculatorImc = ({ e, action, calcImc }) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [gender, setGender] = useState("");

    const validateDigits = (text) => {
        return text.replace(/[^0-9,]/g, "");
    }

    const heightOnChange = (e) => {
        const heightUpdateValue = validateDigits(e.target.value);
        setHeight(heightUpdateValue);
        console.log(heightUpdateValue);
    };

    const weightOnChange = (e) => {
        const weightUpdateValue = validateDigits(e.target.value);
        setWeight(weightUpdateValue);
        console.log(weightUpdateValue)
    };

    const genderOnChange = (e) => {
        const genderUpdateValue = e.target.value;
        setGender(genderUpdateValue);
    };

    return (

        <div className='calculator-imc'>
            <h2>Calcule o seu IMC</h2>
            <form className=''>
                <div className='control-input' >
                    <label htmlFor='height'>Altura</label>
                    <div className='container-input'>
                        <input
                            type='text'
                            name='height'
                            placeholder='Exemplo: 1,70'
                            value={height}
                            onChange={heightOnChange}
                        />
                        <FaTextHeight />
                    </div>
                </div>

                <div className='control-input' >
                    <label htmlFor='weight'>Peso</label>
                    <div className='container-input'>
                        <input
                            type='text'
                            name='weight'
                            placeholder='Exemplo: 80,0'
                            value={weight}
                            onChange={weightOnChange}
                        />
                        <FaWeightHanging />
                    </div>
                </div>

                <div className='control-input' >
                    <label htmlFor=''>Sexo</label>
                    <select className='container-input' name='' onChange={genderOnChange}>
                        <option value=''>- -</option>
                        <option value='man'>Masculino</option>
                        <option value='woman'>Feminino</option>
                    </select>
                </div >
            </form>
            <div className='control-button'>
                <FormButton
                    variant='border-line'
                    text='Calcular'
                    action={(e) => calcImc(e, height, weight, gender)}
                />
            </div>
        </div>

    )

}

export default CalculatorImc;