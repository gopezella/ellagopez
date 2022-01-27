import React from "react";
import { Carousel } from "antd";
import Project from "../../components/Project/Project";
import "../Projects/Projects.css";
import plowtopia from "../../assets/plowtopia.svg";
import kpop from "../../assets/kpop.svg";
import digbicks from "../../assets/digbicks.svg";
import atlbrokenphones from "../../assets/atlbrokenphones.svg";
import degen from "../../assets/degen.svg";
import whichdayz from "../../assets/wd.svg";

export default function Projects(props) {
  const projects = [
    {
      title: "Plowtopia",
      description:
        "PlowTopia is a blockchain-based multiplayer RPG and builder game, where players can own customizable avatars, farming packages and NFTs. The game offers an exciting in-game environment with a virtual marketplace and a virtual trading experience where users can interact with other players through avatars to buy/sell/trade their in-game items and meet new friends.",
      url: "https://plowtopia.io/",
      tools: ["VueJS", "Bootstrap", "Firebase"],
      image: plowtopia,
    },
    {
      title: "KPOP Digital",
      description:
        "The Face of a new Crypto Currency inspired and built for the KPOP Stans. Offers exclusive access to special promotions, VIP events, licensed digital photos and moments from your favorite KPOP idols, and a chance to win a FULL KPOP experience in Korea",
      url: "https://kpop-digital.com/",
      tools: ["ReactJS", "Bootstrap"],
      image: kpop,
    },
    {
      title: "ATLBrokenPhone",
      description:
        "Degen Academy is a Play To Earn blockchained-based games to maximize profits and provide opportunities to our fellow degens.",

      url: "https://www.atlbrokenphones.com/",
      tools: ["ReactJS", "NextJS", "Bootstrap"],
      image: atlbrokenphones,
    },
    {
      title: "DigBicks",
      description:
        "DigBicks is a collection of unique NFTs in the Ethereum blockchain. Each DigBick has its distinct personality defined by carefully curated attributes such as headgears, weapons, and more. They are all fun and quirky, but you’d be more surprised by the rare ones! You can see more of our collection on OpenSea.",
      url: "https://kpop-digital.com/",
      tools: ["ReactJS", "Redux", "Bootstrap"],
      image: digbicks,
    },
    {
      title: "Degen Academy",
      description:
        "The future of gaming is decentralized and permissionless, and this time, the players are in charge. In Degen Academy, Friendship is the main foundation of the academy. Every Degen helps each other to maximize their potential and to foster growth. ",

      url: "https://www.degenacademy.com/",
      tools: ["ReactJS", "NextJS", "Ant Design"],
      image: degen,
    },
    {
      title: "WhichDayz App",
      description:
        "A Mobile App that inspired by problems encountered by baristas in New York City. This Mobile app provides scheduling service for barista to publicly share their availability and communicate with their customers. It also provide special alerts for customers for exclusive deals offered by different baristas/professionals.",
      tools: ["React Native", "NodeJS", "Firebase"],
      height: "300px",
      image: whichdayz,
    },
  ];

  const project = projects.map((project, index) => (
    <Project
      key={index}
      title={project.title}
      description={project.description}
      tools={project.tools}
      url={project.url}
      image={project.image}
    />
  ));

  return (
    <>
      <section id="projects">
        <div className="container">
          <div>
            <h1 className="portfolioHeader">PROJECTS</h1>
            <Carousel dotPosition="bottom" draggable>
              {project}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
