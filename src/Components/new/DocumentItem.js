import {
    Avatar,
    ButtonBase,
    Container,
    Divider,
    Grid,
    Typography,
  } from "@material-ui/core";
  import { deepOrange, deepPurple } from "@material-ui/core/colors";
  import { makeStyles } from "@material-ui/core";

  const useStyles = makeStyles((theme) => ({
    item: {
      left: 5,
      padding: 5,
    },
    name: {
      position: "relative",
      left: 0,
    },
    tag: {
      borderRadius: 10,
      padding: 2,
    },
    date: {
      padding: 1,
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  }));

const DocumentItem = ({ data, setDetail }) => {
    const classes = useStyles();
  
    const handleClick = (item) => {
      setDetail(data);
    };
  
    return (
      <div className={classes.item}>
        <Container maxWidth="lg">
          <ButtonBase onClick={() => handleClick(data)}>
            <Grid container>
              <Grid item xs={2}>
                <Avatar className={classes.purple}>
                  {data.name.substring(0, 2).toUpperCase()}
                </Avatar>
              </Grid>
              <Grid item xs={10}>
                <Grid container>
                  <Grid item xs={6} sm={3}>
                    <Typography variant="caption" className={classes.date}>
                      Date: <b>{data.date}</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Typography
                      className={`${classes.tag} ${classes.orange}`}
                      variant="caption"
                    >
                      {data.tag}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Typography className={classes.date} variant="caption">
                      Amount:{data.amount},- Eur
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Typography className={classes.date} variant="caption">
                      VAT:{data.VAT},- Eur
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="caption">{data.description}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ButtonBase>
          <Divider />
        </Container>
      </div>
    );
  };

  export default DocumentItem