import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const notify = () =>
    toast.success("Submitted Successfully...👏", {
      theme: "colored",
    });

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="container text-light d-flex flex-column justify-content-center align-items-center mb-5"
      name="Contact"
    >
      <h3 className="text-decoration-underline font-slab display-5 mb-4">
        Contact Me
      </h3>
      <p className="ms-4 fs-3 ">You could reach me by submitting this form</p>
      <form
        className="w-75 d-flex flex-column justify-content-center align-items-center"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="form-floating text-dark mb-3 w-75">
          <input
            type="name"
            name="from_name"
            className="form-control"
            id="Input1"
            placeholder="Name"
            required
          />
          <label htmlFor="Input1" className="form-label">
            Enter Name
          </label>
        </div>
        <div className="form-floating text-dark mb-3 w-75">
          <input
            type="email"
            name="from_Eid"
            className="form-control"
            id="Input"
            placeholder="Email"
            required
          />
          <label htmlFor="Input2" className="form-label">
            Email
          </label>
        </div>
        <div className="form-floating text-dark mb-3 w-75 ">
          <textarea
            className="form-control h-100"
            name="message"
            placeholder="Textarea"
            id="textArea"
            rows="6"
          ></textarea>
          <label htmlFor="textArea" className="form-label">
            Enter your message here
          </label>
        </div>
        <div>
          <input
            className="btn btn-primary btn-lg"
            type="submit"
            value="Reach Me"
            onClick={notify}
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
