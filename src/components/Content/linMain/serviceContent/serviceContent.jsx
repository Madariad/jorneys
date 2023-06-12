import "./style.css";
import  ServiceBlocks  from "./serviceBlocks/serviceBlocks";
import SubmitButton from "../../../Button/submitButton/submitButton";


import { useDispatch, useSelector } from 'react-redux';
import { OnSubmit } from "../../../../store/serviceContentSlice";


function serviceContent() {
    const serviceContents = useSelector((state) => state.serviceContent.state)
    const dispath = useDispatch()
    
    function handleSubmit() {
        dispath(OnSubmit()) 
    }
    return (
        <>
        <ServiceBlocks />
        {/* <h1>Service content</h1> */}

        <SubmitButton submit={handleSubmit}/>
        
        </>
    )
}
export default serviceContent