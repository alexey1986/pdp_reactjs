import React from 'react';
import Article from './article';

const ArticlesList = ({ articles, handleClick }) => (
    <ul className="list-unstyled">
        {articles.map((article, index) => (
        <li key={index + "_" + article.source.id}>
            <Article article={article} handleClick={handleClick} />
        </li>
        ))}
    </ul>
)

export default ArticlesList;