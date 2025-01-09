import React, { useState } from "react";
import Navbar from "./Navbar";

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

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const meals = ["Breakfast", "Lunch", "Evening Snack", "Dinner"];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Create Your Diet With Us!
        </h1>

        <div className="max-w-md mx-auto mb-8">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full p-4 border-2 border-gray-300 rounded-xl bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
          >
            <option value="">Select an option</option>
            <option value="Sugar">Sugar</option>
            <option value="Headache">Headache</option>
            <option value="SeverePain">Severe Pain in Joints</option>
            <option value="Obesity">Obesity</option>
            <option value="BP">BP</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {selectedOption && selectedOption !== "Others" && (
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white">
              <thead>
                <tr>
                  <th className="p-4 border-2 border-white font-bold">Day</th>
                  {meals.map((meal, index) => (
                    <th key={index} className="p-4 border-2 border-white font-bold">
                      {meal}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {days.map((day, dayIndex) => (
                  <tr key={dayIndex} className="hover:bg-white/10 transition-colors">
                    <td className="p-4 border-2 border-white font-semibold">{day}</td>
                    {meals.map((meal, mealIndex) => (
                      <td key={mealIndex} className="p-4 border-2 border-white">
                        {dietData[selectedOption]?.[day]?.[mealIndex] || "No Data"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedOption === "Others" && (
          <div className="max-w-4xl mx-auto mt-8">
            <div className="flex flex-col md:flex-row gap-4">
              <textarea
                placeholder="Describe your problem"
                value={customProblem}
                onChange={(e) => setCustomProblem(e.target.value)}
                className="flex-1 p-4 border-2 border-gray-300 rounded-xl bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 resize-none h-32"
              />
              <button
                onClick={() => alert(`Your problem: ${customProblem}`)}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 font-semibold"
              >
                Publish
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DietChart;