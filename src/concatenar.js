export default (json) => {
  return json.map((person) => " " + getNombre(person));
};

const getNombre = (person) => {
  return `${capitalizar(person.nombre ?? "")} ${capitalizar(
    person.apellido ?? ""
  )} ${capitalizar(person.apellido2 ?? "")}`;
};

const capitalizar = (texto) => {
  const textoMinusculas = texto.toLowerCase();
  return textoMinusculas.charAt(0).toUpperCase() + textoMinusculas.slice(1);
};
