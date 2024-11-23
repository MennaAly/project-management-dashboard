import { useState } from "react";
import { createPortal } from 'react-dom';
import { ModalProps } from "../../interfaces/UI";
import Spinner from "../spinner/spinner";
import "./modal.css";

function Modal({controllerBtnTitle, title, children, showSubmit = false, submit , modalTitleClass, isLoading}: ModalProps) {
    const [showModal, setShowModal] = useState(false);
    const submitButtonContent = isLoading ? <Spinner /> : 'Submit';
    function submitModal() {
        setShowModal(false);
        submit();
    }

    return createPortal(
        (<>
            <button onClick={() => setShowModal(true)}> {controllerBtnTitle} </button>
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