import Html from "../assets/images/html.png";
import Css from "../assets/images/css.png";
import Js from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import Node from "../assets/images/node.png";
import Express from "../assets/images/express-js-icon.png";
import mongodb from "../assets/images/mongodb.png";
import Github from "../assets/images/github.png";

const Experience = () => {
  const skills = [
    {
      id: 1,
      title: "HTML",
      src: Html,
      styleBox: { boxShadow: "0.1rem 0 0.5rem rgb(233, 98, 40)" },
    },
    {
      id: 2,
      title: "CSS",
      src: Css,
      styleBox: { boxShadow: "0.1rem 0 0.5rem rgb(2, 46, 142, 1)" },
    },
    {
      id: 3,
      title: "Javascript",
      src: Js,
      styleBox: { boxShadow: "0.1rem 0 0.5rem rgb(239,216,28)" },
    },
    {
      id: 4,
      title: "React",
      src: react,
      styleBox: { boxShadow: "0.1rem 0 0.5rem rgb(2, 46, 142, 1)" },
    },
    {
      id: 5,
      title: "Node js",
      src: Node,
      styleBox: { boxShadow: "0.1rem 0 0.5rem rgb(75, 161, 62)" },
    },
    {
      id: 6,
      title: "Express",
      src: Express,
      styleBox: { boxShadow: "0.1rem 0 0.5rem rgb(255, 255, 255)" },
    },
    {
      id: 7,
      title: "MongoDB",
      src: mongodb,
      styleBox: { boxShadow: "0.1rem 0.2rem 0.5rem rgb(75, 161, 62)" },
    },
    {
      id: 8,
      title: "Github",
      src: Github,
      styleBox: { boxShadow: "0.1rem 0 0.5rem rgb(255, 255, 255)" },
    },
  ];
  return (
    <div name="Experience" className="container-fluid text-light py-5">
      <h3 className="text-center display-5 font-slab text-decoration-underline py-4">
        Experience
      </h3>
      <p className="container mb-5 fs-3">
        These are the technologies I've worked with
      </p>
      <div className="container d-flex justify-content-around align-items-center flex-wrap  mb-3 w-75">
        {skills.map(({ id, title, src, styleBox }) => (
          <div
            key={id}
            className="rounded rounded-2 box py-2 px-4 mb-5 "
            style={styleBox}
          >
            <img
              className="img-size bg-dark rounded-3 card-effect"
              src={src}
              alt="Skill"
            />
            <hr />
            <p className="text-capitalize text-center font-slab fw-bolder fs-4">
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
