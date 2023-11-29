import ControlInput from './components/controlInput/ControlInput'

import './App.css'

function App() {

  return (

    <div className="app">
      <ControlInput
        position="column"
        label="Altura"
        variant="outline"
        name="height"
        placeholder="Exemplo: 1,70"
      />
    </div>

  )

}

export default App
