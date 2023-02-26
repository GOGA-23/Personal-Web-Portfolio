const Footer = () => {
  const socialIcons = [
    {
      id: 1,
      style: { backgroundColor: "#dd4b39" },
      icon: <i className="bi bi-google"></i>,
      text: "gokulgandhi2301@gmail.com",
    },
    {
      id: 2,
      style: { backgroundColor: "#0082ca" },
      icon: <i className="bi bi-linkedin"></i>,
      ref: "https://www.linkedin.com/in/gokul-gandhi-v-t-7a8a1a265",
    },
    {
      id: 3,
      style: { backgroundColor: "#333333" },
      icon: <i className="bi bi-github"></i>,
      ref: "https://github.com/GOGA-23",
    },
    {
      id: 4,
      style: { backgroundColor: "#25d366" },
      icon: <i className="bi bi-whatsapp"></i>,
      text: "(+91-75-5020-2301)",
    },
  ];
  return (
    <footer className=" container-fluid mt-auto py-3 bg-black d-flex d-sm-flex  flex-column-reverse justify-content-around align-items-center">
      <div className="p-3 text-center border-top border-primary">
        <span className="text-light fs-5">
          &copy; 2023 Web Portfolio Made With
          <i
            className="bi bi-balloon-heart-fill ms-2"
            style={{ color: "red" }}
          ></i>
        </span>
      </div>
      <div className="d-flex d-sm-flex flex-sm-row flex-column justify-content-around align-items-center ">
        {socialIcons.map(({ id, style, icon, ref, text }) => (
          <>
            <a
              key={id}
              className="btn btn-secondary btn-lg btn-floating rounded-circle m-3"
              href={ref}
              style={style}
              role="button"
            >
              {icon}
            </a>
            <p className="pt-3 text-info">{text}</p>
          </>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
