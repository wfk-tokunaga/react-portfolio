import React, { useState } from "react";
import Modal from '../Modal';

function CodeSection(props) {

    const {
        languages,
        focusedLanguage,
        setFocusedLanguage,
        projects,
        focusedProject,
        setFocusedProject,
    } = props;

    function updateFocusedProject(project) {
        console.log(`Focused project: ${JSON.stringify(project)}`);
        setFocusedProject(project);
    }

    function updateFocusedLanguage(language) {
        console.log(`Focused language: ${JSON.stringify(language)}`);
        setFocusedLanguage(language);
    }

    // Modal starts out closed
    const [isModalOpen, setIsModalOpen] = useState(false);
    // When a user clicks on a project, it calls this function that sets the focusded project and sets isModalOpen to the opposite
    function toggleModal(project) {
        setFocusedProject(project);
        setIsModalOpen(!isModalOpen);
    }

    return (
            <div>
                {isModalOpen && <Modal onClose={toggleModal} focusedProject={focusedProject}></Modal>}

                {/* <div className="modal-backdrop">
                    <div className="modal-container">
                        <h3 className="modalTitle">{focusedProject.text}</h3>
                        <p>
                            {focusedProject.description}
                        </p>
                        <p>{focusedProject.languagesUsed}</p>
                        <p>{focusedProject.description}</p>
                        <p>
                            <a href={`${focusedProject.github}`}>GitHub Repositiory</a>
                        </p>
                        <p>
                            <a href={`${focusedProject.github}`}>Deployed Application</a>
                        </p>
                        <button type="button" onClick={toggleModal}>Close this modal</button>
                    </div>
                </div> */}


                <h1 className="page-title">Languages</h1>
                <div className="grid-container">
                    {languages.map(language => (
                        <div onClick={() => updateFocusedLanguage(language)} className = {`single-language grid-cell ${focusedLanguage === language && 'focusedCell'}`}>
                            <span
                            className = {focusedLanguage === language && 'focused'}
                            >
                                {language.text}
                            </span>
                        </div>
                    ))}
                </div>   

                <h1 className="page-title">Projects</h1>
                <div className="grid-container projects-section">
                        {projects.filter(project => project.languagesUsed.includes(focusedLanguage)).map(project => (
                            <div className="single-project grid-cell">
                                <span 
                                onClick={() => {
                                    toggleModal(project)
                                }
                                }
                                className = {`project-title ${focusedProject === project && 'focused'}`}
                                    >{project.text}
                                </span>
                                {/* <p>
                                    {project.description}
                                </p> */}
                                <ul>
                                    {project.languagesUsed.filter(lang => lang.name !== 'all').map(lang => (
                                        <li>{lang.text}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                </div>

            </div>
    )
}

export default CodeSection;