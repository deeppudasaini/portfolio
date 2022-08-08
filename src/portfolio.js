/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Deep's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Deep Pudasaini Portfolio",
    type: "website",
    url: "http://deeppudasaini.com.np/",
  },
};

//Home Page
const greeting = {
  title: "Deep Pudasaini",
  logo_name: "Deep Pudasaini",
  nickname: "-_-",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1DpqWpuHwZF9VpYGZcoUWkgSoBpQ4Fr6f/view?usp=sharing",
  portfolio_repository: "",
  githubProfile: "https://github.com/deeppudasaini",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/deeppudasaini",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/deep-pudasaini-87bb921a0/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
 
  {
    name: "Gmail",
    link: "mailto:iamdeep8888@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100009801221837",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/deeppudasaini07/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science",
      fileName: "DataScienceImg",
      skills: [
        "🤜 Developing highly scalable production ready models for various machine learning and deep learning",
        "🤜 Analysing diffferent use cases using various data analysis tools and Techniques",

      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "🤜 Building responsive website front end using React-Redux, VueJs and other frontend frameworks like Bootstrap, Material UI, Tailwind CSS, etc.",
        "🤜 Creating application backend in many frameworks such as Node frameworks like Express, NestJs and Python framework like Django",
        "🤜 Creating and manupulating databases using SQL and NoSQL databases like MongoDB and Neo4j",

      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "green",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#f34f29",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "blue",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "green",
          },
        },
       
      ],
    },
    
  ],
};


const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Credly",
      iconifyClassname: "simple-icons:credly",
      style: {
        color: "orange",
      },
      profileLink: "https://www.credly.com/users/deep-pudasaini/badges",
    },
    {
      siteName: "FreeCodeCamp",
      iconifyClassname: "simple-icons:freecodecamp",
      style: {
        color: "black",
      },
      profileLink: "https://www.kaggle.com/deeppudasaini",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/deeppudasaini",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title:"Kathmandu Model College",
      subtitle:"+2 in Science",
      logo_path:"kmc2.png",
      alt_name:"KMC",
      duration:"2017 - 2019",
      descriptions: [
        // "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        // "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://ktmmodelcollege.edu.np/",


    },
    {
      title: "NAAYA AAYAM MULTI-DISCIPLINARY INSTITUTE (NAMI)- University of Northampton",
      subtitle: "BSc(Hons) Software Engineering",
      logo_path: "uon.png",
      alt_name: "IIITDM Kurnool",
      duration: "2019 - 2022",
      descriptions: [
        // "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        // "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.northampton.ac.uk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
      subtitle: "- AWS",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/64bd548b-5a9a-4306-8f80-7398aabd4c8a",
      alt_name: "AWS",
      color_code: "#8C151599",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      subtitle: "- AWS",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/9c4c1828-8790-48f4-9379-a1c070fbd20d",
      alt_name: "AWS",
      color_code: "#00000099",
    },
    {
      title: "Kaggle’s Intro to Machine Learning",
      subtitle: "- KAGGLE",
      logo_path: "kakggle.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Kaggle",
      color_code: "white",
    },
    {
      title: "Kaggle’s Python Course",
      subtitle: "- KAGGLE",
      logo_path: "kakggle.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "Kaggle",
      color_code: "white",
    },
    {
      title: "SoloLearn’s Python 3 Course",
      subtitle: "- SoloLearn",
      logo_path: "sl.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "SoloLearn",
      color_code: "#D83B0199",
    },
    {
      title: "SoloLearn’s Java Course",
      subtitle: "- SoloLearn",
      logo_path: "sl.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "SoloLearn",
      color_code: "green",
    },

  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
       
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Laravel and VueJs Intern (Remote)",
          company: "Lipi Technology",
          company_url: "https://lipi.com.np/",
          logo_path: "lipi.png",
          duration: "July 2021 - October 2021",
          location: "Balkumari, Kathmandu",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
       
      ],
    },
 
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science and Web projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Data Science",
  description:
    "I have worked on my own Data Science Projects including some of the college projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "s2.png",
    description:
      "",
  },
  blogSection: {
    title: "",
    subtitle:
      "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Kageshwori Manohara-8, Kathmandu, Nepal",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/BQMSaJtTHQKAdAJK8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+977 9863336834",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
