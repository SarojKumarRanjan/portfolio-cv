import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

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
  avatarUrl: "https://iili.io/2DqYutf.png",
  personalWebsiteUrl: "https://sarojranjan.me",
  contact: {
    email: "dev.saroj2003@gmail.com",
    tel: "+918210807752",
    social: [
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
        url: "https://x.com/saroj02",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Dronacharya Group of Institutions",
      degree: "Bachelor of Technology in Electronics and Communication",
      start: "2022",
      end: "2026",
    },
    {
      school: "A.B.S Inter College",
      degree: "Intermediate of Science",
      start: "2019",
      end: "2021",
    },
  ],
  work: [
  /*  {
      company: "Film.io",
      link: "https://film.io",
      badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js"],
      title: "Software Architect",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description: (
        <>
          Leading technical architecture of a blockchain-based film funding
          platform.
          <ul className="list-inside list-disc">
            <li>
              Architecting migration from CRA to Next.js for improved
              performance, SEO, and DX
            </li>
            <li>
              Established release process enabling faster deployments and
              reliable rollbacks
            </li>
            <li>
              Implementing system-wide monitoring and security improvements
            </li>
          </ul>
        </>
      ),
     },
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
    "SQL",
    "Git",
    "Node.js",
    "Express",
    "React/Next.js",
    "Redux Toolkit",
    "React Query",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
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
      title: "Centralized Trading Exchange Platform",
      techStack: ["TypeScript","Express", "Next.js", "PostgreSQL","Redis","WebSockets"],
      description:
        "Distributed centralized trading exchange for real-time asset trading. Utilized a WebSocket server to deliver real-time updates for depth, tickers, trades, and trading charts.",
 
      logo: MonitoLogo,
      link: {
        label: "exchange.sarojranjan.me",
        href: "https://exchange.sarojranjan.me/",
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
      ],
      description:
        "A web-based video browsing platform using Node.js, Express.js,MongoDB and React. Incorporated client-side caching, query invalidation, and optimistic UI updates using React Query.",
      logo: ConsultlyLogo,
      link: {
        label: "videohub.sarojranjan.me",
        href: "https://videohub.sarojranjan.me/",
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
    },
  ],
} as const;
