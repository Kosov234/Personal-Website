import Gabriele from "../../assets/Gabriele.jpeg";
import Tomislav from "../../assets/Tomislav.jpeg";
import Jacek from "../../assets/Jacek.jpeg";
import { Recommendation } from "./types";

export const ReccomendationsData: Recommendation[] = [
  {
    id: 0,
    image: Tomislav,
    title: "Tomislav Matijević",
    description:
      "I had the pleasure of mentoring Alex during his time as a student and later working alongside him as a Frontend Engineer. I highly recommend Alex to any team looking for a talented and dependable Frontend Engineer who is ready to take on any challenge.",
  },
  {
    id: 1,
    image: Gabriele,
    title: "Gabriele Renzi",
    description:
      "Alex joined our team as an intern and then got a permanent position, and he absolutely deserved it. He's smart, he picks up things quickly, and he can deliver. He also doesn't shy away from work or challenging problems, he's got a great career ahead of him.",
  },
  {
    id: 2,
    image: Jacek,
    title: "Jacek Maciag",
    description:
      "Alex is an excellent Front-End engineer who consistently delivers solutions that exceed expectations. I had the pleasure of working with Alex on several Front-End/Back-End integrations, as well as some CI solutions, and I was always impressed by his performance.",
  },
];
