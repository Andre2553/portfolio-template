import { Project } from "./Components/Project";
import { ProjectsContainer, ProjectsList } from "./styles";

export function Projects(){
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