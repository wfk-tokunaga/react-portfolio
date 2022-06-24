import React from "react";

function ContactInfo() {
    return (
        <div>
            <h1 className="page-title">Reach Me</h1>
            <ul className="contactList">
                <li>
                    Email: <a type="email" href="wktokunaga@gmail.com">wktokunaga@gmail.com</a>
                </li>
                {/* <li>
                    LinkedIn: 
                </li> */}
                <li>
                    Telegram: <a href="https://t.me/thrill_iam">@thrill_iam</a>
                </li>
                <li>
                    GitHub: <a href="https://github.com/wfk-tokunaga">wfk-tokunaga</a>
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