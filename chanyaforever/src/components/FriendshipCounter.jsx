import { useEffect, useState } from "react";
function FriendshipCounter() {
  const startDate = new Date("2020-01-01");

  const [days, setDays] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const now = new Date();
      const difference = now - startDate;
      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
    };

    calculateDays();
  }, []);

  return (
    <section className="counter">
      <h2>{days} Days</h2>
      <p>Of Amazing Friendship ❤️</p>
    </section>
  );
}

export default FriendshipCounter;