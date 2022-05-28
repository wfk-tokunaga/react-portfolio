import React from "react";

function Modal(props) {
    console.log(props);
    const {focusedProject, onClose} = props;
    const {
        text,
        name,
        description,
        github,
        languagesUsed,
        deployedLink
    } = focusedProject;

    console.log(text, name, description, github, languagesUsed);

    console.log(`Rendering Modal with this info: ${JSON.stringify(focusedProject)}`)

        return (
            <div className="modalBackdrop">
                <div className="modalContainer">
                    <h3>{text}</h3>
                    {/* <img alt="current category" src={require(`../../assets/large/${category}/${index}.jpg`)}/> */}
                    <p>
                        {description}
                    </p>
                    <h4>Languages Used:</h4>
                    <ul>
                        {languagesUsed.filter(lang => lang.name !== 'all').map(language => (
                            <li>{language.text}</li>
                        ))}
                    </ul>
                    <div>
                        <a href={github} target="_blank">{text} GitHub Repository</a>
                    </div>
                    {deployedLink && 
                        <div><a href={deployedLink} target="_blank">{text} Deployed Application Link</a></div>
                    }
                    <button type="button" onClick={() => onClose(focusedProject)}>Close this modal</button>
                </div>
            </div>
        )

    // return (

    //     <div className="modal-backdrop">
    //         <div className="modal-container">
    //             <h3 className="modalTitle">{text}</h3>
    //             <p>
    //                 {description}
    //             </p>
    //             <p>{languagesUsed}</p>
    //             <p>{description}</p>
    //             <p>
    //                 <a href={`${github}`}>GitHub Repositiory</a>
    //             </p>
    //             <p>
    //                 <a href={`${github}`}>Deployed Application</a>
    //             </p>
    //             <button type="button" onClick={onClose}>Close this modal</button>
    //         </div>
    //     </div>
    // )
} 

// function Modal(onClose, focusedProject) {
//     const {name, text, description, langauagesUsed, github} = focusedProject;
//     console.log(`MODAL: ${focusedProject}`)

//     return (
//         <div className="modalBackdrop">
//             <div className="modalContainer">
//                 <h3 className="modalTitle">{name}</h3>
//                 {/* <img alt="current category" src={require(`../../assets/large/${category}/${index}.jpg`)}/> */}
//                 <p>
//                     {description}
//                 </p>
//                 <button type="button" onClick={onClose}>Close this modal</button>
//             </div>
//         </div>
//     )
// }

export default Modal;