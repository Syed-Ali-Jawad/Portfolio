import portfolioProject from "../assets/Portfolio.png";
import bookStoreProject from "../assets/The Book Store.png";
import AddProject from "../Components/AddProject";
import todoProject from "../assets/TodoListProject.png";
import traliveProject from "../assets/Tralive project.png";
import mediPlusProject from "../assets/MediPlus.png";

export default function MyProjects() {
  return (
    <div id="projects">
      <h1>My Projects</h1>
      <div className="project-cards">
        <AddProject
          image={todoProject}
          title="Todo List"
          description="A todo list where you can see statuses of you added tasks, view time left for the task, add an image related to the task."
        />
        <AddProject
          image={bookStoreProject}
          title="The Book Store"
          description="A e-commerce store having roles of buyers, sellers and admin. Buyers and sellers can make account for book purcahse and sell while admin can view the book sold by date"
        />

        <AddProject
          image={portfolioProject}
          title="Portfolio"
          description="A running portfolio of mine."
        />
        <AddProject
          image={traliveProject}
          title="Tralive"
          description="Landing Page inspired by Tralive ColarLib theme developed on pure HTML CSS"
          projectURL="https://syed-ali-jawad.github.io/Tralive-Project/"
        />
        <AddProject
          image={mediPlusProject}
          title="MediPlus"
          description="Landing Page inspired by Tralive ColarLib theme developed using TailwindCSS, HTML and JavaScript"
          projectURL="https://syed-ali-jawad.github.io/MediPlus/"
        />
      </div>
    </div>
  );
}
