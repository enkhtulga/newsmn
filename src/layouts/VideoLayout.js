import React, { useState } from "react";
import VideoHeader from "./VideoHeader";
import Footer from "./Footer";

const VideoLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => {
    setOpen(open);
  };

  return (
    <div className="main-wrapper">
      <VideoHeader open={open} toggleDrawer={toggleDrawer} />
      <main role="main" className="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

VideoLayout.defaultProps = {};

export default VideoLayout;
