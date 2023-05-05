import { TodoProvider } from "@/context/todoContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Component {...pageProps} />
    </TodoProvider>
  );
}
