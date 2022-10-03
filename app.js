/////////////////////////////// EX :1 =>  let
// déclaration + affectation
let favoriteCityId = "rome";

console.log(favoriteCityId);
// nouvelle affectation
favoriteCityId = "paris";

// affichage
console.log(favoriteCityId);

/////////////////////////////// EX :2 => const
// constante
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.table(citiesId);
// pas d'affectation possible pour une constante
// citiesId=[]
citiesId.push("tokyo");

// cities est une constante qui a garder son adresse d'affectation
// même si le tableau à été modifié
console.table(citiesId);

/////////////////////////////// EX :3 =>Création d’objet
// function getWeather(cityId) {
//   let city = cityId.toUpperCase(),
//     temperature = 20;
//   return `{ city:"${city}",temperature: ${temperature} }`;
// }
const getWeather = (cityId) => {
  let city = cityId.toUpperCase(),
    temperature = 20;
  return { city, temperature };
  //   return Object.create({ city, temperature });
};
const weather = getWeather(citiesId[0]);
console.log(weather);

/////////////////////////////// EX :4 => Affectation destructurée

const { city, temperature } = weather;
console.log("city : ", city, " température : ", temperature);

/////////////////////////////// EX :5 => Affectation Rest operator

const [parisId, nicId, ...othersCitiesId] = citiesId;

console.log(parisId, nicId, othersCitiesId.length);

/////////////////////////////// EX :6 => Class Trip

class Trip {
  id;
  name;
  imageUrl;
  _price;
  constructor(id, name, imageUrl) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
  }
  toString() {
    return `[ ${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`;
  }
  get price() {
    return this._price;
  }
  set price(price) {
    this._price = price;
  }
  getDefaultTrip() {
    return new Trip(
      "rio-de-janeiro",
      "Rio-de-Janeiro",
      "img/rio-de-janeiro.jpg"
    );
  }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");

console.log(parisTrip);
console.log(parisTrip.name, "  ", parisTrip["name"]);
parisTrip.price = 100;
console.log(parisTrip.toString());

const defaultTrip = new Trip().getDefaultTrip();
console.log(defaultTrip.toString());

/////////////////////////////// EX :6 => Class Héritage

class FreeTrip extends Trip {
  constructor(id, name, imageUrl, price = 0) {
    super(id, name, imageUrl);
    this.price = price;
  }
  toString(){
    return `FreeTrip ${super.toString()}`
  }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());


