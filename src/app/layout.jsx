import "./globals.css";
import "./professores.css";
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import Cart from "@/components/cart";
import { CartProvider } from "./hooks/cart";
import { Suspense } from "react";
import FacebookPixel from "@/facebook-pixel";
import { ReactPixelProvider } from "./hooks/reactPixel";
import CheckOrders from "./orders/check-orders";
import { OrderProvider } from "./hooks/order";
import Navbar from "./api-components/general/navbar";
import FooterServer from "./api-components/general/footerServer";
import { GetMetadata } from "./api-components/metadata";

export const metadata = GetMetadata();

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
                  <Navbar />
                  {children}
                  <Cart />
                  <FooterServer />
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
