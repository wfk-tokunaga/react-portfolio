import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import ContactInfo from './components/Contact';
import { useState } from 'react';
import CodeSection from './components/Code';

function App() {

  const [pages] = useState([
    {name: 'home', text: 'EIKA TOKUNAGA'},
    {name:'about', text: 'About'},
    {name:'code', text: 'Code'},
    {name:'music', text: 'Music'},
    {name:'contact', text: 'Contact'}
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  const [languages] = useState([
    {name: 'all', text: 'See All Projects', id: 0},
    {name: 'javascript', text: 'JavaScript', id: 1},
    {name:'html', text: 'HTML', id: 2},
    {name:'css', text: 'CSS', id: 3},
    {name:'rust', text: 'Rust', id: 4},
    {name:'react', text: 'React', id: 5},
    {name: 'mdb', text: 'MD Bootstrap', id: 6 },
    {name: 'node', text: 'Node.js', id: 7},
    {name: 'sequelize', text: 'Sequelize', id: 8},
    {name: 'mysql', text: 'MySQL', id: 9},
    {name: 'handlebars', text: 'HandleBars', id: 10},
    {name: 'mongodb', text: 'MongoDB', id: 11},
    {name: 'mongoose', text: 'Mongoose', id: 12},
    // {name: '', text: '', id: },
    // {name: '', text: '', id: },
    // {name: '', text: '', id: },
    // {name: '', text: '', id: },
    // {name: '', text: '', id: },
  ]);

  const [focusedLanguage, setFocusedLanguage] = useState(languages[0]);

  // Takes the shorthand name of a language and returns the langauges object from the languages array
  const findLanguageObject = inputName => languages.find(({name}) => name === inputName )

  const [projects] = useState([
    {
      name: 'readme_generator', 
      text: 'README Generator',
      github: 'https://github.com/wfk-tokunaga/readme-generator',
      deployedLink: '',
      description: `README Generator is a command line interface that allows users to create professional README files by answering a series of prompts. This program uses the Node.js package Inquirer.`,
      languagesUsed: ['all', 'node', 'javascript'].map(findLanguageObject)
    },
    {
      name:'cryptGo',
      text: 'CryptGo',
      github: 'https://github.com/themanwiththeplan-eng/cryptGo',
      deployedLink: '',
      description: `A user friendly application that allows users to check the current value of crypto currencies and market highs and lows, without having to open an internet browser. The cryptGo app lets users search cryptocurrency and add favorites to a favorites list, enabling the user to keep track of their main purchasing/research interests.`,
      languagesUsed: ['all', 'html', 'mdb', 'css', 'javascript'].map(findLanguageObject),
    },
    {
      name:'weather_board', 
      text: 'Weather Board',
      github: 'https://github.com/wfk-tokunaga/weather-board',
      deployedLink: 'https://weather-board.surge.sh/',
      description: `A web application that allows users to get live weather data and a five day forecast for cities they search up.`,
      languagesUsed: ['all', 'node', 'html', 'mdb', 'css'].map(findLanguageObject),
    },
    {
      name:'workday_scheduler', 
      text: 'Workday Scheduler',
      github: 'https://github.com/wfk-tokunaga/work-day-scheduler',
      deployedLink: '',
      description: `A planning tool that uses colors to organize upcoming, current, or past events.`,
      languagesUsed: ['all'].map(findLanguageObject),
    },
    {
      name:'code_conversations', 
      text: 'Code Conversations',
      github: 'https://github.com/wfk-tokunaga/code-conversations',
      deployedLink: '',
      description: `A tech blog following the Model-View-Controller paradigm.`,
      languagesUsed: ['all', 'node', 'mysql', 'html', 'css', 'handlebars', 'javascript'].map(findLanguageObject),
    },
    {
      name:'abun_choppl', 
      text: 'Abun Choppl',
      github: '',
      deployedLink: '',
      description: ``,
      languagesUsed: [].map(findLanguageObject),
    },
    {
      name:'react_portfolio', 
      text: 'React Portfolio',
      github: '',
      deployedLink: '',
      description: `This website! An interactive web application made with React showcasing myself and work.`,
      languagesUsed: ['all', 'react', 'javascript', 'css'].map(findLanguageObject),
    },
    {
      name:'team_profile_generator', 
      text: 'Team Profile Generator',
      github: 'https://github.com/wfk-tokunaga/team-profile-generator',
      deployedLink: '',
      description: `A command line interface program that allows you to create a profile of your team. For managers, you'll provide their office number. For engineers, you'll provide their GitHub user accounts. For student interns, you'll provide their current school.`,
      languagesUsed: ['all', 'javascript', 'node', 'html', 'css'].map(findLanguageObject),
    },
    {
      name:'tech_news', 
      text: 'Tech News',
      github: 'https://github.com/wfk-tokunaga/tech-news',
      deployedLink: '',
      description: `A blog-style web app where users can create accounts, post articles, leave comments and upvote posts.`,
      languagesUsed: ['all',].map(findLanguageObject),
    },
    {
      name:'they_commerce', 
      text: 'They Commerce',
      github: 'https://github.com/wfk-tokunaga/they-commerce',
      deployedLink: '',
      description: `They-Commerce is the backend of a e-commerce site that uses Express.js, Sequelize, and MySQL.`,
      languagesUsed: ['all', 'node', 'sequelize', 'mysql', 'javascript'].map(findLanguageObject),
    },
    // {
    //   name:'', 
    //   text: '',
    //   github: '',
    // deployedLink: '',
    //   description: ``,
    //   languagesUsed: ['all',].map(findLanguageObject),
    // },
    // {
    //   name:'', 
    //   text: '',
    //   github: '',
    // deployedLink: '',
    //   description: ``,
    //   languagesUsed: ['all',].map(findLanguageObject),
    // },
    // {
    //   name:'', 
    //   text: '',
    //   github: '',
    // deployedLink: '',
    //   description: ``,
    //   languagesUsed: [].map(findLanguageObject),
    // },
  ]);
  

  const [focusedProject, setFocusedProject] = useState(projects[0]);

  return (
    <div>

      <Nav
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      pages={pages}
      ></Nav>
      <main>
        {
          {
            'about': 
              <About></About>,
            'contact': 
              <ContactInfo></ContactInfo>,
            'code': 
              <CodeSection
              languages={languages}
              focusedLanguage={focusedLanguage}
              setFocusedLanguage={setFocusedLanguage}
              projects={projects}
              focusedProject={focusedProject}
              setFocusedProject={setFocusedProject}
              ></CodeSection>
          } [currentPage.name]
        }
      </main>
    </div>
  );
}

export default App;
