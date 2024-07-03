// @mui material components
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "@mui/material/Box";

function DefaultInfoCard({
  color,
  icon,
  title,
  description,
  direction,
  small,
}) {
  return (
    <MKBox
      lineHeight={1}
      p={direction === "center" ? 2 : 0}
      textAlign={direction}
      className="flex flex-col"
    >
      {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
      <span className="text-center lg:text-left font-bold mt-2 mb-0.5 text-slate-800">
        {title}
      </span>
      <span className="text-center lg:text-left text-base text-slate-800">
        {description}
      </span>
    </MKBox>
  );
}

export default DefaultInfoCard;
