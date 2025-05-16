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
          title="Supabase Chatting App"
          desc="JavaScript, React.Js, Supabase, Google Cloud Storage, Tailwind css, vercel"
          src={"/projects/supabase-chat-app.jpg"}
          gitHubLink={
            "https://github.com/mamunurroshid90/supabase-chatting-app"
          }
          liveLink={"https://supabase-chatting-app.vercel.app/"}
        />
        <ProjectsCart
          title="Foodies Project"
          desc="HTML, CSS, JavaScript, AOS"
          src={"/projects/foodies.png"}
          gitHubLink={"https://github.com/mamunurroshid90/foodies-bootstrap"}
          liveLink={"https://mamunurroshid90.github.io/foodies-bootstrap/"}
        />
        <ProjectsCart
          title="Portfolio Template"
          desc=" HTML, CSS, JavaScript, jQuery"
          src={"/projects/portfolio-temp.png"}
          gitHubLink={"https://github.com/mamunurroshid90/jQuery-project"}
          liveLink={"https://mamunurroshid90.github.io/jQuery-project/"}
        />
        <ProjectsCart
          title="Todo App"
          desc="HTML,  Tailwind css, JavaScript, React.Js, Redux, React Router, local storage, netlify"
          src={"/projects/to-do-app.png"}
          gitHubLink={"https://github.com/mamunurroshid90/add-to-note-app"}
          liveLink={"https://add-to-note-app.netlify.app/"}
        />
      </div>
    </section>
  );
};

export default Projects;
