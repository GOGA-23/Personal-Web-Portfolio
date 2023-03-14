import MusicApp from "../assets/images/Music-App.png";
import TodoList from "../assets/images/ToDo-List.png";
import WeatherApp from "../assets/images/Weather-App.png";
import Calculator from "../assets/images/calculator.png";
import BlogApp from "../assets/images/Blog-App.png";
import MovieApp from "../assets/images/Rtk-Movie- App.png";
import NotesApp from "../assets/images/Notes-App.png";
import NewsWebsite from "../assets/images/News -Website.png";
import whatsAppClone from "../assets/images/WhatsAppClone.png";
import socialApp from "../assets/images/Social-app.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: MusicApp,
      liveDemo: "https://goga-23.github.io/Music-App",
      sourceCode: "https://github.com/GOGA-23/Music-App",
    },
    {
      id: 2,
      src: TodoList,
      liveDemo: "https://goga-23.github.io/TODO-List-",
      sourceCode: "https://github.com/GOGA-23/TODO-List-",
    },
    {
      id: 3,
      src: WeatherApp,
      liveDemo: "https://goga-23.github.io/Weather-App",
      sourceCode: "https://github.com/GOGA-23/Weather-App",
    },
    {
      id: 4,
      src: Calculator,
      liveDemo: "https://react-simple-calculator.onrender.com",
      sourceCode: "https://github.com/GOGA-23/React-Simple-Calculator",
    },
    {
      id: 5,
      src: BlogApp,
      liveDemo: "https://react-blog-app-e1lk.onrender.com",
      sourceCode: "https://github.com/GOGA-23/React-Blog-App",
    },
    {
      id: 6,
      src: MovieApp,
      liveDemo: "https://goga-23.github.io/RTK-Movie-List/",
      sourceCode: "https://github.com/GOGA-23/RTK-Movie-List",
    },
    {
      id: 7,
      src: NewsWebsite,
      liveDemo: "https://news-website-xtcr.onrender.com",
      sourceCode: "https://github.com/GOGA-23/NEWS-Website",
    },
    {
      id: 8,
      src: NotesApp,
      liveDemo: "https://notes-app-xs9e.onrender.com",
      sourceCode: "https://github.com/GOGA-23/Notes-App",
    },
    {
      id: 9,
      src: whatsAppClone,
      liveDemo: "https://whats-app-clone-pz3r.onrender.com",
      sourceCode: "https://github.com/GOGA-23/Whats-app-clone",
    },
    {
      id: 10,
      src: socialApp,
      liveDemo: "https://mern-social-app-v5vd.onrender.com",
      sourceCode: "https://github.com/GOGA-23/Social-App",
    },
  ];
  return (
    <div name="Portfolio" className="container-fluid  py-4">
      <div className="container text-light  py-5">
        <h3 className="text-decoration-underline font-slab text-center display-5">
          Portfolio
        </h3>
        <p className="mb-1 fs-3">Check out my Micro & Major Projects</p>
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-5 p-4 ">
          {portfolio.map(({ id, src, liveDemo, sourceCode }) => (
            <div
              key={id}
              className=" border-top-0 border-2 border-primary rounded-2 box "
            >
              <img
                src={src}
                className="img-portfolio p-3 card-effect"
                alt="Project-Images"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Stack Projects"
              />
              <hr className=" mx-4 text-primary" />
              <a
                className="btn btn-primary btn-sm mb-3 ms-4"
                href={liveDemo}
                role="button"
              >
                Live Demo
              </a>
              <a
                className="btn btn-primary btn-sm  mb-3 ms-5"
                href={sourceCode}
                role="button"
              >
                Source Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
