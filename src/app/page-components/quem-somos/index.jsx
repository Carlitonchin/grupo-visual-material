import WhoVideo from "./video";
import Service from "./service";
import HeaderText from "@/components/texts/header-text";

export default function Who({
  title,
  description,
  ourMethod,
  video,
  cardTitle,
  cards,
  background,
}) {
  return (
    <div className="bg-gray-200">
      <div
        style={{
          width: "100%",
          height: "55vh",
          minHeight: "400px",
          backgroundImage: `url("${background}")`,
          backgroundColor: "#023457",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          textAlign: "center",
        }}
      >
        <div
          my-data-aos="fade-down"
          className="w-full px-4 h-full  flex flex-col items-center pt-12 sm:pt-0 justify-center"
        >
          <HeaderText className="text-white" variant="h2">
            {title}
          </HeaderText>
        </div>
      </div>
      <WhoVideo url={video} description={description} />
      <section className=" bg-white">
        <div my-data-aos="fade-down">
          <HeaderText className="text-center lg:text-start" variant="h2">
            {cardTitle}
          </HeaderText>
        </div>
        <div className="w-full mt-8 flex flex-col gap-y-20 lg:gap-y-36">
          {cards.map((card, index) => {
            return (
              <Service
                index={index}
                align={index % 2 == 0 ? "left" : "right"}
                alt={card.alt}
                category={card.category}
                img={card.img}
                text={card.text}
                textButton={card.textButton}
                title={card.title}
                urlButton={card.urlButton}
                externLink={card.externLink}
                key={index}
              />
            );
          })}
        </div>
      </section>
      <section id="nosso-metodo" className="py-12 flex flex-col gap-y-4 pb-20">
        <div my-data-aos="fade-down">
          <HeaderText className="text-center lg:text-start" variant="h2">
            Nosso Método
          </HeaderText>
        </div>

        <span
          my-data-aos="fade-up"
          className="text-slate-800 columns-1 md:columns-2 lg:columns-3 gap-x-20"
          style={{ fontSize: "1.1rem" }}
        >
          {ourMethod}
        </span>
      </section>
    </div>
  );
}
