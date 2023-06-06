import { useState } from "react";


const MainScreen = () => {

    const firstText = "This is Content 1";
    const secondText = "This is Content 2";

    const firstContentFunc = () => {
        setText(firstText);
    }
    const secondContentFunc = () =>  {
        setText(secondText)
    }

    const [text, setText] = useState(firstText)
    return(
        <div><h1>This is  the main screen :)</h1>
            <div id = "navs">
                <button onClick={firstContentFunc}><nav>Nav 1</nav></button>
                <button onClick = {secondContentFunc}><nav>Nav 2</nav></button>
            </div>
            <div id = "content">
                <h3 id = "content 1">{text}</h3>
            </div>
        </div>
    )
}

export default MainScreen;