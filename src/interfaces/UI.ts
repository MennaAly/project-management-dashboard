import { modalButtonProperties, modalTitleProperties, popupStaus, submitModalProperties } from "../types/UItypes";

export interface ModalProps {
    controllerBtnProperties: modalButtonProperties,
    modalTitleProperties: modalTitleProperties,
    submitProperties: submitModalProperties,
    children: React.ReactNode, 
}

export interface IStatusPopupProps {
    status: popupStaus,
    message?: string
}