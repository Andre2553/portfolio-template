import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ProjectContainer } from "./styles";

const boxVariant = {
   visible: { opacity: 1, scale: 1,x:0, transition: { duration: 0.5 } },
   hidden: { opacity: 0, scale: 0.8, x:-200 }
 };
export function Project(){
   const control = useAnimation();
   const [ref, inView] = useInView();
 
   useEffect(() => {
     if (inView) {
       control.start("visible");
     } else {
       control.start("hidden");
     }
   }, [control, inView]);


return (
   <ProjectContainer ref={ref} animate={control} initial="hidden" variants={boxVariant}>
         
   </ProjectContainer>
)
}