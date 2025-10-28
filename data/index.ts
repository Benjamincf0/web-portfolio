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
  title: "U2 Software Co-op",
  description: "McGill University",
  className: "lg:col-span-3 md:col-span-3 md:row-span-1",
  imgClassName: "",
  titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  img: "",
  spareImg: "",
  },
  // {
  // id: 3,
  // title: "My tech stack",
  // description: "I love learning new technologies",
  // className: "lg:col-span-3 md:col-span-3 md:row-span-2",
  // imgClassName: "",
  // titleClassName: "justify-center",
  // img: "",
  // spareImg: "",
  // },
  {
  id: 8,
  title: "",
  description: "",
  className: "lg:col-span-3 md:col-span-3 md:row-span-1",
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
    iconLists: ["/logos/numpy.svg", "/logos/python.svg", "/logos/tensorflow.svg", "/logos/keras.png"],
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
  {
    id: 0,
    title: "My portfolio",
    des: "My personal portfolio website showcasing my programming capabilities",
    img: null,
    iconLists: []
  },
  // {
  //   id: 4,
  //   title: "ArduCar",
  //   des: "Created a remote controlled car",
  //   img: null,
  //   iconLists: [],
  //   link: "https://github.com/mingli202/arducar"
  // },
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

export const companies = {
  "Github":{
    id: 6,
    img:"/logos/github.svg",
  }
};

export const workExperience = [
  {
    id: 1,
    title: "Artificial Intelligence Intern",
    company: "iSMART Lab",
    desc: "• Developed a video synchronization & compression library using FFmpeg and OpenCV to prepare for training.\n• Coded a data pre-processing pipeline to clean raw human vital signals for machine learning models.\n• Built and programmed a task labeling device using Arduino and C++ to split recording segments appropriately\n• Created a high quality multi-modal dataset of over 50 hours of recordings from dozens of study participants.",
    className: "md:col-span-2 bg-[#3b0e19]", // change to md:col-span-2
    thumbnail: "/exp1.png",
    start: "May 2024",
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