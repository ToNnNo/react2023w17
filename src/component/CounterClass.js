import { Component } from "react";

export default class CounterClass extends Component {

    static defaultProps = { step: 1 };

    constructor() {
        super();

        this.state = { value: 0 }
    }

    decrease() {
        this.setState( { value: this.state.value - parseInt(this.props.step) } );
    }

    increase() {
        // this.state.value += 1; // impossible; state non mutable

        this.setState( { value: this.state.value + parseInt(this.props.step) } );
    }

    render() {
        return (
            <>
                <h3>Counter Class <small>(Step: { this.props.step })</small></h3>

                <button className="btn btn-sm btn-outline-primary" onClick={ () => { this.decrease() } }>
                    Diminuer</button>
                <span className="px-3">{ this.state.value }</span>
                <button className="btn btn-sm btn-outline-primary" onClick={ () => { this.increase() } }>
                    Augmenter</button>
            </>
        )
    }
}