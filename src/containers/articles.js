import React from 'react';
import { connect } from 'react-redux';
// import { deleteArticle } from '../action-creators/articles';
import ArticleList from '../components/articleList';

class Article extends React.Component {
    render() {
        const { articles, deleteArticle } = this.props;
        return <ArticleList articles={ articles } />
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

// mapStateToProps

export default connect(
    ({articles}) => ({articles})
)(Article);

