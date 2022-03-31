import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./utilities";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./App.sass";
// Routes
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider>
          <SnackbarUtilsConfigurator />
          <Suspense fallback={<div>Loading ...</div>}>
            <Provider store={store}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Login />} />
                  <Route path="/about" element={<div> About </div>} />
                  <Route path="*" element={<div> Not Found </div>} />
                </Routes>
              </BrowserRouter>
            </Provider>
          </Suspense>
        </SnackbarProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
