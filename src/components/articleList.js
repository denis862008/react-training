import React from 'react';
import { articles } from '../fixtures';
import Article from './article';
import './styles.less';

export default class ArticlesList extends React.Component {
    renderListArticles(article, idx) {
        return(
            <li key = { idx } className="articles-item"> { <Article article={article} /> } </li>
        );
    }

    render() {
        return(
            <div className="articles">
                <ul>
                    { articles.map(this.renderListArticles) }
                </ul>
            </div>
        );
    }
}
