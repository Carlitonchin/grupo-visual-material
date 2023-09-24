"use client";

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "@mui/material/Box";

function RotatingCard({ children }) {
  const [rotate, setRotate] = useState(false);

  const rotate0 = () => setRotate(false);
  const rotate180 = () => setRotate(true);

  return (
    <>
      <MKBox
        sx={{ perspective: "50rem", height: "100%" }}
        onMouseEnter={rotate180}
        onMouseLeave={rotate0}
      >
        <Card
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            height: "100%",
            position: "relative",
            transform: rotate ? "rotateY(180deg)" : "rotateY(0)",
            transformStyle: "preserve-3d",
            transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
          }}
        >
          {children}
        </Card>
      </MKBox>
    </>
  );
}

export default RotatingCard;
