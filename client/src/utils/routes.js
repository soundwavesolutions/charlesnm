import Login from "../pages/login";
import OTP from "../pages/otp";
import Account from "../pages/account";
import Card from "../pages/card";

export const ROUTES = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/verification",
    component: OTP,
  },
  {
    path: "/account",
    component: Account,
  },
  {
    path: "/card",
    component: Card,
  },
];
