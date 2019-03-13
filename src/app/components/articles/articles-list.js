import React from 'react';
import Article from './article';

const ArticlesList = React.memo(({articles, handleClick}) => {
    return (
        <ul className="list-unstyled">
            {articles.map((article, index) => (
            <li key={index + "_" + article.source.id}>
                <Article article={article} handleClick={handleClick} />
            </li>
            ))}
        </ul>
    )   
});

export default ArticlesList;