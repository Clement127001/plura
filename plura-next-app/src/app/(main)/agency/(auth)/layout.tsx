import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  console.log("rendering the authentications");
  return (
    <div className="flex w-full h-full items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
