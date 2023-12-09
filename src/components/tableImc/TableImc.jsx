// React Icons
import { IoWoman } from "react-icons/io5";

// CSS
import './TableImc.css';

const TableImc = ({ data, imc, info, description }) => {

    return (

        <div className='table-imc'>
            <h2>Resultado</h2>
            <p>imc: {imc}</p>
            <p>Info: <span>{info}</span></p>
            <p>Description: <span>{description}</span></p>

            <div>
                <IoWoman />
            </div>

        </div>

    )

}

export default TableImc