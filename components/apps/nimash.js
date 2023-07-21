import React, { Component } from 'react';
import ReactGA from 'react-ga';

export class AboutNimash extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about nimash" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="nimash's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutNimash;

export const displayAboutVivek = () => {
    return <AboutNimash />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Vivek Patel Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Nimash Eshan</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Undergraduate!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">Undergraduate Student</span> currently studying Information Technology @ University of Moratuwa.<br></br> Hit me up <a className='text-underline' href='mailto:nimash3eshan@gmail.com'><u>@nimash3eshan@gmail.com</u></a> :) </li>
                <li className=" mt-3 list-building"> I enjoy building awesome softwares that solve practical problems.</li>
                <li className=" mt-3 list-time"> When I am not coding my next project, I like to spend my time watching animes, playing COD4 or watching <a href="https://www.youtube.com/@DestinySpace/videos" target="_blank" rel="noreferrer"> <u>Destiny's videos.</u></a></li>
                <li className=" mt-3 list-star"> And I also have interest in Machine learning, mathematics and astronomy</li>
                <br></br>
                <br></br>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                    University of Moratuwa
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2021-Present</div>
                    <div className=" text-sm md:text-base">B.Sc.(Hons) in IT</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Expected in 2025</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                    Rahula College , Matara
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2011-2019</div>
                    <div className=" text-sm md:text-base">G.C.E A/L 2019</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Chemistry - A , Physics - B , Com. Maths - B</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">(District Rank - 63 | Island Rank - 939)</div>
                    <br></br>
                    <div className=" text-sm md:text-base">G.C.E O/L 2016</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Results : 7A's 2B's</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">(tamil - B, Western Music - B)</div>
                    <br></br>
                    <br></br>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">Nextjs, ReactNative, Express & Nodejs!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=plastic&logo=java&logoColor=white" alt="c" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="python" />
                        <img className="m-1" src="https://img.shields.io/badge/R-%23276DC3.svg?style=plastic&logo=r&logoColor=white" alt="R" />
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="HTML" /></a>
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="git" className="m-1" />
                        <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff" alt="firebase" className="m-1" />
                        <img src="https://img.shields.io/badge/Anaconda-%2344A833.svg?style=plastic&logo=anaconda&logoColor=white" alt="anaconda" className="m-1" />
                        <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=plastic&logo=mongodb&logoColor=white" alt="mongodb" className="m-1" />
                        <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=plastic&logo=mysql&logoColor=white" alt="mysql" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff" alt="next" />
                        <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="react" />
                        <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=plastic&logo=typescript&logoColor=white" className="m-1" alt="TS"/>
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="vivek tailwind css" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="node.js" className="m-1" />
                        <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white" alt="jquery" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white" alt="redux" />

                        <img className="m-1" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=plastic&logo=express&logoColor=%2361DAFB" alt="Express" />
                        <img className="m-1" src="https://img.shields.io/badge/flask-%23000.svg?style=plastic&logo=flask&logoColor=white" alt="flask" />
                        <img className="m-1" src="https://img.shields.io/badge/pandas-%23150458.svg?style=plastic&logo=pandas&logoColor=white" alt="pandas" />
                        <img className="m-1" src="https://img.shields.io/badge/numpy-%23013243.svg?style=plastic&logo=numpy&logoColor=white" alt="numpy" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="vivek linux" /> <span>!</span>
                </li>
            </ul>
            <br></br>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "UbuntuOS Portfolio",
            date: "July 2023",
            link: "https://linux.nimash.dev",
            description: [
                "Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js & tailwind CSS",
            ],
            domains: ["javascript", "next.js", "tailwindcss"]
        },
        {
            name: "QUIXI - Collaborative Money Expense Tracker",
            date: "Dec 2022",
            link: "https://github.com/wkmilanswanthra/Quixi",
            description: [
                "This is a mobile application allowed users to add friends and create groups to manage shared expenses, allowing them to manually settle these expenses. I was responsible for admin panel & user profile & settings",
            ],
            domains: ["ReactNative", "NextJS", "NodeJS", "MongoDB"]
        },
        {
            name: "COMBook - Accounting Application(Completed)",
            date: "Sep 2021",
            link: "https://combook.netlify.app",
            description: [
                "COMBook is a web-based application which offers ledger reporting, trail balance recording, accounting book management, and financial statement preparation features for small to medium-sized businesses.",
            ],
            domains: ["Html","CSS","javascript","Firebase","tailwindcss"]
        },
        {
            name: "Bitcoin Price Prediction System(Completed)",
            date: "Jun 2021",
            link: "https://colab.research.google.com/drive/1UFQoUI66-nBiHh9A3oBRxhh6TjTF40CC?usp=sharing",
            description: [
                "This was developed to predict crypto prices using social sentiments",
            ],
            domains: ["Jupyter Notebooks", "Machine Learning (LSTM)"]
        },
        {
            name: "Discord Developing ",
            date: "2018 - Present",
            link: "",
            description: [
                "I developed three community discord servers & created over 20+ bots including Music Bots, MEME Bots, Server moderation, Announcement, Games, Modmail Bots using Discord.py & Discord.JS",
            ],
            domains: ["Discord.py", "Discord.JS"]
        },
        {
            name: "NES Creation COD4 Game Server (Completed)",
            date: "Apr 2023",
            link: "https://erary.com/nesCOD4.html",
            description: [
                "This is my own cod4 game server which has custom maps, sounds with daily active players.",
            ],
            domains: ["Digital Ocean", "GSC scripts"]
        },
        {
            name: "Automated Rubber Solution Mixer for Small Scaled Rubber Manufacturers (Completed)",
            date: "First year hardware project",
            link: "https://github.com/wkmilanswanthra/Rubber-Mixer-Machine",
            description: [
                "The process of making rubber sheets from collected latex involves manual measurement of ingredients, resulting in low accuracy and quality. Additionally, labor costs are high and output is low due to manual processing. To address these issues, an automated rubber solution mixer has been designed and developed specifically for small-scale rubber manufacturers.",
            ],
            domains: ["C", "Atmel Studio", "Proteus", "Kicad"]
        },
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=nimash3eshan&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                const borderColorClass = `border-${tag_colors[domain]}`
                                                const textColorClass = `text-${tag_colors[domain]}`

                                                return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Nimash Sudusinghe_SE.pdf" title="Nimash Eshan resume" frameBorder="0"></iframe>
    )
}