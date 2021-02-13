import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Wrapper from './components/Wrapper'
import About from './components/About'
import Work from './components/Work'
import Education from './components/Education'
import Experience from './components/Experience'
import Navigation from './components/Navigation'
import SimpleReactLightbox from 'simple-react-lightbox'


const workArray=[{
  name: "Baato",
  shortDesc: "Nepal’s only cloud-based maps and location services platform",
  role:"Currently serving as project technical lead and full stack developer for Baato.io, Nepal’s first cloud based maps and location services platform; developed APIs for geocoding (location search), reverse-geocoding (address generation), navigation (driving and walking directions), and vector tile (map styles); developed auxiliary modules that enabled API throttling, rate limiting, usage analytics, automated billing, invoice generation, and online payments; developed the user facing website for Baato.io, and worked on the baato-js-client node library that allows web developers to quickly integrate Baato’s services into their existing JavaScript based applications.",
  images: ["baato1.png"], links: [{"label": "Baato official website", url: "https://baato.io"}, {"label": "Baato official blog", url: "https://baatomaps.medium.com/"}, {"label": "Baato developers documentation", url: "https://docs.baato.io/"}, {label:"Read about the Baato mobile app", url: "https://baatomaps.medium.com/launching-the-baato-mobile-app-e701c61b09e5"}]

}, 

{
  name: "Anaconda Water Management Platform",
  shortDesc: "Visualizing hydrology data from low-cost sensors in the Andes and Himalayas",
  role:"Currently serving as the front-end developer for Anaconda, a water data management platform that houses and visualizes data for low cost water-lever sensors developed by Dr. Wouter Buyteart and his team from the Hydrology and Water Resources Group at Imperial College London.",
  images: ["anaconda1.png", "anaconda2.png","anaconda3.png"], links: [{"label": "Visit web application (WIP)", url: "https://anaconda-v2.herokuapp.com"}]

}, 

{
  name: "Vidya",
  shortDesc: "Parental engagement app for schools",
  role:"Served as project technical lead and mobile developer for Vidya for Teachers and Vidya for Parents mobile applications which were aimed at improving communication between parents, teachers and administrators of Kaasthamandap School, Kathmandu. The app is currently in use by 900+ parents of the school.",
  images: ["vidya1.png", "vidya2.png"], links: [{"label": "Vidya for Parents app on Play Store", url: "https://play.google.com/store/apps/details?id=tech.mobera.vidya.parents&hl=en&gl=US"}, {"label": "Vidya for Teachers app on Play Store", url: "https://play.google.com/store/apps/details?id=tech.mobera.vidya.teachers&hl=en&gl=US"}]

},

{
  name: "Secondary Cities Project",
  shortDesc: "Making digital map data accessible",
  role:"Served as project technical lead and front-end developer for the Explore Indore and Explore Pokhara data portals: web applications that release geospatial information on critical infrastructure (education, health and financial institutions) for the cities of Indore (India) and Pokhara (Nepal) respectively; the project was funded by US State Department and coordinated by American Association of Geographers as part of the Secondary Cities initiative.",
  images: ["2c1.png", "2c2.png"], links: [{"label": "Explore Indore web application", url: "http://exploreindore.klldev.org/"}, {"label": "Explore Pokhara web application", url: "http://explorepokhara.klldev.org/"}]

},

{
  name: "2015 Nepal Earthquake: Open Data Portal",
  shortDesc: "Releasing data for 750K+ households and buidings affected by the 2015 Nepal Earthquake",
  role:"Served as project technical lead, data scientist, and front-end developer for the 2015 Nepal Earthquake: Open Data Portal: a web application that releases socioeconomic and building damage assessment data on 700K+ households affected by the 2015 Nepal earthquake. The portal, developed through funding from DFID’s Data for Development initiative, was adopted by the Government of Nepal’s National Planning commission and is currently featured by drivendata.org as part of its global online data competition.",
  images: ["odp1.png", "odp2.png", "odp3.png"], links: [{"label": "EQ Data Portal official project website", url: "https://eq2015.npc.gov.np"}, {"label": "Public API documentation", url: "http://eq2015.npc.gov.np/docs/#/using_data/rest/crosstabs"}, {"label": "nhRp R package", url: "http://eq2015.npc.gov.np/docs/#/using_data/rpackage"}, {"label": "Visualization gallery", url: "https://observablehq.com/collection/@arkoblog/opendataportal"} ]

},

{
  name: "Open Local Government Digital System",
  shortDesc: "Promoting transparency and accountability in local government",
  role:"Developed two web applications for Nepalgunj Sub-Metropolitan City and Neelakantha Municipality under the CS: MAP (Civil Society: Mutual Accountability Project) which was funded by United States Agency for International Development (USAID) and coordinated by FHI360",
  images: [], links: [{"label": "Read more about the OLGDS project", url: "https://drive.google.com/file/d/1pHVF2LBk_aptirORsUT0ccYyPpTDlWka/view?usp=sharing"}]

}
,
{
  name: "Jaibik Map",
  shortDesc: "Understanding the effect of climate change on mammlian species' habitat in Nepal",
  role:"Worked with IUCN Nepal and the Department of National Parks and Wildlife Conservation (DNPWC) to design and develop the web application for National Science Foundation funded Jaibik Map, a biodiversity and climate change visualization tool that provides present information and future estimates on habitat distributions for   mammalian species in Nepal. Visited four national parks, and provided training to 100+ wildlife activists, experts, and staff on the use of JaibikMap mobile app to submit information on mammalian sightings from the ground.",
  images: ["jm1.png", "jm2.PNG", "jm3.png"], links: [{"label": "Jaibik Map web application", url: "http://jaibikmapv2.klldev.org/#/"}]

}]

const educationArray = [{
  school: "NIT Warangal, Telangana, India",
  date: "Bachelor of Technology — Mechanical Engineering, June 2014",
  description: "Relevant Coursework: Mathematics, Statistics, Problem Solving and Computer Programming (C++), Design and Analysis of Experiments, Production Planning and Control, Management Science and Productivity"
}]

const experienceArray = [{
  role: "Tech and Innovation Lead",
  organization: "Kathmandu Living Labs",
  location: "Kathmandu, Nepal",
  date: "September 2018 – Present",
  responsibilities: ["Oversaw the implementation of all technological activities within the organization: worked directly with the organization’s executive chairman to translate the KLL’s priorities and strategic goals into technical next steps; ensured smooth collaboration between the tech team and other functional units within KLL, viz. research, design and geospatial teams", "•	Reviewed project progress and manage weekly and monthly activities of the 6 member tech team; managed communication with stakeholders, and delivered reports that summarize technical work, learnings, and next steps on a regular basis."]
}, {
  role: "Data Scientist and UI/UX engineer",
  organization: "Kathmandu Living Labs",
  location: "Kathmandu, Nepal",
  date: "December 2016 – Present",
  responsibilities: []
}, 
{
  role: "Decision Scientist",
  organization: "Mu Sigma Business Solutions",
  location: "Bangalore, India",
  date: "July 2014 – September 2016",
  responsibilities: []
}]

function App() {
  const background = '#fff';
  const textColor = 'rgba(0,0,0,0.8)';
  return (
    <div className="App">
      <BrowserRouter>
      <SimpleReactLightbox>
        
      <Navigation background={background} textColor={textColor} />
      <Wrapper footer={false}
        background={background}
        textColor={textColor}>
<About/>
<br/>

<br/>
{/* <Experience data={experienceArray}/> */}
<Work data={workArray}/>
{/* <Education data={educationArray}/> */}
</Wrapper>
          </SimpleReactLightbox>
      </BrowserRouter>
    </div>
  );
}

export default App;
