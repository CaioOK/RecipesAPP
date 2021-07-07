async function genericFetch(apiUrl) {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}

export default genericFetch;
