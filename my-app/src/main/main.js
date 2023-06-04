import NavBar from "./components/NavBar/navbar.js";
import AboutMe from "./components/AboutMe/about-me.js";
import ProjectList from "./components/ProjectList/project-list.js";
import "./style.css";
const MainPage = () => {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <div className="introduce-box">
        <AboutMe />
        <ProjectList />
        </div>
      </div>{" "}
    </>
  );
};

export default MainPage;
