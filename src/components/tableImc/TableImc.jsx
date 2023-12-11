// React Icons
import { IoWoman } from "react-icons/io5";

// CSS
import './TableImc.css';

const TableImc = ({ data, imc, info }) => {

    return (

        <div className='table-imc'>
            <div className="result-header">
                <p>Seu IMC
                    <span id="imc">{imc}</span>
                </p>
                <p>Sua Classificação
                    <span id="info">{info}</span>
                </p>
            </div>

            <div className="table-header">
                <p>Classificações</p>
                <p>Informação</p>
            </div>

            {data.map((table) => (
                <div className="table-body" key={table.description}>
                    <p className="column-description">
                        {table.description}
                    </p>
                    <p className="column-info" >
                        {table.info}
                    </p>
                </div>


            ))}


        </div>

    )

}

export default TableImc