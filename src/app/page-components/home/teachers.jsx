"use client";
import RotatingCard from "@/components/examples/Cards/RotatingCard";
import RotatingCardFront from "@/components/examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "@/components/examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "@/components/examples/Cards/InfoCards/DefaultInfoCard";
import { Grid } from "@mui/material";

export default function Teachers({ teachers, cardData }) {
  return (
    <section className="py-10 flex flex-col lg:flex-row bg-gray-200 justify-center gap-y-10 gap-x-20 items-center h-max">
      <div
        className="w-full sm:w-[60%] lg:w-[30%] lg:max-w-[25rem] "
        style={{ height: "30rem" }}
      >
        <RotatingCard>
          <RotatingCardFront
            image={cardData.img_frente}
            icon="touch_app"
            color={"dark"}
            title={cardData.texto_frente}
          />
          <RotatingCardBack
            image={cardData.img_atras}
            title={cardData.texto_atras}
            color={"dark"}
            action={{
              type: cardData?.link_externo ? "external" : "internal",
              route: cardData.url_botao,
              label: cardData.texto_botao,
            }}
          />
        </RotatingCard>
      </div>
      <div className="w-full lg:w-[50%] flex items-center justify-center">
        <Grid container spacing={4.5} className="h-fit">
          {teachers.map((teacher, index) => {
            return (
              <Grid key={index} item xs={12} lg={6} className="flex flex-col">
                <div className="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left w-full lg:w-64 max-w-full">
                  <img
                    className="w-14 h-14 rounded-full"
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
