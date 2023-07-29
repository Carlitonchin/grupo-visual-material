"use client";
import MKBox from "@/components/MKBox";
import MKTypography from "@/components/MKTypography";
import { Container, Grid } from "@mui/material";

export default function Home() {
  return (
    <main className="flex h-fit flex-col items-center justify-between   color-white">
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url("/bg-back.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
        className="relative"
      >
        <div
          style={{
            backdropFilter: "blur(3px)",
          }}
          className="absolute w-full h-full bg-gray-800 bg-opacity-75 bg-blur"
        ></div>
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Material Kit 2 React{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Free & Open Source Web UI Kit built over ReactJS &amp; MUI. Join
              over 1.6 million developers around the world.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </main>
  );
}
