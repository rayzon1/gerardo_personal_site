import APlusComp from "./img/a-plus-comptia.png";
import Treehouse from "./img/treehouse1.png";
import SecPlusComp from "./img/sec-plus-comptia.png";
import WebFlixDemo from "./img/webflix-demo_1.gif";
import Flickr from "./img/flckr_demo.gif";
import Phrase from "./img/phrase_game_demo.gif";

export const data = {
  summary: {
    about: "Hello my name is Gerardo Keys. I have over 5 years of IT support experience working at some of the biggest tech companies in the world. I have become very experienced working in high performing and stressful environments, that have challenged and tested me in many different ways. I bring a diverse skillset of technical experience and amazing customer service. I am currently looking for new opportunities and challenges and to continue to grow with a great team. I have experience working in every aspect of IT including Google suite administration, Active Directory administration, executive support, onboarding, AV / conference room support, networking and security support, jira ticketing system, new engineering setups. On my own I have studied programming, specifically web application development using tools such as JavaScript, HTML, CSS/SASS, BEM, React, Node, and SQL. I have become proficient and have a GitHub account with about 20 or so projects. Doing this has given me a deeper understanding of programming which I can bring to any job that needs it."
  },
  education: [
    {
      id: 1,
      logo: Treehouse,
      caption: "Team Treehouse",
      descriptionSub: "Team Treehouse Full-Stack JavaScript Bootcamp",
      descriptionMain:
        "I went through this JavaScript bootcamp not knowing much about development. After a year of this curriculum, I can now create full-stack apps using technologies such as React, Node, and Express. It was a project based path which also had me peer-review code from other students which helped me understand how to read other developers code."
    },
    {
      id: 2,
      logo: APlusComp,
      caption: "CompTia A+",
      descriptionSub: "CompTia A+ Certification",
      descriptionMain:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Distinctio eos in officiis debitis fugit saepe pariatur! Loremipsum dolor sit amet consectetur adipisicing elit. Lorem ipsumdolor sit amet consectetur adipisicing elit.Distinctio eos inofficiis debitis,fugit saepe pariatur"
    },
    {
      id: 3,
      logo: SecPlusComp,
      caption: "CompTia Security+",
      descriptionSub: "CompTia Security+ Certification",
      descriptionMain:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Distinctio eos in officiis debitis fugit saepe pariatur! Loremipsum dolor sit amet consectetur adipisicing elit. Lorem ipsumdolor sit amet consectetur adipisicing elit.Distinctio eos inofficiis debitis, fugit saepe pariatur"
    },
  ], 
  projects: [
    {
      id: 1,
      title: "Webflix Entertainment",
      screenshot: WebFlixDemo,
      description: 
        "One of my first projects using React + Redux. I used The Movie Database API, which was great to get info on all the new and upcoming movies and tv shows. I used react-router for this application linking home page and search pages."
    },
    {
      id: 2,
      title: "Flickr Search",
      screenshot: Flickr,
      description: 
        "One of my first projects I used Flickr's free api to create a gif search based on categories as well as user search. This project really taught me a lot about working with external api's and how to create user interaction and search."
    },
    {
      id: 3,
      title: "Phrase Hunter Gameshow",
      screenshot: Phrase,
      description: 
        "I created this game to practice object-oriented programming and making a game with vanilla JavaScript, CSS and html. This really helped me cement my fundamentals in programming while creating a fun Jeopardy style game."
    }
  ]
};
