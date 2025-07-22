"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";


export default function Home() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {data: session} = authClient.useSession();

  const onSubmit = async() => {
    try{
      await authClient.signUp.email({
        name,
        email,
        password
      }, {onError: () => {
        window
      },onSuccess: () => {
        alert("User created successfully!");
        setName("");
        setEmail("");
        setPassword("");
      } 
    });
    } catch (error) {
      console.error("Error creating user:", error); 
      alert("Failed to create user. Please try again.");
    }   
  }

  const onLogin = async() => {
    try{
      await authClient.signIn.email({
        email,
        password
      }, {onError: () => {
        window
      },onSuccess: () => {
        alert("User created successfully!");
        setName("");
        setEmail("");
        setPassword("");
      } 
    });
    } catch (error) {
      console.error("Error creating user:", error); 
      alert("Failed to create user. Please try again.");
    }   
  }

  if(session){
    return(
      <div className="flex flex-col items-center justify-center h-screen gap-4 p-4"> 
      <p>Logged in as {session.user.name}</p>
      <Button onClick={() => authClient.signOut()}>
        Sign Out
      </Button>
      </div>
    )
  }


  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen gap-4 p-4">
        <Input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={onSubmit} >
          Create user
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center h-screen gap-4 p-4">
        <Input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={onLogin} >
          Login 
        </Button>
      </div>
    </div>
  );
}
