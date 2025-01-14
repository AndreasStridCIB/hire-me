import React, { useEffect, useState } from "react";
import { Child } from "./utils/types";
import { useChildren } from "./hooks/useChildren";

const ChildrenPage: React.FC = () => {
  const { children, error, isLoading, checkInChild, checkOutChild } =
    useChildren();

  const handleCheckIn = async (childId: string) => {
    await checkInChild(childId);
  };

  const handleCheckOut = async (childId: string) => {
    await checkOutChild(childId);
  };

  console.log("children", children);
  console.log("children[0] CHECK STATUS", children && children[0].checkedIn);

  return (
    <div>
      {children ? (
        <>
          <button onClick={() => handleCheckIn(children[0].childId)}>
            Check In
          </button>
          <button onClick={() => handleCheckOut(children[0].childId)}>
            Check Out
          </button>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default ChildrenPage;
