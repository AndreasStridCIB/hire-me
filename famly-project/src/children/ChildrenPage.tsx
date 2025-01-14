import React, { useEffect, useState } from "react";
import { checkInChild, checkOutChild, getChildren } from "./api/children";
import { Child } from "./utils/types";

const ChildrenPage: React.FC = () => {
  const [children, setChildren] = useState<Child[]>();

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const data = await getChildren();
        console.log(data);
        setChildren(data);
      } catch (error) {
        console.error("Error fetching children:", error);
      }
    };

    fetchChildren();
  }, []);

  const handleCheckIn = async (childId: string) => {
    console.log("XXX childId", childId);
    try {
      await checkInChild(childId, "16:00");
      console.log("Child checked in");
    } catch (error) {
      console.error("Error checking in child:", error);
    }
  };

  const handleCheckOut = async (childId: string) => {
    try {
      await checkOutChild(childId);
      console.log("Child checked out");
    } catch (error) {
      console.error("Error checking out child:", error);
    }
  };

  console.log("children", children);
  console.log("children[0] CHECK STATUS", children && children[0]);

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
