import React from "react";

function ContactInfo() {
    return (
        <div>
            <h1 className="page-title">Reach Me</h1>
            <ul className="contactList">
                <li>
                    <a type="email" href="wktokunaga@gmail.com">Email</a>
                </li>
                {/* <li>
                    LinkedIn: 
                </li> */}
                <li>
                    <a href="https://t.me/thrill_iam">Telegram</a>
                </li>
                <li>
                    <a href="https://github.com/wfk-tokunaga">GitHub</a>
                </li>
                {/* <li>
                    Software Engineering Resume:
                </li>
                <li>
                    Musical Resume:
                </li> */}
            </ul>
        </div>
    )
}

export default ContactInfo;