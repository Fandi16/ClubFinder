
class DataSource {
  static searchClub(keyword) {
    return fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?i=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.ingredients) {
            return Promise.resolve(responseJson.ingredients);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;
