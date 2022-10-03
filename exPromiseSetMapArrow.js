/////////////////////////////// EX :7 => Promise, Set, Map, Arrow Function
class TripService {
  tripSet = new Set();
  constructor() {
    this.tripSet.add(new Trip("paris", "Paris", "img/paris.jpg"));
    this.tripSet.add(new Trip("nantes", "Nantes", "img/nantes.jpg"));
    this.tripSet.add(
      new Trip("rio-de-janeiro", "Rio-de-Janeiro", "img/rio-de-janeiro.jpg")
    );
  }
  findByName(tripName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.tripSet.forEach((obj) => {
          if (obj.name == tripName) {
            resolve(
              `Trip found : Trip ${JSON.stringify(obj)}`
            );
          }
        });
        reject(`No trip with name ${tripName}`);
      }, 2000);
    });
  }
}
class PriceService {
  priceMap = new Map();
  constructor() {
    // 'paris' --> price == 100
    this.priceMap.set("Paris", 100);
    // 'rio-de-janeiro' --> price == 800)
    this.priceMap.set("Rio-de-Janeiro", 800);
    // no price for 'nantes'
    this.priceMap.set("Nantes");
  }
  findPriceByTripId(tripId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.priceMap.has(tripId)) {
          resolve(`Price found : ${this.priceMap.get(tripId)}`);
        } else {
          reject(`No price found for id ${tripId}`);
        }
      }, 2000);
    });
  }
}
const tripService = new TripService();
const priceService = new PriceService();

tripService.findByName("Paris").then((res) => console.log(res));
tripService.findByName("Toulouse").catch((res) => console.log(res));
priceService.findPriceByTripId("Paris").then((res) => console.log(res));
tripService.findByName("Rio-de-Janeiro").then(async (res) => {
  const objString = res.replace("Trip found : Trip","");
  return await priceService.findPriceByTripId(JSON.parse(objString).name)
}).then(res=>{
    console.log(res)
})

