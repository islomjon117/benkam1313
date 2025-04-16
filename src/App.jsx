
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import Servisespg from "./components/servisesPage/Servisespg";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/servises" element={<Servisespg/>}/>
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
