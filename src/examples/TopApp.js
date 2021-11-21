import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";
import awsconfig from "../../src/aws-exports";
import {  withAuthenticator } from "@aws-amplify/ui-react";

import { routesConfig } from "./routesConfig";
import MainApp from "../lib/menu/MainApp"

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const theme = createMuiTheme();

function TopApp() {
  // vyzaduje a konfiguracia routes v tvare:
  // 
  // export const routesConfig = [
  //   {
  //     label: "Upload image",
  //     route: "/upload",
  //     component: UploadImage,
  //     icon: MailIcon,
  //   }

  return (
    <div>
      <ThemeProvider theme={theme}>
      <header>
        <Router>
          <MainApp routesConfig={routesConfig} />
        </Router>
      </header>
      </ThemeProvider>
    </div>
  );
}

export default withAuthenticator(TopApp);
