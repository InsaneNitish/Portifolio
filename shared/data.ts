export const personalInfo = {
  name: "Nitish Thakur",
  title: "Full Stack Developer",
  email: "nitishtthakur786@gmail.com",
  phone: "+91-7876490511",
  location: "Delhi, India",
  bio: "I build engaging web experiences with a focus on both aesthetics and functionality. Based in Delhi, specializing in MERN stack development.",
  profileImage: "https://github.com/InsaneNitish/Portifolio/blob/final/attached_assets/dp.png", // Replace with actual profile image URL
  socialLinks: {
    github: "https://github.com/InsaneNitish",
    linkedin: "https://linkedin.com/in/code-sane",
    twitter: "https://twitter.com/",
  }
};

export const education = [
  {
    degree: "B.Sc.(Hons.) Computer Science",
    institution: "Keshav Mahavidyalaya (University of Delhi)",
    year: "2021-2025",
    score: "8.5 CGPA (Till 4rd Semester)"
  },
  {
    degree: "AISSCE (Science)",
    institution: "Jawahar Navodaya Vidyalaya, Dungrin (Hamirpur H.P.)",
    year: "2021",
    score: "92.20% [461/500]"
  },
  {
    degree: "AISSE",
    institution: "Jawahar Navodaya Vidyalaya, Dungrin (Hamirpur H.P.)",
    year: "2019",
    score: "89.20% [446/500]"
  }
];

export const experience = [
  {
    title: "Intern",
    company: "Dry-Code",
    duration: "April 2023 – May 2023",
    description: [
      "Worked as Web Developer.",
      "Completed two individual projects. Developed Weather Web App and Portfolio Website.",
      "Gained valuable experience in project management and client expectations."
    ]
  }
];

export const projects = [
  {
    title: "Indian Heritage Explorer (SanskritiSync)",
    description: "A React app showcasing Indian heritage sites with user authentication and Google OAuth, using Appwrite for backend services.",
    technologies: ["React.js", "Appwrite", "Google Maps API"],
    image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c",
    githubLink: "https://github.com/InsaneNitish/sankritisync",
    liveLink: "https://insanenitish.github.io/sankritisync/",
    featured: true,
    category: "Featured"
  },
  {
    title: "Asteroid Data API",
    description: "Built a well-structured API with Node.js and Express.js for real-time asteroid data delivery for a hackathon project.",
    technologies: ["Node.js", "Express.js"],
    image: "https://img.freepik.com/premium-photo/large-meteor-impact-planet-earth-generative-ai_438099-16529.jpg?uid=R187575113&ga=GA1.1.161557203.1738666346&semt=ais_hybrid",
    githubLink: "https://github.com/InsaneNitish/api",
    liveLink: "#",
    featured: false,
    category: "API"
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "Created a fully functional Tic-Tac-Toe game with React.js, featuring an interactive front-end and engaging sound effects.",
    technologies: ["React.js"],
    image: "https://cdn-icons-png.flaticon.com/512/10199/10199746.png",
    githubLink: "https://github.com/InsaneNitish/Tic-Tac-Toe-new/",
    liveLink: "https://insanenitish.github.io/Tic-Tac-Toe-new/",
    featured: false,
    category: "Game"
  },
  {
    title: "Weather Web App",
    description: "Developed during my internship at Dry-Code, this app provides real-time weather information with a clean user interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
    image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b",
    githubLink: "https://github.com/InsaneNitish/Dry-Code-Intership-Projects-/tree/WeatherApp",
    liveLink: "https://743249db-49e8-464a-b995-0b725e5beb72-00-117l3hr77nx3j.sisko.replit.dev/",
    featured: false,
    category: "Web App"
  }
];

export const skills = {
  technical: [
    {
      name: "Frontend Development",
      level: 90,
      items: ["React.js", "JavaScript", "HTML5", "CSS3", "ES7"]
    },
    {
      name: "Backend Development",
      level: 85,
      items: ["Node.js", "Express.js", "Appwrite", "REST API"]
    },
    {
      name: "Database Management",
      level: 80,
      items: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      name: "Programming Languages",
      level: 85,
      items: ["JavaScript", "C++", "OOP"]
    }
  ],
  soft: [
    {
      name: "Communication",
      icon: "comments",
      description: "Professional communication skills in team settings"
    },
    {
      name: "Team Management",
      icon: "users",
      description: "Coordinating team efforts toward project goals"
    },
    {
      name: "Problem Solving",
      icon: "lightbulb",
      description: "Analytical approach to technical challenges"
    },
    {
      name: "Active Listening",
      icon: "headphones",
      description: "Attentive to details and requirements"
    }
  ]
};

export const courses = [
  {
    title: "Web Development Boot camp",
    instructor: "Angela Yu",
    year: "2024",
    description: "Covered React.js, Node.js, PostgreSQL, and Blockchain. Completed 62 hours of content."
  },
  {
    title: "Git & GitHub Master Course",
    instructor: "",
    year: "2024",
    description: "Completed 11 hours of content on Git, GitHub, and version control systems."
  }
];

export const awards = [
  {
    title: "Runners-up – CodeXccelrator",
    organization: "Keshav Mahavidyalaya, DU",
    year: "2023",
    icon: "trophy"
  },
  {
    title: "Reliance-Foundation Scholar",
    organization: "Recognized for academic excellence",
    year: "2023",
    icon: "award"
  },
  {
    title: "Internal SIH 24 Winner",
    organization: "Full-Stack Developer of DharoharDEVS Team - Keshav Mahavidyalaya, DU",
    year: "2023",
    icon: "medal"
  }
];

export const services = [
  "Web Development",
  "MERN Stack Development",
  "Frontend Development",
  "Backend Development"
];
