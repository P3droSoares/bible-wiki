import { ModeToggle } from "@/components/ModeToggle";
import React from "react";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <p>Corpo</p>
      <ModeToggle />
    </div>
  );
}
