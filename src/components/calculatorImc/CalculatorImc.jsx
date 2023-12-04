// Componentes
import FormButton from '../formButton/FormButton';
import ControlInput from '../controlInput/ControlInput';
// CSS
import './CalculatorImc.css';

const CalculatorImc = () => {

    return (

        <div className='calculator-imc'>
            <h2>Calcule o seu IMC</h2>
            <form className=''>
                <ControlInput
                    position='column'
                    label='Altura'
                    variant='outline'
                    name='height'
                    placeholder='Exemplo: 1,70'
                />
                <ControlInput
                    position='column'
                    label='Peso'
                    variant='outline'
                    name='weight'
                    placeholder="Exemplo: 80,0"
                />
            </form>
            <div className='control-button'>
                <FormButton text='Calcular' />
            </div>
        </div>

    )

}

export default CalculatorImc;