import portfolioProject from "../assets/Portfolio.png";
import bookStoreProject from "../assets/The Book Store.png";
import AddProject from "../Components/AddProject";

export default function MyProjects() {
  return (
    <div id="projects">
      <h1>My Projects</h1>
      <div className="project-cards">
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
      </div>
    </div>
  );
}
