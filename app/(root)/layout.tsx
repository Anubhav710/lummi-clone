import Header from "@/components/sections/Header";
import React, { ReactNode } from "react";

const rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default rootlayout;
