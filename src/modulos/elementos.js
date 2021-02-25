const elemento = ( selector ) => {
  return document.querySelector( selector );
}

const elementos = ( selector ) => {
  return document.querySelectorAll( selector );
}

export { elemento, elementos };