import React from 'react';
import CommentsList from '../commentsList';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import './styles.css';

export default class Article extends React.Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        openArticle: PropTypes.func.isRequired
    };

    render() {
        const { article: { title, text, comments }, isOpen, openArticle  } = this.props;
        const body = isOpen ? <section> { text } <CommentsList comments={ comments } /></section> : null;

        return(
            <div className='article'>
                <h2 onClick={ openArticle }> { title } </h2>
                <CSSTransitionGroup transitionName='article' transitionEnterTimeout={ 500 } transitionLeaveTimeout = { 300 } >
                    { body }
                </CSSTransitionGroup>
            </div>
        )
    }
}
