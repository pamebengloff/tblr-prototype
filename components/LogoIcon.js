import Link from "next/link"
import {FaTumblr} from "react-icons/fa"
import navBar from "../styles/NavBar.module.css"

 {/* home icon */}
export default function LogoIcon(){
    return(
    <div className={navBar.logoIcon}> 
        <Link href="../">
          {/* home icon */}
          <FaTumblr/>
        </Link>
    </div>
    )
}