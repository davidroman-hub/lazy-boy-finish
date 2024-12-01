import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Button from "@mui/material/Button";
//import Button from "./Button";

function Card({ imagen }: any) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>T-shirt "Lazy-boy"</h2>
      <p>T-shirt unisex </p>
      <div className={Styles.btnn}>
        <Button
          sx={{
            backgroundColor: "#770508",
            color: "#fcfcfc",
            borderColor: "#d38e52",
            fontSize: "12px",
            fontFamily: "Jaro",
          }}
          variant="outlined"
          fullWidth
        >
          Ver más
        </Button>
      </div>
    </animated.div>
  );
}

export default Card;
