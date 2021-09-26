import { BrowserRouter as Router } from "react-router-dom";

import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
// import { AmplifySignOut } from "@aws-amplify/ui-react";

import { makeStyles } from "@material-ui/core/styles";

import { routesConfig } from "./routesConfig";
import MainApp from "./lib/menu/MainApp";

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const useStyles = makeStyles({
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

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
      <header>
        <Router>
          <MainApp routesConfig={routesConfig} />
        </Router>
      </header>
      <div className={classes.footer}>{/* <AmplifySignOut /> */}</div>
    </div>
  );
}

export default withAuthenticator(App);
