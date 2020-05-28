let beloHorizonte = { lat: -19.8157, long: -43.9542 };
let saoPaulo = { lat: -23.5489, long: -46.6388 };

//with function
const { haversine, isNear } = require('./distance')
const distance = haversine(beloHorizonte, saoPaulo); //meters
console.log(distance / 1000, "km", isNear(distance, 1500)); //check if the distance is close (in meters)

//with class
const Haversine = require('./Haversine');
const h = new Haversine(beloHorizonte, saoPaulo);
console.log(h.distance / 1000, "km" ,h.isNear(1500)); //check if the distance is close (in meters)