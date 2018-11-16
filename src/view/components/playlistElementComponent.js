import React, {Component} from "react";
import '../../css/catalog.css';

export default class PlaylistElementComponent extends Component {

    render() {
        return (
            <div className="playlist-element-component">
                <div className="video-name" onClick={() => {this.props.playlistElementAction(this.props.id)}}> {this.props.name}</div>
                <i className="fas fa-trash-alt" onClick={() => {this.props.deleteAction(this.props.id)}}/>
            </div>
        )
    }
}

