import { useState } from "react";
import { createPortal } from 'react-dom';
import { ModalProps } from "../../interfaces/UI";
import Spinner from "../spinner/spinner";
import "./modal.css";

function Modal({controllerBtnProperties, modalTitleProperties, children, submitProperties}: ModalProps) {
    const {title : controllerBtnTitle, icon: controlllerBtnIcon, class: controllerBtnClass} = controllerBtnProperties;
    const {title: modalTitle, class: modalTitleClass} = modalTitleProperties;
    const {showSubmitButton, submit, isLoading} = submitProperties;
    const [showModal, setShowModal] = useState(false);
    const submitButtonContent = isLoading ? <Spinner /> : 'Submit';
    function submitModal() {
        setShowModal(false);
        submit();
    }

    return createPortal(
        (<>
            <button className={controllerBtnClass} onClick={() => setShowModal(true)}>
                {controlllerBtnIcon}
                {controllerBtnTitle} 
            </button>
            {showModal ? <><div className="overlay"></div><article className="modal">
                    <div className="modal-content">
                        <h1 className={modalTitleClass}>{modalTitle}</h1>
                        {children}
                        <div className="modal__call-to-actions-container">
                            <button className="button secondary-button" onClick={() => setShowModal(false)}>Close</button>
                            {showSubmitButton ? <button className="button primary-button" onClick={() => submitModal()} disabled={isLoading}>{submitButtonContent}</button> : null}
                        </div>
                    </div>
                </article></> : null}
        </>), document.getElementById('modal-root') as HTMLElement
    )
}

export default Modal;