import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/homepage";
import { NotFoundPage } from "./pages/404";
import FeatureTutoron from "./pages/feature_tutoron"; // Import trang FeatureTutoron

const queryClient = new QueryClient();

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true, // Trang mặc định khi truy cập "/"
        element: <LandingPage />,
      },
      {
        path: "feature_tutoron", // Đường dẫn mới cho trang FeatureTutoron
        element: <FeatureTutoron />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routers} />
      <Toaster />
    </QueryClientProvider>
  </StrictMode>
);