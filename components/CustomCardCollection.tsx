import Link from "next/link";
import { CardCollection } from "../settings";
import CustomCard from "./CustomCard";

import styles from "../styles/CustomCardCollection.module.scss";

import { Tabs, Tab, H2 } from "@blueprintjs/core";

import { useState } from "react";

const CustomCardCollection = ({
  collection,
}: {
  collection: CardCollection;
}) => {
  return (
    <>
      <H2 className={styles.title}>{collection.collectionName}</H2>
      {collection.cards.map((card, i) => (
        <CustomCard card={card} key={i} />
      ))}
    </>
  );
};

export default CustomCardCollection;
