import { createContext, useContext, useEffect, useState } from "react";

const ParamsProvider = createContext();

const UserChatComponent = ({ children }) => {
  const [userChat, setUserChat] = useState(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        console.log("Esc key was pressed");
        setUserChat(null);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <ParamsProvider.Provider
      value={{
        userChat,
        setUserChat,
      }}
    >
      {children}
    </ParamsProvider.Provider>
  );
};

export const useContextUserChat = () => useContext(ParamsProvider);
export default UserChatComponent;
