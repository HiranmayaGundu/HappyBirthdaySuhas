import { useState } from "react";
import AppBar from "../components/app-bar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import HowsYourMemoryCard from "../components/hows-your-memory-card";

type GameConfigItemType = {
  image: string;
  correctResponse: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      padding: theme.spacing(3, 0, 0),
    },
  })
);

const GameConfig: GameConfigItemType[] = [
  {
    image: "/images/mountains_placehoder.jpg",
    correctResponse: "mountains",
  },
  {
    image: "/images/mountains_placehoder.jpg",
    correctResponse: "another mountain",
  },
];

export default function HowsYourMemory() {
  const styles = useStyles();

  const [gameRound, setGameRound] = useState(0);
  const isGameOver = gameRound >= GameConfig.length;

  let content;
  if (isGameOver) {
    content = <Typography>Done</Typography>;
  } else {
    content = (
      <HowsYourMemoryCard
        {...GameConfig[gameRound]}
        onClickNext={() => setGameRound(gameRound + 1)}
      />
    );
  }

  return (
    <>
      <AppBar />
      <Typography
        variant="h2"
        align="center"
        className={styles.header}
        gutterBottom
      >
        How's your memory?
      </Typography>
      <Grid container spacing={4} justify="center">
        <Grid item>{content}</Grid>
      </Grid>
      )
    </>
  );
}
