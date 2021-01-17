import { useState } from "react";
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
    leftImage: "mountains_placehoder.jpg",
    leftTitle: "Chocolate that looks like shit",
    centerText:
      "Chocolate that looks like shit or shit that looks like chocloate",
    rightImage: "suhas_ugly.jpeg",
    rightTitle: "Shit that looks like chocolate",
  },
  {
    leftImage: "mountains_placehoder.jpg",
    leftTitle: "You can only shower once a week",
    centerText: "Shower or brush? ",
    rightImage: "suhas_ugly.jpeg",
    rightTitle: "You can only brush your teeth once a week",
  },
];

type GameResult = 0 | 1;

export default function ThisOrThat() {
  const [gameIndex, setGameIndex] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<GameResult[]>([]);
  const styles = useStyles();
  return (
    <>
      {gameIndex < GameConfig.length ? (
        <Grid
          container
          spacing={4}
          justify="center"
          alignItems="center"
          className={styles.gridContainer}
        >
          <Grid item>
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
          <Grid item>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {GameConfig[gameIndex].centerText}
            </Typography>
          </Grid>
          <Grid item>
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
          height="100vh"
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
                    <TableCell style={{ minWidth: 300 }}>Result</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {GameConfig.map((gameItem, index) => (
                    <TableRow key={gameItem.leftTitle}>
                      <TableCell>{gameItem.leftTitle}</TableCell>
                      <TableCell>{gameItem.rightTitle}</TableCell>
                      <TableCell>
                        {selectedItems[index] === 0
                          ? gameItem.leftTitle
                          : gameItem.rightTitle}
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
