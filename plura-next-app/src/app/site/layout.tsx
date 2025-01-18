import React from "react";
import Navigation from "@/components/site/Navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-full">
      <Navigation />
      {children}
    </main>
  );
};

export default layout;
