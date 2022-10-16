import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import FoodOrder from "./pages/foodOrder/FoodOrder";
import RootLayout from "./utils/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="food-order" element={<FoodOrder />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
