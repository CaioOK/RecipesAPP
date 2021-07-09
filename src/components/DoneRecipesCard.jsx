import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShareBtn from './ShareBtn';

function DoneRecipesCard({ recipe:
  { image, category, area, name, doneDate, type, id, tags, alcoholicOrNot }, index }) {
  let allTags = [''];
  let topText = (alcoholicOrNot !== '') ? alcoholicOrNot : category;
  if (area !== '' && alcoholicOrNot === '') topText = `${area} - ${category}`;
  if (typeof tags !== 'string') allTags = tags;

  return (
    <div>
      <Link to={ `/${type}s/${id}` }>
        <img
          src={ image }
          alt="img"
          data-testid={ `${index}-horizontal-image` }
          style={ { width: '150px', height: '150px' } }
        />
        <h3 data-testid={ `${index}-horizontal-top-text` }>{topText}</h3>
        <h1 data-testid={ `${index}-horizontal-name` }>{name}</h1>
        <span data-testid={ `${index}-horizontal-done-date` }>{doneDate}</span>
      </Link>
      <ShareBtn
        testId={ `${index}-horizontal-share-btn` }
        id={ id }
        kind={ type }
        src="src/images/shareIcon.svg"
      />
      {allTags.map((tagName) => (

        <span
          key={ `${tagName}${id}` }
          data-testid={ `${index}-${tagName}-horizontal-tag` }
        >
          {tags}
        </span>
      ))}
    </div>
  );
}

DoneRecipesCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string, PropTypes.array).isRequired,
  index: PropTypes.number.isRequired,
};

export default DoneRecipesCard;
