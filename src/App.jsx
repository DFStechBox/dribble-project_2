import PricingCard from "./assets/components/PricingCard/PricingCard";
import styles from "./App.module.css";

function App() {
  const cards = [
    {
      label: "Start Up",
      price: "Free",
      imageAlt: "Moving Bicycle with clouds",
      image: "/images/bike.png",
      benefits: ["Unlimited Downloads", "Email Support", "Limited Access"],
    },

    {
      label: "Pro",
      price: "$49",
      duration: "/Year",
      imageAlt: "car with clouds",
      image: "/images/car.png",
      benefits: [
        "Up to 10 users",
        "Email Support, Call Support",
        "1 Year Access",
      ],
    },

    {
      label: "Enterprise",
      price: "$99",
      imageAlt: "Flying plane with clouds",
      image: "/images/plane.png",
      benefits: ["Unlimited Access", "On demand request", "Lifetime Access"],
    },
  ];

  return (
    <div className={styles.prices}>
      {cards.map((card) => {
        return (
          <PricingCard
            key={card.label}
            label={card.label}
            duration={card.duration}
            price={card.price}
            imageAlt={card.imageAlt}
            image={card.image}
            benefits={card.benefits}
          />
        );
      })}
    </div>
  );
}

export default App;
