import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

const Login = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Iniciar Sesión</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingrese su correo electrónico" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Ingrese su contraseña" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between items-center">
                <Link to="/recover-password" className="text-sm text-muted-foreground hover:text-foreground">
                  ¿Olvidaste tu contraseña?
                </Link>
                <Link to="/register" className="text-sm text-muted-foreground hover:text-foreground">
                  ¿No tienes una cuenta? Regístrate
                </Link>
              </div>
              <Button type="submit" className="w-full">Iniciar Sesión</Button>
              <div className="flex items-center justify-center space-x-2 mt-4">
                <span className="text-muted-foreground">0</span>
              </div>
              <Button className="w-full bg-blue-800">Iniciar Sesión con Facebook</Button>
              <Button className="w-full bg-white text-black border">Iniciar Sesión con Google</Button>
              <Button className="w-full bg-black">Iniciar Sesión con Apple</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;