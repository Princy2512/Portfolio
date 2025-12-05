import {
  Code,
  Server,
  Database,
  Layers,
  CheckCircle,
  Globe,
  Terminal,
  Cloud,
  GitBranch,
  Cpu,
  Layout,
} from "../icons/Icons";

const portfolioData = {
  personalInfo: {
    name: "Shubham Shekhaliya",
    titles: ["Software Engineer", "Backend Devloper", "Java Devloper", "Competitive Programer"],
    tagline: "Building scalable backend systems and seamless frontend experiences.",
    location: "Surat, India",
    email: "shubhamshekhaliya191@gmail.com",
    phone: "+91-9558351565",
    profileImage:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Shubham&backgroundColor=e2e8f0&clothing=blazerAndShirt&eyes=happy&top=shortHairShortFlat&skinColor=light",
    resumeUrl: "#",
    social: {
      linkedin: "https://www.linkedin.com/in/shubham-shekhaliya/",
      github: "https://github.com/shubham4756",
    },
  },
  skills: {
    languages: [
      { name: "Java", icon: Code },
      { name: "C++/C", icon: Code },
      { name: "SQL", icon: Database },
      { name: "JavaScript", icon: Code },
    ],
    backend: [
      { name: "Spring Boot", icon: Server },
      { name: "Spring Batch", icon: Layers },
      { name: "Microservices", icon: CheckCircle },
      { name: "RESTful APIs", icon: Globe },
      { name: "Hibernate", icon: Database },
      { name: "Maven/Gradle", icon: Layers },
    ],
    frontend: [
      { name: "React.js", icon: Layout },
      { name: "HTML/CSS", icon: Globe },
      { name: "Vue.js", icon: Layout },
      { name: "AngularJS", icon: Layout },
      { name: "VS Code", icon: Terminal },
    ],
    tools: [
      { name: "AWS (S3, SQS)", icon: Cloud },
      { name: "Git & GitHub", icon: GitBranch },
      { name: "JIRA", icon: Terminal },
      { name: "Docker", icon: Layers },
      { name: "Data Structures", icon: Cpu },
      { name: "Algorithms", icon: Cpu },
    ],
  },
  experience: [
    {
      company: "Chargebee",
      role: "Software Development Engineer",
      period: "Aug 2022 - Current",
      location: "Bengaluru, India",
      description: [
        "Played a pivotal role in developing the CB Payments product from its early phase, supporting over 12+ million total transactions volume.",
        "Successfully integrated Adyen, a new payment facilitator, covering onboarding, zero auth, transactions, refunds, disputes, and deposits.",
        "Managed webhooks for various events, ensuring smooth data state transitions through a state machine mechanism.",
        "Developed a portal dashboard with interactive graphs using eChart.js and enabled multi-tab functionality.",
        "Transitioned the entire portal UI from static to dynamic timezone support for microservices synchronization.",
        "Developed asynchronous data export for deposits, disputes, and transactions as CSV files using Apache Commons and AWS S3.",
        "Integrated the Online Banking Poland payment method, with one client processing more than 50% of their transactions using it.",
        "Single-handedly developed a new synchronous payment flow with 3D Secure support to enhance security and reduce fraud risk.",
        "Upgraded CB Payments' Spring Boot from 2.6.X to 3.3.X for better performance and security, and established a CI/CD pipeline.",
      ],
    },
    {
      company: "iMocha",
      role: "Subject Matter Expert (Spring Boot)",
      period: "Jan 2022 - Jul 2022",
      location: "Pune, India",
      description: [
        "Developed industry-standard Spring Boot projects using MVC architecture and specific library versions.",
        "Conducted unit testing to assess candidates and created clear Project Requirement Documents.",
        "Created engaging technical challenges with solutions to assess candidates' skills in data structures and algorithms.",
      ],
    },
    {
      company: "Mastercard",
      role: "Software Development Engineer Intern",
      period: "May 2021 - Jul 2021",
      location: "Pune, India",
      description: [
        "Developed a Spring Batch job using Java and Spring Framework to extract and process data from Excel sheets with Apache POI.",
        "Ensured data accuracy through validation and performed CRUD operations on a database using JDBC.",
        "Conducted comprehensive testing with JUnit for quality assurance.",
      ],
    },
  ],
  projects: [
    {
      link:"https://github.com/shubham4756/Quiz-Point",
      title: "Assessment Web Application",
      tech: "Java, Spring Framework, MongoDB, REST API",
      description:
        "A Portal designed to efficiently manage user and quiz data, aiming to automate the process of quiz management. It provides authenticated users with the capability to create and organize quizzes.",
    },
    {
      link:"https://github.com/shubham4756/MyCart",
      title: "E-Commerce Android Application",
      tech: "Java, XML, DBMS, Firebase, PayTm",
      description:
        "An application offers Wishlist, Cart, Rewards, and Order Status features. It utilizes Android Studio, Firebase, and the PayTm Online Payment Gateway for real-time product stock calculations.",
    },
    {
      link:"https://github.com/shubham4756/Document-Scrutiny-System",
      title: "Document Scrutiny System",
      tech: "PHP, MySQL, JavaScript, HTML, CSS",
      description:
        "Enables organizations to validate user documents for multiple applications while offering users the ability to track their application status. Streamlines communication for efficient verification.",
    },
    {
      link:"https://github.com/shubham4756/Social-Media-Users-Database-Managment-System",
      title: "Social Media Users Database Managment System",
      tech: "DBMS, PL/SQL, RDBMS, Java, JDBC",
      description:
        "A java menu-driven program of Database Application using JDBC and MYSQL Database For Social Media Use Database.",
    },
  ],
  achievements: [
    "Rank 7th among all NITs and Rank 1st from NIT, Surat in Codathon - All India Inter NIT Coding Competition 2021.",
    "Secured Rank 72nd out of 3.5k participate in CodeChef Starters 13 Division 2 (Rated).",
    "2nd Runner up in SVNIT Tech-Fest Coding Competition.",
    "Secured 6th position in INCEPTION 4.0 which is an Annual coding competition of NIT-Surat.",
    "Ranked 297th in Google Kick Start - 2020 Round H.",
    "Ranked under 300 out of 16000+ participants in Credit Suisse global coding challenge.",
    "Qualified for Facebook HackerCup-2020 Round 1.",
  ],

  education: [
    {
      school: "National Institute of Technology (SVNIT - Surat)",
      degree: "B.Tech in Computer Engineering",
      year: "Jul 2018 - May 2022",
      score: "CGPA 8.22",
    },
  ],

  programmingProfiles: [
  {
    platform: "LeetCode",
    profileUrl: "https://leetcode.com/u/shubham4756/",
    maxRating: "1770",
    problemsSolved: "700+"
  },
  {
    platform: "Codeforces",
    profileUrl: "https://codeforces.com/profile/shubh",
    title: "Specialist",
    maxRating: "1591"
  },
  {
    platform: "HackerEarth",
    profileUrl: "https://www.hackerearth.com/@shubham4756/",
    maxRating: "1683",
    problemsSolved: "600+"
  },
  {
    platform: "CodeChef",
    profileUrl: "https://www.codechef.com/users/shubham4756",
    stars: "4★",
    maxRating: "1974"
  },
  {
    platform: "GeeksForGeeks",
    profileUrl: "https://www.geeksforgeeks.org/profile/shubhamshekhaliya",
    problemsSolved: "200+"
  },
],

};

export default portfolioData;
