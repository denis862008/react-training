import React from 'react';
import { articles } from '../fixtures';
import Article from './article/index';
import { bindAll } from 'lodash';
import CommonOpen from '../decorator/common-open';
import Select from 'react-select';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-select/dist/react-select.css';
import 'react-day-picker/lib/style.css';
import './styles.less';

class ArticlesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedArticles: null,
            from: null,
            to: null
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

    //getRangeTitle() {
    //    const { from, to } = this.state;
    //    const fromText = from && `Start date: ${from.toDateString()}`;
    //    const toText = to && `Finish date: ${to.toDateString()}`;
    //
    //    return <p>{fromText} {toText}</p>
    //}
    //
    //handleDayClick = (e, day) => {
    //    console.log('---', day);
    //    const range = DateUtils.addDayToRange(day, this.state);
    //    console.log(range)
    //    this.setState(range)
    //};

    render() {
        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }));


        return(
            <div className="articles">
                { /* this.getRangeTitle() */ }

                <Select
                    options={ options }
                    multi={ true }
                    onChange={ this.handleSelectChange }
                    value={ this.state.selectedArticles }
                />

                {
                    /*
                    <DayPicker
                        ref="daypicker"
                        selectedDays={day => DateUtils.isDayInRange(day, this.state)}
                        onDayClick={this.handleDayClick}
                    />
                    */
                }

                <ul>
                    { articles.map(this.renderListArticles) }
                </ul>
            </div>
        );
    }
}

export default CommonOpen(ArticlesList);