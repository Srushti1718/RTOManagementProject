import React, { Component } from 'react';
import LearningLicenceService from '../services/LearningLicenceService';

class ViewLearningLicense extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id : this.props.match.params.id,
            learningLicense : {}
        }
    }

    componentDidMount() {
        LearningLicenceService.getLearningLicence(this.state.id).then( res => {
            this.setState ({learningLicense : res.data});
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className="text-center">View Learning License Details</h3>
                    <div className="card-body">

                        <div className = "row">
                                <label> License No: </label>
                                <div> { this.state.learningLicense.licenceNo } </div>
                            </div>
                        <div className = "row">
                            <label> First Name: </label>
                            <div> { this.state.learningLicense.firstName } </div>
                        </div>

                        <div className = "row">
                            <label> Middle Name: </label>
                            <div> { this.state.learningLicense.middleName } </div>
                        </div>

                        <div className = "row">
                            <label> Last Name: </label>
                            <div> { this.state.learningLicense.lastName } </div>
                        </div>

                        <div className = "row">
                            <label> Relative: </label>
                            <div> { this.state.learningLicense.relative } </div>
                        </div>

                        <div className = "row">
                            <label> Email Id: </label>
                            <div> { this.state.learningLicense.email } </div>
                        </div>

                        <div className = "row">
                            <label> Relative First Name: </label>
                            <div> { this.state.learningLicense.relativeFirstName } </div>
                        </div>

                        <div className = "row">
                            <label> Relative Middle Name: </label>
                            <div> { this.state.learningLicense.relativeMiddleName } </div>
                        </div>

                        <div className = "row">
                            <label> Relative Last Name: </label>
                            <div> { this.state.learningLicense.relativeLastName } </div>
                        </div>

                        <div className = "row">
                            <label> Gender: </label>
                            <div> { this.state.learningLicense.gender } </div>
                        </div>

                        <div className = "row">
                            <label> Place of birth: </label>
                            <div> { this.state.learningLicense.placeOfBirth } </div>
                        </div>

                        <div className = "row">
                            <label> Date Of Birth: </label>
                            <div> { this.state.learningLicense.dateOfBirth } </div>
                        </div>

                        <div className = "row">
                            <label> Age: </label>
                            <div> { this.state.learningLicense.age } </div>
                        </div>

                        <div className = "row">
                            <label> Country Of Birth: </label>
                            <div> { this.state.learningLicense.countryOfBirth } </div>
                        </div>

                        <div className = "row">
                            <label> Blood Group: </label>
                            <div> { this.state.learningLicense.bloodgroup } </div>
                        </div>

                        <div className = "row">
                            <label> Blood Group: </label>
                            <div> { this.state.learningLicense.bloodgroup } </div>
                        </div>

                        <div className = "row">
                            <label> Qualification: </label>
                            <div> { this.state.learningLicense.qualification } </div>
                        </div>

                       
                        <div className = "row">
                            <label>  Contact Number: </label>
                            <div> { this.state.learningLicense.phoneNumberOne } </div>
                        </div>

                        <div className = "row">
                            <label> Reference Contact Number: </label>
                            <div> { this.state.learningLicense.phonenumberTwo } </div>
                        </div>

                        <div className = "row">
                            <label> Identification Mark One: </label>
                            <div> { this.state.learningLicense.identificationMarkOne } </div>
                        </div>

                        <div className = "row">
                            <label> Identification Mark Two: </label>
                            <div> { this.state.learningLicense.identificationMarkTwo } </div>
                        </div>

                        <div className = "row">
                            <label> Present Address: </label>
                            <div> { this.state.learningLicense.presentAddress } </div>
                        </div>

                        <div className = "row">
                            <label> Premanenet Address: </label>
                            <div> { this.state.learningLicense.permanentAddress } </div>
                        </div>

                        <div className = "row">
                            <label> User: </label>
                            <div> { this.state.learningLicense.user } </div>
                        </div>



                    </div>


                </div>
                
            </div>
        );
    }
}

export default ViewLearningLicense;