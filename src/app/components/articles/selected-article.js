import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SelectedArticle = React.memo(({article}) => {      
    return (
        <Fragment>
            {article ? (
                <div>
                    <h3>{article.title}</h3>
                    <p><small>Source: <a href={article.url}>{article.source.name}</a> Date: {article.publishedAt} </small></p>
                    <p>{article.content}</p>
                    <img className="img-thumbnail" src={article.urlToImage} alt={article.source.name} />
                </div>
            ) : (
                <div>Please chose any article...</div>
            )}
        </Fragment>
    )
});

SelectedArticle.propTypes = {
    article: PropTypes.object
}

SelectedArticle.defaultProps = {
    article: null
};

export default SelectedArticle;
