"use client";
import RotatingCard from "@/components/examples/Cards/RotatingCard";
import RotatingCardFront from "@/components/examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "@/components/examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "@/components/examples/Cards/InfoCards/DefaultInfoCard";
import { Grid } from "@mui/material";

export default function Teachers() {
  return (
    <section className="py-10 flex flex-col lg:flex-row bg-gray-200 justify-center gap-y-10 gap-x-20 items-center h-max">
      <div
        className="w-full sm:w-[60%] lg:w-[30%] lg:max-w-[25rem] "
        style={{ height: "30rem" }}
      >
        <RotatingCard>
          <RotatingCardFront
            image={"/teacher_front.avif"}
            icon="touch_app"
            color={"dark"}
            title={"Professores atuantes na área"}
          />
          <RotatingCardBack
            image={"/teacher_back.avif"}
            title="Professores atuantes na área"
            color={"dark"}
            action={{
              type: "internal",
              route: "/sections/page-sections/page-headers",
              label: "Saiba mais",
            }}
          />
        </RotatingCard>
      </div>
      <div className="w-full lg:w-[50%] flex items-center justify-center">
        <Grid container spacing={4.5} className="h-fit">
          <Grid item xs={12} lg={6} className="flex flex-col">
            <div className="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left w-full lg:w-64 max-w-full">
              <img
                className="w-14 h-14 rounded-full"
                src="/bg1.jpg"
                alt="roberto pereira"
              ></img>
              <DefaultInfoCard
                title="Claudia Marin"
                description="Licenciada en comunicacion social y especialista en marketing en Grupo Visual"
              />
            </div>
          </Grid>
          <Grid item xs={12} lg={6} className="flex flex-col">
            <div className="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left w-full lg:w-64 max-w-full">
              <img
                className="w-14 h-14 rounded-full"
                src="/bg1.jpg"
                alt="eliseo rodriguez"
              ></img>
              <DefaultInfoCard
                title="Claudia Marin"
                description="Licenciada en comunicacion social y especialista en marketing en Grupo Visual"
              />
            </div>
          </Grid>
          <Grid item xs={12} lg={6} className="flex flex-col">
            <div className="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left w-full lg:w-64 max-w-full">
              <img
                className="w-14 h-14 rounded-full"
                src="/bg1.jpg"
                alt="melissa sanchez"
              ></img>
              <DefaultInfoCard
                title="Claudia Marin"
                description="Licenciada en comunicacion social y especialista en marketing en Grupo Visual"
              />
            </div>
          </Grid>
          <Grid item xs={12} lg={6} className="flex flex-col">
            <div className="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left w-full lg:w-64 max-w-full">
              <img
                className="w-14 h-14 rounded-full"
                src="/bg1.jpg"
                alt="rigoberto duran"
              ></img>
              <DefaultInfoCard
                title="Claudia Marin"
                description="Licenciada en comunicacion social y especialista en marketing en Grupo Visual"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
