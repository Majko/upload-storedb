import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
  },
}));

const DocList = ({ children, title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <h2>{title}</h2>
        {children}
      </Container>
    </div>
  );
};

export default DocList;
