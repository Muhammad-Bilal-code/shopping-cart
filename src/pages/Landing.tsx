import { Button } from "@mui/material";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Landing = () => {

  const navigate = useNavigate();
  return (
    <div>
      <h2>Landing</h2>

      <Button onClick={()=>navigate("/register")}>Go to Register</Button>
    </div>
  );
};

export default Landing;
