"use client";
import MKBox from "@/components/MKBox";
import {
  Container,
  Grid,
  FormControl,
  InputLabel,
  Input,
  TextField,
  FormHelperText,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import MKInput from "@/components/MKInput";
import MKButton from "@/components/MKButton";
import { IMaskInput } from "react-imask";
import { useRef, forwardRef } from "react";
import PhoneMask from "./phone-mask";

const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export default function Form() {
  const phoneRef = useRef(null);
  return (
    <div className="min-w-fit max-w-full h-fit">
      <form>
        <Container>
          <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
            <MKBox
              width="100%"
              component="form"
              method="post"
              autoComplete="off"
            >
              <MKBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <FormControl error variant="standard" fullWidth>
                      <InputLabel htmlFor="name">Nome Completo</InputLabel>
                      <Input
                        fullWidth
                        name="name"
                        inputComponent={TextMaskCustom}
                      />
                      <FormHelperText>Error</FormHelperText>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl error variant="standard" fullWidth>
                      <InputLabel htmlFor="phone">Telefone</InputLabel>
                      <Input
                        fullWidth
                        name="phone"
                        inputComponent={TextMaskCustom}
                      />
                      <FormHelperText>Error</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl error variant="standard" fullWidth>
                      <InputLabel htmlFor="phone">Telefone</InputLabel>
                      <Input
                        fullWidth
                        name="phone"
                        inputComponent={TextMaskCustom}
                      />
                      <FormHelperText>Error</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl error variant="standard" fullWidth>
                      <InputLabel htmlFor="phone">Telefone</InputLabel>
                      <Input
                        fullWidth
                        name="phone"
                        inputComponent={TextMaskCustom}
                      />
                      <FormHelperText>Error</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl error variant="standard" fullWidth>
                      <InputLabel htmlFor="phone">Telefone</InputLabel>
                      <Input
                        fullWidth
                        name="phone"
                        inputComponent={TextMaskCustom}
                        rows={6}
                      />
                      <FormHelperText>Error</FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} my={2}>
                  <MKButton
                    href="#"
                    variant="gradient"
                    color={"dark"}
                    fullWidth
                  >
                    Enviar
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </form>
    </div>
  );
}
