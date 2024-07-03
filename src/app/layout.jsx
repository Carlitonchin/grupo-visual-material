import "./globals.css";
import "./professores.css";
import Cart from "@/components/cart";
import { Suspense } from "react";
import FacebookPixel from "@/facebook-pixel";
import CheckOrders from "./orders/check-orders";
import Navbar from "./api-components/general/navbar";
import FooterServer from "./api-components/general/footerServer";
import { GetMetadata } from "./api-components/metadata";
import Providers from "./providers";
import MyNextUIProvider from "./mynextui-provider";
import { fontNormal } from "./fonts";
import AosAnimation from "./aos-animation";
import { useFacebookPixelServer } from "../facebook-pixel/utils.js";

export const metadata = GetMetadata();

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="pt">
        <body className={fontNormal.className + " scroll-smooth"}>
          <AosAnimation />
          <MyNextUIProvider>
            {useFacebookPixelServer() && (
              <Suspense fallback={null}>
                <FacebookPixel />
              </Suspense>
            )}
            <div className="overflow-x-hidden h-fit overflow-y-auto">
              <Navbar />
              {children}
              <Cart />
              <FooterServer />
            </div>
            <Suspense fallback={null}>
              <CheckOrders />
            </Suspense>
          </MyNextUIProvider>
        </body>
      </html>
    </Providers>
  );
}
