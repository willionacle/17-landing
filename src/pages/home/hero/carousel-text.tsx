import * as React from "react";

const items = [
  "Better Technology",
  "Custom Software",
  "Scalable Systems",
  "Modern Solutions",
  "Digital Power",
];

export default function CarouselText() {
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setVisible(true);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-16 lg:h-36 flex items-center justify-center">
      <h1
        className={`
          text-inset-black
          text-yellow-300
          font-black
          italic
          text-3xl
          lg:text-8xl
          transition-opacity
          duration-400
          ${visible ? "opacity-100" : "opacity-0"}
        `}
      >
        {items[index]}
      </h1>
    </div>
  );
}
