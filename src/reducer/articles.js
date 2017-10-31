import { GET_ARTICLES, DELETE_ARTICLE } from '../constants';
import { articles as defaultArticles } from '../fixtures';

function articleReducer(articles = defaultArticles, action) {
    switch (action.type) {
        case DELETE_ARTICLE:
            const { id } = action.payload;

            console.log(articles.filter(article => article.id != id));
            return articles.filter(article => article.id != id);
    }

    return articles;
}

export default articleReducer;