import { createContext, useContext, useState } from "react";
import Toast from "./Toast";

const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toastData, setToastData] = useState(null);

  const showToast = (type, message) => {
    setToastData({ type, message });
    setTimeout(() => setToastData(null), 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toastData && <Toast type={toastData.type} message={toastData.message} />}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
export const useToast = () => useContext(ToastContext);
