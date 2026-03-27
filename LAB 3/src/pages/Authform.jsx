import React, { useState } from "react";
import CustomInput from "../components/CustomInput";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Login Data:" : "Register Data:", formData);
  };

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h2>{isLogin ? "Login" : "Register"}</h2>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <CustomInput
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        )}

        <CustomInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <CustomInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <p style={{ marginTop: "10px" }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <span
          onClick={() => setIsLogin(!isLogin)}
          style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
        >
          {isLogin ? "Register" : "Login"}
        </span>
      </p>
    </div>
  );
};

export default AuthForm;