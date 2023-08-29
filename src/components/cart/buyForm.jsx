"use client";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import MKButton from "@/components/MKButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import MKBox from "@/components/MKBox";
import Snackbar from "@mui/material/Snackbar";
import { requiredField, validateEmail } from "@/components/utils/validators";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";

export default function BuyForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const requiredFields = ["name", "email"];

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  async function onSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    const withErrors = validateAllValues();
    console.log(withErrors);
    if (withErrors) return;
    setIsLoading(true);
    try {
    } catch {
      setShowReqErrors(true);
    } finally {
      setIsLoading(false);
    }
  }

  const [showReqErrors, setShowReqErrors] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
    let error = requiredField(e.target.value);
    if (!error && e.target.name == "email")
      error = validateEmail(e.target.value);

    console.log(error);
    setErrors({ ...errors, [e.target.name]: error });
  }

  function validateAllValues() {
    let newErrors = {};
    let withErrors = false;
    Object.keys(values).forEach((key) => {
      let e = "";
      if (requiredFields.includes(key)) {
        e = requiredField(values[key]);
      }
      if (!e && key == "email") {
        e = validateEmail(values[key]);
      }

      if (e) withErrors = true;
      newErrors[key] = e;
    });
    setErrors(newErrors);
    return withErrors;
  }
  return (
    <>
      {isLoading && (
        <div className="w-screen z-40  h-screen fixed top-0 left-0 flex justify-center items-center">
          <CircularProgress sx={{ color: colors.dark.main }} />
        </div>
      )}

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
          Ocorreu um erro inesperado, comunique-se com nossa equipe
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
            <Typography
              className="text-center sm:text-start font-bold"
              gutterBottom
              mb={2}
            >
              Informe seus dados
            </Typography>
            <Grid container spacing={1.5}>
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
              <Grid item xs={12}>
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
              <Grid container item justifyContent="center" xs={12} mt={4}>
                <MKButton
                  href="#"
                  variant="gradient"
                  color={"dark"}
                  fullWidth
                  onClick={(e) => {
                    onSubmit(e);
                  }}
                >
                  Realizar Pagamento
                </MKButton>
              </Grid>
            </Grid>
          </MKBox>
        </MKBox>
      </form>
    </>
  );
}
