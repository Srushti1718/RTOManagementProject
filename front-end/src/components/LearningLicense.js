import { Component } from "react";
import ApiService from '../services/ApiService'
import LearningLicenceService from "../services/LearningLicenceService";


class LearningLicenseServices extends Component{
    constructor(props) {
        super(props);
        this.state = {
            learninglicenses : [],
            message : null
        }
        this.updateLearningLicense = this.updateLearningLicense.bind(this);
        this.deleteLearningLicense = this.deleteLearningLicense.bind(this);
    }

    componentDidMount() {
        this.getAllLearningLicense();
    }

    viewLearningLicenseDetails(id) {
        this.props.history.push(`/view-learninglicense/:id`);

    }

    getAllLearningLicense() {
        LearningLicenceService.getAllLearningLicence().then(
            response => {
                this.setState({ learninglicenses : response.data });
            });
    }

    deleteLearningLicense(id) {
        ApiService.deleteLearningLicense(id).then(response => {
            this.setState({message : response.data});
            this.getAllLearningLicense();
        });
    }

    
    updateLearningLicense(id) {
        /*AdminService.updateUser(id).then(response =>{
            this.setState({message : response.data });
            this.getAllUsers();
        });*/
        this.props.history.push(`/update-learninglicense/:id`);
    }

    render() {
        return (
            <div>
                <h2>Learning License List</h2>
                <table className="table table-hover">
                    <thead>
                        <tr className="bg-info text-white">
                            <th>License No</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Relative</th>
                            <th>Relative First Name</th>
                            <th>Relative Middle Name</th>
                            <th>Relative Last Name</th>
                            <th>Gender</th>
                            <th>Place of birth</th>
                            <th>Date of birth</th>
                            <th>Age</th>
                            <th>Country of birth</th>
                            <th>Blood Group</th>
                            <th>Qualification</th>
                            <th>Contact number 1</th>
                            <th>Contact Number 2</th>
                            <th>Identification Mark one</th>
                            <th>identification Mark two</th>
                            <th>Premanent Address</th>
                            <th>Present Address</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.learninglicenses.map((learningLicense) => (
                                <tr key={learningLicense.licenceNo}>
                                    <td>{learningLicense.licenceNo}</td>
                                    <td>{learningLicense.firstName}</td>
                                    <td>{learningLicense.middleName}</td>
                                    <td>{learningLicense.lastName}</td>
                                    <td>{learningLicense.email}</td>
                                    <td>{learningLicense.relative}</td>
                                    <td>{learningLicense.relativeFirstName}</td>
                                    <td>{learningLicense.relativeMiddleName}</td>
                                    <td>{learningLicense.relativeLastName}</td>
                                    <td>{learningLicense.gender}</td>
                                    <td>{learningLicense.placeOfBirth}</td>
                                    <td>{learningLicense.dateOfBirth}</td>
                                    <td>{learningLicense.age}</td>
                                    <td>{learningLicense.countryOfBirth}</td>
                                    <td>{learningLicense.bloodgroup}</td>
                                    <td>{learningLicense.qualification}</td>
                                    <td>{learningLicense.phoneNumberOne}</td>
                                    <td>{learningLicense.phonenumberTwo}</td>
                                    <td>{learningLicense.identificationMarkOne}</td>
                                    <td>{learningLicense.identificationMarkTwo}</td>
                                    <td>{learningLicense.presentAddress}</td>
                                    <td>{learningLicense.permanentAddress}</td>
                                    <td>
                                        <button className="btn btn-danger" style={{marginLeft : "10px"}} 
                                        onClick={ () => this.deleteLearningLicense(learningLicense.id)}>DELETE</button>


                                        <button className="btn btn-info" style={{marginLeft : "10px"}} 
                                        onClick={ () => this.updateLearningLicense(learningLicense.id)}>UPDATE</button>

                                        <button className="btn btn-success" style={{marginLeft : "10px"}}
                                        onClick={ () => this.viewLearningLicenseDetails(learningLicense.id)}>View</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                {
                    this.state.message && (
                        <div className="alert alert-success">{this.state.message}</div>
                    )
                }
            </div>

        );
    }
}

export default LearningLicenseServices;