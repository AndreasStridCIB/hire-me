import React from "react";

interface CheckStatusProps {
  isCheckedIn: boolean;
}

const CheckStatus: React.FC<CheckStatusProps> = ({ isCheckedIn }) => {
  return (
    <div
      style={{
        backgroundColor: isCheckedIn ? "green" : "red",
        color: "white",
        padding: "6px",
        width: "100%",
        maxWidth: "150px",
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      {isCheckedIn ? "Checked In" : "Checked Out"}
    </div>
  );
};

export default CheckStatus;
