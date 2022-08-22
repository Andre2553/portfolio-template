import { Project } from "./Components/Project";
import { ProjectsContainer, ProjectsList } from "./styles";

export function Projects(){
return (
   <ProjectsContainer>
       <h1>Projects</h1>
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