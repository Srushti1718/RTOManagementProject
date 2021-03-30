import { Component } from "react";
import VehicleService from "../services/VehicleService";


class NewVehicle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            vehicles : [],
            message : null
        }
        this.updateVehicles = this.updateVehicles.bind(this);
        this.deleteVehicles = this.deleteVehicles.bind(this);
    }

    componentDidMount() {
        this.getAllVehicles();
    }

    viewVehiclesDetails(id) {
        this.props.history.push(`/view-vehicle/:id`);

    }

    getAllVehicles() {
        VehicleService.getAllVehicle().then(
            response => {
                this.setState({ vehicles : response.data });
            });
    }

    deleteVehicles(id) {
        VehicleService.deleteById(id).then(response => {
            this.setState({message : response.data});
            this.getAllVehicles();
        });
    }

    
    updateVehicles(id) {
        /*AdminService.updateUser(id).then(response =>{
            this.setState({message : response.data });
            this.getAllUsers();
        });*/
        this.props.history.push(`/update-vehicle/:id`);
    }

    render() {
        return (
            <div>
                <h2>Learning License List</h2>
                <table className="table table-hover">
                    <thead>
                        <tr className="bg-info text-white">
                            <th>Vehicle No</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Type of Vehicle</th>
                            <th>Premanent Address</th>
                            <th>Present Address</th>
                            <th>Manufacturing Month of year:</th>
                            <th>Manufacturer:</th>
                            <th>Seating Capacity:</th>
                            <th>Chasis Number:</th>
                            <th>Engine Number:</th>
                            <th>Model:</th>
                            <th>Colour:</th>
                            <th>Fuel:</th>
                            <th>Registered Up To:</th>
                            <th>Insurance Number:</th>
                            <th>Insurance Up To:</th>
                            <th>Insurance Company:</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.vehicles.map((vehicle) => (
                                <tr key={vehicle.vehicleRegistrationId}>
                                    <td>{vehicle.vehicleRegistrationId}</td>
                                    <td>{vehicle.firstName}</td>
                                    <td>{vehicle.middleName}</td>
                                    <td>{vehicle.lastName}</td> 
                                    <td>{vehicle.lastName}</td> 
                                    <td>{vehicle.typeOfVehicle}</td> 
                                    <td>{vehicle.presentAddress}</td>
                                    <td>{vehicle.permanentAddress}</td>
                                    <td>{vehicle.typeOfVehicle}</td>
                                    <td>{vehicle.presentAddress}</td>
                                    <td>{vehicle.manufacturingMonthYear}</td>
                                    <td>{vehicle.manufacturer}</td>
                                    <td>{vehicle.seatingCapacity}</td>
                                    <td>{vehicle.chassiNo}</td>
                                    <td>{vehicle.engineNo}</td>
                                    <td>{vehicle.model}</td>
                                    <td>{vehicle.colour}</td>
                                    <td>{vehicle.fuel}</td>
                                    <td>{vehicle.registeredUpTo}</td>
                                    <td>{vehicle.insuranceNo}</td>
                                    <td>{vehicle.insuranceUpTo}</td>
                                    <td>{vehicle.insuranceCompany}</td>
                                    <td>
                                        <button className="btn btn-danger" style={{marginLeft : "10px"}} 
                                        onClick={ () => this.deleteVehicles(vehicle.vehicleRegistrationId)}>DELETE</button>


                                        <button className="btn btn-info" style={{marginLeft : "10px"}} 
                                        onClick={ () => this.updateVehicles(vehicle.vehicleRegistrationId)}>UPDATE</button>

                                        <button className="btn btn-success" style={{marginLeft : "10px"}}
                                        onClick={ () => this.viewVehiclesDetails(vehicle.vehicleRegistrationId)}>View</button>
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

export default NewVehicle;