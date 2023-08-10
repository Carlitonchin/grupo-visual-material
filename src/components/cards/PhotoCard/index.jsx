import MKTypography from "@/components/MKTypography";
export default function PhotoCard() {
  return (
    <div className="item-4 relative">
      <div
        className="absolute h-full rounded-sm shadow-sm"
        style={{
          width: "calc(100% - 1rem)",
          left: "0.5rem",
          backgroundImage: "url('/student1.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-full transition-opacity duration-200 opacity-0 hover:opacity-100 bg-black bg-opacity-75 p-4 flex items-center justify-center">
          <MKTypography
            variant="body2"
            color="white"
            className={"text-center w-full  "}
          >
            Gracas ao Grupo Visual me formei como Adbogada e agora trabalho no
            que gostou. Mas o mais importante que me levou do Grupo Visual e que
            crie o habito de estudar e nao me conformar com o que sei, temos que
            aprender algo novo todos os dias
          </MKTypography>
        </div>
      </div>
    </div>
  );
}
