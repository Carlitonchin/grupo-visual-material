"use client";
import MKBox from "@/components/MKBox";
import {
  Container,
  Grid,
  FormControl,
  InputLabel,
  Input,
  TextareaAutosize,
  FormHelperText,
} from "@mui/material";
import MKButton from "@/components/MKButton";
import { IMaskInput } from "react-imask";
import { useState, forwardRef } from "react";
import { requiredField } from "./validators";

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
  const [values, setValues] = useState({
    name: "",
    phone: "",
    age: "",
    course: "",
    email: "",
    city: "",
    state: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    age: "",
    course: "",
    email: "",
    city: "",
    state: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: requiredField(e.target.value) });
  }

  function validateAllValues() {
    let newErrors = {};
    Object.keys(values).forEach((key) => {
      newErrors[key] = requiredField(values[key]);
    });
    setErrors(newErrors);
  }
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
                    <FormControl
                      error={Boolean(isSubmitted && errors.name)}
                      variant="standard"
                      fullWidth
                    >
                      <InputLabel htmlFor="name">Nome Completo</InputLabel>
                      <Input fullWidth name="name" onChange={handleChange} />
                      {isSubmitted && (
                        <FormHelperText>{errors.name}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl
                      error={Boolean(isSubmitted && errors.phone)}
                      variant="standard"
                      fullWidth
                    >
                      <InputLabel htmlFor="phone">Telefone</InputLabel>
                      <Input
                        fullWidth
                        name="phone"
                        onChange={handleChange}
                        inputComponent={TextMaskCustom}
                      />
                      {isSubmitted && (
                        <FormHelperText>{errors.phone}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      error={Boolean(isSubmitted && errors.age)}
                      variant="standard"
                      fullWidth
                    >
                      <InputLabel htmlFor="age">Idade</InputLabel>
                      <Input
                        fullWidth
                        name="age"
                        type="number"
                        onChange={handleChange}
                      />
                      {isSubmitted && (
                        <FormHelperText>{errors.age}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      error={Boolean(isSubmitted && errors.course)}
                      variant="standard"
                      fullWidth
                    >
                      <InputLabel htmlFor="course">Curso</InputLabel>
                      <Input fullWidth name="course" onChange={handleChange} />
                      {isSubmitted && (
                        <FormHelperText>{errors.course}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      error={Boolean(isSubmitted && errors.email)}
                      variant="standard"
                      fullWidth
                    >
                      <InputLabel htmlFor="email">Email</InputLabel>
                      <Input
                        fullWidth
                        type="email"
                        name="email"
                        onChange={handleChange}
                      />
                      {isSubmitted && (
                        <FormHelperText>{errors.email}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      error={Boolean(isSubmitted && errors.city)}
                      variant="standard"
                      fullWidth
                    >
                      <InputLabel htmlFor="city">Cidade</InputLabel>
                      <Input fullWidth name="city" onChange={handleChange} />
                      {isSubmitted && (
                        <FormHelperText>{errors.city}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      error={Boolean(isSubmitted && errors.state)}
                      variant="standard"
                      fullWidth
                    >
                      <InputLabel htmlFor="state">Estado</InputLabel>
                      <Input fullWidth name="state" onChange={handleChange} />
                      {isSubmitted && (
                        <FormHelperText>{errors.state}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      error={Boolean(isSubmitted && errors.message)}
                      variant="standard"
                      fullWidth
                    >
                      <InputLabel htmlFor="message">Mensagem</InputLabel>
                      <Input
                        fullWidth
                        name="message"
                        rows={6}
                        multiline
                        onChange={handleChange}
                      />
                      {isSubmitted && (
                        <FormHelperText>{errors.message}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} my={2}>
                  <MKButton
                    href="#"
                    variant="gradient"
                    color={"dark"}
                    fullWidth
                    onClick={() => {
                      validateAllValues();
                      setIsSubmitted(true);
                    }}
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
