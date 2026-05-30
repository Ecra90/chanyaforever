import { useState } from "react";
const memories = [
  "First day we met ❤️",
  "Funniest school moment 😂",
  "Graduation 🎓",
  "Still talking today ✨"
];

function MemoryCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) =>
      (prev + 1) % memories.length
    );
  };

  const previous = () => {
    setCurrent((prev) =>
      prev === 0
        ? memories.length - 1
        : prev - 1
    );
  };

  return (
    <section className="carousel">
      <h2>Favorite Memories</h2>

      <div className="memory-card">
        {memories[current]}
      </div>

      <div className="buttons">
        <button onClick={previous}>
          ←
        </button>

        <button onClick={next}>
          →
        </button>
      </div>
    </section>
  );
}

export default MemoryCarousel;