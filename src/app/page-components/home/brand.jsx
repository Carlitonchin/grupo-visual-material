import HeaderText from "@/components/texts/header-text";

export default function Brand({ brands, title }) {
  return (
    <section>
      <div className="w-full" data-aos-delay="200" my-data-aos="fade-down">
        <HeaderText variant="h2" className="text-center w-full mb-8">
          {title}
        </HeaderText>
      </div>
      <div className="w-full h-fit flex  justify-center items-center flex-wrap gap-x-8 md:gap-x-12 gap-y-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            my-data-aos={"zoom-in"}
            data-aos-delay={`${100 * (index + 1) + 100}`}
            className="w-fit h-fit"
          >
            <img
              className="w-auto max-w-md max-h-20 h-auto"
              width="100"
              height="auto"
              src={brand.img}
              alt={brand.alt}
            ></img>
          </div>
        ))}
      </div>
    </section>
  );
}
