import { toast } from "react-toastify";

type Toastype = 'success' | 'error' | 'info' | 'warning';

const sendToast = (message: string, type: Toastype) => {
    return toast[type](message, {
        position: 'top-right',
        autoClose: (type === 'success') ? false : 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export default sendToast;