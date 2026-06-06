import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is WireframeAI?",
      answer:
        "WireframeAI is an AI-powered tool that converts wireframes into React components.",
    },
    {
      question: "How does WireframeAI work?",
      answer:
        "Upload your wireframe and our AI analyzes the layout to generate React code.",
    },
    {
      question: "Do I need coding experience?",
      answer:
        "No. Both developers and beginners can use WireframeAI.",
    },
    {
      question: "Can I edit the generated code?",
      answer:
        "Yes. All generated code is fully customizable.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. We follow security best practices to protect user data.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-white">
        Frequently Asked Questions
      </h2>

      <p className="text-center text-gray-400 mt-4">
        Everything you need to know about WireframeAI.
      </p>

      <div className="mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl p-5 bg-[#262626]"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-white font-medium">
                {faq.question}
              </span>

              <span className="text-orange-400 text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <p className="mt-4 text-gray-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;