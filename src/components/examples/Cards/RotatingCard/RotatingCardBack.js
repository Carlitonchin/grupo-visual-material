// next/link components
import { Link } from "@nextui-org/link";

// @mui material components

// Material Kit 2 React components
import MKBox from "@mui/material/Box";
import { Button } from "@nextui-org/button";
import chroma from "chroma-js";

function hexToRgb(color) {
  return chroma(color).rgb().join(", ");
}

function linearGradient(color, colorState, angle = 195) {
  return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
}

function rgba(color, opacity) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

const gradients = {
  primary: {
    main: "#a00",
    state: "#a00",
  },

  secondary: {
    main: "#747b8a",
    state: "#495361",
  },

  info: {
    main: "#49a3f1",
    state: "#1A73E8",
  },

  success: {
    main: "#a00",
    state: "#a00",
  },

  warning: {
    main: "#FFA726",
    state: "#FB8C00",
  },

  error: {
    main: "#EF5350",
    state: "#E53935",
  },

  light: {
    main: "#EBEFF4",
    state: "#CED4DA",
  },

  dark: {
    main: "#42424a",
    state: "#191919",
  },
};

function RotatingCard({ color, image, title, description, action }) {
  return (
    <MKBox
      display="flex"
      className="px-8"
      justifyContent="center"
      alignItems="center"
      borderRadius="lg"
      coloredShadow={color}
      position="absolute"
      width="100%"
      height="100%"
      top={0}
      left={0}
      zIndex={5}
      sx={{
        backgroundImage: () =>
          `${linearGradient(
            rgba(
              gradients[color] ? gradients[color].main : gradients.info.main,
              0.85
            ),
            rgba(
              gradients[color] ? gradients[color].main : gradients.info.main,
              0.85
            )
          )}, url(${image})`,
        backgroundSize: "cover",
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
    >
      <MKBox textAlign="center" lineHeight={1}>
        <h3 className="text-white">{title}</h3>
        <span className="text-white">{description}</span>
        {action && (
          <MKBox width="100%" mt={4} mx="auto">
            {action.type === "external" ? (
              <Button
                as={Link}
                href={action.route}
                target="_blank"
                rel="noreferrer"
                className="white w-full uppercase font-bold"
                variant="shadow"
              >
                {action.label}
              </Button>
            ) : (
              <Button
                as={Link}
                href={action.route}
                className="white w-full uppercase font-bold"
              >
                {action.label}
              </Button>
            )}
          </MKBox>
        )}
      </MKBox>
    </MKBox>
  );
}

export default RotatingCard;
