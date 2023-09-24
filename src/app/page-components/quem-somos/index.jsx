import WhoVideo from "./video";
import Service from "./service";

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
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          textAlign: "center",
        }}
      >
        <div className="w-full px-4 h-full bg-gray-800 bg-opacity-75 bg-blur flex flex-col items-center justify-center">
          <h2 className="text-white">{title}</h2>
        </div>
      </div>
      <WhoVideo url={video} description={description} />
      <section className=" bg-white">
        <h2 className="text-center lg:text-start">{cardTitle}</h2>
        <div className="w-full mt-8 flex flex-col gap-y-20 lg:gap-y-36">
          {cards.map((card, index) => {
            return (
              <Service
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
      <section className="py-8 flex flex-col gap-y-4">
        <h2 id="nosso-metodo" className="text-center lg:text-start">
          Nosso Metodo
        </h2>

        <span
          className="text-gray-500 columns-1 md:columns-2 lg:columns-3 gap-x-20"
          style={{ fontSize: "1.1rem" }}
        >
          {ourMethod}
        </span>
      </section>
    </div>
  );
}
