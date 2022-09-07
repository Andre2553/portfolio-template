import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { AboutMe } from "./pages/AboutMe";
import { ContactMe } from "./pages/ContactMe";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";

export function Router() {
   return (
      <Routes>
         <Route path="/" element={<DefaultLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contact-me" element={<ContactMe />} />
            <Route path="*" element={<Home/>} />

         </Route>
      </Routes>
   );
}