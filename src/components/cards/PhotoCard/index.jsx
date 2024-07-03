export default function PhotoCard({
  url,
  text,
  className,
  animation = false,
  index = 1,
}) {
  return (
    <div
      my-data-aos={animation ? "zoom-in" : undefined}
      data-aos-delay={`${100 * index + 100}`}
      className={className || "item-4 relative"}
    >
      <div
        className="absolute h-full rounded-md shadow-sm"
        style={{
          width: "calc(100% - 1rem)",
          left: "0.5rem",
          backgroundImage: `url('${url}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full rounded-md overflow-hidden h-full transition-opacity duration-200 opacity-0 hover:opacity-100 bg-back bg-opacity-90 p-4 flex items-center justify-center">
          <span
            className={
              "text-center w-full  overflow-hidden text-white text-base"
            }
          >
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}
