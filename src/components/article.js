import React from 'react';
import CommentsList from './commentsList';
import PropTypes from 'prop-types';

export default class Article extends React.Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        openArticle: PropTypes.func.isRequired
    };

    render() {
        const { article: { title, text, comments }, isOpen, openArticle  } = this.props;
        const body = isOpen ? <section> { text } <CommentsList comments={ comments } /></section> : null;

        return(
            <div>
                <h2 onClick={ openArticle }> { title } </h2>
                { body }
            </div>
        )
    }
}
