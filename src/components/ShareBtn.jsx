import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function ShareBtn({ id, kind, testId }) {
  const [copied, setCopied] = useState(false);
  const kindOf = kind === 'Meal' ? 'comidas' : 'bebidas';

  const handleClick = () => {
    const urlToCopy = `http://localhost:3000/${kindOf}/${id}`;

    copy(urlToCopy);
    setCopied(!copied);
  };

  return (
    <>
      <button
        type="button"
        onClick={ handleClick }
        data-testid={ testId }
        src="src/images/shareIcon.svg"
      >
        <img
          src={ shareIcon }
          alt="share icon"
        />
      </button>
      {
        copied
          ? <p>Link copiado!</p>
          : <div />
      }
    </>
  );
}

ShareBtn.propTypes = {
  id: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  testId: PropTypes.string,
};

ShareBtn.defaultProps = {
  testId: 'share-btn',
};

export default ShareBtn;
