import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";

const DietChart = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [customProblem, setCustomProblem] = useState("");

  const dietData = {
    Sugar: {
      Monday: [
        "Oatmeal, Boiled Egg",
        "Grilled Chicken, Vegetables",
        "Nuts, Green Tea",
        "Salad, Lentil Soup",
      ],
      Tuesday: [
        "Smoothie, Avocado Toast",
        "Quinoa Bowl",
        "Fruits, Herbal Tea",
        "Vegetable Stir Fry",
      ],
      Wednesday: [
        "Scrambled Eggs, Toast",
        "Chicken Salad",
        "Yogurt, Almonds",
        "Grilled Fish, Brown Rice",
      ],
      Thursday: [
        "Porridge, Berries",
        "Steamed Vegetables, Lentils",
        "Mixed Nuts",
        "Soup, Whole Grain Bread",
      ],
      Friday: [
        "Fruit Salad, Yogurt",
        "Turkey Wraps",
        "Boiled Chickpeas",
        "Vegetable Curry, Rice",
      ],
      Saturday: [
        "Granola, Milk",
        "Vegetable Pasta",
        "Apples, Green Tea",
        "Grilled Chicken, Broccoli",
      ],
      Sunday: [
        "Boiled Egg, Toast",
        "Vegetable Stir Fry",
        "Smoothie",
        "Lentil Soup, Salad",
      ],
    },
    Headache: {
      Monday: [
        "Whole Grain Toast, Fruit",
        "Salmon, Spinach",
        "Herbal Tea, Almonds",
        "Grilled Veggies, Brown Rice",
      ],
      Tuesday: [
        "Pancakes, Honey",
        "Vegetable Soup",
        "Fruit Salad",
        "Steamed Fish, Veggies",
      ],
      Wednesday: [
        "Omelet, Whole Wheat Bread",
        "Chicken Wraps",
        "Green Smoothie",
        "Vegetable Quinoa Bowl",
      ],
      Thursday: [
        "Banana, Peanut Butter Toast",
        "Turkey Sandwich",
        "Mixed Nuts",
        "Rice, Grilled Veggies",
      ],
      Friday: [
        "Smoothie Bowl",
        "Boiled Chicken, Beans",
        "Green Tea, Crackers",
        "Soup, Lentils",
      ],
      Saturday: [
        "Yogurt, Granola",
        "Vegetable Wraps",
        "Fruit Salad",
        "Grilled Salmon, Salad",
      ],
      Sunday: [
        "Toast, Jam",
        "Steamed Vegetables, Fish",
        "Herbal Tea",
        "Vegetable Stir Fry",
      ],
    },
    Obesity: {
      Monday: [
        "Oatmeal, Boiled Egg",
        "Grilled Chicken, Vegetables",
        "Nuts, Green Tea",
        "Salad, Lentil Soup",
      ],
      Tuesday: [
        "Smoothie, Avocado Toast",
        "Quinoa Bowl",
        "Fruits, Herbal Tea",
        "Vegetable Stir Fry",
      ],
      Wednesday: [
        "Scrambled Eggs, Toast",
        "Chicken Salad",
        "Yogurt, Almonds",
        "Grilled Fish, Brown Rice",
      ],
      Thursday: [
        "Porridge, Berries",
        "Steamed Vegetables, Lentils",
        "Mixed Nuts",
        "Soup, Whole Grain Bread",
      ],
      Friday: [
        "Fruit Salad, Yogurt",
        "Turkey Wraps",
        "Boiled Chickpeas",
        "Vegetable Curry, Rice",
      ],
      Saturday: [
        "Granola, Milk",
        "Vegetable Pasta",
        "Apples, Green Tea",
        "Grilled Chicken, Broccoli",
      ],
      Sunday: [
        "Boiled Egg, Toast",
        "Vegetable Stir Fry",
        "Smoothie",
        "Lentil Soup, Salad",
      ],
    },
    SeverePain: {
      Monday: [
        "Whole Grain Toast, Fruit",
        "Salmon, Spinach",
        "Herbal Tea, Almonds",
        "Grilled Veggies, Brown Rice",
      ],
      Tuesday: [
        "Pancakes, Honey",
        "Vegetable Soup",
        "Fruit Salad",
        "Steamed Fish, Veggies",
      ],
      Wednesday: [
        "Omelet, Whole Wheat Bread",
        "Chicken Wraps",
        "Green Smoothie",
        "Vegetable Quinoa Bowl",
      ],
      Thursday: [
        "Banana, Peanut Butter Toast",
        "Turkey Sandwich",
        "Mixed Nuts",
        "Rice, Grilled Veggies",
      ],
      Friday: [
        "Smoothie Bowl",
        "Boiled Chicken, Beans",
        "Green Tea, Crackers",
        "Soup, Lentils",
      ],
      Saturday: [
        "Yogurt, Granola",
        "Vegetable Wraps",
        "Fruit Salad",
        "Grilled Salmon, Salad",
      ],
      Sunday: [
        "Toast, Jam",
        "Steamed Vegetables, Fish",
        "Herbal Tea",
        "Vegetable Stir Fry",
      ],
    },
    BP: {
      Monday: [
        "Whole Grain Toast, Fruit",
        "Salmon, Spinach",
        "Herbal Tea, Almonds",
        "Grilled Veggies, Brown Rice",
      ],
      Tuesday: [
        "Pancakes, Honey",
        "Vegetable Soup",
        "Fruit Salad",
        "Steamed Fish, Veggies",
      ],
      Wednesday: [
        "Omelet, Whole Wheat Bread",
        "Chicken Wraps",
        "Green Smoothie",
        "Vegetable Quinoa Bowl",
      ],
      Thursday: [
        "Banana, Peanut Butter Toast",
        "Turkey Sandwich",
        "Mixed Nuts",
        "Rice, Grilled Veggies",
      ],
      Friday: [
        "Smoothie Bowl",
        "Boiled Chicken, Beans",
        "Green Tea, Crackers",
        "Soup, Lentils",
      ],
      Saturday: [
        "Yogurt, Granola",
        "Vegetable Wraps",
        "Fruit Salad",
        "Grilled Salmon, Salad",
      ],
      Sunday: [
        "Toast, Jam",
        "Steamed Vegetables, Fish",
        "Herbal Tea",
        "Vegetable Stir Fry",
      ],
    },
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const meals = ["Breakfast", "Lunch", "Evening Snack", "Dinner"];

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
    setCustomProblem("");
  };

  const handlePublish = () => {
    alert(`Your problem: ${customProblem}`);
  };
  return (
    <div>
      <Navbar />
      <h1 style={{ fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>
        Create Your Diet With Us!
      </h1>
      <select
        value={selectedOption}
        onChange={handleDropdownChange}
        style={{
          padding: "10px",
          width: "380px",
          border: "2px solid black",
          backgroundColor: "whitesmoke",
          borderRadius: "15px",
          marginLeft: "38%",
          marginTop: "25px",
          marginBottom: "10px",
        }}
      >
        <option value="">Select an option</option>
        <option value="Sugar">Sugar</option>
        <option value="Headache">Headache</option>
        <option value="SeverePain">Severe Pain in Joints</option>
        <option value="Obesity">Obesity</option>
        <option value="BP">BP</option>
        <option value="Others">Others</option>
      </select>

      {selectedOption && selectedOption !== "Others" && (
        <table
          border="1"
          style={{
            marginTop: "20px",
            width: "80%",
            textAlign: "center",
            border: "5px solid black",
            marginLeft: "10%",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            background:
              "linear-gradient(90deg, rgba(109, 167, 231, 1) 0%, rgba(174, 153, 217, 1) 100%)",
          }}
        >
          <thead>
            <tr style={{ border: "5px solid black", height: "45px" }}>
              <th style={{ border: "5px solid black", height: "45px" }}>Day</th>
              {meals.map((meal, index) => (
                <th
                  key={index}
                  style={{ border: "5px solid black", height: "45px" }}
                >
                  {meal}
                </th>
              ))}
            </tr>
          </thead>
          <tbody style={{ border: "5px solid black", height: "450px" }}>
            {days.map((day, dayIndex) => (
              <tr key={dayIndex}>
                <td style={{ border: "5px solid black", height: "45px" }}>
                  {day}
                </td>
                {meals.map((meal, mealIndex) => (
                  <td
                    key={mealIndex}
                    style={{ border: "5px solid black", height: "45px" }}
                  >
                    {dietData[selectedOption] && dietData[selectedOption][day]
                      ? dietData[selectedOption][day][mealIndex]
                      : "No Data"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedOption === "Others" && (
        <div style={{ marginTop: "20px", display: "flex" }}>
          <textarea
            placeholder="Describe your problem"
            value={customProblem}
            onChange={(e) => setCustomProblem(e.target.value)}
            style={{
              width: "70%",
              height: "90px",
              padding: "10px",
              border: "2px solid black",
              borderRadius: "20px",
              marginTop: "20px",
              marginLeft: "10%",
              backgroundColor: "whitesmoke",
              marginRight: "20px",
            }}
          ></textarea>
          <br />
          <button
            onClick={handlePublish}
            style={{
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "5px",
              height: "50px",
              marginTop: "40px",
            }}
          >
            Publish
          </button>
        </div>
      )}
    </div>
  );
};

export default DietChart;
