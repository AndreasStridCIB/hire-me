import React, { Suspense, lazy } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LoadingIcon from "./components/LoadingIcon";
import NavBar from "./components/NavBar";

const ChildrenPage = lazy(() => import("./children/ChildrenPage"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#8743E5",
    },
  },
});

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Suspense fallback={<LoadingIcon />}>
        <ChildrenPage />
      </Suspense>
    </ThemeProvider>
  );
};
