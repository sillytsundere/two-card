import React, { useState, useEffect } from "react";
import Groq from "groq-sdk";

// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const CardView = () => {
  const cards = [
    "0 - The Fool",
    "1 - The Magician",
    "2 - The High Priestess",
    "3 - The Empress",
    "4 - The Emperor",
    "5 - The Hierophant",
    "6 - The Lovers",
    "7 - The Chariot",
    "8 - Justice",
    "9 - The Hermit",
    "10 - The Wheel of Fortune",
    "11 - Strength",
    "12 - The Hanged Man",
    "13 - Death",
    "14 - Temperance",
    "15 - The Devil",
    "16 - The Tower",
    "17 - The Star",
    "18 - The Moon",
    "19 - The Sun",
    "20 - Judgement",
    "21 - The World",
  ];

  const [randomCard, setRandomCard] = useState(null); //initializing the state with null as the initial value
  // use state is a react hook that allows functional components to have 'state'
  // it returns an array of which its two elements are the current state value and a function that lets you update the state
  // 'CardView' is my functional component in this case
  console.log("Component rendered");
  console.log(randomCard, "randomCard");

  const [message, setMessage] = useState("");

  const handleDraw = () => {
    // const newRandomNumber = Math.floor(Math.random() * 23);
    // setRandomNumber(newRandomNumber); //updates the state by calling setRandomNumber with the newRandomNumber

    const newRandomIndex = Math.floor(Math.random() * cards.length);
    const newRandomCard = cards[newRandomIndex];
    setRandomCard(newRandomCard);
  };

  // async function getGroqChatCompletion() {
  //   return groq.chat.completions.create({
  //     messages: [
  //       {
  //         role: "user",
  //         content: "You are an immortal, ancient fortune teller who has traveled many places and feels a deep connection to the stars and the universe and all celestial bodies.",
  //       },
  //       {
  //         role: "user",
  //         content: `For my daily card pull I drew ${randomCard}, please give me a reading.`,
  //       },
  //     ],
  //     model: "llama3-8b-8192",
  //   });
  // }

  // useEffect(() => {
  //   console.log("useEffect hit");
  //   async function tarotReading() {
  //     const chatCompletion = await getGroqChatCompletion();
  //     // Print the completion returned by the LLM.
  //     console.log(chatCompletion.choices[0]?.message?.content || "");
  //     setMessage(chatCompletion.choices[0]?.message?.content);
  //   };

  //   tarotReading();
  // }, [randomCard]);

  return (
    <div>
      <h1>Pick Your Card!</h1>
      <p>{randomCard !== null && `${randomCard}`}</p>
      <button onClick={handleDraw}>Draw</button>
      <p>{message}</p>
    </div>
  );
};
