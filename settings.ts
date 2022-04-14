export const websiteLink = "https://github.com/micnekr";
export const username = "micnekr";

export type CardData = {
  title: string;
  desc: string;
  url?: string;
};

export type CardCollection = {
  collectionName: string;
  cards: CardData[];
};

export const allSkills: CardCollection[] = [
  {
    collectionName: "Programming languages",
    cards: [
      {
        title: "JavaScript",
        desc: "A popular interpreted programming language used in both front-end and back-end",
        url: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
      },
      {
        title: "TypeScript",
        desc: "A language that transpiles to javascript and enforces a type system to help find bugs",
        url: "https://www.typescriptlang.org/",
      },
      {
        title: "Rust",
        desc: "A performant and memory-efficient programming language with strong memory and type safety guarantees",
        url: "https://www.rust-lang.org/",
      },
      {
        title: "Java",
        desc: "An object-oriented programming language focusing on allowing one codebase to be run on multiple systems",
        url: "https://www.oracle.com/uk/java/",
      },
      {
        title: "C++",
        desc: "A compiled object-oriented compiled programming language",
        url: "https://gcc.gnu.org/",
      },
      {
        title: "C#",
        desc: "An object-oriented programming language focusing on allowing one codebase to be run on multiple systems, frequently used with Unity",
        url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      },
      {
        title: "SQL",
        desc: "A query language for retrieving and modifying data in databases",
        url: "https://www.iso.org/standard/63555.html",
      },
      {
        title: "Python",
        desc: "An interpreted language frequently used for prototyping",
        url: "https://www.python.org/",
      },
    ],
  },
  {
    collectionName: "Tools",
    cards: [
      {
        title: "Gimp",
        desc: "A free and open-source image manipulation program", //
        url: "https://www.gimp.org/",
      },
      {
        title: "Blender",
        desc: "A free and open-source 3D modelling program",
        url: "https://www.blender.org/",
      },
      {
        title: "Git",
        desc: "A popular version control software",
        url: "https://git-scm.com/",
      },
      {
        title: "Vim and Emacs",
        desc: "Popular IDEs and text editors",
        url: "https://www.gnu.org/software/emacs/",
      },
      {
        title: "Linux (including basic bash)",
        desc: "A popular free and open source operating system",
        url: "https://www.kernel.org/",
      },
      {
        title: "Unity",
        desc: "A popular game engine",
        url: "https://unity.com/",
      },
    ],
  },
  {
    collectionName: "Frameworks and libraries",
    cards: [
      {
        title: "Node.js",
        desc: "A javascript engine designed to write backend code",
        url: "https://nodejs.org/en/",
      },
      {
        title: "Express.js",
        desc: "A popular node.js webserver library",
        url: "https://expressjs.com/",
      },
      {
        title: "React",
        desc: "A popular front-end javascript library",
        url: "https://reactjs.org/",
      },
      {
        title: "Next.js",
        desc: "A popular react framework for hybrid static and server rendering",
        url: "https://nextjs.org/",
      },
      {
        title: "Processing",
        desc: "A java framework for making applications for visualisations using a canvas",
        url: "https://processing.org/",
      },
      {
        title: "p5.js",
        desc: "A javascript canvas library",
        url: "https://p5js.org/",
      },
    ],
  },
];
