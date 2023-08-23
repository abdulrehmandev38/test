import React, { createContext, useContext, useEffect, useState } from "react";
import { Notification } from "../components";
export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [sectors, setSectors] = useState([]);
  const [cron, setCron] = useState(null);
  const [notification, setNotification] = useState({
    type: null,
    message: null,
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/sectors")
      .then((res) => {
        return res.json();
      })
      .then((res) => setSectors(res));

    fetch("http://127.0.0.1:8000/create-session")
      .then((res) => {
        return res.json();
      })
      .then(
        (res) =>
          !localStorage.getItem("sessionID") &&
          localStorage.setItem("sessionID", res.id)
      );
  }, []);

  const handleNotification = ({ type, message }) => {
    clearTimeout(cron);
    const time = setTimeout(() => {
      setNotification({ type: null, message: null });
    }, 2000);
    setCron(time);
    setNotification({ type: type, message: message });
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ sectors, setSectors, handleNotification }}>
      {children}
      {notification.type && (
        <Notification
          notify={notification}
          onClick={() => setNotification({ type: "", message: "" })}
        />
      )}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
