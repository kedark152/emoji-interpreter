import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const emojiDictionary = {
    "🥪": "Sandwich",
    "🍿": "Pop-Corn",
    "🍦": "Soft Ice Cream",
    "🧁": "Cupcake",
    "🥒": "Cucumber",
    "🍕": "Pizza",
    "🍎": "Red Apple",
    "🍅": "Tomato",
    "🍍": "Pineapple"
  };

  var emojisWeKnow = Object.keys(emojiDictionary);
  const [meaningOP, setInput] = useState(" ");

  function interpreter(event) {
    var userIP = event.target.value;
    var meaning = emojiDictionary[userIP];
    //  setInput(meaning);
    if (meaning === undefined) {
      setInput("We don't have this in database");
    } else {
      setInput(meaning);
    }
  }
  function emojiclickHandler(emoji) {
    //console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setInput(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "lightblue" }}> Food Emoji Interpreter </h1>
      <input onChange={interpreter} id="input"></input>
      <h2>Interpretation: {meaningOP} </h2>
      <h3> Emojis We Know 👇 </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
