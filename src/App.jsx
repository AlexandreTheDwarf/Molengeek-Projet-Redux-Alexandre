import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Resume from './pages/Resume/Resume';
import NotFound from './pages/NotFound/NotFound';
import Catalogue from './pages/Catalogue/Catalogue';
import Dweghom from './pages/Factions/Dweghom/Dweghom'; 
import HundredKingdoms from './pages/Factions/HundredKingdoms/HundredKingdoms'; 
import Wadrhun from './pages/Factions/Wardrhun/Wardrhun'; 

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/catalogue", element: <Catalogue /> },
    { path: "/cart", element: <ShoppingCart /> },
    { path: "/resume", element: <Resume /> },
    { path: "/factions/dweghom", element: <Dweghom /> }, // Route pour Dweghom
    { path: "/factions/hundred-kingdoms", element: <HundredKingdoms /> }, // Route pour Hundred Kingdoms
    { path: "/factions/wadrhun", element: <Wadrhun /> }, // Route pour W'adrhun
    { path: "*", element: <NotFound /> }
  ], {
    basename: "/"
  });

  return (
    <RouterProvider router={router} />
  );
}

export default App;
