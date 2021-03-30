import { Component } from "react";
import ApiService from '../services/ApiService'


class UserServices extends Component {


    constructor(props) {
        super(props);
        this.state = {
            users : [],
            message : null
        }
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        this.getAllUsers();
    }

    viewUserDetails(id) {
        this.props.history.push(`/view-user/:id`);

    }

    getAllUsers() {
        ApiService.getAllUsers().then(
            response => {
                this.setState({ users : response.data });
            });
    }

    deleteUser(id) {
        ApiService.deleteUser(id).then(response => {
            this.setState({message : response.data});
            this.getAllUsers();
        });
    }

    
    updateUser(id) {
        /*AdminService.updateUser(id).then(response =>{
            this.setState({message : response.data });
            this.getAllUsers();
        });*/
        this.props.history.push(`/update-user/:id`);
    }

    render() {
        return (
            <div>
                <h2>User List</h2>
                <table className="table table-hover">
                    <thead>
                        <tr className="bg-info text-white">
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className="btn btn-danger" style={{marginLeft : "10px"}} 
                                        onClick={ () => this.deleteUser(user.id)}>DELETE</button>


                                        <button className="btn btn-info" style={{marginLeft : "10px"}} 
                                        onClick={ () => this.updateUser(user.id)}>UPDATE</button>

                                        <button className="btn btn-success" style={{marginLeft : "10px"}}
                                        onClick={ () => this.viewUserDetails(user.id)}>View</button>
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
export default UserServices;