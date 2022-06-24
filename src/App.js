import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import ContactInfo from './components/Contact';
import { useState } from 'react';
import CodeSection from './components/Code';
import Footer from './components/Footer';

function App() {

    const [pages] = useState([
        { name: 'home', text: 'EIKA TOKUNAGA' },
        { name: 'code', text: 'Code' },
        // {name:'music', text: 'Music'},
        { name: 'contact', text: 'Contact' },
        // { name: 'resume', text: 'Resume' }
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

    const [languages, setLanguages] = useState([
        { name: 'all', text: 'All Projects', id: 0 },
        { name: 'javascript', text: 'JavaScript', id: 1 },
        { name: 'html', text: 'HTML', id: 2 },
        { name: 'css', text: 'CSS', id: 3 },
        { name: 'rust', text: 'Rust', id: 4 },
        { name: 'react', text: 'React', id: 5 },
        { name: 'mdb', text: 'MD Bootstrap', id: 6 },
        { name: 'node', text: 'Node.js', id: 7 },
        { name: 'sequelize', text: 'Sequelize', id: 8 },
        { name: 'mysql', text: 'MySQL', id: 9 },
        { name: 'handlebars', text: 'HandleBars', id: 10 },
        { name: 'mongodb', text: 'MongoDB', id: 11 },
        { name: 'mongoose', text: 'Mongoose', id: 12 },
        { name: 'graphql', text: 'GraphQL', id: 13 },
        { name: 'express', text: 'Express', id: 14 },
        // {name: '', text: '', id: },
        // {name: '', text: '', id: },
        // {name: '', text: '', id: },
    ]);

    const [focusedLanguage, setFocusedLanguage] = useState(languages[0]);

    // Takes the shorthand name of a language and returns the langauges object from the languages array
    const findLanguageObject = inputName => languages.find(({ name }) => name === inputName)

    const [projects] = useState([{
            name: 'readme-generator',
            text: 'README Generator',
            github: 'https://github.com/wfk-tokunaga/readme-generator',
            deployedLink: '',
            description: `README Generator is a command line interface that allows users to create professional README files by answering a series of prompts. This program uses the Node.js package Inquirer.`,
            languagesUsed: ['all', 'node', 'javascript'].map(findLanguageObject)
        },
        {
            name: 'cryptGo',
            text: 'CryptGo',
            github: 'https://github.com/themanwiththeplan-eng/cryptGo',
            deployedLink: '',
            description: `A user friendly application that allows users to check the current value of crypto currencies and market highs and lows, without having to open an internet browser. The cryptGo app lets users search cryptocurrency and add favorites to a favorites list, enabling the user to keep track of their main purchasing/research interests.`,
            languagesUsed: ['all', 'html', 'mdb', 'css', 'javascript'].map(findLanguageObject),
        },
        {
            name: 'weather-board',
            text: 'Weather Board',
            github: 'https://github.com/wfk-tokunaga/weather-board',
            deployedLink: 'https://weather-board.surge.sh/',
            description: `A web application that allows users to get live weather data and a five day forecast for cities they search up.`,
            languagesUsed: ['all', 'node', 'html', 'mdb', 'css'].map(findLanguageObject),
        },
        {
            name: 'work-day-scheduler',
            text: 'Workday Scheduler',
            github: 'https://github.com/wfk-tokunaga/work-day-scheduler',
            deployedLink: '',
            description: `A planning tool that uses colors to organize upcoming, current, or past events.`,
            languagesUsed: ['all'].map(findLanguageObject),
        },
        {
            name: 'code-conversations',
            text: 'Code Conversations',
            github: 'https://github.com/wfk-tokunaga/code-conversations',
            deployedLink: '',
            description: `A web application created with JavaScript, Express, Handlebars, and a MySQL database, which follows the Model-View-Controller paradigm. Users can create accounts and then post their thoughts about the current state of tech and code for other users to see.`,
            languagesUsed: ['all', 'node', 'mysql', 'html', 'css', 'handlebars', 'javascript'].map(findLanguageObject),
        },
        {
            name: 'abun-choppl',
            text: 'Abun Choppl',
            github: 'https://github.com/wfk-tokunaga/abun-choppl',
            deployedLink: '',
            description: `An online forum where musical composers can create an account, post their compositions, find other compositions by instrument, and view other user's compositions.`,
            languagesUsed: [].map(findLanguageObject),
        },
        {
            name: 'react-portfolio',
            text: 'React Portfolio',
            github: 'https://github.com/wfk-tokunaga/react-portfolio',
            deployedLink: '',
            description: `This website! An interactive web application made with React showcasing myself and work.`,
            languagesUsed: ['all', 'react', 'javascript', 'css'].map(findLanguageObject),
        },
        {
            name: 'team-profile-generator',
            text: 'Team Profile Generator',
            github: 'https://github.com/wfk-tokunaga/team-profile-generator',
            deployedLink: '',
            description: `A command line interface program that allows you to create a profile of your team. For managers, you'll provide their office number. For engineers, you'll provide their GitHub user accounts. For student interns, you'll provide their current school.`,
            languagesUsed: ['all', 'javascript', 'node', 'html', 'css'].map(findLanguageObject),
        },
        {
            name: 'tech-news',
            text: 'Tech News',
            github: 'https://github.com/wfk-tokunaga/tech-news',
            deployedLink: '',
            description: `A blog-style web app where users can create accounts, post articles, leave comments and upvote posts.`,
            languagesUsed: ['all', ].map(findLanguageObject),
        },
        {
            name: 'they-commerce',
            text: 'They Commerce',
            github: 'https://github.com/wfk-tokunaga/they-commerce',
            deployedLink: '',
            description: `They-Commerce is the backend of a e-commerce site that uses Express.js, Sequelize, and MySQL.`,
            languagesUsed: ['all', 'node', 'sequelize', 'mysql', 'javascript'].map(findLanguageObject),
        },
        {
            name: 'code-quiz',
            text: 'Code Quiz',
            github: 'https://github.com/wfk-tokunaga/code-quiz',
            deployedLink: '',
            description: ``,
            languagesUsed: ['all', 'html', 'css', 'javascript'].map(findLanguageObject),
        },
        {
            name: 'deep-thoughts',
            text: 'Deep Thoughts',
            github: 'https://github.com/wfk-tokunaga/deep-thoughts',
            deployedLink: '',
            description: `A social media application where users can sign up to create an account, post their thoughts, and interact with other users.`,
            languagesUsed: ['all', ].map(findLanguageObject),
        },
        {
            name: 'employee-tracker',
            text: 'Employee Tracker',
            github: 'https://github.com/wfk-tokunaga/employee-tracker',
            deployedLink: '',
            description: `A command line tool that empowers companies to track their different departments and the employees within that department, created using Object Oriented Programming paradigms. `,
            languagesUsed: ['javascript', 'node', 'mysql', 'express'].map(findLanguageObject),
        },
        {
            name: 'photo-port',
            text: 'Photo Port',
            github: 'https://github.com/wfk-tokunaga/photo-port',
            deployedLink: '',
            description: `A sample photography portfolio built using React.`,
            languagesUsed: ['html', 'css', 'react', 'javascript'].map(findLanguageObject),
        },
        // {
        //     name: '',
        //     text: '',
        //     github: '',
        //     deployedLink: '',
        //     description: ``,
        //     languagesUsed: [].map(findLanguageObject),
        // },
        // {
        //   name:'', 
        //   text: '',
        //   github: '',
        // deployedLink: '',
        //   description: ``,
        //   languagesUsed: [].map(findLanguageObject),
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
            setCurrentPage = { setCurrentPage }
            currentPage = { currentPage }
            pages = { pages } >
        </Nav> 
        <main> 
            {
            {
                'home':
                    <About> </About>,
                'contact':
                    <ContactInfo> </ContactInfo>,
                'code':
                    <CodeSection
                        languages = { languages }
                        focusedLanguage = { focusedLanguage }
                        setFocusedLanguage = { setFocusedLanguage }
                        projects = { projects }
                        focusedProject = { focusedProject }
                        setFocusedProject = { setFocusedProject } >
                    </CodeSection>
            }[currentPage.name]
        } </main> 
        <Footer></Footer>
    </div>
    );
}

export default App;