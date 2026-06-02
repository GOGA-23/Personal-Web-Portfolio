import MusicApp from "../assets/images/Music-App.png";
import NotesApp from "../assets/images/Notes-App.png";
import whatsAppClone from "../assets/images/WhatsAppClone.png";
import watABurger from "../assets/images/watABurger.png";
import ggLab from "../assets/images/gglab.png"
import vbcc from "../assets/images/vbcc.png"
import oneUs from "../assets/images/oneUS.png"

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: ggLab,
      liveDemo: "https://gg-lab.vercel.app/",
      sourceCode: "https://github.com/GOGA-23/GG_Lab",
    },
    {
      id: 2,
      src: vbcc,
      liveDemo: "https://vbccinstruments.com",
      sourceCode: "https://github.com/prithvi60/Vbcc",
    },
    {
      id: 3,
      src: oneUs,
      liveDemo: "https://chat-app-82d23.web.app",
      sourceCode: "https://oneus-travels.vercel.app",
    },
    {
      id: 4,
      src: MusicApp,
      liveDemo: "https://goga-23.github.io/Music-App",
      sourceCode: "https://github.com/GOGA-23/Music-App",
    },
    {
      id: 5,
      src: NotesApp,
      liveDemo: "https://notes-app-xs9e.onrender.com",
      sourceCode: "https://github.com/GOGA-23/Notes-App",
    },
    {
      id: 6,
      src: whatsAppClone,
      liveDemo: "https://chat-app-82d23.web.app",
      sourceCode: "https://github.com/GOGA-23/RealTime-chat-app",
    },
    {
      id: 7,
      src: watABurger,
      liveDemo: "https://wat-a-burger.onrender.com",
      sourceCode: "https://github.com/GOGA-23/WAT-A-BURGER-Website-Clone.git",
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
                target="_blank"
                rel="noreferrer"
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
