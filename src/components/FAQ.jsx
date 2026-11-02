import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";

const FAQS = [
  {
    question: "What is WireframeAI?",
    answer: "WireframeAI is an AI-powered tool that converts wireframes into React components.",
  },
  {
    question: "How does WireframeAI work?",
    answer: "Upload your wireframe and our AI analyzes the layout to generate React code.",
  },
  {
    question: "Do I need coding experience?",
    answer: "No. Both developers and beginners can use WireframeAI.",
  },
  {
    question: "Can I edit the generated code?",
    answer: "Yes. All generated code is fully customizable.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We follow security best practices to protect user data.",
  },
  {
    question: "Can I export the code?",
    answer: "Yes. Download the files or copy them into your project.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq" aria-labelledby="faq-title">
      <div className="shell faq__layout">
        <div className="faq__intro">
          <h2 id="faq-title">Questions before you generate.</h2>
          <p>What comes out, what stays yours, and where it runs.</p>
        </div>

        <div className="faq__list">
          {FAQS.map((faq, index) => {
            const open = activeIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            return (
              <div className="faq__item" key={faq.question}>
                <button
                  type="button"
                  id={buttonId}
                  className="faq__question"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  {open
                    ? <Minus className="faq__icon" size={18} aria-hidden="true" />
                    : <Plus className="faq__icon" size={18} aria-hidden="true" />}
                </button>
                {open && (
                  <div className="faq__answer" id={panelId} role="region" aria-labelledby={buttonId}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
