import { popupStaus } from "../types/UItypes";

export interface ModalProps {
    controllerBtnTitle: string,
    title: string,
    children: React.ReactNode, 
    showSubmit: boolean,
    submit: () => void,
    modalTitleClass?: string; 
    isLoading?: boolean;
}

export interface IStatusPopupProps {
    status: popupStaus,
    message?: string
}