import { Component } from "react";

export default class UselessButton extends Component {

    // Défini les valeurs par défaut des props
    static defaultProps = { directory: 'Desktop' }

    constructor() {
        super();

        this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen() {
        // window.confirm('Etes vous sur ?');
        alert(`Le répertoire ${this.props.directory} est ouvert`);
    }

    // Syntaxe Expérimentale
    handleClose = () => {
        alert(`Le répertoire ${this.props.directory} est fermé`);
    }

    render() {
        return (
            <div>
                <button className="btn btn-outline-dark" onDoubleClick={this.handleOpen}>Ouvrir le répertoire</button>
                <button className="btn btn-outline-dark" onClick={this.handleClose}>Fermer le répertoire</button>
            </div>
        )
    }

}