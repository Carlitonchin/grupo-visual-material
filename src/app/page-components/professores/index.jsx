import TeachersList from "./teachers-list";

export default function ProfessoresPage({
  title,
  text,
  categories,
  carousel,
  teachers,
}) {
  return (
    <div className="h-fit relative z-0">
      <div
        className="absolute top-0 left-0 flex justify-center items-end z-20"
        style={{ width: "100%", height: "400px" }}
      >
        <h2 className="text-center w-full mb-6 px-4 z-20">{title}</h2>
      </div>
      <div className="w-full">
        <div
          className="logos flex z-0"
          style={{ width: `${2 * 400 * 8}px`, height: "400px" }}
        >
          <div
            className="logos-slide flex z-0"
            style={{ width: `${400 * 8}px` }}
          >
            {carousel.map((c, index) => (
              <img key={index} alt={c.alt} src={c.img}></img>
            ))}
          </div>

          <div
            className="logos-slide flex z-0"
            style={{ width: `${400 * 8}px` }}
          >
            {carousel.map((c, index) => (
              <img key={index} alt={c.alt} src={c.img}></img>
            ))}
          </div>
        </div>
      </div>
      <div
        className="z-10 bg-gradient-to-t from-gray-200 via-gray-100 to-transparent"
        style={{
          position: "absolute",
          top: "200px",
          height: "400px",
          left: "0",
          width: `${400 * 2 * 8}px`,
        }}
      ></div>
      <section
        className="z-20 bg-gray-200"
        style={{
          width: "100%",
          height: "fit-content",
          minHeight: "200px",
          paddingTop: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <TeachersList text={text} categories={categories} teachers={teachers} />
      </section>
    </div>
  );
}
