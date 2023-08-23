import React, { createContext, useContext, useEffect, useState } from "react";
export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/sectors")
      .then((res) => {
        return res.json();
      })
      .then((res) => setSectors(res));
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ sectors, setSectors }}>
      {children}
      {/*       {notification.type && (
        <PushNotification
          type={notification.type}
          message={notification.message}
          onClick={() => setNotifiction({ type: "", message: "" })}
        />
      )} */}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
