import { Link } from "react-scroll";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-primary p-3 fw-bold sticky-top bg-black">
      <div className="container-fluid">
        <a
          className="navbar-brand fs-3 font-kavoon fw-bolder text-decoration-underline"
          href="/"
        >
          My Portfolio
        </a>
        <button
          className="navbar-toggler bg-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon text-light">=</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto justify-content-center align-items-center mx-5">
            {links.map(({ id, link }) => (
              <li key={id} className="nav-item">
                <a className="nav-link  fs-4" href="#!">
                  <Link to={link} smooth duration={300}>
                    {link}
                  </Link>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
