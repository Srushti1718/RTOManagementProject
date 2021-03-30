import axios from 'axios';

const URL="http://localhost:7070/vehicle"

class VehicleService {

    //1. get all vehicles
    getVehicleBtId(id) {
        return axios.get(`${URL}/${id}`);
    }

    getAllVehicle() {
        return axios.get(`${URL}/show`);
    }

    deleteById(id) {
        return axios.get(`${URL}/delete/${id}`);
    }
}
export default new VehicleService()