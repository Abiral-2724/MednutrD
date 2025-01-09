import React from "react";
import Navbar from "./Navbar";
import People from "../assets/people.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Consultation = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const card = [
    {
      photo: People,
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      description: "Expert in treating heart-related conditions.",
      fee: "$200",
    },
    {
      photo: People,
      name: "Dr. Jane Smith",
      specialty: "Dermatologist",
      description: "Skincare and dermatological expert.",
      fee: "$150",
    },
    {
      photo: People,
      name: "Dr. Emily Johnson",
      specialty: "Pediatrician",
      description: "Specialist in child healthcare.",
      fee: "$100",
    },
    {
      photo: People,
      name: "Dr. Jane George  ",
      specialty: "Neurology",
      description:
        " Treatment of all categories of conditions and disease involving the nervous system.",
      fee: "$430",
    },
    {
      photo: People,
      name: "Dr. Ava Thomsan",
      specialty: "Psychiatry",
      description:
        "Psychiatry is the medical specialty devoted to the diagnosis, prevention, and treatment of deleterious mental conditions.",
      fee: "$75",
    },
    {
      photo: People,
      name: "Dr. Oliver Vale",
      specialty: "Endocrinologists",
      description:
        "These are experts on hormones and metabolism. They can treat conditions like diabetes, thyroid problems, infertility, and calcium and bone disorders.",
      fee: "$152",
    },
    {
      photo: People,
      name: "Dr. Chandler Bing ",
      specialty: "Gastroenterologists",
      description:
        "They’re specialists in digestive organs, including the stomach, bowels, pancreas, liver, and gallbladder.",
      fee: "$200",
    },
    {
      photo: People,
      name: "Dr. Joey Barry",
      specialty: "Hematologists",
      description:
        "These are specialists in diseases of the blood, spleen, and lymph glands, like sickle cell disease, anemia, hemophilia, and leukemia.",
      fee: "$340",
    },
    {
      photo: People,
      name: "Dr. Racheal Geller",
      specialty: "Nephrologists",
      description:
        "They treat kidney diseases as well as high blood pressure and fluid and mineral imbalances linked to kidney disease.",
      fee: "$210",
    },
    {
      photo: People,
      name: "Dr. Ross Gelleen",
      specialty: "Neurologists",
      description:
        "These are specialists in the nervous system, which includes the brain, spinal cord, and nerves.",
      fee: "$900",
    },
    {
      photo: People,
      name: "Dr. Pheebe Deb",
      specialty: "Oncologists",
      description:
        "They do chemotherapy treatments and often work with radiation oncologists and surgeons to care for someone with cancer.",
      fee: "$768",
    },
    {
      photo: People,
      name: "Dr. Rosie Jack",
      specialty: "Otolaryngologists",
      description:
        "They treat diseases in the ears, nose, throat, sinuses, head, neck, and respiratory system.",
      fee: "$100",
    },
    {
      photo: People,
      name: "Dr. Georgiana Messi",
      specialty: "Pediatrician",
      description: "Specialist in child healthcare.",
      fee: "$130",
    },
    {
      photo: People,
      name: "Dr. Scarlett Ruth",
      specialty: "Pathologists",
      description: "These lab doctors identify the causes of diseases.",
      fee: "$40",
    },
    {
      photo: People,
      name: "Dr. Harley Jaely",
      specialty: "Plastic Surgeons",
      description:
        "They rebuild or repair your skin, face, hands, breasts, or body.",
      fee: "$650",
    },
    {
      photo: People,
      name: "Dr. Tim Horton",
      specialty: "Pulmonologists",
      description:
        "Specialists for problems like lung cancer, pneumonia, asthma, emphysema, and trouble sleeping caused by breathing issues.",
      fee: "$450",
    },
    {
      photo: People,
      name: "Dr. Jenny Jade",
      specialty: "Radiologists",
      description:
        "They use X-rays, ultrasound, and other imaging tests to diagnose diseases.",
      fee: "$990",
    },
    {
      photo: People,
      name: "Dr. Velma Walker",
      specialty: "Pediatrician",
      description:
        "They specialize in arthritis and other diseases in your joints, muscles, bones, and tendons.",
      fee: "$790",
    },
    {
      photo: People,
      name: "Dr. Allen Walker",
      specialty: "Sports Medicine Specialists",
      description:
        "These doctors diagnose, treat, and prevent injuries related to sports and exercise.",
      fee: "$89",
    },
    {
      photo: People,
      name: "Dr. Jackie Jade ",
      specialty: "Urologists",
      description:
        " Surgeons who care for men and women for problems in the urinary tract, like a leaky bladder.",
      fee: "$70",
    },
    {
      photo: People,
      name: "Dr. Greig Johnson",
      specialty: "Pediatrician",
      description: "Specialist in child healthcare.",
      fee: "$104",
    },
    {
      photo: People,
      name: "Dr. Emery Doe",
      specialty: "Rheumatologists",
      description:
        "Specialist in arthritis and other diseases in your joints, muscles, bones, and tendons.",
      fee: "$200",
    },
    {
      photo: People,
      name: "Dr. Allena Joe",
      specialty: "Psychiatrists",
      description:
        "Doctors work with people with mental, emotional, or addictive disorders.",
      fee: "$180",
    },
    {
      photo: People,
      name: "Dr. Emilser John",
      specialty: "Physiatrists",
      description:
        "specialists in physical medicine and rehabilitation treat neck or back pain and sports or spinal cord injuries as well as other disabilities caused by accidents or diseases.",
      fee: "$1000",
    },
    {
      photo: People,
      name: "Dr. James Joey",
      specialty: "Ophthalmologists",
      description: "Specialist of Eye",
      fee: "$240",
    },
    {
      photo: People,
      name: "Dr. Monica Bing",
      specialty: "Gynecologists",
      description:
        "Specialist in women's health, including pregnancy and childbirth",
      fee: "$300",
    },
    {
      photo: People,
      name: "Dr. Darisy Charles",
      specialty: "Nephrologists",
      description:
        "They treat kidney diseases as well as high blood pressure and fluid and mineral imbalances linked to kidney disease.",
      fee: "$170",
    },
    {
      photo: People,
      name: "Dr. John Dacke",
      specialty: "Cardiologist",
      description: "Expert in treating heart-related conditions.",
      fee: "$200",
    },
  ];

  const handleBookNow = (card) => {
    setCart((prevCart) => [...prevCart, card]);
    alert(`${card.name} has been added to the cart.`);
  };

  return (
    <div>
      <Navbar />
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
            width: "70%",
            padding: "10px 10px 10px 35px",
            borderRadius: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            backgroundColor: "whitesmoke",
            marginTop: "0px",
          }}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginleft: "20px",
        }}
      >
        {card.map((card, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              width: "300px",
              background: " rgb(109,167,231)",
              background:
                "linear-gradient(90deg, rgba(109,167,231,1) 0%, rgba(174,153,217,1) 100%, rgba(1,24,17,1) 100%)",
              marginLeft: "20px",
            }}
          >
            <img
              src={card.photo}
              alt={card.name}
              style={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
            <h3>
              <b>{card.name}</b>
            </h3>
            <p>Specialty: {card.specialty}</p>
            <p>{card.description}</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button style={{ padding: "5px 10px" }}>{card.fee}</button>
              <button
                style={{ padding: "5px 10px" }}
                onClick={() => navigate("/explore")}
              >
                {" "}
                Explore More &#8250;{" "}
              </button>
            </div>
            <button
              style={{
                width: "130px",
                height: "50px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "6px",
              }}
              onClick={handleBookNow}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
      <div style={{ margin: "20px", textAlign: "center" }}>
        {cart.length > 0 && (
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/cart")}
          >
            Go to Cart ({cart.length})
          </button>
        )}
      </div>
    </div>
  );
};

export default Consultation;
