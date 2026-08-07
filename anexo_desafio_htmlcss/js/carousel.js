// array vazio para armazenar os slides do carrossel
let carouselArr = [];

// classe
class Carousel {
  // atributo estatico
  static _sequence = 0;
  static _size = 0;
  static _interval = null;

  // atributos da instancia da classe
  constructor(image, title, url) {
    this.Image = image;
    this.Title = title;
    this.Url = url;
  }

  // metodo estatico
  static Start(arr) {
    if (arr) {
      if (arr.length > 0) {
        Carousel._sequence = 0;
        Carousel._size = arr.length;
        Carousel.Next();
        Carousel._interval = setInterval(function () {
          Carousel.Next();
        }, 5000);
      }
    } else {
      throw "Method Start need a Array Variable.";
    }
  }

  static Next() {
    let slide = carouselArr[Carousel._sequence];

    // troca a imagem do carousel pelo js
    let carouselDiv = document.getElementById("carousel");
    carouselDiv.style.backgroundImage = `url('anexo_desafio_htmlcss/img/${slide.Image}')`;
    carouselDiv.style.backgroundSize = "cover";
    carouselDiv.style.backgroundPosition = "center";

    let tituloDiv = document.getElementById("carousel-title");
    tituloDiv.innerHTML = `<a href='${slide.Url}'>${slide.Title}</a>`;

    Carousel._sequence++;
    if (Carousel._sequence >= Carousel._size) {
      Carousel._sequence = 0;
    }
  }
}
