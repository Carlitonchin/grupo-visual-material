"use client";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import DefaultInfoCard from "@/components/examples/Cards/InfoCards/DefaultInfoCard";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { Grid } from "@mui/material";
import HeaderText from "@/components/texts/header-text";

export default function Teachers({ teachers, cardData }) {
  return (
    <section className="py-10 flex flex-col lg:flex-row bg-gray-200 justify-center gap-y-10 gap-x-20 items-center h-max">
      <div
        my-data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="500"
        className="w-full sm:w-[60%] lg:w-[30%] lg:max-w-[25rem] "
        style={{ height: "30rem" }}
      >
        <div className="group h-full [perspective:1000px]">
          <div
            style={{ transitionDuration: "500ms" }}
            className="relative h-full w-full transition-all rounded-xl shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] "
          >
            <div className="absolute inset-0">
              <div
                className="w-full h-full  rounded-xl object-cover shadow-xl shadow-black/40"
                style={{
                  backgroundImage: `url(${cardData.img_frente})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="bg-black flex flex-col justify-center px-8 items-center w-full h-full shadow-black/40 bg-opacity-50 rounded-xl object-cover">
                  <HeaderText
                    className="font-bold text-center text-white"
                    variant="h4"
                  >
                    {cardData.texto_frente}
                  </HeaderText>

                  <PanToolAltIcon
                    sx={{
                      width: "2.8rem",
                      height: "2.8rem",
                      fill: "white",
                      marginTop: "2rem",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${cardData.img_atras})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="absolute inset-0 h-full w-full rounded-xl text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]"
            >
              <div className="flex flex-col bg-black shadow-black/40 bg-opacity-70 h-full w-full rounded-xl px-8 justify-center items-center">
                <HeaderText className="font-bold" variant="h4">
                  {cardData.texto_atras}
                </HeaderText>
                <Button
                  as={Link}
                  href={cardData.url_botao}
                  target={cardData?.link_externo ? "_blank" : undefined}
                  variant="shadow"
                  className="bg-white text-black uppercase font-bold mt-8"
                >
                  {cardData.texto_botao}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        my-data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="500"
        className="w-full lg:w-[50%] flex items-center justify-center"
      >
        <Grid container spacing={4.5} className="h-fit">
          {teachers.map((teacher, index) => {
            return (
              <Grid key={index} item xs={12} lg={6} className="flex flex-col">
                <div className="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left w-full lg:w-64 max-w-full">
                  <img
                    className="w-20 h-20 rounded-full"
                    src={teacher.img}
                    alt={teacher.alt}
                  ></img>
                  <DefaultInfoCard
                    title={teacher.nome}
                    description={teacher.descricao}
                  />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </section>
  );
}
