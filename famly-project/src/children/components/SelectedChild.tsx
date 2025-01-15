import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import { Child } from "../utils/types";
import ErrorMessage from "../../components/ErrorMessage";
import CheckStatus from "./CheckStatus";

interface SelectedChildProps {
  child: Child | undefined;
  onCheckIn: (childId: string) => void;
  onCheckOut: (childId: string) => void;
}

const SelectedChild: React.FC<SelectedChildProps> = ({
  child,
  onCheckIn,
  onCheckOut,
}) => {
  if (!child) {
    return <ErrorMessage message="No child selected" />;
  }
  const handleButtonClick = () => {
    if (child.checkedIn) {
      onCheckOut(child.childId);
    } else {
      onCheckIn(child.childId);
    }
  };

  return (
    <Card
      sx={{
        display: "grid",
        maxWidth: 300,
        height: "fit-content",
        padding: 4,
      }}
    >
      <Box
        component="img"
        sx={{
          justifySelf: "center",
        }}
        src={child.image.large}
        alt={child.name.fullName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {child.name.fullName}
        </Typography>
        <CheckStatus isCheckedIn={child.checkedIn} />
        <Typography variant="body2" color="text.secondary">
          Is Sick: {child.isSick ? "Yes" : "No"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          On Trip: {child.onTrip ? "Yes" : "No"}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          {child.checkedIn ? "Check Out" : "Check In"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default SelectedChild;
