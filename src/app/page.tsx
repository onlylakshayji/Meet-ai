"use client";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
   <div className="flex justify-center items-center min-h-screen">
      <Button
        className="flex flex-col justify-center items-center hover:cursor-pointer"
        variant="destructive"
        onClick={() => alert("Button clicked!")}
      >
        click me!
      </Button>
    </div>
  );
}
