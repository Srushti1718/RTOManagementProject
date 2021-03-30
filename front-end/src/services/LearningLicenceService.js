import axios from "axios";

const base_url = "http://localhost:7070/license";

class LearningLicenceService {

    registerLearningLicence(learningLicence) {
        return axios.post(`${base_url}/register`, learningLicence);
    }

    getAllLearningLicence() {
        return axios.get(`${base_url}/show`);
    }

    getLearningLicence(id) {
        return axios.get(`${base_url}${id}`);
    }

    deleteById(id) {
        return axios.get(`${base_url}/delete/${id}`);
    }



}

export default new LearningLicenceService();