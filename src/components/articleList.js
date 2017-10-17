import React from 'react';
import { articles } from '../fixtures';
import Article from './article';
import { bindAll } from 'lodash';
import CommonOpen from '../decorator/common-open';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './styles.less';

class ArticlesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedArticles: null
        };

        bindAll(this, ['renderListArticles']);
    }

    renderListArticles(article) {
        const { isItemOpen, toggleOpenItem } = this.props;

        return(
            <li key={ article.id } className='articles-item'>
                {
                    <Article
                        article={ article }
                        isOpen={ isItemOpen(article.id) }
                        openArticle={ toggleOpenItem(article.id) }
                    />
                }
            </li>
        );
    }

    handleSelectChange = (selectedArticles) => {
        this.setState({ selectedArticles });
    };

    render() {
        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }));


        return(
            <div className="articles">
                <Select
                    options={ options }
                    multi={ true }
                    onChange={ this.handleSelectChange }
                    value={ this.state.selectedArticles }
                />


                <ul>
                    { articles.map(this.renderListArticles) }
                </ul>
            </div>
        );
    }
}

export default CommonOpen(ArticlesList);