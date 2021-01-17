import Image from "next/image";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bgWrap: {
      position: "fixed",
      width: "100vw",
      overflow: "hidden",
      height: "100vh",
      zIndex: -1,
    },
    bgText: {
      margin: 0,
      fontSize: "2rem",
      lineHeight: "3rem",
      textAlign: "center",
      paddingTop: "40vh",
      textShadow: "1px 1px 1px #3c5c5e",
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

      <p className={classes.bgText}>Happy Birthday Suhas!</p>
    </div>
  );
}
