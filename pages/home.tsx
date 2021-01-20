import Image from "next/image";
import Link from "next/link";
import Box from "@material-ui/core/Box";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";

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
      paddingTop: "48px",
    },

    cardRoot: {
      minWidth: 275,
      paddingTop: theme.spacing(3),
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
          src="/images/sona_collage.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <Grid
        className={classes.gridContainer}
        container
        spacing={4}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} justify="center">
          <Box width={500} ml="auto" mr="auto">
            <Paper>
              <Typography variant="h3" color="textSecondary" gutterBottom>
                Happy Birthday Suhas!
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item>
          <Link href="/this-or-that">
            <a>
              <MiniGameCard>This or That ❓</MiniGameCard>
            </a>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/hows-your-memory">
            <a>
              <MiniGameCard>How's your memory? 🕵️</MiniGameCard>
            </a>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/its-your-birthday">
            <a>
              <MiniGameCard>It's your birthday! 🥳</MiniGameCard>
            </a>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

type MiniGameCardPropsType = {
  children: string;
};

function MiniGameCard(props: MiniGameCardPropsType) {
  const classes = useStyles();
  return (
    <Card className={classes.cardRoot}>
      <CardContent>
        <Typography variant="h4" color="textSecondary" gutterBottom>
          {props.children}
        </Typography>
      </CardContent>
    </Card>
  );
}
