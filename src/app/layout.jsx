import "./globals.css";
import "./professores.css";
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import DefaultNavbar from "@/components/examples/Navbars/DefaultNavbar";
import { routes } from "@/api/routes";
import Footer from "../components/footer";
import Cart from "@/components/cart";
import { CartProvider } from "./hooks/cart";
import { Suspense } from "react";
import FacebookPixel from "@/facebook-pixel";
import { ReactPixelProvider } from "./hooks/reactPixel";
import CheckOrders from "./orders/check-orders";
import { OrderProvider } from "./hooks/order";

export const metadata = {
  title: "Grupo Visual | Formações Profissionais",
  description:
    "O Grupo Visual é uma instituição de cursos profissionalizantes com uma vasta experiência na área de treinamentos e nos mais variados cursos.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ReactPixelProvider>
      <CartProvider>
        <OrderProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <html lang="pt">
              <body>
                <Suspense fallback={null}>
                  <FacebookPixel />
                </Suspense>
                <div className="overflow-x-hidden h-fit overflow-y-auto">
                  <DefaultNavbar
                    routes={routes}
                    brand={"Grupo Visual"}
                    action={{
                      type: "external",
                      route: "https://www.gpvisualead.com.br/login",
                      label: "Área do Aluno",
                      color: "white",
                    }}
                    light
                    sticky
                  />
                  {children}
                  <Cart />

                  <Footer />
                </div>
                <Suspense fallback={null}>
                  <CheckOrders />
                </Suspense>
              </body>
            </html>
          </ThemeProvider>
        </OrderProvider>
      </CartProvider>
    </ReactPixelProvider>
  );
}
