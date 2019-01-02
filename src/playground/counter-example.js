
let count = 0;

const addOne = () => {
    count++;
    console.log("AddOne");
    renderCounterApp();
};

const minusOne = () => {
    console.log("Minus One");
    count = count -1;
    renderCounterApp();
}

const reset = () => {
    console.log("Reset");
    count = 0;
    renderCounterApp();
};


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);

}

renderCounterApp();