import type { MouseEventHandler } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { SyntheticEvent } from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 500,
    width: 500,
  },
});

interface MediaCardProps {
  title: string;
  content?: string;
  image: string;
  alt: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function MediaCard({
  title,
  content,
  image,
  alt,
  onClick,
}: MediaCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onClick}>
        <CardMedia className={classes.media} image={image} title={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          {content && (
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
