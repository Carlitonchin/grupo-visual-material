export default function BlogHeader() {
  return (
    <div
      style={{
        width: "100%",
        height: "30vh",
        minHeight: "250px",
        backgroundImage: `url("/blog3.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        textAlign: "center",
      }}
    >
      <div className="w-full pb-10 px-4 h-full bg-gray-800 bg-opacity-75 bg-blur flex flex-col items-center justify-end">
        <h2 className="text-white">Útimos posts</h2>
      </div>
    </div>
  );
}
