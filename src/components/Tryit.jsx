import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section id="start" className="cta" aria-labelledby="cta-title">
      <div className="shell cta__inner">
        <div>
          <h2 id="cta-title">Start with a wireframe.</h2>
          <p>Open the generator, drop in a wireframe, and turn your next screen into typed React.</p>
        </div>
        <Link className="cta__link" to="/signup">Try WireframeAI</Link>
        <ul className="cta__signals">
          <li><span>Start</span>5 free generations</li>
          <li><span>Output</span>Typed React components</li>
          <li><span>Export</span>Plain files for your repo</li>
        </ul>
      </div>
    </section>
  );
};

export default CTA;
