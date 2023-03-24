import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import VerifyEmail from "../auth/VerifyEmail";
import Dashboard from "../pages/admin/Dashboard";
import About from "../pages/main/about";
import AstroProfile from "../pages/main/astroProfile";
import Blog from "../pages/main/blog";
import Contact from "../pages/main/contact";
import Err from "../pages/main/err";
import Home from "../pages/main/home";
import Landing from "../pages/main/landing";
import Aspects from "../pages/main/learn/aspects";
import Houses from "../pages/main/learn/houses";
import HouseSystems from "../pages/main/learn/houseSystems";
import NatalChar from "../pages/main/learn/natalChar";
import RisingSign from "../pages/main/learn/risingSign";
import TransitsOrbs from "../pages/main/learn/transitsOrbs";
import WhatIsAstrology from "../pages/main/learn/whatIsAstrology";
import ZodiacSunSigns from "../pages/main/learn/zodiacSunSigns";
import Pricing from "../pages/main/pricing";
import Services from "../pages/main/services";

export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/landing",
    exact: true,
    Component: Landing,
  },
  {
    path: "/pricing",
    exact: true,
    Component: Pricing,
  },
  {
    path: "/self",
    exact: true,
    Component: Services,
  },
  {
    path: "/contact",
    exact: true,
    Component: Contact,
  },
  {
    path: "/blog",
    exact: true,
    Component: Blog,
  },
  {
    path: "/about",
    exact: true,
    Component: About,
  },
  {
    path: "/what-is-astrology",
    exact: true,
    Component: WhatIsAstrology,
  },
  {
    path: "/natal-char",
    exact: true,
    Component: NatalChar,
  },
  {
    path: "/zodiac-sun-signs",
    exact: true,
    Component: ZodiacSunSigns,
  },
  {
    path: "/rising-sign",
    exact: true,
    Component: RisingSign,
  },
  {
    path: "/houses",
    exact: true,
    Component: Houses,
  },
  {
    path: "/house-systems",
    exact: true,
    Component: HouseSystems,
  },
  {
    path: "/aspects",
    exact: true,
    Component: Aspects,
  },
  {
    path: "/transits-orbs",
    exact: true,
    Component: TransitsOrbs,
  },
  {
    path: "/login",
    exact: true,
    Component: Login,
  },
  {
    path: "/register",
    exact: true,
    Component: SignUp,
  },
  {
    path: "/verify-email",
    exact: true,
    Component: VerifyEmail,
  },
  {
    path: "/astroProfile",
    exact: true,
    Component: AstroProfile,
  },
  // {
  //   path: "/dashboard",
  //   exact: true,
  //   Component: Dashboard,
  // },
  {
    Component: Err,
  },
];
export const signRouter = [
  {
    path: "/login",
    exact: false,
    Component: Login,
  },
  {
    path: "/register",
    exact: false,
    Component: SignUp,
  },
];
export const adminRouter = [
  {
    path: "/dashboard",
    exact: true,
    Component: Dashboard,
  },
];
