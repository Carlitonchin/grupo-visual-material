import HeaderText from "@/components/texts/header-text";

export default function Stats({ stats }) {
  return (
    <section
      className="py-10 flex flex-col items-center md:items-start md:flex-row gap-y-10 justify-center gap-x-16 lg:gap-x-24 xl:gap-x-32"
      style={{
        background:
          "linear-gradient(36deg, rgba(232,243,244,0) 1%, rgba(232,233,244,1) 71%)",
      }}
    >
      {stats.map((elem, index) => (
        <div
          my-data-aos="fade-up"
          data-aos-delay={`${200 * (index + 1)}`}
          key={index}
          className="flex relative"
        >
          <div className="w-fit flex flex-col items-center text-center">
            <div className="relative w-fit">
              <HeaderText variant="h2" className="absolute text-5xl -left-10">
                +
              </HeaderText>
              <HeaderText className="text-center text-5xl" variant="h2">
                {elem.count}
              </HeaderText>
            </div>
            <HeaderText
              className="text-center text-slate-700 mt-1"
              variant="h3"
            >
              {elem.title}
            </HeaderText>
            <HeaderText
              className="text-center text-gray-600 mt-1"
              variant="span"
            >
              {elem.description}
            </HeaderText>
          </div>
        </div>
      ))}
    </section>
  );
}
