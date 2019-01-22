import React from 'react';

const SelectedArticle = ({article}) => (
    <div>
        <h3>{article.title}</h3>
        <p><small>Source: <a href={article.url}>{article.source.name}</a> Date: {article.publishedAt} </small></p>
        <p>{article.content}</p>
        {article.urlToImage && (
            <img className="img-thumbnail" src={article.urlToImage} alt={article.source.name} />
        )}
    </div>
)

export default SelectedArticle;
