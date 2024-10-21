import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 id="heading" > 
        Namaste JSX 
    </h1>
);

const HeadingComponent= () => {
    return <div id="container" > 
        < Title />
    </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);


