function AnimatedStars() {
  return (
    <div className="stars">
      {[...Array(100)].map((_, i) => (
        <span
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
}

export default AnimatedStars;