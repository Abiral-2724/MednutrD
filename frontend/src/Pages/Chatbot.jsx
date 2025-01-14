import React, { useState } from "react";
import axios from "axios";
import { Send, Bot, Loader2 } from "lucide-react";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function generateAnswer() {
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer("loading");

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/generate", 
        { question },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      setAnswer(response.data.answer);
    } catch (error) {
      console.error("Error generating answer:", error);
      setAnswer("Sorry, I couldn't generate an answer. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generateAnswer();
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="flex items-center gap-2 p-4 border-b bg-white shadow-sm">
        <Bot className="w-6 h-6 text-blue-600" />
        <h1 className="text-xl font-semibold text-gray-800">Medical Assistant</h1>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {answer && (
          <div className="space-y-4">
            {/* User Message */}
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white max-w-[80%] rounded-lg p-3 shadow-sm">
                <p className="whitespace-pre-wrap">{question}</p>
              </div>
            </div>

            {/* Bot Response */}
            <div className="flex justify-start">
              <div className="bg-white max-w-[80%] rounded-lg p-3 shadow-sm border border-gray-100">
                <p className="whitespace-pre-wrap text-gray-800">
                  {answer === "loading" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Generating response...
                    </span>
                  ) : (
                    answer
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t">
        <div className="flex gap-2">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask any medical questions... (Press Enter to send)"
            className="flex-1 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-20 transition-all"
          />
          <button
            onClick={generateAnswer}
            disabled={isLoading || !question.trim()}
            className="flex items-center justify-center px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
