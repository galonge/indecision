class IndecisionApp extends React.Component {
    render() {

        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        const options =['Thing One', 'Thing Two', 'Thing Three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.title}</h1>
                <h2> {this.props.subtitle}</h2>
            </div>
        );
    };
}

class Action extends React.Component {
    
    handlePick() {
        alert('handlepick');
    }

    render() {
       
        return (
            <div>
                <button onClick={this.handlePick}>What should i do? </button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }
    
    removeAll() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
            <button onClick={this.removeAll}>Remove all</button>
            {this.props.options.map((option) => <Option key={option} optionText={option} />)}
            <Option />
                
            </div>

        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
            {this.props.optionText}
            </div>
           
        );
    }
}

class AddOption extends React.Component {

    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option) {
            e.target.elements.option.value = '';
            alert("Addoptionhandler");
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}


const appRoot = document.getElementById("app");
ReactDOM.render(<IndecisionApp />, appRoot);