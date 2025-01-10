import { useState } from "react";
import React from "react";
import axios from "axios";


function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("loading");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBlJVxPFwuyuPQMXD5JKBt4O5xRYwYlalM",
      method: "post",
      data: {
        contents: [{ parts: [{ text: question }] }],
      },
    });
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
      <h1 style={{ textAlign: "center",fontSize:'20px',fontWeight:'bold',marginBottom:'10px' }}>ChatBot</h1>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ width: "260px", height: "60px", marginLeft: "3px",marginBottom:'10px' }}
        placeholder="Ask your doubt with us 24*7"
      >
        {" "}
      </textarea>
      <button
        onClick={generateAnswer}
        style={{
          backgroundColor: "black",
          color:'white',
          width: "170px",
          height: "40px",
          fontSize: "18px",
          marginLeft: "20%",
          borderRadius:'10px'
        }}
      >
        Generate Answer
      </button>

      <pre>{answer}</pre>
    </div>
  );
}
export default Chatbot;
