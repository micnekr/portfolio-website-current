import Link from "next/link";
import { CardCollection } from "../settings";
import CustomCard from "./CustomCard";
import CustomCardCollection from "./CustomCardCollection";

import styles from "../styles/CustomCardTabs.module.scss";

import { Tabs, Tab, TabId } from "@blueprintjs/core";

import { useState } from "react";

const CustomCardTabs = ({ collections }: { collections: CardCollection[] }) => {
  const [selectedTab, setSelectedTab] = useState(0 as TabId);
  return (
    // @ts-expect-error: It says that the children prop was not expected, even though it works well
    <Tabs
      id="CustomCardTabs"
      onChange={(id) => {
        setSelectedTab(id);
      }}
      selectedTabId={selectedTab}
    >
      {collections.map((collection, i) => (
        <Tab
          className={styles.tabs}
          id={i}
          key={i}
          title={collection.collectionName}
          panel={<CustomCardCollection key={i} collection={collection} />}
        />
      ))}
    </Tabs>
  );
};

export default CustomCardTabs;
