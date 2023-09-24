// Material Kit 2 React components
import MKBox from "@mui/material/Box";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
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

function RotatingCardFront({ color, image, icon, title, description }) {
  return (
    <MKBox
      className="flex flex-col justify-center items-center px-8"
      display="flex"
      justifyContent="center"
      alignContent="center"
      borderRadius="lg"
      coloredShadow={color}
      width="100%"
      height="100%"
      position="relative"
      zIndex={2}
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
      }}
    >
      <MKBox textAlign="center" lineHeight={1}>
        {icon && <PanToolAltIcon className="text-white my-2 w-10 h-10" />}
        <h3 className="mt-4 text-white">{title}</h3>
        <span className="text-white">{description}</span>
      </MKBox>
    </MKBox>
  );
}

export default RotatingCardFront;
