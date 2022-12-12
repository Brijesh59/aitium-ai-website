import React from "react";
import { createUseStyles } from "react-jss";
import Modal from "react-modal";
import {
  NavBar,
  Button,
  Heading,
  HeroContainer,
  ImageContainer,
  Paragraph,
  AppContainer,
} from "../common";

import backgroundRightSvg from "../../assets/background-right.svg";
import Contact from "../Contact";
import JoinUs from "../JoinUs";

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: 300,
    padding: "10px",
    background: "#F3F4F3",
    borderRadius: 2,
  },
};

Modal.setAppElement("#root");
export default function App() {
  return (
    <AppContainer>
      <div style={{ width: "86%", marginLeft: "7%" }}>
        <NavBar>Aitium.AI</NavBar>
        <Body />
      </div>
    </AppContainer>
  );
}

function Body() {
  const classes = useStyles();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function openModal2() {
    setIsOpen2(true);
  }
  function closeModal2() {
    setIsOpen2(false);
  }
  return (
    <>
      <div className={classes.body}>
        <HeroContainer>
          <Heading>
            AI DRIVEN <br />
            REALTIME ALERTS <br />
            AND ANALYSIS <br />
          </Heading>
          <Paragraph>
            We are a stealth mode AI Startup, empowering real time Insights and
            Threat intelligence. Get AI powered security alerts on your
            fingertips.
          </Paragraph>
          <Button onClick={openModal}>CONTACT US</Button>
          <Button outlined onClick={openModal2}>
            JOIN MAIL LIST
          </Button>
        </HeroContainer>
        <ImageContainer>
          <img
            src={backgroundRightSvg}
            className={classes.img}
            draggable="false"
            alt="background-right"
          />
        </ImageContainer>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        overlayClassName={classes.overlayStyles}
      >
        <img
          src={require("../../assets/close-icon.svg")}
          style={{
            float: "right",
            marginRight: "5%",
            cursor: "pointer",
            width: 30,
            height: 30,
          }}
          onClick={closeModal}
          alt="icon-cross"
        />
        <Contact closeModal={closeModal} />
      </Modal>
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        style={customStyles}
        overlayClassName={classes.overlayStyles}
      >
        <img
          src={require("../../assets/close-icon.svg")}
          style={{
            float: "right",
            marginRight: "5%",
            cursor: "pointer",
            width: 30,
            height: 30,
          }}
          onClick={closeModal2}
          alt="icon-cross"
        />
        <JoinUs closeModal={closeModal2} />
      </Modal>
    </>
  );
}

const useStyles = createUseStyles({
  overlayStyles: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.6)",
  },
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  img: {
    width: "100%",
    marginTop: "-100px",
    userSelect: "none",
  },
});
