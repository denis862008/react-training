import React from 'react';
import Comment from './comment';
import toggleOpen from '../decorator/toggleOpen';

class CommentsList extends React.Component {
    renderItems(comment, idx) {
        return (
            <li key={ idx }> <Comment comment={ comment } /> </li>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen !== this.props.isOpen;
    }

    render() {
        const { comments, isOpen, toggleOpen } = this.props;

        if(!comments || !comments.length) return <h3>Not comments yet</h3>;

        const body = <ul> { isOpen ? comments.map(this.renderItems.bind(this)) : null } </ul>;
        const textLink = isOpen ? 'Close comments' : 'Show comments';

        return(
            <div>
                <a href="" onClick={ toggleOpen }> { textLink } </a>
                { body }
            </div>
        );
    }
}

export default toggleOpen(CommentsList);