import React from 'react';
import CommentsList from './commentsList';
import mixins from '../mixins/toggleOpen';

export default class Article extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggleOpen(e) {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { title, text, comments } = this.props.article;
        const body = this.state.isOpen ? <section> { text } <CommentsList comments={ comments } /></section> : null;

        return(
            <div>
                <h2 onClick={ this.toggleOpen.bind(this) }> { title } </h2>
                { body }
            </div>
        )
    }
}
