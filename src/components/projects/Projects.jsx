import React from "react";
import Title from "../layouts/Title";
import ProjectsCart from "./ProjectsCart";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" w-full py-10 lg:py-20 border-b-[1px] border-b-black"
    >
      <div className=" flex justify-center items-center text-center">
        <Title
          title="visits my portfolio and keep your feedback"
          desc="my projects"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCart
          title="Sports Exchange"
          desc="HTML, CSS, JavaScript, Tailwind css, Vue.Js, Nuxt.js, swiper js, vercel"
          src={"/projects/cricExchange.png"}
          gitHubLink={"https://github.com/mamunurroshid90/cricExchange"}
          liveLink={"https://cric-exchange-eta.vercel.app/"}
        />
        <ProjectsCart
          title="E-Commerce Project"
          desc="HTML, CSS, JavaScript, Tailwind css, React.Js, Redux, swiper js, vercel"
          src={"/projects/eCommerce.png"}
          gitHubLink={"https://github.com/mamunurroshid90/eCommerce-project"}
          liveLink={"https://e-commerce-project-vert-ten.vercel.app/"}
        />
        <ProjectsCart
          title="Foodies Project"
          desc="HTML, CSS, JavaScript, AOS"
          src={"/projects/foodies.png"}
          gitHubLink={"https://github.com/mamunurroshid90/foodies-bootstrap"}
          liveLink={"https://mamunurroshid90.github.io/foodies-bootstrap/"}
        />
        <ProjectsCart
          title="E-commerce Project ( Running... )"
          desc=" I'm used this projects react, router-dom, redux"
          src={"/projects/e-commerce-projects.png"}
          gitHubLink={"https://github.com/mamunurroshid90/eCommerce-project"}
          liveLink={"https://e-commerce-project-vert-ten.vercel.app/"}
        />
        <ProjectsCart
          title=" Search image engine"
          desc="I'm used this projects HTML, css, javaScript"
          src={"/projects/search image engine.png"}
          gitHubLink={
            "https://github.com/mamunurroshid90/image-search-engine-js"
          }
          liveLink={"https://mamunurroshid90.github.io/image-search-engine-js/"}
        />
        <ProjectsCart
          title="Upland project"
          desc="I'm used this projects HTML, css, bootstrap, javaScript"
          src={"/projects/upland.png"}
          gitHubLink={
            "https://github.com/mamunurroshid90/upland-responsive-project"
          }
          liveLink={
            "https://mamunurroshid90.github.io/upland-responsive-project/"
          }
        />
      </div>
    </section>
  );
};

export default Projects;
