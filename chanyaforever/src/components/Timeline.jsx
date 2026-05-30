import TimelineCard from "./TimelineCard";
import { memories } from "../data/memories";

export default function Timeline() {
  return (
    <section id="journey" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-5xl font-bold text-center mb-16">
        Our Journey
      </h2>

      <div className="space-y-8">
        {memories.map((memory, index) => (
          <TimelineCard
            key={index}
            title={memory}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}