// Componetes
import { data } from '../data/data';
import TableImc from './components/tableImc/TableImc';
import CalculatorImc from './components/calculatorImc/CalculatorImc';
// CSS
import './App.css';
import { useState } from 'react';

function App() {

  const [imc, setImc] = useState('');
  const [info, setInfo] = useState('');
  const [description, setDescription] = useState('');

  const calcImc = (e, height, weight, gender) => {
    e.preventDefault();

    if (!height || !weight || !gender) return;

    const heightValue = +height.replace(",", ".");
    const weightValue = +weight.replace(",", ".");
    const genderValue = gender;

    const imcResult = (weightValue / (heightValue * heightValue)).toFixed(1);

    setImc(imcResult);

    data.map((list) => {
      if (imcResult >= list.min && imcResult <= list.max) {
        setInfo(list.info);
        setDescription(list.description);
      }
    });

    if (!info) return;
  };

  return (
    <div className='app'>
      <CalculatorImc calcImc={calcImc} />   

      {imc ?
        <TableImc data={data} imc={imc} info={info} description={description} />
        :
        null}
    </div>

  )

}

export default App
