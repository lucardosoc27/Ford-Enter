// array vazio para armazenar os slides do carrossel
let carouselArr = [];

// classe
class Carousel {

  // atributo estatico
  static _sequence = 0;
  static _size = 0;
  static _interval = null;
  static _arr = [];

  // atributos da instancia da classe
  constructor(image, title, url) {
    this.Image = image;
    this.Title = title;
    this.Url = url;
  }

  // metodo estatico da classe
  static Start(arr) {
      if (arr && arr.length > 0) {
        Carousel._sequence = 0;
        Carousel._arr = arr;
        Carousel._size = arr.length;
        Carousel.Atualizar();
        Carousel._interval = setInterval(() => Carousel.Next(), 2000);
    } else {
      throw "Method Start need a Array Variable.";
    }
  }

  // metodo pra avançar pro próximo slide
  static Next() {
    Carousel._sequence++;
    if (Carousel._sequence >= Carousel._size) {
      Carousel._sequence = 0;
    }
    Carousel.Atualizar();
  }
  
  // metodo pra voltar pro slide anterior
  static Previous () {
    Carousel._sequence--;
    if (Carousel._sequence < 0) {
      Carousel._sequence = Carousel._size -1;
    }
    Carousel.Atualizar();
  }

  // exibir o slide na posição atual na tela
  static Atualizar() {
    const slide = Carousel._arr[Carousel._sequence];

    const carouselDiv = document.getElementById("carousel");
    carouselDiv.style.backgroundImage = `url('anexo_desafio_htmlcss/img/${slide.Image}')`;
    carouselDiv.style.backgroundSize = "cover";
    carouselDiv.style.backgroundPosition = "center";

    const tituloDiv = document.getElementById("carousel-title");
    tituloDiv.innerHTML = `<a href='${slide.Url}'>${slide.Title}</a>`;
  }
}