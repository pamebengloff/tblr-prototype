import { useRef, useState } from 'react';
import useAutosizeTextArea from "../utils/useAutosizeTextArea"
import modalStyles from '../styles/Modal.module.css';

export default function TextBox({placeholder}){

    const [value, setValue] = useState("");
    const textboxRef = useRef();

    const handleChange = (e) =>{
        setValue(e.target.value);
    } 

    useAutosizeTextArea(textboxRef.current, value);

return(
<>
    <textarea
        className={`${modalStyles.textboxDetails} ${modalStyles.textarea}`}
        required
        placeholder={placeholder}
        value={value}
        rows={1}
        ref={textboxRef}
        onChange= { handleChange }
    />

    <br/>
</>)}