function PhotoGallery() {
  const memories = [
    {
      icon: "🏫",
      text: "We met in high school and everything started from there."
    },
    {
      icon: "😂",
      text: "All the random jokes and laughter we shared in class."
    },
    {
      icon: "📚",
      text: "Studying, stressing, and surviving school together."
    },
    {
      icon: "🎧",
      text: "Talking for hours like time didn’t exist."
    },
    {
      icon: "🎓",
      text: "Graduation day — still connected, still strong."
    },
    {
      icon: "📱",
      text: "Even after school, we never stopped talking."
    },
    {
      icon: "💬",
      text: "Every conversation feels effortless and real."
    },
    {
      icon: "🌙",
      text: "Late-night talks that meant everything."
    },
    {
      icon: "💜",
      text: "A friendship that keeps growing with time."
    },
    {
      icon: "✨",
      text: "Some people just stay in your life forever."
    },
    {
      icon: "🌸",
      text: "You made my life softer, calmer, and better."
    },
    {
      icon: "🫶",
      text: "No matter what happens, you're always important to me."
    }
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>Memory Wall 💜</h2>

      <div className="gallery-grid">
        {memories.map((item, index) => (
          <div key={index} className="memory-card">
            <div className="memory-icon">{item.icon}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PhotoGallery;