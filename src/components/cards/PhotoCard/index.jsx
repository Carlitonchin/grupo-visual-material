import MKTypography from "@/components/MKTypography";
export default function PhotoCard({ url, text, className }) {
  return (
    <div className={className || "item-4 relative"}>
      <div
        className="absolute h-full rounded-sm shadow-sm"
        style={{
          width: "calc(100% - 1rem)",
          left: "0.5rem",
          backgroundImage: `url('${url}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full overflow-hidden h-full transition-opacity duration-200 opacity-0 hover:opacity-100 bg-black bg-opacity-75 p-4 flex items-center justify-center">
          <MKTypography
            variant="body2"
            color="white"
            className={"text-center w-full  overflow-hidden"}
          >
            {text}
          </MKTypography>
        </div>
      </div>
    </div>
  );
}
