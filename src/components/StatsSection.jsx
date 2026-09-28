
import { useEffect, useState } from "react";
import { Users, Award, HeartHandshake } from "lucide-react";
import "../styles/stats.css";

function StatsSection() {
  const stats = [
    {
      target: 1000,
      suffix: "+",
      title: "Satisfied Patients",
      icon: <Users size={22} />,
    },
    {
      target: 8,
      suffix: "",
      title: "Certified Specialists",
      icon: <Award size={22} />,
    },
    {
      target: 5,
      suffix: "",
      title: "Caring Staff",
      icon: <HeartHandshake size={22} />,
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".stats-section");

      if (!section || started) return;

      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.85) {
        setStarted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const timers = stats.map((stat, index) => {
      const duration = 1800;
      const steps = 60;
      const increment = stat.target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;

        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timers[index]);
        }

        setCounts((previous) => {
          const updated = [...previous];
          updated[index] = Math.floor(current);
          return updated;
        });
      }, duration / steps);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, [started]);

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={stat.title}>
            <div className="stat-icon">
              {stat.icon}
            </div>

            <div className="stat-content">
              <h3>
                {counts[index]}
                {stat.suffix}
              </h3>

              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;