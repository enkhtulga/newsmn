import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NDrawer from "./Drawer";

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
      <NDrawer open={open} toggleDrawer={toggleDrawer} />
    </div>
  );
};

MainLayout.defaultProps = {};

export default MainLayout;
