import Link from "next/link";
import optionsBar from '../styles/OptionsBar.module.css';

export default function OptionsBar(){

return(
<>
    <div className={optionsBar.container}>
       <Link href="/new/text"><p>text</p> </Link> 
        <p>photo</p>
        <p>quote</p>
        <p>link</p>
        <p>chat</p>
        <p>audio</p>
        <p>video</p>
    </div>
</>
)    
}