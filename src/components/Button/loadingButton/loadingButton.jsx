
import  "./style.css";

export function LoadingButton() {
    return (
        <button className="loadingButton" onClick={console.log('clicked button: loading ')}>
            <img src="../../../public/icon/loading.svg" alt="loading button" /> 
        </button>
    )
}
export default LoadingButton






