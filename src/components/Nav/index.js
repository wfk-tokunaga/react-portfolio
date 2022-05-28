import React, {useState} from "react";

function Nav(props) {

    const {
        currentPage,
        setCurrentPage,
        pages
    } = props;

    function handleChangePage(page) {
        setCurrentPage(page);
    } 

    return (
        <header className="">
            <nav>
                <ul className="flex-container">
                    {pages.map(page => (
                        // SFX goes inside here for each nav item
                        <li className={`${currentPage.name === page.name && 'navActive'}`}>
                            <span onClick={() => {
                                handleChangePage(page);
                            }

                            }>{page.text}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;