import "./FormButton.css";

const FormButton = ({ variant, action, text }) => {

    const handleAction = (e) => {
        action(e);
    }
    return (

        <button
            className={variant}
            onClick={handleAction}>
            {text}
        </button>

    );

};

export default FormButton;