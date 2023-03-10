import { useEffect, useState} from "react";
import modalStyles from '../styles/Modal.module.css';
import UserIcon from "./UserIcon"
import {AiFillTool} from "react-icons/ai"
//import {BiChevronDown} from "react-icons/bi"

// isOpen: a boolean flag that represents the modal’s state (open or closed) and is controlled in the parent component that renders the modal
//handleClose: a method that is called by clicking the close button or by any action that triggers a close
export default function Modal({children, isOpen, handleClose}){

    //para cerrar con el escape key
    useEffect(() => {
        const closeOnEscapeKey = (e) => e.key === "Escape" ? handleClose() : null;
        
        document.body.addEventListener("keydown", closeOnEscapeKey);

        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        }
    }, [handleClose])

    if(!isOpen) return null;

return(
<>
<div className={modalStyles.container}>
   
    <div className={modalStyles.semiContainer}> 
    <div className={modalStyles.semisemiContainer}> 
    {/* para acomodar al user icon */}
    <div className={modalStyles.userIcon}>
        <UserIcon  />
    </div>
    {/* para acomodar el cuadro para postear*/}
    <div className={modalStyles.modalBox}>        
        <div className={modalStyles.modalTop}>
            <p> yourblog </p>  {/*aqui debe ir el username de quien se loguee */}
            {/* <button> <AiFillTool/> </button> */}
        </div>
        {/* todo el contenido sobre Text, Photo, Quote, etc: */}
        {children} 
        {/* para acomodar los botones de close y publish */}
        
    
        <div className={modalStyles.modalFooter}>
        
            <button onClick={handleClose} >
                Close
            </button>
            <button onClick={handleClose} >
                Publish
            </button>
        </div>
     
    </div>   

    </div>   
    </div>  
</div>
</>)}