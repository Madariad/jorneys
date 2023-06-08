import  "./style.css";
import  Aside  from "../Aside/aside"
import RightContent from "../RightContent/RightContent";

function Main() {
    return (
        <main className="content">
            <Aside />
            <RightContent />
        </main>
    )
}

export default Main