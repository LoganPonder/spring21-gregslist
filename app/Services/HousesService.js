import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";

class HousesService {
 
    deleteHouse(id) {
        ProxyState.houses = ProxyState.houses.filter(house => house.id != id);
    }

    bidHouse(id) {
        let house = ProxyState.houses.find(house => house.id == id);
        house.price += 5000;
        ProxyState.houses = ProxyState.houses;
    }

    createHouse(newHouse) {
        let house = new House(
          newHouse.bedrooms,
          newHouse.bath,
          newHouse.sqFootage,
          newHouse.price,
          newHouse.address,
          newHouse.imgUrl
        );
        ProxyState.houses = [...ProxyState.houses, house];
    }
}

export const housesService = new HousesService();
