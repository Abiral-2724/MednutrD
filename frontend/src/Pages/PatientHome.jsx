import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const PatientHome = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("50");
  return (
    <div>
      <Navbar />
      <div>
        <h1
          style={{ fontSize: "45px", fontWeight: "bold", textAlign: "center" }}
        >
          <Typewriter
            options={{
              strings: ["Wanna! Book A Virtual CheckUp?"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <h4
          style={{ textAlign: "center", color: "blue" }}
          onClick={() => navigate()}
        >
          Book?Click here
        </h4>
      </div>
      <div style={{ position: "relative", margin: "20px auto", width: "40%" }}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{
            position: "absolute",
            left: "10px",
            top: "35%",
            transform: "translateY(-50%)",
            color: "#aaa",
          }}
        />
        <input
          type="text"
          placeholder="Search based on Location and Specialization"
          style={{
            width: "100%",
            padding: "10px 10px 10px 35px",
            borderRadius: "5px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            backgroundColor: "whitesmoke",
          }}
        />
      </div>
      <Card />
      <div
        style={{
          margin: "20px 0",
          textAlign: "center",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <input
          type="range"
          min="0"
          max="500"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: "50%" }}
        />
        <p>
          {" "}
          <b> Amount: ${amount}</b>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            width: "170px",
            height: "65px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
          }}
          onClick={()=> navigate('/consultation')}
        >
          Book a Consultations
        </button>
        <button
          style={{
            padding: "10px 20px",
            width: "170px",
            height: "65px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
          }}
          onClick={() => navigate("/dietchart")}
        >
          Create Your Diet Chart
        </button>
        <button
          style={{
            padding: "10px 20px",
            width: "170px",
            height: "65px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
          }}
        >
          Purchase Your Medicine
        </button>
        <button
          style={{
            padding: "10px 20px",
            width: "170px",
            height: "65px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
          }}
        >
          Subscription
        </button>
      </div>
      <div>
        <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
          Feedbacks and Reviews
        </h1>
        <div
          style={{ display: "flex", marginTop: "20px", marginBottom: "20px" }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              background:
                "linear-gradient(90deg, rgba(109, 167, 231, 1) 0%, rgba(174, 153, 217, 1) 100%)",
              textAlign: "left",
              marginRight: "30px",
              marginLeft: "10px",
              width: "650px",
            }}
          >
            <h2>
              <b> Ross Geller</b>
            </h2>
            <div className="stars">⭐⭐⭐⭐☆</div>
            <p>
              {" "}
              It's amazing! and highly recommended as it has the virtual
              Consultations that save time
            </p>
          </div>
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              background:
                "linear-gradient(90deg, rgba(109, 167, 231, 1) 0%, rgba(174, 153, 217, 1) 100%)",
              textAlign: "left",
              marginRight: "30px",
              width: "650px",
            }}
          >
            <h2>
              <b>Chandler Bing</b>
            </h2>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>
              It saves lot of time as it is a virtual consultation and buying
              the particular medicine. Highly recommend!
            </p>
          </div>
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              background:
                "linear-gradient(90deg, rgba(109, 167, 231, 1) 0%, rgba(174, 153, 217, 1) 100%)",
              textAlign: "left",
              marginRight: "30px",
              width: "650px",
            }}
          >
            <h2>
              <b>Joey Chindel</b>
            </h2>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>
              It saves lot of time as it is a virtual consultation and buying
              the particular medicine. Highly recommend!
            </p>
          </div>
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              background:
                "linear-gradient(90deg, rgba(109, 167, 231, 1) 0%, rgba(174, 153, 217, 1) 100%)",
              textAlign: "left",
              marginRight: "30px",
              width: "650px",
            }}
          >
            <h2>
              <b>Robert Rohanda</b>
            </h2>
            <div className="stars">⭐⭐⭐⭐☆</div>
            <p>
              {" "}
              It's amazing! and highly recommended as it has the virtual
              Consultations that save time
            </p>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>Contact Us</h2>
        <form
          style={{
            width: "900px",
            height: "300px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            background:
              "linear-gradient(90deg, rgba(109, 167, 231, 1) 0%, rgba(174, 153, 217, 1) 100%)",
            borderRadius: "10px",
            marginLeft: "20%",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            style={{
              width: "50%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: "whitesmoke",
              marginBottom: "20px",
              borderRadius: "8px",
              marginTop: "20px",
            }}
          />
          <textarea
            placeholder="Describe your problem"
            rows="4"
            required
            style={{
              width: "80%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "whitesmoke",
              marginbottom: "20px",
            }}
          ></textarea>
          <div>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                width: "170px",
                height: "55px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <footer
        style={{
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#f8f9fa",
          borderTop: "1px solid #ddd",
        }}
      >
        <p>&copy; 2025 MedNutr. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PatientHome;