import Car from "./Models/Car.js"
import House from './Models/House.js'
import Job from "./Models/Job.js";
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [
    new Car(
      "Ford",
      "Pinto",
      1975,
      1000,
      "ITS HOT!",
      "https://pbs.twimg.com/media/ETpZLKZXgAANyBw.jpg"
    ),
    new Car(
      "AMC",
      "Gremlin",
      1972,
      1200,
      "Gremlin Green!",
      "https://cdn1.mecum.com/auctions/fl0120/fl0120-395915/images/1-1572992729058@2x.jpg?1574881322000"
    ),
    new Car(
      "Volkswagen",
      "Rabbit",
      1983,
      2990,
      "Not an actual rabbit",
      "https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/546b400aba069_-_gti11-lg.jpg"
    ),
    new Car(
      "Zastava",
      "Yugo",
      1988,
      100,
      "spome rust",
      "https://media.istockphoto.com/photos/old-rusty-red-broken-and-damaged-yugo-car-full-of-junk-parked-and-on-picture-id1056309302?s=612x612"
    ),
  ];

  houses = [
    new House(
      4,
      2,
      2300,
      "3579 S. Windy Ridge",
      350000,
      "https://images.dwell.com/photos-6598588534168928256/6598590180525256704-medium/street-view-of-house.jpg"
    ),
    new House(
      3,
      1,
      1300,
      "1022 S Winterbrooke Dr.",
      240000,
      "https://assets-us-01.kc-usercontent.com/28e7bd12-5b30-009d-524e-785407f8bd6e/730900cf-1208-4c7d-bdbd-9d5a6b671235/WB%20Clairborne%20II%20Ext.png?w=900&h=480&fit=crop"
    ),
    new House(
      5,
      3,
      1800,
      "1928 Beckett Lane",
      650000,
      "https://bloximages.chicago2.vip.townnews.com/heraldextra.com/content/tncms/assets/v3/editorial/5/ac/5acb9637-9a34-594b-b578-c70f97ee1762/5f09044e9d03c.image.jpg?crop=1440%2C1080%2C90%2C0&resize=1440%2C1080&order=crop%2Cresize"
    ),
    new House(
      6,
      7,
      3300,
      "2384 Bullet Drive",
      1250000,
      "https://utahvalley360.com/wp-content/uploads/2018/06/Brinkerhoff2018winner.jpg"
    ),
    new House(
      5,
      2,
      1890,
      "9183 Chattmen Road",
      850000,
      "https://www.ebuildershomes.com/wp-content/uploads/2016/09/Portfolio-Cover-Modern-Provincial-blk.jpg"
    ),
    new House(
      1,
      1,
      800,
      "23849 Bucks S. Lane",
      250000,
      "https://static-30.sinclairstoryline.com/resources/media/8adb65ae-1a1f-481e-89ba-f7885a77852b-large16x9_ParadeofHomes025.jpg?1559755550687"
    ),
  ];
  // title, company, description, rate, hours
  jobs = [
    new Job(
      "Marketing Manager",
      "Google",
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster",
      50000,
      40
    ),
    new Job(
      "CEO",
      "AMAZON",
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster",
      800000,
      55
    ),
    new Job(
      "CTO",
      "Apple",
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster",
      540000,
      50),
    new Job(
      "Marketing Manager",
      "Google",
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster",
      50000,
      40
    ),
    new Job(
      "CEO",
      "AMAZON",
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster",
      800000,
      55
    ),
    new Job(
      "CTO",
      "Apple",
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster",
      540000,
      50)
  ]
}

// NOTE Oh oh.. its magic! Ya know!
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
