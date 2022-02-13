import * as React from "react";
import "../styles/Header.css";


function Header() {
    let buttonName = "Fancy button"
    let [count, countUpdater] = React.useState(0);
    const handleClick = () => {
        countUpdater(count+1);
    };
    return ( 
            <header>This is this header
                <button className = "tinyButton" onClick={ handleClick }>
                    {buttonName} pressed {count} times!
                </button>
            </header>
        );
    }


export default Header;