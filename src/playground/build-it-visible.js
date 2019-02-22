
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.visibility = this.visibility.bind(this);
        this.state = {
            visible: false
        }
        
    }

    visibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Details</h1>
                {this.state.visible ? <div><button onClick={this.visibility}>Hide Details</button> <p>This is some jargon text</p></div> : <button onClick={this.visibility}>Show Details</button>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));


