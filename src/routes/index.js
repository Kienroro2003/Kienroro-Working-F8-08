import { Home, SignIn, SignUp } from "../pages";
import { AuthLayout, Layout } from "../layouts";
import FilterInputRange from "../components/FilterInputRange";

const routers = [
  { path: "/", layout: Layout, component: Home },
  { path: "/sign-in", layout: AuthLayout, component: SignIn },
  { path: "/sign-up", layout: AuthLayout, component: SignUp },
  { path: "/range", layout: AuthLayout, component: FilterInputRange },
];

export { routers };
