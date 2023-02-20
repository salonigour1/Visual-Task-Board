import { useContext, useState } from "react";
import React from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const ReturnId = (prefix) => prefix + Math.trunc(Math.random() * 10000000000);
  const [boards, setBoards] = useState([
    {
      bid: ReturnId("BRD"),
      name: "No Assigned To",
      cards: [
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "low",
        },
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "low",
        },
      ],
    },
    {
      bid: ReturnId("BRD"),
      name: "Beth Angles",
      cards: [
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "low",
        },
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "low",
        },
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "low",
        },
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "low",
        },
      ],
    },
    {
      bid: ReturnId("BRD"),
      name: "John Compton",
      cards: [
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "low",
        },
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "low",
        },
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "low",
        },
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "low",
        },
      ],
    },
    {
      bid: ReturnId("BRD"),
      name: "Erica Stevenson",
      cards: [
        { cid: ReturnId("TASK") },
        { cid: ReturnId("TASK") },
        { cid: ReturnId("TASK") },
      ],
    },
  ]);
  return (
    <AppContext.Provider value={{ loading, boards, ReturnId }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGobalData = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
