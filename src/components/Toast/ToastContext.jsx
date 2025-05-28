import { createContext, useContext, useState } from "react";
import Toast from "./Toast";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toastData, setToastData] = useState(null);
  let timeoutId;

  function showToast(type, message) {
    setToastData({ type, message });
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setToastData(null), 3000);
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toastData && <Toast type={toastData.type} message={toastData.message} />}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
