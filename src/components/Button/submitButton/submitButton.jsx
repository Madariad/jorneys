import "./submitButton.css";

function submitButton({submit}) {
    return ( 
        <>
        <button className="submitButton" onClick={submit}>оплатить</button>
        </>
    )
}
export default submitButton