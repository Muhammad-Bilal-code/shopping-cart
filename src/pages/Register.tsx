import { Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from "react";
import { UserData, handleGoogleAuthentication } from "../utils";

export default function  Register() {
  const [user, setUser] = useState<UserData|null>(null)
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <h2>Register</h2>
      <Button variant="outlined" startIcon={<GoogleIcon/>} disabled={loading} color="error" onClick={()=>handleGoogleAuthentication(setUser,setLoading)}>Sign-in with google</Button>
    </div>
  );
};

