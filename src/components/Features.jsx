import { useState } from "react";
import { Check, FileCode2, MousePointer2 } from "lucide-react";

const STEPS = [
  {
    id: "sketch",
    label: "Sketch",
    body: "Drop a wireframe. The grid, spacing and breakpoints come through.",
    caption: "The layout arrives as boxes and rules.",
    alt: "A wireframe sheet with a navigation bar, a hero block and three cards.",
  },
  {
    id: "describe",
    label: "Describe",
    body: "Name the components, variants, props and states you want.",
    caption: "Annotations name the parts before code.",
    alt: "The wireframe annotated with hero, grid and state notes.",
  },
  {
    id: "generate",
    label: "Generate",
    body: "Get typed React and Tailwind with the states wired.",
    caption: "The component is typed, not guessed.",
    alt: "A generated React component shown in a code panel.",
  },
  {
    id: "ship",
    label: "Ship",
    body: "Export the files, drop them in and keep editing.",
    caption: "The same screen, ready to edit.",
    alt: "The finished screen filled in and marked ready.",
  },
];

const DEMO_CODE = [
  [["key", "export default function"], ["name", " Landing"], ["punc", "() {"]],
  [["punc", "  return ("]],
  [["punc", "    <"], ["key", "section"], ["str", ' className="hero"'], ["punc", ">"]],
  [["punc", "      <"], ["key", "h1"], ["punc", ">"], ["text", "Wireframes in. React out."], ["punc", "</"], ["key", "h1"], ["punc", ">"]],
  [["punc", "      <"], ["key", "Button"], ["punc", ">"], ["text", "Start free"], ["punc", "</"], ["key", "Button"], ["punc", ">"]],
  [["punc", "    </"], ["key", "section"], ["punc", ">"]],
  [["punc", "  );"]],
  [["punc", "}"]],
];

function WireframeSheet({ mode }) {
  return (
    <div className={`wf wf--${mode}`} aria-hidden="true">
      <div className="wf__nav">
        <span className="wf__mark" />
        <span className="wf__line wf__line--nav" />
        <span className="wf__line wf__line--nav wf__line--short" />
        <span className="wf__line wf__line--nav wf__line--short" />
      </div>

      <div className="wf__hero">
        <span className="wf__line wf__line--xl" />
        <span className="wf__line wf__line--lg" />
        <span className="wf__line wf__line--md" />
        <span className="wf__action" />
      </div>
      <MousePointer2 className="wf__cursor" size={18} aria-hidden="true" />

      <div className="wf__grid">
        {[0, 1, 2].map((card) => (
          <div className="wf__card" key={card}>
            <span className="wf__line wf__line--sm" />
            <span className="wf__line wf__line--xs" />
            <span className="wf__line wf__line--xs" />
          </div>
        ))}
      </div>

      {mode === "describe" && (
        <>
          <span className="wf__pin wf__pin--hero">Hero</span>
          <span className="wf__pin wf__pin--grid">Grid</span>
          <span className="wf__pin wf__pin--states">States</span>
        </>
      )}

      {mode === "ship" && (
        <span className="wf__ready">
          <Check size={13} aria-hidden="true" />
          Ready
        </span>
      )}
    </div>
  );
}

function CodeSheet() {
  return (
    <div className="code-demo" aria-hidden="true">
      <div className="code-demo__bar">
        <span className="code-demo__file">
          <FileCode2 size={14} aria-hidden="true" />
          Landing.jsx
        </span>
        <span>tsx</span>
      </div>
      <pre>
        <code>
          {DEMO_CODE.map((line, lineIndex) => (
            <span className="code-line" key={lineIndex}>
              {line.map(([kind, text], tokenIndex) => (
                <span className={`tok-${kind}`} key={tokenIndex}>{text}</span>
              ))}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = STEPS[activeIndex];

  return (
    <section id="how" className="section section--tint" aria-labelledby="how-title">
      <div className="shell">
        <div className="section-head">
          <h2 id="how-title">From sketch to shipped.</h2>
          <p>Four passes, one flow, no handoff.</p>
        </div>

        <div className="process-stage" id="prec-clip">
          <div className="step-rail" aria-label="Generation steps">
            {STEPS.map((step, index) => (
              <div className="step-item" data-active={index === activeIndex} key={step.id}>
                <button
                  type="button"
                  className="step"
                  aria-pressed={index === activeIndex}
                  aria-controls="how-stage"
                  aria-describedby={`step-body-${step.id}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="step__index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="step__label">{step.label}</span>
                </button>
                <p className="step__body" id={`step-body-${step.id}`}>{step.body}</p>
              </div>
            ))}
          </div>

          <div className="stage" id="how-stage">
            <div className="stage__bar">
              <span className="stage__step">{String(activeIndex + 1).padStart(2, "0")} / 04</span>
              <span className="stage__label">{active.label} preview</span>
            </div>
            <div className="stage__view" role="img" aria-label={active.alt}>
              {active.id === "generate" ? <CodeSheet /> : <WireframeSheet mode={active.id} />}
            </div>
            <p className="stage__caption" aria-live="polite">{active.caption}</p>
          </div>
        </div>

        <p className="process__foot">Structure, states, types and editable files survive every pass.</p>
      </div>
    </section>
  );
}

export default FeaturesSection;
