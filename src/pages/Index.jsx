import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-32 h-32" />
      <div className="space-x-4">
        <Button onClick={() => navigate("/login")}>Log In</Button>
        <Button onClick={() => navigate("/register")}>Register</Button>
      </div>
      <Button onClick={() => navigate("/menu")} className="mt-4">View Menu</Button>
    </div>
  );
};

export default Index;