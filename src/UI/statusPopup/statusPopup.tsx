import { IStatusPopupProps } from "../../interfaces/UI";
import { popupStatusProperties } from "./constants/constants";

function StatusPopup({status, message} : IStatusPopupProps) {
    const currentStatus = popupStatusProperties[status];
    return(
        <section className={`status-popup ${currentStatus.className}`}>
            {message ? message: currentStatus.message}
        </section>
    )
}

export default StatusPopup;