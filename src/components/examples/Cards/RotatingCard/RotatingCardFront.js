// Material Kit 2 React components
import MKBox from "@mui/material/Box";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";

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
        backgroundImage: ({
          palette: { gradients },
          functions: { linearGradient, rgba },
        }) =>
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
