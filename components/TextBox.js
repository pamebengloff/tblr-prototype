import { useRef, useState } from 'react';
import useAutosizeTextArea from "../utils/useAutosizeTextArea"
import modalStyles from '../styles/Modal.module.css';

export default function TextBox(){

    const [value, setValue] = useState("");
    const textAreaRef = useRef();

    const handleChange = (e) =>{
        setValue(e.target.value);
    } 

    useAutosizeTextArea(textAreaRef.current, value);

return(
<>
    <textarea
        className={modalStyles.inputTextPost}  
        required
        placeholder='Here goes some text'
        value={value}
        rows={1}
        ref={textAreaRef}
        onChange= { handleChange }
    />

    <br/>
</>)}