import { motion, useScroll } from "framer-motion";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { CustomScroll, LayoutContainer } from "./styles";

export function DefaultLayout() {
  const { scrollYProgress } = useScroll();
  return (
    <LayoutContainer>
      
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
