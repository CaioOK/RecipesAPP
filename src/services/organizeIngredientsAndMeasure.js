const organizeIngredientsAndMeasure = (object, callback) => {
  const arrayWithAllEntries = Object.entries(object);
  const arrayOfValidsIngredients = arrayWithAllEntries
    .filter((entrie) => entrie[0]
      .includes('strIngredient') && entrie[1])
    .map((entrie) => ({
      [entrie[0]]: entrie[1],
    }));
  const arrayOfValidsMeasure = arrayWithAllEntries
    .filter((entrie) => entrie[0]
      .includes('strMeasure') && entrie[1] !== ' ')
    .map((entrie) => ({
      [entrie[0]]: entrie[1],
    }));
  callback([arrayOfValidsIngredients, arrayOfValidsMeasure]);
};

export default organizeIngredientsAndMeasure;
