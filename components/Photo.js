import { useState } from "react";
import modalStyles from '../styles/Modal.module.css';
import Tags from "./Tags";
import TextBox from "./TextBox"

export default function Photo(){

    const [hasContent, setHasContent] = useState(true);

    const [file, setFile] = useState([]);

    const handleChange = (e) => {
        console.log(e.target.files);
        setFile([...e.target.files]);
    }

return(<>
    <div className={modalStyles.photoContainer} > 
        <input 
            type="file" 
            multiple 
            accept="image/*"
              style={{display:'none'}}
              className={modalStyles.inputPhoto}
            
        />
         <button  onChange={handleChange} className={modalStyles.button}>Upload some photos <br/> :) </button>
        

    </div>

    { hasContent 
    ? 
     <>
     <br/>
     <TextBox placeholder="Add a description" />
     <Tags/>
     </>
    : null
    }
       
    </>)
}