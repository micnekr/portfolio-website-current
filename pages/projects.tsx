import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import CustomCardCollection from "../components/CustomCardCollection";
import CustomCardTabs from "../components/CustomCardTabs";
import { allProjects } from "../settings";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Micnekr's projects"}</title>
      </Head>
      <CustomCardTabs collections={allProjects} />
    </>
  );
};

export default Projects;
