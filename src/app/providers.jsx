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
