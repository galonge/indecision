

const showVisibility = () => {
    app.visible = false;
    render();
}

const hideVisibility = () => {
    app.visible = true;
    render();
}
const app = {
    title: "Visibility Details",
    visible: true
};


const render = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        {
            app.visible ? <div><button onClick={showVisibility}>Show Details</button></div> : <div><button onClick={hideVisibility}>Hide Details</button><p>This is some random text</p></div>
        }
       
        </div>
    );

    ReactDOM.render(template, appRoot);
    
}

const appRoot = document.getElementById("app");

render();