import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon ,GeeksforGeeksIcon,LeetCodeIcon} from "@/components/icons";

export const RESUME_DATA = {
  name: "Saroj Kumar Ranjan",
  initials: "SR",
  location: "Delhi NCR, India",
  locationLink: "https://www.google.com/maps/place/Noida",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Backend-focused Full Stack Engineer specializing in high-performance
      React applications, scalable Node.js services, and real-time collaboration
      systems.
    </>
  ),
  
  avatarUrl: "https://iili.io/3zgygLl.jpg",
  contact: {
    social: [
      {
      name:"GeeksforGeeks",
      url:"https://www.geeksforgeeks.org/user/sarojranjan02/",
      icon: GeeksforGeeksIcon,
      },
      {
       name:"LeetCode",
       url:"https://leetcode.com/u/SarojKumarRanjan/",
       icon: LeetCodeIcon,
      },
      {

        name: "GitHub",
        url: "https://github.com/SarojKumarRanjan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saroj-kumar-ranjan-3b82b2249/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/mildlybuffering",
        icon: XIcon,
      },
    ],
    email: "dev.saroj2003@gmail.com",
    tel: "+918210807752",
    
  },
  personalWebsiteUrl: "https://sarojranjan.tech",
  education: [
    {
      school: "Dronacharya Group of Institutions",
      degree: "Bachelor of Technology in Electronics and Communication",
      start: "",
      end: "2026",
    }/* ,
     {
      school: "A.B.S Inter College",
      degree: "Intermediate of Science",
      start: "",
      end: "2021",
    }, */ 
  ],
  work: [
    {
      company: "Zimyo HR Software",
      link: "https://www.zimyo.com/",
      badges: ["React.js","TypeScript","MySQL","Express.js"],
      title: "Software Engineering Intern",
      logo: ConsultlyLogo,
      start: "June , 2026",
      end: null,
      description: (
        <>
          Working on enhancing and maintaining features of the Zimyo HRMS.
          <ul className="list-inside list-disc">
            <li>
              Migrated the ATS , Payroll and LMS Module to new UI component Library.
            </li>
            <li>
               Worked on Integrating more than 5 Job Portals including Naukri.com,Indeed etc. with ATS module.
            </li>
            <li>
              Rewrote the bulk file upload functionality using pre-signed URLs to enhance  performance.
            </li>
            <li>
             Contributed over 10+ feature releases and key improvements to Zimyo HRMS, enhancing user experience in just two months.
            </li>
          </ul>
        </>
      ),
     },

     /*
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: [
        "Remote",
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Tailwind CSS",
      ],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description: (
        <>
          Senior developer and squad leader for an enterprise agile meeting
          platform.
          <ul className="list-inside list-disc">
            <li>
              Built design system with Tailwind CSS, improving development speed
              and time to market
            </li>
            <li>
              Implemented engineering practices: PR automation, code review
              guidelines, and workflows
            </li>
            <li>
              Open source contributions to Relay DevTools and React i18n tooling
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
          <ul className="list-inside list-disc">
            <li>
              Led frontend team at Evercast, building real-time platform
              supporting 30+ users per room with HD streaming and collaboration
              tools
            </li>
            <li>
              Developed offline-first Android app for DKMS, improving donor
              registration process
            </li>
            <li>
              Led development teams across multiple successful client projects
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: ["On Site", "Android", "Java", "Kotlin"],
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description: (
        <>
          First Android developer, grew and led a team of 15+ engineers while
          establishing engineering culture.
          <ul className="list-inside list-disc">
            <li>
              Developed apps for major Polish companies including LOT, Polskie
              Radio, and Agora
            </li>
            <li>Built and mentored high-performing mobile development team</li>
          </ul>
        </>
      ),
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: ["On Site", "C/C++", "LTE", "Agile"],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description:
        "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.",
    }, */
    
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "c++",
    "mySQL",
    "Git",
    "Node.js",
    "Express",
    "React/Next.js",
    "Redux Toolkit",
    "React Query",
    "Tailwind CSS",
    "MongoDB",
    "Prisma ORM",
    "WebRTC",
    "WebSockets",
    "Redis",
    "Docker",
    "AWS",
    "Cloudflare",
  ],
  projects: [
    {
      title:"MCQ Test Platform",
      techStack: ["TypeScript", "Express","Redis", "React.js","Zustand", "NeonDB", "Tailwind CSS","Shadcn"],
      description: "A web-based platform for practicing customized multiple-choice quizzes. Users can create quizzes with various question types, set time limit and can choose desired topics for that test.",
      logo: MonitoLogo,
      link: {
        label: "test.sarojranjan.tech",
        href: "https://test.sarojranjan.tech/",
      },
    },
    {
      title:"Drawpad",
      techStack: ["TypeScript", "socket.io", "React.js", "HTML Canvas","Zustand" ,"Tailwind CSS", "Vercel"],
      description: "A collaborative whiteboard platform for brainstorming and design sessions. Users can create/join rooms to draw together in real-time, with features like multiple brush types, colors, and an eraser and many more tool.",
      logo: MonitoLogo,
      link: {
        label: "drawpad.sarojranjan.tech",
        href: "https://drawpad.sarojranjan.tech/",
      },
    },

    {
      title: "VideoHub",
      techStack: [
        "TypeScript",
        "Express",
        "React.js",
        "React Query",
        "Tailwind CSS",
        "JWT",
        "MongoDB",
        "Cloudinary",
        "AWS",
        "Docker",
      
      ],
      description:
        "A web-based video browsing platform using Node.js, Express.js,MongoDB and React. Incorporated client-side caching, query invalidation, and optimistic UI updates using React Query.",
      logo: ConsultlyLogo,
      link: {
        label: "videohub.sarojranjan.tech",
        href: "https://video.sarojranjan.tech/",
      },
    },
    /* {
      title: "Centralized Trading Exchange Platform",
      techStack: ["TypeScript","Express", "Next.js", "PostgreSQL","Redis","WebSockets"],
      description:
        "Distributed centralized trading exchange for real-time asset trading. Utilized a WebSocket server to deliver real-time updates for depth, tickers, trades, and trading charts.",
 
      logo: MonitoLogo,
      link: {
        label: "exchange.sarojranjan.me",
        href: "https://github.com/SarojKumarRanjan/Crypto-Exchange",
      },
    },
    
    {
      title: "Multithreaded Proxy Web Server",
      techStack: ["c","Multithreading","Linked-List","LRU-Cache"],
      description:
        "Built a multithreaded proxy server  for handling concurrent client requests and cache the requests. Integrated an LRU-based caching mechanism to store frequently accessed responses efficiently.",
      logo: MonitoLogo,
      link: {
        label: "proxy.sarojranjan.me",
        href: "https://github.com/SarojKumarRanjan/Multithreaded-Proxy-Web-Server",
      },
    }, */
    {
      title: "Blog App",
      techStack: ["Javascript","Appwrite","React","Serverless","Tailwind CSS","TinyMCE"],
      description:
        "A blog application built with Appwrite as backend service and React. Implemented user authentication, real-time updates, and a rich text editor for creating and editing blog posts.",
      logo: MonitoLogo,
      link: {
        label: "blog.sarojranjan.tech",
        href: "https://blog.sarojranjan.tech",
      },
    }
  ],
} as const;
