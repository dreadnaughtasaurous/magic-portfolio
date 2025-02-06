import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "James",
  lastName: "Holden",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Captain",
  avatar: "/images/avatar.jpg",
  location: "Australia/Melbourne", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [""], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Former ice hauler turned accidental hero and current Captain of the Rocinante. 
      
      <br />I have a terrible habit of broadcasting every conspiracy I stumble upon and a moral compass 
      that points stubbornly to "do the right thing, consequences be damned." 
        
      <br />But hey, at least I make a decent cup of coffee and haven't gotten my crew killed yet (though not for lack of trying)
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:example@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `I'm just a dude, playing as another dude`,
  headline: <>Captain, The Rocinate</>,
  subline: (
    <>
      I'm James Holden, and I approve this message
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role},
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        If you're looking for someone who can turn any simple mission into an 
        interplanetary incident while maintaining a sense of humor about it, I'm your guy. 
        Eight parents taught me how to share, the UN Navy taught me discipline, 
        and the void of space taught me that sometimes the best solution is just to shoot your way out.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            // src: "/images/projects/project-01/cover-01.jpg",
            // alt: "Once UI Project",
            // width: 16,
            // height: 9,
          },
        ],
      },
      {
        company: "Pur'n'Kleen Water Company",
        role: "Executive Officer",
        achievements: [
          <>
            Maintained 100% response rate to distress signals (against direct corporate orders
            - you're welcome, humanity)
          </>,
          <>
            Successfully managed crew morale through innovative methods like "looking the other way" 
            regarding fraternisation policies
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "The Rocinate Co.",
        description: <>kickstarted an interplanetary war, saved humanity a few times, fought some ancient alien tech, 
        and somehow managed to keep the crew intact</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            // src: "/images/projects/project-01/cover-04.jpg",
            // alt: "Project image",
            // width: 16,
            // height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Past Work",
  title: "The Rocinate's Past Work",
  description: `Saving humanity, one crisis at a time`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `Some stuff I did`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
