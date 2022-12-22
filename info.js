let info = {
  name: "Edward Oluyara",
  logo_name: "Darkeddie02",
  flat_picture: require("./src/assets/me-v4.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false,
    },
  },
  description:
    "Hey there, I'm Edward Oluyara a graduate from a Full Stack Development bootcamp Microverse, A web specialist with 2 years of experience integrating web feature and products also familiar with Reactjs, Vuejs and Web UI, Also a Backend Engineer with 1 year of experience with ROR(Ruby on Rails) and Nestjs.",
  links: {
    linkedin: "https://www.linkedin.com/in/edward-oluyara-708b88215/",
    github: "https://github.com/darkeddie02",
    resume:
      "https://docs.google.com/document/d/1N6I_qk2qaJaDphe1EsuYcrJk88J9lMhF0D1uqPbWDDM/edit",
  },
  education: [
    {
      name: "Microverse",
      place: "CA, Califonia • Remote",
      date: "oct, 2021 - oct, 2022",
      degree: "Full Stack Development Certification",
      description:
        "Microverse is a remote software development bootcamp, It's an educative system that allows developers to pair program and collaborate across multiple countries world wide.",
      skills: [
        "Web Programming",
        "Web UI Design",
        "Frontend Development",
        "Backend Development",
        "Fullstack Development",
      ],
    },
  ],
  experience: [
    {
      name: "Analify",
      place: "Lagos, Nigeria",
      date: "oct, 2022 - present",
      position: "Backend Developer",
      description:
        "Creating an API that secures customers data and also manage admins(Farmers) data in a database.",
      skills: ["Node", "Express", "MongoDB", "REST", "JWT"],
    },
    {
      name: "Freelancer",
      place: "Lagos, Nigeria",
      date: "Nov, 2022 - present",
      position: "Frontend Developer",
      description:
        "Consuming Backend API's to become more user friendly and interactive.",
      skills: ["React", "Vue", "HTML", "Bootstrap", "Redux", "Material-UI"],
    },
  ],
  skills: [
    {
      title: "Web UI Design",
      info: ["Figma", "Material-UI", "Bootstrap", "CSS"],
      icon: "fa fa-pencil-square-o",
    },
    {
      title: "Language",
      info: ["Javascript", "Typescript"],
      icon: "fa fa-code",
    },
    {
      title: "Frontend",
      info: ["React", "Vue"],
      icon: "fa fa-cubes",
    },
    {
      title: "Backend",
      info: ["Ruby", "Node"],
      icon: "fas fa-laptop-code",
    },
  ],
  portfolio: [
    {
      name: "Bcycom App",
      pictures: [
        {
          img: require("./src/assets/projects/bcycom/1.png"),
          title: "Home Page",
        },
        {
          img: require("./src/assets/projects/bcycom/2.png"),
          title: "Add Page",
        },
        {
          img: require("./src/assets/projects/bcycom/3.png"),
          title: "Details Page",
        },
      ],
      technologies: ["ROR", "JWT", "React", "Redux", "PostgreSQL"],
      category: "Web App",
      date: "July, 2022, 3 weeks",
      github: "https://github.com/Dagic-zewdu/final-capstone-frontend",
      visit: "https://bcycom.herokuapp.com/",
      description:
        "A demo motorcycle booking store app that allows users to reserve thier most favorite motorcycle models, the main functionality of the app is that when a user signs up to the app Bcycom generates a token specific to each user and that token is been saved to our database so when you login you can now be authorized to add your most favorite motorcycle models.",
    },
    {
      name: "Matrics App",
      pictures: [
        {
          img: require("./src/assets/projects/metrics/1.png"),
          title: "Home Page",
        },
        {
          img: require("./src/assets/projects/metrics/2.png"),
          title: "Details Page",
        },
      ],
      technologies: ["React", "Redux", "CSS"],
      category: "Web App",
      date: "Jan, 2022 - 1 week",
      github: "https://github.com/darkeddie02/matrix-App",
      visit: "https://immense-brook-29259.herokuapp.com/",
      description:
        "A simple react app built to consume an open source REST API listing all the specific details of a company, the main functionality of this app is when you click a particular company in the list of over 25 filtered companies then you will see a list of that company's details it was just a demo app to build my Reactjs skills.",
    },
    {
      name: "Budget App",
      pictures: [
        {
          img: require("./src/assets/projects/pocket_smith/1.png"),
          title: "Splash Screen",
        },
        {
          img: require("./src/assets/projects/pocket_smith/2.png"),
          title: "Home Page",
        },
        {
          img: require("./src/assets/projects/pocket_smith/3.png"),
          title: "Categories Page",
        },
      ],
      technologies: ["React", "Redux", "Bootstrap", "REST API"],
      category: "Web App",
      date: "Mar, 2022 - 1 week",
      github: "https://github.com/darkeddie02/pocket-smith",
      visit: "https://pocket-smith.herokuapp.com/",
      description:
        "This app is a money budget app that allows you to keep track of all your expences and a user can also see a list of transaction specific to a particular category, Now how can we use this Pocket Smith App...well the main functionality is that when a user signup with his/her email a verification is sent to that user and that verification is been used to authorize the user inorder to make transactions and also manage their budget, this was also a demo app.",
    },
    {
      name: "SpaceX App",
      pictures: [
        {
          img: require("./src/assets/projects/space_traveller/1.png"),
          title: "Home Page",
        },
        {
          img: require("./src/assets/projects/space_traveller/2.png"),
          title: "Reservations Page",
        },
        {
          img: require("./src/assets/projects/space_traveller/3.png"),
          title: "Join Members Page",
        },
      ],
      technologies: ["React", "Bootstrap", "Redux"],
      category: "Web App",
      date: "Feb, 2022 - 1 week",
      github: "https://github.com/darkeddie02/space-travellers-app",
      description:
        "An online rocket booking system that allows a user to book a fligt to space at a derived time, Users can also cancel thier reservation. How the reservation system work is...when a user should reserve a rocket SpaceX saves each reservations in your profile and also users can join as members of a mission.",
    },
    {
      name: "TracEvent App",
      pictures: [
        {
          img: require("./src/assets/projects/task_tracker/1.png"),
          title: "Home Page",
        },
        {
          img: require("./src/assets/projects/task_tracker/2.png"),
          title: "Add Page",
        },
      ],
      technologies: ["React", "Bootstrap", "JSON-Server"],
      category: "Web App",
      date: "Aug, 2022 - 3 days",
      github: "https://github.com/darkeddie02/task-tracker",
      description:
        "This demo app was built to test how React integrates with a JSON-Server dependency, I have also been able to create a space whereby users can keep track of their event in a timely manner.",
    },
    {
      name: "MovieLand App",
      pictures: [
        {
          img: require("./src/assets/projects/movie_app/1.png"),
          title: "Home Page",
        },
      ],
      technologies: ["React", "CSS", "OMDB API"],
      category: "Web App",
      date: "Nov, 2022 - 1 day",
      github: "https://github.com/darkeddie02/movie-search-engine",
      description:
        "This a demo app I built with react to fetch a restful API from OMDB to filter the list of movies. The main functionality of this app is that users can easily search for thier favorite movies with ease.",
    },
  ],
};

export default info;
