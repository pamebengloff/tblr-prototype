import Link from "next/link"
import navBar from "../styles/NavBar.module.css"
import {useEffect, useState} from "react";

import {MdHomeFilled} from "react-icons/md"
import {FaPencilAlt} from "react-icons/fa"
import LogoIcon from "./LogoIcon";

export default function NavBar(){

  //state when window is bigger than 768px: is desktop=true, else is mobile/ipad=false
  const [isDesktop, setDesktop] = useState(undefined);

  //effect that detects the screesize changes each time
  useEffect( () => {
  
    const updateMedia = () => {
      setDesktop(window.innerWidth > 990 ? true : false);
    };
   
      updateMedia() 
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    
  },[]);
  
return typeof isDesktop !== 'undefined' ?  (
// burger menu if width: 990px, else normal menu 
 isDesktop ?
 (
    <div className={navBar.container}>
      
        <div className={navBar.leftContainer}>
          <LogoIcon/>  
            <div>search</div>
        </div>

        <div className={navBar.rightContainer}>
            <div className={navBar.logoIcon}> 
              <Link href="../">
                {/* home icon */}
                <MdHomeFilled/> 
              </Link>
            </div>
            <div>button</div>
            <div>button</div>
            <div>button</div>
            <div>button</div>
            <div>button</div>
            <div>
                <Link href="./new">
                  <FaPencilAlt/>
                </Link>
                </div>
        </div>
    </div>
)
:( 
    <div className={navBar.container}>
        <div>burger menu</div>
        <LogoIcon/>
        {/* <div className={navBar.logoIcon}> <FaTumblr/> </div> */}
        <div>search</div>
    </div> 
)

) : null

}