function FloatingParticles() {
  return (
    <div className="particles">
      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
}

export default FloatingParticles;