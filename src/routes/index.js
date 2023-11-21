import { Home, SignIn, SignUp } from "../pages";
import { Header, Footer, Layout } from "../layouts";

const routers = [
  { path: "/", layout: Layout, component: Home },
  { path: "/sign-in", layout: null, component: SignIn },
  { path: "/sign-up", layout: null, component: SignUp },
];

export { routers };
