import { useEffect, useState } from "react";
import { createPortal } from 'react-dom';
import { ModalProps } from "../../interfaces/UI";
import Spinner from "../spinner/spinner";
import "./modal.css";

function Modal({controllerBtnTitle, title, children, showSubmit = false, submit , modalTitleClass, isLoading, isSuccess}: ModalProps) {
    const [showModal, setShowModal] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const submitButtonContent = isLoading ? <Spinner /> : 'Submit';
    function submitModal() {
        setIsSubmit(true);
        submit();
    }

    useEffect(() => {
        if(isSubmit) {
            setShowModal(!isSuccess)
        }
    },[isSuccess]);

    return createPortal(
        (<>
            <button onClick={() => setShowModal(true)}> {controllerBtnTitle} </button>
            <p>the show modal {showModal}</p>
            {showModal ? <><div className="overlay"></div><article className="modal">
                    <div className="modal-content">
                        <h1 className={modalTitleClass ? modalTitleClass: ''}>{title}</h1>
                        {children}
                        <div className="modal__call-to-actions-container">
                            <button onClick={() => setShowModal(false)}>close</button>
                            {showSubmit ? <button onClick={() => submitModal()} disabled={isLoading}>{submitButtonContent}</button> : null}
                        </div>
                    </div>
                </article></> : null}
        </>), document.getElementById('modal-root') as HTMLElement
    )
}

export default Modal;