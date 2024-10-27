import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (message, type = "success") => {
  const options = {
    position: "top-right",
    autoClose: 5000,
  };

  if (type === "success") {
    toast.success(message, options);
  } else if (type === "error") {
    toast.error(message, options);
  }
};

export { ToastContainer, notify };
