import { useEffect } from "react";

export default function useAutosizeTextArea(textAreaRef, value){
    useEffect(() => {
        if(textAreaRef){
            //reset the height momentarily
            textAreaRef.style.height = "0px";
            const scrollHeight = textAreaRef.scrollHeight;
            //then set directly the height
            textAreaRef.style.height = scrollHeight +"px";
        }
    },[textAreaRef, value])
}