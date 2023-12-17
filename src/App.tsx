import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

function App() {
  const router = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/checkout",
      element: <Checkout/>
    }
  ]);

  return router;
}

export default App;
