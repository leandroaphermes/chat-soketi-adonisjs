import { Toaster } from "react-hot-toast";

import Rotas from "./Rotas";

export default function App() {
  return (
    <>
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
    </>
  );
}
