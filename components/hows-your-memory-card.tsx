import type { MouseEventHandler } from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 500,
    width: 500,
  },
  alignCenter: {
    textAlign: "center",
  },
  correctResponse: {
    "@global": {
      ".MuiOutlinedInput-root.Mui-error fieldset": {
        borderColor: "green",
      },
    },
  },
  nextButton: {
    margin: theme.spacing(0, 3, 3),
  },
}));

type HowsYourMemoryCardProps = {
  image: string;
  correctResponse: string;
  maxBlur?: number;
  onClickNext: MouseEventHandler<HTMLButtonElement>;
};

export default function HowsYourMemoryCard({
  image,
  correctResponse,
  maxBlur: _maxBlur,
  onClickNext,
}: HowsYourMemoryCardProps) {
  const classes = useStyles();
  const maxBlur = _maxBlur == null ? 35 : _maxBlur;

  const [response, setResponse] = useState("");
  const isResponseCorrect = isResponseValid(response, correctResponse);

  const [_blur, setBlur] = useState(maxBlur);
  const blur = isResponseCorrect ? 0 : _blur;

  useEffect(() => {
    // Reset the response text on props change.
    setResponse("");
    setBlur(maxBlur);
  }, [image, correctResponse, maxBlur]);

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={image}
          style={{ filter: `blur(${blur}px)` }}
        />
        <CardContent className={classes.alignCenter}>
          <Slider
            value={blur}
            min={0}
            max={maxBlur}
            onChange={(_, newValue) => setBlur(newValue as number)}
            disabled={isResponseCorrect}
          />
          <form noValidate autoComplete="off">
            <TextField
              value={response}
              variant="outlined"
              error={isResponseCorrect}
              disabled={isResponseCorrect}
              className={classes.correctResponse}
              onChange={(e) => setResponse(e.target.value)}
            />
          </form>
        </CardContent>
        <div className={classes.alignCenter}>
          <Button
            className={classes.nextButton}
            variant="contained"
            disabled={!isResponseCorrect}
            color="primary"
            onClick={onClickNext}
          >
            Next
          </Button>
        </div>
      </Card>
    </>
  );
}

function isResponseValid(response: string, correctResponse: string) {
  // Ignore case and non-alphabets in response
  return cleanString(response) === cleanString(correctResponse);
}

function cleanString(str: string) {
  return str
    .trim()
    .toLocaleLowerCase("en")
    .replaceAll(/[^a-z]/g, "");
}
