import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const context = useContext(GlobalContext);

  console.log(context);

  return (
    <>
      <ul className="list">
        <li className="minus">
          Cash <span>-&#8377; 400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};
