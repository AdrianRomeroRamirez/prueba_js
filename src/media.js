export default (json) => {
  const suma = json.reduce((acc, person) => (acc += person.edad), 0);
  return (suma / json.length).toFixed(2);
};
