import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";

function _draw() {
    let houses = ProxyState.houses;
    let template = '';

    houses.forEach(house => {
        template += house.Template;
    })

    document.getElementById('houses').innerHTML = template;
}

export default class CarsController {
  constructor() {
    ProxyState.on("houses", _draw);

    // manually run draw the on page load
    _draw();
  }

  createHouse() {
      window.event.preventDefault();

      const form = window.event.target;
      let newHouse = {
        bedrooms: form.bedrooms.value,
        bath: form.bath.value,
        sqFootage: form.sqFootage.value,
        address: form.address.value,
        price: form.price.value,
        imgUrl: form.imgUrl.value
      }

      housesService.createHouse(newHouse);
      form.reset();
      $("#new-house-form").modal("hide");
  }

  deleteHouse(id) {
      housesService.deleteHouse(id);
  }

  bidHouse(id) {
      housesService.bidHouse(id);
  }
 
}
