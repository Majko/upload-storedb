import { BrowserRouter as Router } from "react-router-dom";
// import { ThemeProvider, createMuiTheme } from '@mui/styles';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";

import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";
import awsconfig from "../../src/aws-exports";
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  withAuthenticator,
} from "@aws-amplify/ui-react";

import { routesConfig } from "./routesConfig";
import MainApp from "../lib/menu/MainApp";
import { makeStyles } from "@mui/styles";

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const theme = createTheme();

const useStyles = makeStyles({
  login: {
    amplifyPrimaryColor: "#4b1c08",
    amplifyPrimaryTint: "#b36627",
    amplifyPrimaryShade: "#783b17",
    amplifyFontFamily: "Roboto",
    amplifyWhite: "#fdfade",
    amplifySecondaryTint: "#b36627",
  },
});

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
  const classes = useStyles();

  return (
    <div className={classes.login}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <AmplifyAuthenticator >
            {
              <AmplifySignIn
                
                slot="sign-in"
                headerText="VITAJTE V UCTO.ONLINE!"
                hideSignUp
                submitButtonText="Prihlasit!"
                formFields={[
                  {
                    type: "username",
                    label: "Uzivatel",
                    placeholder: "first.last@gmail.com",
                    required: true,
                  },
                  {
                    type: "password",
                    label: "Heslo",
                    placeholder: "keep it secret",
                    required: true,
                  },
                ]}
              />
            }
            <header>
              <Router>
                <MainApp routesConfig={routesConfig} />
              </Router>
            </header>
          </AmplifyAuthenticator>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default TopApp;
// export default withAuthenticator(TopApp);
