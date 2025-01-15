import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  TableSortLabel,
} from "@mui/material";
import { Child } from "../utils/types";
import ChildrenTableItem from "./ChildrenTableItem";
import LoadingIcon from "../../components/LoadingIcon";
import ErrorMessage from "../../components/ErrorMessage";
import { sortChildrenByBoolean, sortChildrenString } from "../utils/functions";

interface ChildrenTableProps {
  children: Child[] | undefined;
  setSelectedChildId: React.Dispatch<React.SetStateAction<string>>;
  selectedChildId: string;
  isLoading: boolean;
}

type Order = "asc" | "desc";

const ChildrenTable: React.FC<ChildrenTableProps> = ({
  children,
  setSelectedChildId,
  selectedChildId,
  isLoading,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Child>("name");

  if (isLoading) {
    return <LoadingIcon />;
  }

  if (!children) {
    return <ErrorMessage message="Failed to load children" />;
  }

  const handleRequestSort = (property: keyof Child) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedChildren = () => {
    if (orderBy === "name") {
      return sortChildrenString(children, order);
    } else if (
      orderBy === "isSick" ||
      orderBy === "onTrip" ||
      orderBy === "checkedIn"
    ) {
      return sortChildrenByBoolean(children, orderBy, order);
    }
    return children;
  };

  const childrenSplitToPages = sortedChildren().slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "scroll",
      }}
    >
      {/* *AI-generated with prompt 
        "Create a mui table pagination component that displays a list of children. 
        The table should have columns for the child's name, whether they are sick, whether they are on a trip, and whether they are checked in" */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "name"}
                  direction={orderBy === "name" ? order : "asc"}
                  onClick={() => handleRequestSort("name")}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "checkedIn"}
                  direction={orderBy === "checkedIn" ? order : "asc"}
                  onClick={() => handleRequestSort("checkedIn")}
                >
                  Checked Status
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "isSick"}
                  direction={orderBy === "isSick" ? order : "asc"}
                  onClick={() => handleRequestSort("isSick")}
                >
                  Is Sick
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "onTrip"}
                  direction={orderBy === "onTrip" ? order : "asc"}
                  onClick={() => handleRequestSort("onTrip")}
                >
                  On Trip
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {childrenSplitToPages.map((child) => (
              <ChildrenTableItem
                key={child.childId}
                child={child}
                setSelectedChildId={setSelectedChildId}
                selectedChildId={selectedChildId}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        color="primary"
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={children.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ChildrenTable;
