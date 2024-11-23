import { createPortal } from 'react-dom';
import { IStatusPopupProps } from "../../interfaces/UI";
import { popupStatusProperties } from "./constants/constants";

function StatusPopup({status, message} : IStatusPopupProps) {
    const currentStatus = popupStatusProperties[status];    

    return createPortal((
        <section className={`status-popup ${currentStatus.className}`}>
            {message ? message: currentStatus.message}
        </section>
    ), document.getElementById('status-popup') as HTMLElement)
}
export default StatusPopup;