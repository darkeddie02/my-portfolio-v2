let info = {
  name: "Edward Oluyara",
  logo_name: "eddy-2020",
  flat_picture: require("./src/assets/me-v4.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false,
    },
  },
  description:
    "Greetings! I'm Edward Oluyara, a Software Developer endowed with interpersonal skills and expertise in web development. With over 2 years of experience working independently, I've collaborated with diverse organizations and individuals to create exceptional web features spanning various countries.",
  links: {
    linkedin: "https://www.linkedin.com/in/edward-oluyara/",
    github: "https://github.com/eddie-2020",
    resume:
      "https://docs.google.com/document/d/14UO6KARK3TzBr2DpjV_y04W0NU91xg079-MuJR3eagA/edit?usp=sharing",
  },
  education: [
    {
      name: "Microverse",
      place: "CA, Califonia • Remote",
      date: "oct, 2021 - oct, 2022",
      degree: "Full Stack Development",
      description:
        "Completed an intensive remote Microverse program focused on Full Stack Development, Gained hands-on experience and practical knowledge through rigorous coursework, projects, and assignments, Collaborated with peers and industry professionals to develop real-world solutions and build a strong professional network, Acquired valuable skills in Ruby and JavaScript to excel in Full Stack Development ",
      skills: [
        "Web Programming",
        "Web UI Design",
        "Frontend Development",
        "Backend Development",
        "Fullstack Development",
      ],
    },
    {
      name: "Caleb University Lagos (CUL)",
      place: "Lagos, Nigeria • Imota",
      date: "sep, 2023 - july, 2027",
      degree: "Computer Science",
      description:
        "Embarking on my educational journey as a Computer Science student at Caleb University Lagos has been a transformative and enriching experience. Nestled within the vibrant academic atmosphere of Lagos, the university provides a nurturing environment that seamlessly integrates theoretical knowledge with practical applications in the ever-evolving field of computer science. Throughout my academic tenure, Caleb University has consistently fostered a dynamic learning environment, equipping me with a robust foundation in computer science principles, programming languages, and cutting-edge technologies. The faculty, comprised of seasoned professionals and industry experts, has been instrumental in guiding my intellectual growth and shaping my analytical and problem-solving skills. The university's commitment to staying at the forefront of technological advancements is evident through well-equipped laboratories, state-of-the-art infrastructure, and a curriculum that adapts to the rapidly changing landscape of the tech industry. Engaging in hands-on projects, collaborative endeavors, and participating in extracurricular activities has allowed me to not only apply theoretical concepts but also cultivate a holistic understanding of the multifaceted realm of computer science. Beyond the academic sphere, Caleb University encourages a culture of innovation and entrepreneurship, providing platforms for students to showcase their talents and explore real-world applications of their knowledge. The university's emphasis on holistic development ensures that, as a Computer Science student, I am not only academically proficient but also equipped with the interpersonal and leadership skills necessary for success in the professional arena. In essence, my education at Caleb University Lagos has been a holistic and empowering journey, preparing me to navigate the complexities of the ever-evolving field of computer science with confidence, competence, and a keen sense of innovation.",
      skills: [
        "Problem Solving and Critical Thinking",
        "Programming Proficiency",
        "Database Management",
        "Algorithm Design and Data Structures",
        "Software Development Lifecycle",
      ],
    },
  ],
  experience: [
    {
      name: "Self-Employed",
      place: "Lagos, Nigeria",
      date: "Nov, 2022 - present",
      position: "Full Stack Developer",
      description:
        "Leveraged expertise in front-end and back-end technologies to deliver custom solutions.",
      skills: ["ReactJS", "VueJS", "TailwindCSS", "BootstrapCSS", "DJango", "Sqlite3"],
    },
  ],
  skills: [
    {
      title: "Programming Languages",
      info: ["Javascript", "Ruby", "Python"],
      icon: "fa fa-code",
    },
    {
      title: "Frontend Frameworks",
      info: ["ReactJS", "VueJS"],
      icon: "fa fa-cubes",
    },
    {
      title: "Backend Frameworks",
      info: ["Ruby On Rails", "DJango"],
      icon: "fas fa-laptop-code",
    },
  ],
  portfolio: [
    {
      name: "Assetizenow",
      pictures: [
        {
          img: require("./src/assets/projects/assetizenow/assetizenow1.png"),
          title: "Home Page",
        },
        {
          img: require("./src/assets/projects/assetizenow/assetizenow2.png"),
          title: "Wallet Page",
        },
        {
          img: require("./src/assets/projects/assetizenow/assetizenow3.png"),
          title: "Account Page",
        },
      ],
      technologies: ["ReactJS", "TypeScript"],
      category: "Web App",
      date: "july 2023, 5 months",
      github: "https://github.com/PeachBlossoms/Assetize-UI",
      visit: "https://app.assetizenow.com/",
      description:
        "Assetizenow is a cutting-edge real estate platform designed for seamless property acquisition and investment. Elevate your real estate journey with us as we offer a user-friendly interface, empowering you to explore and invest in properties effortlessly. Whether you're a buyer or an investor, Assetizenow provides a dynamic space to navigate the world of real estate with confidence and convenience. Dive into a curated selection of properties and investment opportunities, making your real estate ventures both rewarding and accessible.",
    },
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
      technologies: ["ROR", "JWT", "ReactJS", "Redux", "PostgreSQL"],
      category: "Web App",
      date: "July, 2022, 3 weeks",
      github: "https://github.com/Dagic-zewdu/final-capstone-frontend",
      // visit: "https://bcycom.herokuapp.com/",
      description:
        "An interactive application prototype for reserving preferred motorcycle models, the demo store app by Bcycom enables users to sign up and receive a unique token stored in our database. This token serves as authorization, allowing users to log in and seamlessly add their favorite motorcycle models to their profile.",
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
      technologies: ["ReactJS", "Redux", "BootstrapCSS", "REST API"],
      category: "Web App",
      date: "Mar, 2022 - 1 week",
      github: "https://github.com/eddie-2020/pocket-smith",
      // visit: "https://pocket-smith.herokuapp.com/",
      description:
        "This application serves as a financial management tool, enabling users to monitor their expenses and view transaction details categorized by specific spending types. To leverage the functionality of the Pocket Smith App, users can sign up with their email. Upon registration, a verification process is initiated, utilizing the confirmation to authorize users for transactions and efficient budget management. It's worth noting that this was a demonstration app.",
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
      technologies: ["ReactJS", "BootstrapCSS", "JSON-Server"],
      category: "Web App",
      date: "Aug, 2022 - 3 days",
      github: "https://github.com/eddie-2020/task-tracker",
      description:
        "Created for experimentation, this prototype app explores the integration of React with a JSON-Server dependency. Additionally, I've established a platform where users can effectively manage and chronicle their events in a timely fashion.",
    },
    {
      name: "MovieLand App",
      pictures: [
        {
          img: require("./src/assets/projects/movie_app/1.png"),
          title: "Home Page",
        },
      ],
      technologies: ["ReactJS", "CSS", "OMDB API"],
      category: "Web App",
      date: "Nov, 2022 - 1 day",
      github: "https://github.com/eddie-2020/movie-search-engine",
      description:
        "This is a demonstration application I created using React to retrieve data from the OMDB RESTful API and facilitate the filtering of movie listings. The primary feature of this application allows users to effortlessly search for their preferred movies.",
    },
  ],
};

export default info;
