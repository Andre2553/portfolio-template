import { useLayoutEffect } from "react";
import { Project } from "./Components/Project";
import { ProjectsContainer, ProjectsList } from "./styles";

export function Projects(){
  useLayoutEffect(()=>{
    window.scrollTo(0,0)
  })
return (
   <ProjectsContainer>
       <ProjectsList>
         <Project/>
         <Project/>
         <Project/>
         <Project/>
         <Project/>
       </ProjectsList>
   </ProjectsContainer>
)
}