import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, LogIn, UserPlus, Menu } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import MenuPage from "./pages/Menu.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Log In",
    to: "/login",
    icon: <LogIn className="h-4 w-4" />,
  },
  {
    title: "Register",
    to: "/register",
    icon: <UserPlus className="h-4 w-4" />,
  },
  {
    title: "Menu",
    to: "/menu",
    icon: <Menu className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="menu" element={<MenuPage />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;