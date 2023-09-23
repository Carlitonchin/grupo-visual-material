// next/link components
import { Link } from "@nextui-org/link";

// @mui material components

// Material Kit 2 React components
import MKBox from "@mui/material/Box";
import { Button } from "@nextui-org/button";

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
