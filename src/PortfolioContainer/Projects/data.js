import MM from "../../assets/Projects/MembershipM.png"
import jobSeeker from "../../assets/Projects/form.png"
import eureka from "../../assets/Projects/eureka (1).png"
import HVG from "../../assets/Projects/hvg.png"
import Chat from "../../assets/Projects/chatRoom.png"
import CRUD from "../../assets/Projects/CRUDApp.png"



export const projects = [
    {
      title: "Membership Manager",
      subtitle: "API web-Application",
      description:
        "This Web app will transform your google spreadsheet to a fully functional app with interface to display, edit and manage your spreadsheet. this app uses JavaScript, Node Js, Express Js, and Google Sheets Api",
      image: MM,
      link: "https://membership-manager-googleshapi.herokuapp.com/",
    },
    {
      title: "Job Seeker Form",
      subtitle: "HTML-Form",
      description:
        "Simple styled form app that saves user entry in local storage and display back on the page",
      image: jobSeeker,
      link: "https://alikachef.github.io/HTML-Form/",
    },
    {
      title: "Movie Catalog",
      subtitle: "Spring Microservies",
      description:
        "Spring Boot/Spring Cloud Movie Catalog microservice implementing Eureka",
      image: eureka,
      link: "https://github.com/alikachef/Movie-catalog-Microservice",
    },
    {
      title: "Human VS Goblins",
      subtitle: "Turn Based Game",
      description:
        "Human Vs Goblin game, roam the Land and battle goblins.",
      image: HVG,
      link: "https://github.com/alikachef/GenSparkProjects",
    },
    {
      title: "ChatRoom",
      subtitle: "Websocket Spring Chat App",
      description: 
        "Chat Web App that you can send private messages or public messages to the chat room",
      image: Chat,
      link: "https://github.com/alikachef"
    },
    {
      title: "Course Manager",
      subtitle: "Java/React CRUD Web App",
      description: 
        "Spring boot, mySQL and hibernate backened. React Course dashboard manages the database and keeps track of courses records",
      image: CRUD,
      link: "https://github.com/alikachef"
    }
  ];