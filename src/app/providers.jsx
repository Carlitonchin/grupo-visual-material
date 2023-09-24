import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import { CartProvider } from "./hooks/cart";
import { ReactPixelProvider } from "./hooks/reactPixel";
import { OrderProvider } from "./hooks/order";

export default function Providers({ children }) {
  return (
    <ReactPixelProvider>
      <CartProvider>
        <OrderProvider>{children}</OrderProvider>
      </CartProvider>
    </ReactPixelProvider>
  );
}
