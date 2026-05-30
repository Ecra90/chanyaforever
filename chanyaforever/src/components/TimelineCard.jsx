export default function TimelineCard({ title, index }) {
  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-3xl shadow-xl">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center font-bold">
          {index + 1}
        </div>

        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
}