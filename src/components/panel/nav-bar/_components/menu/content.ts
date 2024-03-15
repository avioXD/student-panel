interface Option {
  name: string;
  path: string;
  matcher: string;
}

export const options: Option[] = [
  {
    name: "Home",
    path: "/",
    matcher: "/landing",
  },
  {
    name: "Learning Path",
    path: "/learning-path",
    matcher: "/learning-path",
  },
  {
    name: "Subscription & Plans",
    path: "/subscription-plans",
    matcher: "/subscription-plans",
  },
  {
    name: "About us",
    path: "/about-us",
    matcher: "/about-us",
  },
];
