import React from 'react';
import Button from './button';

const CATEGORIES = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

const Categories = React.memo(({handleClick}) => {
    return (
        <div>
            <h2>Chose category:</h2>
            <div className="btn-group btn-group-sm mb-3" role="group">
                {CATEGORIES.map((category, i) => <Button key={"cat_" + i} title={category} handleClick={handleClick} />)}
            </div>
        </div>
    );
});

export default Categories;