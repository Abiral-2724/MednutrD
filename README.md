# MedNutr: A Telemedicine Platform

## Description

MedNutr is a comprehensive telemedicine platform designed to revolutionize healthcare. It integrates the MERN (MongoDB, Express.js, React.js, Node.js) stack with a machine learning-based recommendation system to enhance the user experience. Patients and doctors can leverage features like virtual consultations, AI-driven symptom diagnostics, document management, appointment scheduling, and in-built pharmacy services. 

This platform uses cloud services for scalability and security while focusing on improving healthcare efficiency.

---

## Features

- **Virtual Consultations**: Connect with doctors via video calls for emergency and regular check-ups.
- **AI-Based Symptom Diagnostics**: Provide initial symptom analysis and doctor recommendations.
- **Appointment Scheduling**: Easily book and manage appointments.
- **Document Management**: Upload and store medical records securely.
- **Pharmacy Services**: Order prescribed medicines through an integrated pharmacy.
- **ML-Powered Recommendations**: Suggest relevant doctors and services based on user profiles and medical history.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or later)
- **MongoDB** (Running locally or with a URI for a cloud-based database)
- **Python** (for ML model integration)
- **npm or yarn** (Package manager)
- **Python Libraries**: Install the necessary dependencies for the ML recommendation system (specified later).

---

## Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/your-username/mednutr.git
cd mednutr
```

---

### Backend Setup (Node.js)

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add the following environment variables:
   ```env
   MONGO_URI=<Your MongoDB Connection String>
   PORT=5000
   JWT_SECRET=<Your JWT Secret>
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

---

### Frontend Setup (React.js)

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add the following environment variable:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the frontend server:
   ```bash
   npm start
   ```

---

### Machine Learning Model Setup

1. Navigate to the `ml` folder:
   ```bash
   cd ml
   ```

2. Create a virtual environment:
   ```bash
   python -m venv env
   source env/bin/activate # For Windows: env\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the ML model server:
   ```bash
   python app.py
   ```

   This server provides API endpoints for the recommendation system.

---

## Running the Full Stack Application

1. Start the **backend server**:
   ```bash
   cd backend
   npm start
   ```

2. Start the **frontend server**:
   ```bash
   cd frontend
   npm start
   ```

3. Start the **ML server**:
   ```bash
   cd ml
   python app.py
   ```

---

## Usage

- Access the platform via your browser at `http://localhost:3000`.
- Interact with features like appointment booking, symptom diagnostics, and pharmacy services.
- Explore doctor recommendations powered by the ML system.

---

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Machine Learning**: Python, Scikit-learn, TensorFlow


## Contribution

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.
