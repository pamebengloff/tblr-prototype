import { useState, useRef} from "react";
import useAutosizeTextArea from "../utils/useAutosizeTextArea"
import modalStyles from '../styles/Modal.module.css';

export default function Tags(){

    const [value, setValue] = useState("");
    const tagsRef = useRef();

    const handleChange = (e) =>{
        setValue(e.target.value);
    } 

    useAutosizeTextArea(tagsRef.current, value);

return(
<>
<textarea
        className={`${modalStyles.tagsDetails} ${modalStyles.textarea}`}
        required
        placeholder='#tags'
        value={value}
        rows={1}
        ref={tagsRef}
        onChange= { handleChange }
    /> 
</>)}