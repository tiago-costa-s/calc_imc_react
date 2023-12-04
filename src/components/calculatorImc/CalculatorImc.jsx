// Componentes
import FormButton from '../formButton/FormButton';
import ControlInput from '../controlInput/ControlInput';

// CSS
import './CalculatorImc.css';

const CalculatorImc = () => {

    return (

        <div className='calculator-imc'>
            <form className=''>
                <ControlInput
                    position='column'
                    label='Altura'
                    name="height"
                    placeholder="Exemplo: 1,70"
                />
                <ControlInput
                    position='column'
                    label='Peso'
                    name="weight"
                    placeholder="Exemplo: 80,0"
                />
            </form>
            <div className="control-button">
                <FormButton text="Calcular" />
            </div>
        </div>

    )

}

export default CalculatorImc;