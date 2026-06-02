import profilePic from "../assets/images/profile-pic.jpeg";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-scroll";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const notify = () =>
    toast.success("🦄Download My Resume with GoogleDocs...👏", {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });

  return (
    <div className="container-fluid py-5 my-5" name="Home">
      <div className="container container-custom d-flex flex-wrap flex-md-row flex-column-reverse justify-content-around align-items-center bg-black text-light my-5 py-5">
        <div className="w-50  w100 py-5 px-3 flex">
          <h1 className="display-5 fw-bold mb-4">
            Gokul Gandhi
          </h1>
          <h2 className="fs-3 mb-4">Front-end Web Developer</h2>
          <p className="fs-4 w-100 mb-4 lead">
            I build fast, scalable web applications from the ground up — crafting clean interfaces on the frontend and robust, efficient systems on the backend. With a full-stack mindset, I bridge the gap between design and engineering to deliver seamless digital experiences.<br /><br />
            Whether it's architecting APIs, optimizing database queries, or fine-tuning UI interactions, I care deeply about code quality, performance, and the people who use what I build.
          </p>
          <a
            className="btn btn-primary bt-lg p-2 fs-5 me-5 mb-3"
            href={
              "https://drive.google.com/file/d/1UbNdkYBaBJ0JN_h00lM4W2bHnhESXySR/view?usp=sharing"
            }
            role="button"
            rel="noreferrer"
            target="_blank"
            onClick={notify}
          >
            Download CV
          </a>
          <button
            className="btn btn-group btn-primary btn-lg mb-3"
            type="button"
          >
            <Link to="Portfolio" smooth duration={300}>
              Let's Explore Portfolio
            </Link>
            <span className="color-success">
              <i
                className="bi bi-arrow-right rotate px-2 "
                style={{ color: "#25d366" }}
              ></i>
            </span>
          </button>
        </div>
        <div className="mb-5">
          <img
            className="rounded-pill img-pic"
            src={profilePic}
            alt="Profile_picture"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
