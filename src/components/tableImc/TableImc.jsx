// React Icons
import { IoWoman } from 'react-icons/io5';

// CSS
import './TableImc.css';

const TableImc = ({ data, imc, info }) => {

    let alertColor;

    data.map((tab) => {
        if (imc >= tab.min && imc <= tab.max) {
            alertColor = tab.alert;
        }
    });

    return (

        <div className='table-imc'>
            <div className='result-header'>
                <p>Seu IMC <span className={alertColor} id='imc'>{imc}</span></p>
                <p>Sua Classificação <span className={alertColor} id='info'>{info}</span></p>
            </div>
            <div className='table-header'>
                <p>Classificações</p>
                <p>Informação</p>
            </div>
            <div className="table-body">
                {data.map((table) => (
                    <div className='table-column' key={table.description}>
                        <p className='line-description'>{table.description}</p>
                        <p className='line-info'>{table.info}</p>
                    </div>
                ))}
            </div>
        </div>

    )

}

export default TableImc