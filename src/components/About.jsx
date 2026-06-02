/* A function that returns a JSX element. */
const About = () => {
  return (
    <div className="container-fluid my-5 py-5 text-light h-100" name="About">
      <div className="container my-5 w-75 w100">
        <div>
          <h2 className="text-decoration-underline mb-4 text-center font-slab display-5">
            About
          </h2>
        </div>
        <p className="px-5 lead fs-3 font-slab" style={{ textAlign: "justify" }}>
          I'm a Full-Stack Web Developer with a strong focus on quality, precision, and attention to detail — shaped by my background in QA/QC and Draftsman expertise. I specialize in JavaScript technologies including React.js, Node.js, and Express.js, building applications that are both technically solid and visually engaging.
          <br />
          I'm passionate about crafting user experiences that are not just functional, but educational and inspirational — experiences that leave a lasting impression. Whether I'm architecting backend systems or polishing front-end interfaces, I bring the same meticulous standards I developed through quality assurance into every line of code I write.
          <br />
          Beyond technical skills, I place great value on collaboration and communication — leveraging my interpersonal strengths to work effectively across teams and deliver the best possible outcomes for every project I take on.
        </p>
      </div>
    </div>
  );
};

export default About;
