import StarCard from "@/components/cards/StarCard";

export default function SingleTeacher({ teacher }) {
  return (
    <>
      <div
        className={
          "mt-20  md:mt-16 flex flex-col-reverse gap-y-4 gap-x-36 items-center lg:items-start lg:flex-row w-full max-w-5xl m-auto"
        }
      >
        <div className="flex flex-col w-full lg:max-w-[500px]">
          <h3
            className="text-center lg:text-start"
            style={{
              padding: 0,
              margin: 0,
            }}
          >
            {teacher.title}
          </h3>

          <span
            className="text-center lg:text-start"
            style={{
              padding: 0,
              margin: 0,
            }}
          >
            {teacher.text}
          </span>

          <span
            className="text-slate-800"
            style={{
              fontSize: "1rem",
              marginTop: "1rem",
            }}
          >
            {teacher.resume.split("\n").map((t, index) => {
              if (!t)
                return (
                  <span key={index}>
                    <br></br>
                    <br></br>
                  </span>
                );

              return <span key={index}>{t}</span>;
            })}
          </span>
        </div>
        <div className="w-full relative sm:w-[400px] sm:h-[400px] rounded-lg">
          <img
            className="w-full h-full rounded-sm"
            alt="profesor"
            src={teacher.url}
          ></img>
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-gray-200" />
          {/*<div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-transparent via-transparent to-gray-200" />
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-transparent via-transparent to-gray-200" />
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-l from-transparent via-transparent to-gray-200" />*/}
        </div>
      </div>
      {teacher?.courses?.length && (
        <div className="w-full mt-8 lg:mt-12">
          <h3 className="text-center px-4 w-full">
            Cursos com participação do profissional
          </h3>

          <div className="flex flex-wrap pt-4 gap-y-4 justify-center">
            {teacher.courses
              .filter((c, index) => index <= 2)
              .map((course) => {
                return (
                  <StarCard
                    category={course.category}
                    img={course.img}
                    stars={course.stars}
                    text={course.text}
                    url={course.url}
                    key={course.id}
                    price={course.price}
                  />
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}
