import axios from "axios";

const base_url="http://localhost:7070/user";

//const base_url = "http://localhost:7070/license";

class ApiService{

    createRegistrationForm(user) {
        return axios.post(`http://localhost:7070/user/register`, user);
    }
    
    //Authenticate user
    //return user object
    fetchUserByLoginrequest(loginRequest) {
        return axios.post('http://localhost:7070/auth/login', loginRequest);
    }

    createLearningLicence(learningLicence){
        return axios.post('http://localhost:7070/license/register', learningLicence);
    }

    createpermanentLicence(permanentLicence){
        return axios.post('http://localhost:7070/permanent/register', permanentLicence);
    }

    createNewVehicleRegistration(newVehicle){
        return axios.post('http://localhost:7070/vehicle/register', newVehicle);
    }

    createTransferOfVehicle(newVehicle){
        return axios.post('http://localhost:7070/transfer-vehicle/register', newVehicle);
    }

    fetchLicenceByLoginrequest(userInput){
        return axios.post('http://localhost:7070/permanent/login', userInput);
    }
    

    getAllUsers() {
        return axios.get(`http://localhost:7070/admin/show_all_users`);
    }

    
    updateUser(user , id) {
        return axios.put(`http://localhost:7070/admin/update/${id}`, user);
    }

   
    deleteUser(id) {
        return axios.delete(`http://localhost:7070/admin/delete/${id}`);
    }

   
    getUserById(id) {
        return axios.get(`http://localhost:7070/admin/user_by_id/${id}`);
    }


    createAdminRegistration(admin){
        return axios.post(`http://localhost:7070/admin/register`, admin);
    }

    addLearningLicence(learningLicence){
       
        return axios.post(`${base_url}/license`, learningLicence);
    }

    fetchLearningLicenceByEmail(email) {
        return axios.get(`http://localhost:7070/permanent/${email}`);
    }

}

export default new ApiService();