import React from 'react';
import CommentsList from '../commentsList';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import './styles.css';
import { deleteArticle } from '../../action-creators/articles'
import { connect } from 'react-redux';

class Article extends React.Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        openArticle: PropTypes.func.isRequired
    };

    handleDeleteArticle() {
        const { article: { id }, deleteArticle} = this.props;
        deleteArticle(id);
    }

    render() {
        const { article: { title, text, comments }, isOpen, openArticle  } = this.props;
        const body = isOpen ? <section> { text } <CommentsList comments={ comments } /></section> : null;

        return(
            <div className='article'>
                <h2 onClick={ openArticle }> { title } </h2>
                <span className='btn-delete' onClick={ this.handleDeleteArticle.bind(this) }><em>Delete</em></span>
                <CSSTransitionGroup transitionName='article' transitionEnterTimeout={ 500 } transitionLeaveTimeout = { 300 } >
                    { body }
                </CSSTransitionGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(null, { deleteArticle })(Article);
