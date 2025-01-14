import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User, Mail, Lock, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dob: "",
    medical: "",
    location:"",
    selectfield: "",
    classfield: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("");
  const [classOptions, setClassOptions] = useState([]);

  const handleSelectChange = (value) => {
    setUserType(value);
    if (value === "Patient") {
      setClassOptions(["General", "Army", "Police", "Premium"]);
    } else if (value === "Doctor") {
      setClassOptions(["Intern", "Practicing", "Specialist"]);
    } else {
      setClassOptions([]);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5004/api/auth/register",
        formData
      );
      console.log("Registration successful:", response.data);
      window.location.href = "/login";
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleFileUpload = (files) => {
    if (files.length > 4) {
      alert("You can upload a maximum of 4 files.");
      return;
    }

    files.forEach((file) => {
      console.log(file.name);
    });
  };

  return (
    <div>
      <Navbar/>
       <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Create Account
          </CardTitle>
          <CardDescription className="text-center">
            Sign up for a new account to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (validateForm()) handleSubmit(e);
            }}
            className="space-y-6"
          >
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstname">First Name</Label>
                <div className="relative">
                  <User className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    id="firstname"
                    name="firstname"
                    className="pl-8"
                    placeholder="John"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastname">Last Name</Label>
                <div className="relative">
                  <User className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    id="lastname"
                    name="lastname"
                    className="pl-8"
                    placeholder="Doe"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="pl-8"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <User className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    className="pl-8"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <User className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="pl-8"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Gender</Label>
                <RadioGroup
                  onValueChange={(value) => handleSelectChange(value, "gender")}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dob">Date Of Birth</Label>
                <div className="relative">
                  <User className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    id="dob"
                    name="dob"
                    type="date"
                    className="pl-8"
                    placeholder="Please choose your Date of Birth"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="medical">Medical Credential</Label>
              <div className="relative">
                <Mail className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  id="medical"
                  name="medical"
                  type="file"
                  className="pl-8"
                  placeholder="Upload your credential"
                  multiple
                  onChange={(e) => {
                    const files = Array.from(e.target.files);
                    handleFileUpload(files);
                  }}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <Input
                  id="location"
                  name="location"
                  type="text"
                  className="pl-8"
                  placeholder="Enter Your Location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* User Type Dropdown */}
              <div className="space-y-2">
                <Label>User Type</Label>
                <Select onValueChange={(value) => handleSelectChange(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select user type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Patient">Patient</SelectItem>
                    <SelectItem value="Doctor">Doctor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Classes Dropdown */}
              <div className="space-y-2">
                <Label>Classes</Label>
                <Select
                  onValueChange={(value) =>
                    console.log("Selected Class:", value)
                  }
                  disabled={classOptions.length === 0} // Disable dropdown if no options
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select class type" />
                  </SelectTrigger>
                  <SelectContent>
                    {classOptions.map((classOption) => (
                      <SelectItem key={classOption} value={classOption}>
                        {classOption}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating account..." : "Create Account"}
            </Button>
            <div className="text-center text-sm">
              <span className="text-gray-600">Already have a account ? </span>
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
    </div>
  );
};
export default Register;