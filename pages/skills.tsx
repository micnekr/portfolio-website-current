import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import CustomCardCollection from "../components/CustomCardCollection";
import CustomCardTabs from "../components/CustomCardTabs";
import { allSkills } from "../settings";

const Skills: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Micnekr's skills"}</title>
      </Head>
      <CustomCardTabs collections={allSkills} />
    </>
  );
};

export default Skills;
