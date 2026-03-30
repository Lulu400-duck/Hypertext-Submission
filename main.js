


const data = {
  "Gaspara Stampa": {
    rhyme: "Se Voi volete conoscere il mio signore, di bel e dolce aspetto cercate",
    translation: "Ladies,if you would seek to know my lord, picture a man pleasing and sweet of aspect" 
  }
};
function showDetails(author) {
  const container = document.getElementById("author1-details");
  const info = data[author];

  container.innerHTML = `
    <h3>Translation:</h3>
    <p>${info.translation}</p>
  `;
}
const data = {
  "Arcangela Tarabotti": {
    rhyme: "Non mi burlate se io con penna di candida colomba, funesto corvo vi auguro nel vostro Inferno ",
    translation: "Do not mock me if with the quill of a white dove I curse you like a sinister raven in your Hell" 
  }
};
function showDetails(author) {
  const container = document.getElementById("author2-details");
  const info = data[author];

  container.innerHTML = `
    <h3>Translation:</h3>
    <p>${info.translation}</p>
  `;
}
const data = {
  "Lucrezia Marinella": {
    rhyme: "È adunque primiera, e principal cagione la belleza divina della beltá donnesca, doppo la quale vi concorrono le stelle, il cielo, la natura, e gli elementi.",
    translation: "It is therefore the primary and principal cause, the divine beauty of feminine beauty, after which the stars, the sky, nature, and the elements concur."
  }
};
function showDetails(author) {
  const container = document.getElementById("author3-details");
  const info = data[author];

  container.innerHTML = `
    <h3>Translation:</h3>
    <p>${info.translation}</p>
  `;
}
