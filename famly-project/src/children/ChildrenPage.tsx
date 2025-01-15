import React from "react";
import { useChildren } from "./hooks/useChildren";
import ChildrenTable from "./components/ChildrenTable";
import SelectedChild from "./components/SelectedChild";
import { Box } from "@mui/material";

const ChildrenPage: React.FC = () => {
  const { children, isLoading, checkInChild, checkOutChild } = useChildren();

  const [selectedChildId, setSelectedChildId] = React.useState<string>("");

  const handleCheckIn = async (childId: string) => {
    await checkInChild(childId);
  };

  const handleCheckOut = async (childId: string) => {
    await checkOutChild(childId);
  };

  const getSelectedChild = (childId: string) => {
    return children?.find((child) => child.childId === childId) || undefined;
  };

  return (
    <Box
      sx={{
        height: "calc(100vh - 64px)", // 64px is the height of the AppBar
        width: "100vw",
        display: "grid",
        backgroundColor: "#FFF9ED",
        padding: 4,
      }}
    >
      <Box
        sx={{
          display: "grid",
          height: "calc(100vh - 96px)", // 96px is the height of the AppBar and the padding
          gridTemplateColumns: { xs: "1fr", md: "auto 1fr" },
          gridTemplateRows: { xs: "auto 1fr", md: "fit-content(100%)" },
          justifyItems: { xs: "center" },
          gap: 2,
        }}
      >
        <SelectedChild
          child={getSelectedChild(selectedChildId)}
          onCheckIn={handleCheckIn}
          onCheckOut={handleCheckOut}
        />
        <ChildrenTable
          children={children}
          setSelectedChildId={setSelectedChildId}
          selectedChildId={selectedChildId}
          isLoading={isLoading}
        />
      </Box>
    </Box>
  );
};

export default ChildrenPage;
