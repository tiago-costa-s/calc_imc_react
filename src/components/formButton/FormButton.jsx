import "./FormButton.css";

const FormButton = ({ variant, action, text }) => {

    return (

        <button
            className={variant}
            onClick={action}>
            {text}
        </button>

    );

};

export default FormButton;