import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import modalStyles from '../styles/Modal.module.css';
import Tags from "./Tags";
import TextBox from "./TextBox"


export default function Photo(){

    const [hasContent, setHasContent] = useState(false); //activates the textbox and tags components
   
    const [images, setImages] = useState([]); //holds the images uploaded from the user
    const [imagesURLs, setImagesURLs] = useState([]); //for the image previews
    const [copy, setCopy] = useState([]);

    //al hacer clic en el button tambien se hara en el input
    const hiddenFileInput = useRef(null);
    const handleClick = (e) => {
        hiddenFileInput.current.click();
    }

    //sube las images
    const handleChange = (e) => {
       setImages([...e.target.files]);
    
       setHasContent(true);
    }

    //for the image preview
    useEffect(() => {
         if(images.length <1 ) return;
      
        let newImageUrls = [];      
        //cada imagen se guarda en el array newImageUrls con un URL temporal
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    
        setImagesURLs(newImageUrls); //saves the previews
        setCopy(newImageUrls) //fill the array with new images
        copyImages(newImageUrls); //pass the new images   
      
     },[hasContent, images]) //each time there are images uploaded and hasContent is true

    //to accumulate all the images old and new
    function copyImages(images){
        setCopy([...copy, ...images]) //add to the already filled array the new images that arrived with each upload, copy will have every image 
    }
    
    // console.log("fotos guardadas")
    //console.log(copy)

return(<>
    <span className={modalStyles.image}> 
    {copy.map(imagesSrc => 
         <Image 
            src={imagesSrc.toString()}
            key={imagesSrc} 
             className={modalStyles.image}
             width={100}
             height={100} 
             alt={imagesSrc.toString()}
         />  
      
    )}
    </span>  


    <div className={modalStyles.photoContainer} > 
    <button  onClick={handleClick} className={modalStyles.button}>
        Upload some photos <br/> :) 
    </button>
    <input 
        ref={hiddenFileInput}
        type="file" 
        multiple 
        accept="image/*"
        style={{display:'none'}}
        onChange={handleChange} 
    />
   
    </div>

    
    { hasContent 
    ? 
      <>
      <br/>
      <TextBox placeholder="Add a description" />
      <Tags/>
      <hr className={modalStyles.borderModalFooter}/>
      </>
    : null
    }
       
    
    </>)
}