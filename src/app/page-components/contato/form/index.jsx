"use client";
import MKBox from "@mui/material/Box";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import { Button } from "@nextui-org/button";
import { IMaskInput } from "react-imask";
import { useState, forwardRef } from "react";
import { requiredField } from "../../../../components/utils/validators";
import axios from "axios";
import { API_URL } from "@/api/constant";
import { PhoneInputMask } from "../../../../components/utils/masks";

const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(00) 0000-0000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export default function Form({ text }) {
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
  const requiredFields = [
    "name",
    "phone",
    "age",
    "email",
    "city",
    "state",
    "message",
  ];
  const [showReqErrors, setShowReqErrors] = useState(false);
  const [showReqSuccess, setShowReqSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: requiredField(e.target.value) });
  }

  function validateAllValues() {
    let newErrors = {};
    let withErrors = false;
    Object.keys(values).forEach((key) => {
      if (requiredFields.includes(key)) {
        let e = requiredField(values[key]);
        if (e) withErrors = true;
        newErrors[key] = e;
      }
    });
    setErrors(newErrors);
    return withErrors;
  }

  async function onSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    const withErrors = validateAllValues();

    if (withErrors) return;
    setIsLoading(true);
    try {
      await axios.post(API_URL + "send-email", values);
      setShowReqSuccess(true);
    } catch {
      setShowReqErrors(true);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="w-full h-fit max-w-4xl">
      {isLoading && (
        <div className="w-screen z-40  h-screen fixed top-0 left-0 flex justify-center items-center">
          <CircularProgress sx={{ color: "#000" }} />
        </div>
      )}
      <Snackbar
        open={showReqSuccess}
        autoHideDuration={6000}
        onClose={() => setShowReqSuccess(false)}
      >
        <MuiAlert
          onClose={() => setShowReqSuccess(false)}
          severity="success"
          sx={{ width: "100%", backgroundColor: "green" }}
          variant="filled"
          elevation={6}
        >
          Email enviado com sucesso!
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={showReqErrors}
        autoHideDuration={6000}
        onClose={() => setShowReqErrors(false)}
      >
        <MuiAlert
          onClose={() => setShowReqErrors(false)}
          severity="error"
          sx={{ width: "100%" }}
          variant="filled"
          elevation={6}
        >
          Ocorreu um erro inesperado. Tentei se comunicar por whatsapp
        </MuiAlert>
      </Snackbar>
      <form className="w-full">
        <MKBox
          width="100%"
          component="form"
          method="post"
          className="px-0"
          autoComplete="off"
        >
          <MKBox>
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
                    inputComponent={PhoneInputMask}
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
                  {isSubmitted && <FormHelperText>{errors.age}</FormHelperText>}
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
                  <InputLabel sx={{ paddingBottom: "2px" }} htmlFor="message">
                    Mensagem
                  </InputLabel>
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
              <Button
                variant="shadow"
                className="w-full bg-back hover:text-main uppercase font-bold text-white"
                onClick={(e) => {
                  onSubmit(e);
                }}
              >
                {text || "Enviar"}
              </Button>
            </Grid>
          </MKBox>
        </MKBox>
      </form>
    </div>
  );
}
