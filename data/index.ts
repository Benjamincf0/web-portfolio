import { start } from "repl";

export const navItems = [
  // { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  // {
  //   id: 1,
  //   title: "I prioritize client collaboration, fostering open communication ",
  //   description: "",
  //   className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
  //   imgClassName: "w-full h-full",
  //   titleClassName: "justify-end",
  //   img: "/b1.svg",
  //   spareImg: "",
  // },
  // {
  //   id: 2,
  //   title: "I'm very flexible with time zone communications",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "",
  //   spareImg: "",
  // },
  // {
  //   id: 4,
  //   title: "Tech enthusiast with a passion for development.",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "/grid.svg",
  //   spareImg: "/b4.svg",
  // },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  // {
  //   id: 6,
  //   title: "Do you want to start a project together?",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  //   img: "",
  //   spareImg: "",
  // },
  {
  id: 7,
  title: "McGill University",
  description: "U2 Software COOP",
  className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  imgClassName: "",
  titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  img: "",
  spareImg: "",
  },
  {
  id: 3,
  title: "My tech stack",
  description: "I love learning new technologies",
  className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  imgClassName: "",
  titleClassName: "justify-center",
  img: "",
  spareImg: "",
  },
  {
  id: 8,
  title: "",
  description: "",
  className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  imgClassName: "",
  titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  img: "",
  spareImg: "",
},
];

export const projects = [
  {
    id: 1,
    title: "Neural Network Library From Scratch",
    des: "A neural network library built from scratch using NumPy. This project implements backpropagation, gradient descent, and various activation functions to create a deep learning system capable of recognizing handwritten digits with ~96% accuracy.",
    img: "/projects/neural_net.gif",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/Benjamincf0/AI",
  },
  {
    id: 2,
    title: "WebChat: A Real-Time Messaging App",
    des: "Real-time messaging web app that allows you to connect with your friends and family",
    img: "/projects/webchat.png",
    iconLists: ["/logos/firebase.svg", "/logos/css.svg", "/logos/html5.svg", "/logos/javascript.svg", "/logos/vuejs.svg"],
    link: "https://github.com/Benjamincf0/WebChat?tab=readme-ov-file",
    livesite: "https://projet-personnel-245c7.firebaseapp.com/",
  },
  {
    id: 3,
    title: "Pendulum physics simulation",
    des: "This project demonstrates ",
    img: "/projects/ode.gif",
    iconLists: ["/logos/css.svg", "/logos/html5.svg", "/logos/javascript.svg"],
    link: null,
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Research Assistant - iSMART AI Lab, McGill University",
    desc: "Assisted in the data collection and preprocessing for cutting edge AI research.",
    className: "md:col-span-2 bg-[#3b0e19]", // change to md:col-span-2
    thumbnail: "/exp1.png",
    start: "April 2024",
    end: "Present",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2 bg-gray-900", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  //   start: "April 2024",
  //   end: "Present",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];