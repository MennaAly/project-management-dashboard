import { useState } from "react";
import { popupStaus } from "../types/UItypes";

function useShowPopup() {
    const [status, setStatus] = useState<popupStaus>();
    function showStatusPopup(status: popupStaus ) {
        setStatus(status);
        setTimeout(() => {
            setStatus(undefined);
        }, 10000)
    }
    return {status, showStatusPopup}
}

export default useShowPopup;