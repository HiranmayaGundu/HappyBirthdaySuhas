import Image from "next/image";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bgWrap: {
      position: "fixed",
      width: "100vw",
      overflow: "hidden",
      height: "100vh",
      zIndex: -1,
    },
    gridContainer: {
      textAlign: "center",
      paddingTop: "40vh",
    },
  })
);

export default function ActualHome() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.bgWrap}>
        <Image
          alt="Mountains"
          src="/images/mountains_placehoder.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <Grid
        className={classes.gridContainer}
        container
        spacing={2}
        justify="center"
      >
        <Grid item xs={12}>
          Happy birthday Suhas!
        </Grid>
        <Grid item>One</Grid>
        <Grid item>Two</Grid>
        <Grid item>Three</Grid>
      </Grid>
    </div>
  );
}
