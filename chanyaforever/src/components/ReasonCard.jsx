export default function ReasonCard({ text }) {
  return (
    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 hover:scale-105 transition">
      {text}
    </div>
  );
}