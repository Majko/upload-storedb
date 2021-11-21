import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const DbFileCardContent = ({ file }) => {
  return (
    <div >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Detaily súboru
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Zadajte použitie dokumentu a popis, ktorý Vám pomúče s jeho ďalšou
            identifikáciou
          </Typography>
          <br />
          <Typography variant="h6" component="p">
            Nazov:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {file.name}
          </Typography>
          <Typography variant="h6" component="p">
            Popis:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {file.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </div>
  );
};

export default DbFileCardContent;
