import React, { useState } from "react";
import Header from "./Header";

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => {
    setOpen(open);
  };

  return (
    <div className="main-wrapper">
      <Header open={open} toggleDrawer={toggleDrawer} />
      <main role="main" className="main">
        {children}
      </main>
    </div>
  );
};

MainLayout.defaultProps = {};

export default MainLayout;
