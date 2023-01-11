import { useLayoutEffect } from "react";
import { useState } from "react";
import {createPortal} from "react-dom"

/* createPortal(content, containerElement):
content: any valid renderable React element (children)
containerElement: a valid DOM element to which we can append the content (wrapperId)
wrapperId: is the ID attribute of a DOM element and acts as the container for the portal. */

function createWrapperAndAppendToBody(wrapperId){
    const wrapperElement = document.createElement("div");
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}

export default function ReactPortal({ children, wrapperId = "react-portal-wrapper" }) {
    
    const [wrapperElement, setWrapperElement] = useState(null);

    //If the wrapperId property changes
    // useLayoutEffect if the effect needs to be synchronous and also if there are any direct mutations on the DOM
    // When the wrapperId changes, the component will update accordingly.
    useLayoutEffect( () => {

        let element = document.getElementById(wrapperId);
        
        // we need to ensure that the dynamically added empty div is removed from the DOM when the ReactPortal component is unmounted
        let systemCreated = false; //If the systemCreated is true, we’ll delete the element from the DOM
        
        // if element is not found with wrapperId,
        // create and append to body
        if (!element) {
            systemCreated = true;
           element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);

        return () => {
            // delete the programatically created element
            if (systemCreated && element.parentNode) {
              element.parentNode.removeChild(element);
            }
          }

    }, [wrapperId]);
    
     // wrapperElement state will be null on the very first render.
    if (wrapperElement === null) return null;

  
    return createPortal(children, element);
  }
