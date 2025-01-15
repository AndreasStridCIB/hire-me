import React from "react";
import { TableRow, TableCell } from "@mui/material";
import { Child } from "../utils/types";
import CheckStatus from "./CheckStatus";

interface ChildrenTableItemProps {
  child: Child;
  selectedChildId: string;
  setSelectedChildId: React.Dispatch<React.SetStateAction<string>>;
}

const ChildrenTableItem: React.FC<ChildrenTableItemProps> = ({
  child,
  setSelectedChildId,
  selectedChildId,
}) => {
  const isSelected = selectedChildId === child.childId;

  return (
    <TableRow
      onClick={() => setSelectedChildId(child.childId)}
      sx={{
        cursor: "pointer",
        backgroundColor: isSelected ? "primary.main" : "transparent",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: 0.5,
        },
      }}
    >
      <TableCell sx={{ color: isSelected ? "white" : "inherit" }}>
        {child.name.fullName}
      </TableCell>
      <TableCell>
        <CheckStatus isCheckedIn={child.checkedIn} />
      </TableCell>
      <TableCell sx={{ color: isSelected ? "white" : "inherit" }}>
        {child.isSick ? "Yes" : "No"}
      </TableCell>
      <TableCell sx={{ color: isSelected ? "white" : "inherit" }}>
        {child.onTrip ? "Yes" : "No"}
      </TableCell>
    </TableRow>
  );
};

export default ChildrenTableItem;
