import React from "react";

const WorkoutSessions = () => {
  const bootcamps = [
    {
      title: "Strength & Power Bootcamp",
      text: "Build raw strength with progressive barbell and dumbbell training. Coached lifts, smart programming, and real results in 8 weeks.",
    },
    {
      title: "Fat Burn HIIT Challenge",
      text: "High-intensity intervals that torch calories long after you leave the gym. Short, intense sessions built for busy schedules.",
    },
    {
      title: "Functional Fitness Camp",
      text: "Train the way you move. Improve mobility, balance, and endurance with full-body circuits that carry over to everyday life.",
    },
    {
      title: "Beginner Transformation Program",
      text: "New to the gym? Start with confidence. Step-by-step coaching, simple routines, and a supportive community every step of the way.",
    },
  ];

  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Train smarter with sessions designed by expert coaches. Whether you
          want to build muscle, lose fat, or boost your stamina, there's a
          session made for your goals.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Join our most popular group programs. Structured plans, motivating
          trainers, and a community that keeps you showing up.
        </p>
        <div className="bootcamps">
          {bootcamps.map((camp) => (
            <div key={camp.title}>
              <h4>{camp.title}</h4>
              <p>{camp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;