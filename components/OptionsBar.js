import Link from "next/link";
import Image from "next/image"
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import optionsBar from '../styles/OptionsBar.module.css';
//datos de las opciones
import {optionsData} from "../data/optionsData.js";
import Modal from "./Modal"
import Text from "./Text"
import Photo from "./Photo";

let op;

export default function OptionsBar(){
 
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        setIsOpen(true);
         op = e.currentTarget.id;
        // Disables Background Scrolling whilst the SideDrawer/Modal is open
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }

    const handleClose = () => {
        setIsOpen(false)
        document.body.style.overflow = 'unset';
    }


return(
<>
{/* <Modal  handleClose={handleClose } isOpen={isOpen}> <Text/> </Modal> */}
<div className={optionsBar.container}>
    { //desplegamos cada imagen siendo un boton o link
    optionsData.map((image) =>
   
    <li className={optionsBar.listImages} key={image.keyId}> 
        <button id={image.iconTitle} onClick={handleClick}>    
        <Link className={optionsBar.link} /* href={image.href}*/ href="/" as={image.url}>
           <Image 
               src={image.src} 
               alt={image.iconTitle} 
               width={37}
               height={35}
            /> 
            <p  className={optionsBar.p}>{image.iconTitle} </p>
        </Link>
        </button>
    </li>   

    )    

}
    {//si el boton clickeado es el de texto, abre el modal con el texto
        op ==="Text" && isOpen === true 
        ? (  <Modal handleClose={handleClose } isOpen={isOpen}> <Text/> </Modal>  ) 
        : null
    }
     

    {
        op ==="Photo" && isOpen === true  
        ? (<Modal  handleClose={handleClose } isOpen={isOpen}> <Photo/> </Modal>) 
        : null
    }

</div>



</>
)    
}