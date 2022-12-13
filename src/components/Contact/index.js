import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Button, Input, TextArea } from "../common";

export default function ({ closeModal }) {
  const [loading, setLoading] = React.useState(false);
  const [errorName, setErrorName] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const form = useRef();

  const validate = () => {
    setErrorName("");
    setErrorEmail("");
    setErrorMessage("");
    const emailValidate =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!name)
      return {
        isValid: false,
        errorName: "name",
        error: "Name is required",
      };

    if (!email)
      return {
        isValid: false,
        errorName: "email",
        error: "Email is required",
      };
    if (!emailValidate.test(email)) {
      return {
        isValid: false,
        errorName: "email",
        error: "Invalid Email",
      };
    }
    if (!message)
      return {
        isValid: false,
        errorName: "message",
        error: "Message is required",
      };
    return {
      isValid: true,
      error: "",
    };
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, error, errorName } = validate();
    if (!isValid) {
      switch (errorName) {
        case "name":
          return setErrorName(error);
        case "email":
          return setErrorEmail(error);
        case "message":
          return setErrorMessage(error);
        default:
          return;
      }
    }

    setErrorName("");
    setErrorEmail("");
    setErrorMessage("");
    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          closeModal();
          alert("We have recieved your message. We will get back to you soon.");
        },
        (error) => {
          setLoading(false);
          closeModal();
          alert(error.message);
        }
      );
  };
  return (
    <div
      style={{
        width: "90%",
        margin: "0px auto",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ color: "#2A2B2A", fontWeight: 700 }}>GET IN TOUCH</h2>

      <form onSubmit={handleSubmit} ref={form}>
        <Input
          type="text"
          placeholder="Your name"
          name="name"
          value={name}
          onChange={handleChange}
          disabled={loading}
        />
        {errorName && (
          <pre style={{ marginTop: -5, textAlign: "left", color: "red" }}>
            {errorName}
          </pre>
        )}
        <Input
          type="email"
          placeholder="Your Email"
          name="email"
          value={email}
          onChange={handleChange}
          disabled={loading}
        />
        {errorEmail && (
          <pre style={{ marginTop: -5, textAlign: "left", color: "red" }}>
            {errorEmail}
          </pre>
        )}
        <TextArea
          type="text"
          placeholder="Your Message"
          name="message"
          value={message}
          onChange={handleChange}
          disabled={loading}
          rows="3"
        />
        {errorMessage && (
          <pre style={{ marginTop: -5, textAlign: "left", color: "red" }}>
            {errorMessage}
          </pre>
        )}
        <Button
          type="submit"
          onClick={handleSubmit}
          style={btnStyle}
          disabled={loading}
        >
          {loading ? "SENDING ..." : "SEND MESSAGE"}
        </Button>
      </form>
    </div>
  );
}

const btnStyle = {
  borderRadius: 5,
  padding: 8,
  margin: 0,
  marginBottom: 10,
  marginTop: 10,
};
