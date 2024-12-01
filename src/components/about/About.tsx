import { FC } from "react";
//import ronaldo from "../../assets/imgs/ronaldo.png";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { setOpenAbout } from "../../redux/slices/main";
import { State } from "../../redux";
import ContainPhotoAbout from "./AboutModal";
import pjson from "../../../package.json";

const ronaldo =
  "https://res.cloudinary.com/dm8dxwvix/image/upload/v1730558038/lazyboy/winner2_mps1fb.jpg";

const SetActions = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  return {
    setOpenModal: (values: boolean) => {
      dispatch(setOpenAbout(values));
    },
  };
};

const About: FC<any> = () => {
  const { setOpenModal } = SetActions();
  const { modalAbout } = useSelector((state: State) => state.Main);
  return (
    <div className="main">
      <ul className="cards">
        <li className="cards_item" id="item_salad">
          <div className="card block-animation">
            <div className="card_image">
              <img src={ronaldo} alt="Ronaldo" />
            </div>
            <div className="card_content">
              <div className="card_title ">Sobre Ronaldo (Lazy Boy)</div>
              <div className="card_text">
                <Button
                  onClick={() =>
                    modalAbout ? setOpenModal(false) : setOpenModal(true)
                  }
                  sx={{
                    width: "130px",
                    backgroundColor: "#770508",
                    color: "#fcfcfc",
                    borderColor: "#d38e52",
                    fontSize: "16px",
                    fontFamily: "Jaro",
                  }}
                >
                  Leer
                </Button>
                <div>{pjson.version}</div>
                <Modal
                  open={modalAbout}
                  onClose={() => setOpenModal(false)}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <ContainPhotoAbout />
                </Modal>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default About;
