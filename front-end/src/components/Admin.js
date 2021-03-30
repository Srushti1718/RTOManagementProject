import { Component } from "react";
import ApiService from '../services/ApiService';
import Footer from "./Footer";
import Header from "./Header";


export class Admin extends Component {


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

    viewEmployee(id) {
        this.props.history.push(`/userDetails/${id}`);

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
            <div className="admin">
                <Header />
                <h2 className="text-center ">
                    User List
                    </h2>
                    <div className=" col-12 col-lg-5 login-card mt-2 text-center mx-auto">
                <table className="admin-table">
                    <thead>
                        <tr className="bg-dark text-white text-center">
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
                                        onClick={ () => this.viewEmployee(user.id)}>View</button>
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
                <a class="btn btn-primary text-center btn-lg button mt-5 ml-2" href="/adminServices" role="button"><span>Back To User Services</span></a>
                <Footer />
            </div>

        );
    }
}
export default Admin;