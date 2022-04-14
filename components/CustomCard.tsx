import Link from "next/link";
import { CardData } from "../settings";
import { H3, H5, Button, Card, Elevation } from "@blueprintjs/core";

import styles from "../styles/CustomCard.module.scss";

const CustomCard = ({ card }: { card: CardData }) => {
  const cardElement = (
    <Card interactive elevation={Elevation.TWO} className={styles.card}>
      <H3>{card.title}</H3>
      <p>{card.desc}</p>{" "}
    </Card>
  );
  if (card.url === undefined) return cardElement;
  return <Link href={card.url}>{cardElement}</Link>;
};

export default CustomCard;
