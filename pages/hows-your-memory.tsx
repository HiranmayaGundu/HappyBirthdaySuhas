import { useState } from "react";
import AppBar from "../components/app-bar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import HowsYourMemoryCard from "../components/hows-your-memory-card";
import { useRouter } from "next/dist/client/router";
import ClientOnly from "../components/client-only";

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
    image: "/images/memory/veeras_house_bbq.jpeg",
    correctResponse: "Veera's house BBQ",
  },
  {
    image: "/images/memory/aadhar_card.jpg",
    correctResponse: "Aadhar Card",
  },
  {
    image: "/images/memory/avengers_endgame.jpeg",
    correctResponse: "Avengers Endgame",
  },
  {
    image: "/images/memory/family.jpeg",
    correctResponse: "Family",
  },
  {
    image: "/images/memory/divya.jpeg",
    correctResponse: "Divya",
  },
  {
    image: "/images/memory/gundu_keshav_kanya_sus_vv.jpeg",
    correctResponse: "Gundu, Keshav, Kanya, Sus, VV",
  },
  {
    image: "/images/memory/gundu_vv_joey_sus_kanya.jpeg",
    correctResponse: "Gundu, VV, Joey, Sus, Kanya",
  },
  {
    image: "/images/memory/hyderabad_trip.jpg",
    correctResponse: "Hyderabad Trip",
  },
  {
    image: "/images/memory/iayp_trip.jpg",
    correctResponse: "IAYP Trip",
  },
  {
    image: "/images/memory/iim_friends.jpeg",
    correctResponse: "IIM Friends", // FIXME: actual answer required.
  },
  {
    image: "/images/memory/iim1.jpg",
    correctResponse: "IIM 1",
  },
  {
    image: "/images/memory/iim2.jpg",
    correctResponse: "IIM 2",
  },
  {
    image: "/images/memory/iim4.jpg",
    correctResponse: "IIM 4",
  },
  {
    image: "/images/memory/kanya_rishi_teju_vikas_vv_keshav_sus.jpeg",
    correctResponse: "Kanya, Rishi, Teju, Vikas, VV, Keshav, Sus 🤙",
  },
  {
    image: "/images/memory/nagu_mama.jpeg",
    correctResponse: "Nagu Mama",
  },
  {
    image: "/images/memory/shobha_siddharth_kanya_suhas.jpeg",
    correctResponse: "Shobha, Siddharth, Kanya, Suhas",
  },
  {
    image: "/images/memory/sindhu.jpeg",
    correctResponse: "Sindhu",
  },
  {
    image: "/images/memory/stacey.jpeg",
    correctResponse: "Stacey",
  },
  {
    image:
      "/images/memory/suhas_vivek_prasen_himani_aishwarya_kanya_srishti.jpg",
    correctResponse: "Sus, Vivek, Prasen, Himani, Aishwarya, Kanya, Srishti",
  },
  {
    image: "/images/memory/vikas_himani_vv_anusha_gundu_sus.jpg",
    correctResponse: "Vikas, Himani, VV, Anusha, Gundu, Sus",
  },
  {
    image: "/images/memory/vv_pic1.jpeg",
    correctResponse: "vv",
  },
  {
    image: "/images/memory/yak.jpg",
    correctResponse: "Yak",
  },
];

export default function HowsYourMemory() {
  const styles = useStyles();
  const router = useRouter();
  const [gameRound, setGameRound] = useState(0);
  const isGameOver = gameRound >= GameConfig.length;

  let content;
  if (isGameOver) {
    router.push("/hows-your-memory-images");
  } else {
    content = (
      <ClientOnly>
        <HowsYourMemoryCard
          {...GameConfig[gameRound]}
          onClickNext={() => setGameRound(gameRound + 1)}
          key={GameConfig[gameRound].correctResponse}
        />
      </ClientOnly>
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
