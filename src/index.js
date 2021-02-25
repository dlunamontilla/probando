import "./styles.css";
import "../ciencia.css";

import { elemento } from "./modulos/elementos.js";

const app = elemento("#app");

const evaluar = (objeto) => {
  return Object.prototype.toString.call(objeto);
};

if (app !== null) {
  app.innerHTML = `
  <h1>Hello Vanilla!</h1>

<h2>Ciencia de datos</h2>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
}

console.clear();

const numeros = [1, 2, 3, 4, 5, 6, 6, 7];

console.log(
  numeros.filter((value) => {
    return value & 1;
  })
);

console.log(
  numeros.filter((value) => {
    return !(value & 1);
  })
);

const array = [
  {
    titulo: "any",
    mensaje: "any"
  },
  {
    titulo: "any",
    mensaje: "any"
  },
  {
    titulo: "any",
    mensaje: "any"
  },
  //...longitud n
  {
    titulo: "any",
    mensaje: "any"
  }
];

array.forEach((elemento, indice) => {
  elemento.id = indice + 1;
});

console.clear();
console.log(array);

const dom = document.createElement("div");
dom.classList.add("ciencia");
dom.textContent = "Contenido de pruebas";

document.body.append(dom);

let styles = document.styleSheets;

console.log(evaluar(styles));

const estilos = [];

const obtenerEstilos = (estilos) => {
  if (!Array.isArray(estilos)) return;

  const styles = document.styleSheets;

  Object.keys(styles).forEach((key) => {
    estilos.push(styles[key]);
  });
};

obtenerEstilos(estilos);

console.clear();

console.log(window);
