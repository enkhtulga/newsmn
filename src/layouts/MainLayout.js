import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children, headerProps }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => {
    setOpen(open);
  };

  return (
    <div className="main-wrapper">
      <Header open={open} toggleDrawer={toggleDrawer} {...headerProps} />
      <main role="main" className="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

MainLayout.defaultProps = {};

export default MainLayout;
