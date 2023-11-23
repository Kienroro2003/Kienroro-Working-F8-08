import { Home, SignIn, SignUp, Error404 } from "../pages";
import { AuthLayout, Layout } from "../layouts";

const routers = [
  { path: "/", layout: Layout, component: Home },
  { path: "/sign-in", layout: AuthLayout, component: SignIn },
  { path: "/sign-up", layout: AuthLayout, component: SignUp },
  { path: "*", layout: AuthLayout, component: Error404 },
];

export { routers };
