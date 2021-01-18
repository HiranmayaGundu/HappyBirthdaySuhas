import { useState } from "react";
import AppBar from "../components/app-bar";
import Image from "next/image";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import sizeOf from "image-size";

interface Image {
  path: string;
  dimensions: {
    height: number;
    width: number;
  };
}

interface ImageGridList {
  images: Image[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1200,
    height: 700,
  },
}));

export default function ImageGridList({ images }: ImageGridList) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | undefined>();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClickOpen = (image: Image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar />
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          {selectedImage && (
            <Image
              src={selectedImage.path}
              alt={selectedImage.path.split(".")[0]}
              height={selectedImage.dimensions.height}
              width={selectedImage.dimensions.width}
            />
          )}
        </DialogContent>
      </Dialog>
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {images.map((image) => (
            <GridListTile key={image.path} cols={1} rows={3}>
              <img
                src={image.path}
                alt={image.path.split(".")[0]}
                role="button"
                tabIndex={0}
                onClick={() => handleClickOpen(image)}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const imagesDir = path.join(process.cwd(), "public", "images", "memory");
  const arrayOfImages = fs.readdirSync(imagesDir);
  const mappedArray = arrayOfImages.map((name) => {
    const { height, width } = sizeOf(
      path.join(process.cwd(), "public", "images", "memory", name)
    );
    return {
      path: path.join("/", "images", "memory", name),
      dimensions: { height, width },
    };
  });
  return {
    props: {
      images: mappedArray,
    },
  };
};
