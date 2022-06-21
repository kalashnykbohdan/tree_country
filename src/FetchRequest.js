const query = `
query{
    continents( filter: { code: { ne: ""} } ){
        code
        name
      countries{
        code
        name
        languages{
            code
            name
        }
      }
    }
  }
`;

const fetchContinens = async () => {

  const url = 'https://countries.trevorblades.com/',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query
        })
    };

    const data = await fetch(url, options)
    .then(response => response.json())
    .then(data => {
        return data;
      })
    .catch(error => console.error(error));

  return data;

}

export default { fetchContinens };

















