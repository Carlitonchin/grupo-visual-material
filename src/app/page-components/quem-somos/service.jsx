import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import HeaderText from "@/components/texts/header-text";

export default function Service({
  align,
  img,
  alt,
  category,
  title,
  text,
  textButton,
  urlButton,
  externLink,
}) {
  return (
    <div
      className={
        "flex flex-col lg:flex-row w-full" +
        (align != "left" && "justify-end lg:flex-row-reverse")
      }
    >
      <img
        className="w-full lg:max-w-[500px] sm:min-w-[500px]"
        width={500}
        height={500}
        alt={alt}
        src={img}
      />
      <div
        className={
          "w-full lg:max-w-2xl flex flex-col " +
          (align != "left" && " lg:items-end")
        }
      >
        <div
          className={
            "flex flex-col py-2 px-4 w-full lg:max-w-lg border-b-8 border-orange-500 " +
            (align != "left" && " lg:items-end")
          }
        >
          <HeaderText
            className="text-gray-500"
            style={{ fontSize: "1.5rem" }}
            variant="span"
          >
            {category}
          </HeaderText>
          <HeaderText variant="h3">{title}</HeaderText>
        </div>
        <div
          className={
            "w-full flex flex-col h-fit py-2 px-4 " +
            (align != "left" && " lg:text-right lg:items-end")
          }
        >
          <span className="text-gray-500" style={{ fontSize: "1.1rem" }}>
            {text}
          </span>

          <Button
            className="w-full md:w-fit mt-4 bg-black text-white uppercase font-bold"
            variant="shadow"
            as={Link}
            target={externLink ? "_blank" : undefined}
            href={urlButton}
          >
            {textButton}
          </Button>
        </div>
      </div>
    </div>
  );
}
