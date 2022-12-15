import React from "react";
import { createUseStyles } from "react-jss";
import Modal from "react-modal";
import { NavBar, Button, Heading, Paragraph, AppContainer } from "../common";

import Contact from "../Contact";
import JoinUs from "../JoinUs";

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    minWidth: 300,
    maxWidth: 300,
    padding: "10px",
    background: "#F3F4F3",
    borderRadius: 2,
  },
};

Modal.setAppElement("#root");

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
});

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
        <Heading>
          ACCELERATE INNOVATION <br />
          WITH <span className="inner-text">AI</span> <br />
        </Heading>
        <Paragraph>
          Focus on building innovative solutions by harnessing the power of AI
          with our state-of-the-art{" "}
          <span className="para-inner-text">
            cutting edge AI models as APIs
          </span>
          . We are a stealth mode AI startup empowering robust APIs by using
          cutting-edge algorithms and large datasets to train our models,
          ensuring that they deliver accurate and reliable results.
        </Paragraph>
        <Button onClick={openModal}>CONTACT US</Button>
        <Button outlined onClick={openModal2}>
          JOIN NEWSLETTER
        </Button>
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

function App() {
  return (
    <AppContainer>
      <div style={{ width: "80%", marginLeft: "10%" }}>
        <NavBar>
          <span style={{ color: "#BBE903" }}>AITIUM</span>
          <span style={{ color: "#BEBEBE" }}>.AI</span>
        </NavBar>
        <Body />
      </div>
    </AppContainer>
  );
}

export default App;
