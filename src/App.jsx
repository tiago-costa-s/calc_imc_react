// Componetes
import { data } from '../data/data';
import TableImc from './components/tableImc/TableImc';
import CalculatorImc from './components/calculatorImc/CalculatorImc';
// CSS
import './App.css';
import { useState } from 'react';

function App() {

  const [imc, setImc] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const calcImc = () => {
    const imc = (weight / (height * height));
    return imc;
  };

  return (

    <div className="app">
      <CalculatorImc />
      {/* <TableImc /> */}

      {!imc ? <TableImc /> : null}
    </div>

  )

}

export default App
