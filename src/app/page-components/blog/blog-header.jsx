import HeaderText from "@/components/texts/header-text";

export default function BlogHeader() {
  return (
    <div
      style={{
        width: "100%",
        height: "40vh",
        minHeight: "350px",
        backgroundImage: `url("/blog3.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        textAlign: "center",
      }}
    >
      <div className="w-full pt-[150px] sm:pt-[80px] px-4 h-full bg-gray-800 bg-opacity-75 bg-blur flex flex-col items-center justify-center">
        <HeaderText className="text-white" font="Custom" variant="h2">
          Útimos posts
        </HeaderText>
      </div>
    </div>
  );
}
