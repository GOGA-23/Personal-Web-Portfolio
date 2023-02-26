import profilePic from "../assets/images/profile-pic.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-scroll";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const notify = () =>
    toast.success("🦄Downloaded Successfully...👏", {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });

  return (
    <div className="container-fluid py-5 my-5" name="Home">
      <div className="container container-custom d-flex flex-wrap flex-md-row flex-column-reverse justify-content-around align-items-center bg-black text-light my-5 py-5">
        <div className="w-50  w100 py-5 px-3 flex">
          <h1 className="display-5 fw-bold mb-4">
            I'M FULL STACK WEB DEVELOPER
          </h1>
          <p className="fs-4 w-100 mb-4 lead">
            Quality-conscious and detail-oriented web developer with experience
            in QA/QC and Draftsman. Passionate about creating user experiences
            that engage, inform, and inspire. Always strive for the best results
            and now looking to apply my interpersonal skills as a front-end web
            developer.
          </p>
          <a
            className="btn btn-primary bt-lg p-2 fs-5 me-5 mb-3"
            href="../assets/images/node.png"
            role="button"
            download
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
