import HeaderText from "@/components/texts/header-text";

export default function Stats({ stats }) {
  return (
    <section className="py-10 bg-back flex flex-col items-center md:items-start md:flex-row gap-y-10 justify-center gap-x-16 lg:gap-x-24 xl:gap-x-32">
      {stats.map((elem, index) => (
        <div
          my-data-aos="fade-up"
          data-aos-delay={`${200 * (index + 1)}`}
          key={index}
          className="flex relative"
        >
          <div className="w-fit flex flex-col items-center text-center">
            <div className="relative w-fit">
              <HeaderText
                variant="h2"
                className="absolute text-white text-5xl -left-10"
              >
                +
              </HeaderText>
              <HeaderText
                className="text-center text-white text-5xl"
                variant="h2"
              >
                {elem.count}
              </HeaderText>
            </div>
            <HeaderText className="text-center text-main mt-1" variant="h3">
              {elem.title}
            </HeaderText>
            <HeaderText className="text-center text-white mt-1" variant="span">
              {elem.description}
            </HeaderText>
          </div>
        </div>
      ))}
    </section>
  );
}
