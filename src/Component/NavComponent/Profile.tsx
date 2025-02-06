"use client"

import React, { useEffect, useState } from "react";
import { CircleUser } from "lucide-react";
import AuthModal from "./AuthModal";
import { getToken } from "@/session"; 

export default function Profile() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(getToken()); // Only call getToken() on the client
  }, []);

  return (
    <div>
      {token ? (
     <>
     <CircleUser size={34} color="#6600ff" strokeWidth={1.75} />
     </>   
      ) : (
        <AuthModal />
      )}
    </div>
  );
}
