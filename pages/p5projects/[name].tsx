import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { readdirSync } from "fs";
import path from "path";
import { useRouter } from "next/router";

export default function P5Project({
  name,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <iframe src={`/p5js/js/${name}/index.html`}></iframe>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const p5Path = path.resolve(process.cwd(), "public/p5js/js");
  const filenames = readdirSync(p5Path);

  return {
    paths: filenames
      .filter((f) => f !== "blank")
      .map((f) => `/p5projects/${f}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const name = params?.name;
  if (typeof name !== "string") return { notFound: true };
  return {
    props: {
      name,
    },
  };
};
