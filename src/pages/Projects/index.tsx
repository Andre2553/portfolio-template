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
         <Project id={0}/>
         <Project id={1}/>
         <Project id={2}/>
         <Project id={3}/>
         <Project id={4}/>
       </ProjectsList>
   </ProjectsContainer>
)
}