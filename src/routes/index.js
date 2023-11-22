import { Home, SignIn, SignUp } from "../pages";
import { AuthLayout } from "../layouts";

const routers = [
  { path: "/", layout: AuthLayout, component: Home },
  { path: "/sign-in", layout: null, component: SignIn },
  { path: "/sign-up", layout: null, component: SignUp },
];

export { routers };
