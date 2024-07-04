import portfolioProject from "../assets/Portfolio.png";
import bookStoreProject from "../assets/The Book Store.png";
import AddProject from "../Components/AddProject";
import todoProject from "../assets/TodoListProject.png";
import traliveProject from "../assets/Tralive project.png";
import mediPlusProject from "../assets/MediPlus.png";
import expenseEaseProject from "../assets/ExpenseEase.png";

export default function MyProjects() {
  return (
    <div id="projects">
      <h1>My Projects</h1>
      <div className="project-cards">
        <AddProject
          image={expenseEaseProject}
          title="ExpenseEase"
          description="ExpenseEase is a comprehensive expense and income tracking application. It allows users to add and manage expenses across various categories, and incomes from different sources and accounts. The application visualizes financial data through interactive line charts, pie charts, and detailed tables, enabling users to easily track and analyze their financial activities."
          projectURL="https://syed-ali-jawad.github.io/ExpenseEase/"
        />
        <AddProject
          image={mediPlusProject}
          title="MediPlus"
          description="Landing Page inspired by Tralive ColarLib theme developed using TailwindCSS, HTML and JavaScript"
          projectURL="https://syed-ali-jawad.github.io/MediPlus/"
        />
        <AddProject
          image={traliveProject}
          title="Tralive"
          description="Landing Page inspired by Tralive ColarLib theme developed on pure HTML CSS"
          projectURL="https://syed-ali-jawad.github.io/Tralive-Project/"
        />
        <AddProject
          image={portfolioProject}
          title="Portfolio"
          description="A portfolio showcasing my projects and skills, with contact information available."
        />
        <AddProject
          image={bookStoreProject}
          title="The Book Store"
          description="An e-commerce platform with roles for buyers, sellers, and admin. Buyers and sellers can create accounts to purchase and sell books, while the admin can track book sales by date."
        />
        <AddProject
          image={todoProject}
          title="Todo List"
          description="A todo list application that allows users to track task statuses, monitor deadlines with countdown timers, and attach images relevant to each task."
        />
      </div>
    </div>
  );
}
