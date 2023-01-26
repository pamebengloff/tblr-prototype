import { useState, useRef } from "react";
import Tags from "./Tags";
import TextBox from "./TextBox";
import useAutosizeTextArea from "../utils/useAutosizeTextArea"
import modalStyles from '../styles/Modal.module.css';


export default function TextPage(){

    const [hasContent, setHasContent] = useState(true);
    const [value, setValue] = useState("");

    const titleRef = useRef();

    const handleChange = (e) =>{
        setValue(e.target.value);
    } 

    useAutosizeTextArea(titleRef.current, value);

return(<>
    <textarea 
        className={`${modalStyles.titleDetails} ${modalStyles.textarea}`}   
        placeholder="Title" 
        required
        rows={1}
        ref={titleRef}
        value={value}
        onChange= { handleChange }
    />
  
    <TextBox placeholder="Here goes some text"/>


    { hasContent 
        ? <Tags/>
        : null
    }
    <hr className={modalStyles.borderModalFooter}/>
</>)}