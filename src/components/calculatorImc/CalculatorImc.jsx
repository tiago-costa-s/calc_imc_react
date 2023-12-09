// React Icons
import { FaWeightHanging } from 'react-icons/fa';
import { FaTextHeight } from 'react-icons/fa6';
// Componentes
import ControlSelectInput from '../controlSelectInput/ControlSelectInput';
import FormButton from '../formButton/FormButton';
// CSS
import './CalculatorImc.css';

const CalculatorImc = ({ }) => {

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
                        />
                        <FaWeightHanging />
                    </div>
                </div>

                <div className='control-input' >
                    <label htmlFor=''>Sexo</label>
                    <select className='container-input' name=''>
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
                />
            </div>
        </div>

    )

}

export default CalculatorImc;