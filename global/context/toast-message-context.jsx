// ui/global/toast/ToastProvider.js
import React, { createContext, useContext } from 'react';
import Toast from 'react-native-toast-message';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const showToast = ({ type = 'success', text1, text2 }) => {
    Toast.show({
      type,
      text1,
      text2,
      position: "bottom",
    });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
