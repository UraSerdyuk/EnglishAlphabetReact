import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { makeSound, getMediaQuery } from "../../utils/helper";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "row",
  },
  letter: { flexGrow: 1, width: "100%", fontSize: "100px" },

  imgBlock: {
    width: "100%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  img: { width: "80%" },
  imgText: {
    fontSize: "20px",
    color: "black",
    textAlign: "center",
    textShadow: "0 0 0 ",
  },
  phone: {
    width: "100%",
    textAlign: "center",
    fontSize: "80px",
  },
  number: {
    textAlign: "center",
    width: "100%",
    fontSize: "80px",
  },
}));

const Card = (props) => {
  const { letter, src, name, audioAlphabet, hideLogo, soundLoud } = props;
  const classes = useStyles();
  const media = {
    phone: useMediaQuery(" (min-width: 200px) and (max-width: 480px)"),
    laptop: useMediaQuery("(min-width: 481px) and (max-width: 979px)"),
    desctop: useMediaQuery("(min-width : 980px)"),
  };

  const result = getMediaQuery(media);
  const phoneValidate = result && result[0] === "phone";
  return (
    <div className={classes.card}>
      <div
        className={
          hideLogo
            ? classes.number
            : classes[phoneValidate ? "phone" : "letter"]
        }
      >
        {letter}
      </div>
      {!phoneValidate && !hideLogo && (
        <div className={classes.imgBlock}>
          <img
            className={classes.img}
            src={src ? src : ""}
            alt={name ? name : "text"}
          />
          <p
            onClick={(e) => {
              makeSound(name, audioAlphabet, soundLoud);
              e.stopPropagation();
            }}
            className={classes.imgText}
          >
            {name ? name : "text"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
