"use client";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import MKBox from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import { requiredField, validateEmail } from "@/components/utils/validators";
import { API_URL } from "@/api/constant";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";
import axios from "axios";
import { useReactPixel } from "@/app/hooks/reactPixel";
import { initiateCheckout } from "@/facebook-pixel/utils";
import { useOrder } from "@/app/hooks/order";

export default function BuyForm({ courses, handleClose, isCart }) {
  const { reactPixel } = useReactPixel();
  const { setOrderCart, setOrderEnroll } = useOrder();
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

    if (withErrors) return;
    setIsLoading(true);
    try {
      const resp = await axios.post(API_URL + "buy-courses", {
        customer: values,
        courses,
      });

      const checkout_url = resp.data.checkouts[0].payment_url;
      if (!checkout_url) throw new Error("error");
      if (isCart) {
        setOrderCart(resp.data.id, courses);
      } else {
        setOrderEnroll(resp.data.id, courses);
      }
      initiateCheckout(reactPixel, courses, values, resp.data.id);
      //document.location.href = checkout_url;
      window.open(checkout_url, "_blank");
      handleClose();
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
          <CircularProgress sx={{ color: "#000" }} />
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
            <span className="text-center text-xl sm:text-start font-bold mt-2 ">
              Informe seus dados
            </span>
            <Grid container spacing={1.5} mt={0.5}>
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
                <Button
                  variant="shadow"
                  className="w-full bg-black text-white uppercase font-bold"
                  onClick={(e) => {
                    onSubmit(e);
                  }}
                >
                  Realizar Pagamento
                </Button>
              </Grid>
            </Grid>
          </MKBox>
        </MKBox>
      </form>
    </>
  );
}
