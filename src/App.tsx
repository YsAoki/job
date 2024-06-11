import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import "reset-css";
import { ThemeProvider } from "styled-components";
import ReactRouter from "./router";
import "./style.css";
import { theme } from "./theme/theme";
const App: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ReactRouter />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
