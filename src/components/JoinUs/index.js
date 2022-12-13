import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Button, Input } from "../common";

export default function ({ closeModal }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [email, setEmail] = React.useState("");

  const form = useRef();

  const validate = () => {
    const emailValidate =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email)
      return {
        isValid: false,
        error: "Email is required",
      };
    if (!emailValidate.test(email)) {
      return {
        isValid: false,
        error: "Invalid Email",
      };
    }
    return {
      isValid: true,
      error: "",
    };
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, error } = validate();
    if (!isValid) return setError(error);

    setError("");
    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_NEWSLETTER_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          closeModal();
          alert("Thank you for subscribing!");
        },
        (error) => {
          setLoading(false);
          closeModal();
          alert(error.message);
        }
      );

    // closeModal()
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
      <h2 style={{ color: "#2A2B2A", fontWeight: 700 }}>JOIN MAIL LIST</h2>
      <div style={{ color: "#606464", fontWeight: 400, marginTop: -10 }}>
        Join our product mail list to get latest updates.
      </div>{" "}
      <br />
      <form onSubmit={handleSubmit} ref={form}>
        <Input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={handleChange}
          name="email"
          disabled={loading}
        />
        {error && (
          <pre style={{ marginTop: -5, textAlign: "left", color: "red" }}>
            {error}
          </pre>
        )}
        <Button
          type="submit"
          onClick={handleSubmit}
          style={btnStyle}
          disabled={loading}
        >
          {loading ? "SENDING ..." : "SEND EMAIL"}
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
  width: "100%",
};
