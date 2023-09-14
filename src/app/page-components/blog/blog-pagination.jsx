"use client";
import { Container, Grid } from "@mui/material";
import MKPagination from "../../../components/MKPagination";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import colors from "@/theme/base/colors";

export default function BlogPagination() {
  return (
    <Container sx={{ height: "100%" }}>
      <Grid
        container
        item
        justifyContent="center"
        xs={12}
        lg={6}
        mx="auto"
        height="100%"
      >
        <MKPagination>
          <MKPagination item>
            <KeyboardArrowLeftIcon />
          </MKPagination>
          <MKPagination className="bg-black" item active>
            1
          </MKPagination>
          <MKPagination item>2</MKPagination>
          <MKPagination item>3</MKPagination>
          <MKPagination item>4</MKPagination>
          <MKPagination item>5</MKPagination>
          <MKPagination item>
            <KeyboardArrowRightIcon />
          </MKPagination>
        </MKPagination>
      </Grid>
    </Container>
  );
}
