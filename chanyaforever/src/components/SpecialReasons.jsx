import ReasonCard from "./ReasonCard";
import { reasons } from "../data/memories";

export default function SpecialReasons() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-5xl font-bold text-center mb-16">
        Why Chanya Is Special
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <ReasonCard
            key={index}
            text={reason}
          />
        ))}
      </div>
    </section>
  );
}