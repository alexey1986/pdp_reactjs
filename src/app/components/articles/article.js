import React from 'react';

const Article = React.memo(({article, handleClick}) => {
    return (
        <div className="article-item" onClick={() => handleClick(article)} >        
            <h3>{article.title}</h3>
            {article.urlToImage && (
                <img className="img-thumbnail float-left w-25 mr-2" src={article.urlToImage} alt={article.source.name} />
            )}
            <p>{article.description}</p>
        </div>
    )
});

export default Article;
