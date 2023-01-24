import { useState } from "react";
import Tags from "./Tags";
import TextBox from "./TextBox";
import modalStyles from '../styles/Modal.module.css';


export default function TextPage(){

    const [hasContent, setHasContent] = useState(true);

return(<>
    <input 
        className={modalStyles.inputTitle}  
        placeholder="Title" 
        type="text" id="title" name="title" required
        
        ></input>
  
    <TextBox/>

    { hasContent 
        ? <Tags/>
        : null
    }
</>)}