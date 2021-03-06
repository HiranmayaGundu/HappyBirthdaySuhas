import { useState } from "react";
import AppBar from "../components/app-bar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import MediaCard from "../components/this-or-that-card";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

interface GameConfigItemType {
  leftImage: string;
  leftTitle: string;
  centerText: string;
  rightImage: string;
  rightTitle: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridContainer: {
      textAlign: "center",
      margin: "auto",
      flexGrow: 1,
    },
    cardRoot: {
      minWidth: 275,
      paddingTop: theme.spacing(3),
    },
    table: {
      minWidth: 650,
    },
  })
);

const GameConfig: GameConfigItemType[] = [
  {
    leftImage: "this_or_that/poop_emoji.webp",
    leftTitle: "Chocolate that looks like shit",
    centerText:
      "Chocolate that looks like shit or shit that looks like chocolate",
    rightImage: "this_or_that/chocolate_cake.jpeg",
    rightTitle: "Shit that looks like chocolate",
  },
  {
    leftImage: "this_or_that/shower.jpg",
    leftTitle: "You can only shower once a week",
    centerText: "Shower or brush?",
    rightImage: "this_or_that/tootbrush.png",
    rightTitle: "You can only brush your teeth once a week",
  },
  {
    leftImage: "this_or_that/Warner.jpg",
    leftTitle: "Lunch with David Warner",
    centerText: "Lunch with David Warner or Dinner with Michael Scott?",
    rightImage: "this_or_that/ms.jpg",
    rightTitle: "Dinner with Michael Scott",
  },
  {
    leftImage: "this_or_that/fw.jpg",
    leftTitle: "Free Wifi forever and no food",
    centerText:
      "Free Wifi forever and no food or Free stock of food forever and no Wifi for a month?",
    rightImage: "this_or_that/mat.jfif",
    rightTitle: "Free stock of food forever and no Wifi for a month",
  },
  {
    leftImage: "this_or_that/female.jfif",
    leftTitle: "Date someone you love",
    centerText:
      "Would you rather date someone you love or date someone who loves you?",
    rightImage: "suhas_ugly.jpeg",
    rightTitle: "Date someone who loves you",
  },
];

type GameResult = 0 | 1;

export default function ThisOrThat() {
  const [gameIndex, setGameIndex] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<GameResult[]>([]);
  const styles = useStyles();
  return (
    <>
      <AppBar />
      {gameIndex < GameConfig.length ? (
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          className={styles.gridContainer}
        >
          <Grid item xs>
            <MediaCard
              title={GameConfig[gameIndex].leftTitle}
              image={`/images/${GameConfig[gameIndex].leftImage}`}
              alt={GameConfig[gameIndex].leftTitle}
              onClick={() => {
                setGameIndex((c) => c + 1);
                setSelectedItems((items) => [...items, 0]);
              }}
            />
          </Grid>
          <Grid item xs>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {GameConfig[gameIndex].centerText}
            </Typography>
          </Grid>
          <Grid item xs>
            <MediaCard
              title={GameConfig[gameIndex].rightTitle}
              image={`/images/${GameConfig[gameIndex].rightImage}`}
              alt={GameConfig[gameIndex].rightTitle}
              onClick={() => {
                setGameIndex((c) => c + 1);
                setSelectedItems((items) => [...items, 1]);
              }}
            />
          </Grid>
        </Grid>
      ) : (
        <Box
          width="100vw"
          height="80vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box width={1200}>
            <TableContainer component={Paper}>
              <Table className={styles.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ minWidth: 300 }}>Option 1</TableCell>
                    <TableCell style={{ minWidth: 300 }}>Option 2</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {GameConfig.map((gameItem, index) => (
                    <TableRow key={gameItem.leftTitle}>
                      <TableCell>
                        {selectedItems[index] === 0 ? (
                          <strong>{gameItem.leftTitle}</strong>
                        ) : (
                          <>{gameItem.leftTitle}</>
                        )}
                      </TableCell>
                      <TableCell>
                        {selectedItems[index] === 1 ? (
                          <strong>{gameItem.rightTitle}</strong>
                        ) : (
                          <>{gameItem.rightTitle}</>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      )}
    </>
  );
}
