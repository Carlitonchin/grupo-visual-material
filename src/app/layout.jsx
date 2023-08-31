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
    <CartProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <html lang="pt">
          <body>
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
          </body>
        </html>
      </ThemeProvider>
    </CartProvider>
  );
}
