import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "../../components/Modal";
import TextPage from "../../components/Text";

export default function Text(){

    const [isOpen, setIsOpen] = useState(true);
    const router = useRouter();

    const handleClose = () => {
        router.push("/");
        setIsOpen(false);
        document.body.style.overflow = 'unset';
    }

return(<>
   
    <Modal handleClose={handleClose} isOpen={isOpen}>
        <TextPage/>
    </Modal>

    </>)
}