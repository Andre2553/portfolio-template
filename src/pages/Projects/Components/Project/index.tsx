import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ProjectContainer } from "./styles";

const boxVariant = {
   visible: { opacity: 1, scale: 1,x:0, transition: { duration: 0.5 } },
   hidden: { opacity: 0, scale: 0.8, x:-200 }
 };

 const boxVariantToLeft = {
  visible: { opacity: 1, scale: 1,x:0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.8, x:80 }
};
 interface Project {
    id: number;
 }
export function Project(props:Project){
  const variant = props.id % 2 === 0 ? boxVariant : boxVariantToLeft;
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
   <ProjectContainer ref={ref} animate={control} initial="hidden" variants={variant}>
         
   </ProjectContainer>
)
}