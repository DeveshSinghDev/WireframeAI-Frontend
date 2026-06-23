import { useState } from "react";

const testimonials = [
  {
    text: "The team is committed to excellence of the company...",
    name: "Satya",
    role: "Founder",
  },
  {
    text: "Amazing service and great support!",
    name: "Devesh",
    role: "Co-Founder",
  },
  {
    text: "Highly recommended for developers.",
    name: "Tony Stark",
    role: "Engineer",
  },
  {
    text: "Highly recommended for developers.",
    name: "Vedansh",
    role: "Mbbs",
  },
];

function TestimonialStack() {
  const [cards, setCards] = useState(testimonials);

  const handleClick = () => {
    const newCards = [...cards];
    const first = newCards.shift();
    newCards.push(first);
    setCards(newCards);
  };

  return (
<div className=" flex flex-col items-center mt-10 px-4 sm:px-6 md:px-10">
      <h1 className="text-white text-2xl mb-6">
        What they say about Us
      </h1>

     <div className="relative w-full max-w-[350px] h-[220px]">

        {cards.map((card, index) => (
          <div
            key={index}
            onClick={index === 0 ? handleClick : null}
            className="absolute w-full p-5 rounded-2xl cursor-pointer bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl transition duration-300"
            style={{
              zIndex: cards.length - index,
              transform: `translateY(${index * 12}px) scale(${1 - index * 0.05})`,
              opacity: index === 2 ? 0.6 : 1,
            }}
          >
            <p className="text-sm text-gray-300">{card.text}</p>

            <div className="mt-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-500"></div>
              <div>
                <h4 className="text-sm font-bold">{card.name}</h4>
                <p className="text-xs text-gray-400">{card.role}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default TestimonialStack;