import { SessionProvider } from "hooks/useSession";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Rotas from "./Rotas";

export default function App() {
  return (
    <BrowserRouter>
      <SessionProvider>
        <Rotas />
        <Toaster
          toastOptions={{
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </SessionProvider>
    </BrowserRouter>
  );
}
