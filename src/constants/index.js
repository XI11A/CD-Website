import { people01, people02, people03,deepak, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, f1, f2, f3, f4, f5, c1, c2, c3, c4, c5  } from "../assets";

export const navLinks = [
  {
    id: "/services",
    title: "Services",
  },
  {
    id: "/security",
    title: "Security",
  },
  {
    id: "/company",
    title: "Company",
  },
  {
    id: "/partners",
    title: "Partners",
  },
  {
    id: "/quote",
    title: "Quote",
  },
  {
    id: "/joke",
    title: "Joke",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: f1,
    title: "Cloud Neutral",
    content:
      "Build Cloud Datacenters in AWS, Azure, Google, etc. based on Business Technology and localization Requirements.",
  },
  {
    id: "feature-2",
    icon: f2,
    title: "Cloud Transformation",
    content:
      "Infrastructure Design and Architecture based on Application and Technical Requirements.",
  },
  {
    id: "feature-3",
    icon: f3,
    title: "Applications Management",
    content:
      "Project / Program Management of Cloud Implementations. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
  },
  {
    id: "feature-4",
    icon: f4,
    title: "Data center",
    content:
      "Data Center Consolidations. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
  },
  {
    id: "feature-5",
    icon: f5,
    title: "Business Continuity",
    content:
      "Business Continuity Practices. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Cloud Destinations partners with us to come up with creative approaches and solutions to solve our real world business challenges, which has led to ample new opportunities. They function as an extension of our own internal department and have been a key part of our success.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Exceptional customer service and very technically proficient support makes Cloud Destinations stand apart.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Always reliable and fast, even after I leave for the day, I can always count on you guys to get requests done. Thank you!",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "awards",
    title: "Awards",
    value: "246",
  },
  {
    id: "projects",
    title: "Projects Done",
    value: "456",
  },
  {
    id: "expertise",
    title: "Years of Expertise",
    value: "6",
  },
  {
    id: "clients",
    title: "Satisfied Clients",
    value: "426",
  },
  {
    id: "employees",
    title: "Expert Employees",
    value: "258",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Resource",
        link: "/resource/",
      },
      {
        name: "Who we are",
        link: "/who-we-are/",
      },
      {
        name: "What we do",
        link: "/services/",
      },
      {
        name: "Why Cloud Destinations",
        link: "/career/",
      },
      {
        name: "Terms & Services",
        link: "/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "/help-center/",
      },
      {
        name: "Partners",
        link: "/partners/",
      },
      {
        name: "Suggestions",
        link: "/suggestions/",
      },
      {
        name: "Newsletters",
        link: "/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/clouddestinations",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/cloud-destinations",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
  // {
  //   id: "client-5",
  //   logo: c1,
  // },
  // {
  //   id: "client-6",
  //   logo: c2,
  // },
  // {
  //   id: "client-7",
  //   logo: c3,
  // },
  // {
  //   id: "client-8",
  //   logo: c4,
  // },
  // {
  //   id: "client-9",
  //   logo: c5,
  // },
];

// export const API_URL = "https://api.xi11a.eu.org/"
export const API_URL = "http://localhost:8080/"
export const QUOTES = "quotes"
export const JOKES = "jokes"
export const RANDOM = "random"