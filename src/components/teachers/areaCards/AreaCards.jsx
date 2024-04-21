import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        //percentFillValue={80}
        cardInfo={{
          title: "Total Number of Teachers Registered",
          value: "24",
          text: " ",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        //percentFillValue={50}
        cardInfo={{
          title: "Total Number of Classes Registered",
          value: "41",
          //text: "Available to payout",
        }}
      />
    </section>
  );
};

export default AreaCards;
