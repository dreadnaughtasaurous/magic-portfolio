import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "James",
  lastName: "Holden",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Captain",
  avatar: "/images/avatar.jpg",
  location: "Australia/Melbourne",
  languages: [],
};

const newsletter = {
  display: true,
  title: (
    <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
      Subscribe to {person.firstName}'s Newsletter
    </h2>
  ),
  description: (
    <div className="prose prose-lg max-w-none text-gray-700">
      <p className="leading-relaxed">
        Former ice hauler turned accidental hero and current Captain of the Rocinante.
      </p>
      
      <p className="leading-relaxed">
        I have a terrible habit of broadcasting every conspiracy I stumble upon and a moral compass 
        that points stubbornly to "do the right thing, consequences be damned."
      </p>
      
      <p className="leading-relaxed">
        But hey, at least I make a decent cup of coffee and haven't gotten my crew killed yet 
        (though not for lack of trying)
      </p>
    </div>
  ),
};

const social = [
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
  title: (
    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
      {person.name}'s Portfolio
    </h1>
  ),
  description: (
    <p className="text-xl text-gray-600 mt-4">
      I'm just a dude, playing as another dude
    </p>
  ),
  headline: (
    <div className="text-2xl font-semibold text-indigo-600 mb-4">
      Captain, The Rocinate
    </div>
  ),
  subline: (
    <div className="text-lg text-gray-700 italic">
      I'm James Holden, and I approve this message
    </div>
  ),
};

const about = {
  label: "About",
  title: (
    <h2 className="text-3xl font-bold text-gray-900 mb-8">
      About me
    </h2>
  ),
  description: (
    <p className="text-lg text-gray-700 leading-relaxed">
      Meet {person.name}, {person.role}
    </p>
  ),
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
    title: (
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Introduction
      </h3>
    ),
    description: (
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed">
          If you're looking for someone who can turn any simple mission into an 
          interplanetary incident while maintaining a sense of humor about it, I'm your guy. 
          Eight parents taught me how to share, the UN Navy taught me discipline, 
          and the void of space taught me that sometimes the best solution is just to shoot your way out.
        </p>
      </div>
    ),
  },
  work: {
    display: false,
    title: (
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Work Experience
      </h3>
    ),
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          (
            <div className="text-gray-700 leading-relaxed">
              Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
              engagement and 30% faster load times.
            </div>
          ),
          (
            <div className="text-gray-700 leading-relaxed">
              Spearheaded the integration of AI tools into design workflows, enabling designers to
              iterate 50% faster.
            </div>
          ),
        ],
        images: [],
      },
      {
        company: "Pur'n'Kleen Water Company",
        role: "Executive Officer",
        achievements: [
          (
            <div className="text-gray-700 leading-relaxed">
              Maintained 100% response rate to distress signals (against direct corporate orders
              - you're welcome, humanity)
            </div>
          ),
          (
            <div className="text-gray-700 leading-relaxed">
              Successfully managed crew morale through innovative methods like "looking the other way" 
              regarding fraternisation policies
            </div>
          ),
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: (
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Studies
      </h3>
    ),
    institutions: [
      {
        name: "University of Jakarta",
        description: (
          <div className="text-gray-700 leading-relaxed">
            Studied software engineering.
          </div>
        ),
      },
      {
        name: "Build the Future",
        description: (
          <div className="text-gray-700 leading-relaxed">
            Studied online marketing and personal branding.
          </div>
        ),
      },
    ],
  },
  technical: {
    display: false,
    title: (
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Technical skills
      </h3>
    ),
    skills: [
      {
        title: "Figma",
        description: (
          <div className="text-gray-700 leading-relaxed">
            Able to prototype in Figma with Once UI with unnatural speed.
          </div>
        ),
        images: [],
      },
      {
        title: "The Rocinate Co.",
        description: (
          <div className="text-gray-700 leading-relaxed">
            Kickstarted an interplanetary war, saved humanity a few times, fought some ancient alien tech, 
            and somehow managed to keep the crew intact
          </div>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: (
    <h2 className="text-3xl font-bold text-gray-900 mb-6">
      Writing about design and tech...
    </h2>
  ),
  description: (
    <p className="text-lg text-gray-700 leading-relaxed">
      Read what {person.name} has been up to recently
    </p>
  ),
};

const work = {
  label: "Past Work",
  title: (
    <h2 className="text-3xl font-bold text-gray-900 mb-6">
      The Rocinate's Past Work
    </h2>
  ),
  description: (
    <p className="text-lg text-gray-700 leading-relaxed">
      Saving humanity, one crisis at a time
    </p>
  ),
};

const gallery = {
  label: "Gallery",
  title: (
    <h2 className="text-3xl font-bold text-gray-900 mb-6">
      My photo gallery
    </h2>
  ),
  description: (
    <p className="text-lg text-gray-700 leading-relaxed">
      Some stuff I did
    </p>
  ),
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
