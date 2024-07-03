import TeachersList from "./teachers-list";
import HeaderText from "@/components/texts/header-text";

export default function ProfessoresPage({
  title,
  text,
  categories,
  carousel,
  teachers,
}) {
  return (
    <div className="h-fit relative z-0 bg-gray-200">
      
      <div className="w-full pt-20 sm:pt-10 md:pt-0">
        <div
          className="logos flex z-0"
          style={{ width: `${2 * 400 * 8}px` }}
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

<div 
        className="top-0 left-0 flex justify-center items-end w-full z-20"
       
      >
        <HeaderText className="text-center w-full px-4 z-20 text-3xl" variant="h2">
          {title}
        </HeaderText>
      </div>
      </div>
      
      <section
        className="z-20 pb-24"
        style={{
          width: "100%",
          height: "fit-content",
          minHeight: "200px",
          paddingTop: "1rem",
          paddingBottom: "6rem",
        }}
      >
        <TeachersList text={text} categories={categories} teachers={teachers} />
      </section>
    </div>
  );
}
