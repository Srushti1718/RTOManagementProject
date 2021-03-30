
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Service from './components/Service';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/Login';
import LearningLicenceForm from './components/LearningLicenceForm';
import NewVehicleRegistrationForm from './components/NewVehicleRegistrationForm';
import PermanentLicenceLoginForm from './components/PermanentLicenceLogin';
import AdminLogin from './components/AdminLogin';
import AdminServices from './components/AdminServices';
import UserDetails from './components/UserDetails';
import TransferOfVehicleRegistrationForm from './components/TransferOfVehicleRegistrationForm';
import Admin from './components/Admin';
import PermanentLicenceForm from './components/PermanentLicenceForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rto from './components/Rto';
import UpdateUser from './components/UpdateUser';
import ViewLearningLicense from './components/ViewLearningLicense';
import LearningLicense from './components/LearningLicense';
import NewVehicle from './components/NewVehicle';



function App() {
  return (
    <div>
      <Route path="/" component={Rto} exact />
      <Route path="/login" component={LoginForm} />
      <Route path="/home" component={Home} />
      <Route path="/registrationForm" component={RegistrationForm} />
      <Route path="/adminLogin" component={AdminLogin} />
      <Route path="/services" component={Service} exact />
      <Route path="/services/learningLicence" component={LearningLicenceForm} exact />
      <Route path="/services/permanentLicencelogin" component={PermanentLicenceLoginForm} exact />
      <Route path="/services/permanentLicencelogin/permanentLicenceForm/:email" component={PermanentLicenceForm} exact />
      <Route path="/services/newVehicle" component={NewVehicleRegistrationForm} exact />
      <Route path="/services/treansferOfVehicle" component={TransferOfVehicleRegistrationForm} exact />
      <Route path="/adminServices" component={AdminServices} exact />
      <Route path="/userServices" component={Admin} exact />
      <Route path="/userDetails/:id" component={UserDetails} exact/>
      <Route path="/update-user/:id" component={UpdateUser} exact />
      <Route path="/learningLicense/:id" component={LearningLicense} exact />
      <Route path="/newvehicle/:id" component={NewVehicle} exact />

      {/* <Route path="/" component={Home} exact />
            
            <Route path="/home/login" component={LoginForm} exact/>
            
            <Route path="/home/adminRegistration" component={AdminRegistartion} exact/>
            <Route path="/home/adminServices" component={AdminServices} exact/>
            
            <Route path="/services" component={Service} exact />
            <Route path="/services/learningLicence" component={LearningLicenceForm} exact />
            <Route path="/services/newVehicle" component={NewVehicleRegistrationForm} exact />
            <Route path="/services/permanentLicencelogin" component={PermanentLicenceLoginForm} exact />
            <Route path="/home/adminLogin/admin" component={Admin} exact />
<Route path="/home/adminLogin/admin/view-user/:id" component={ViewUserComponent} exact />
<Route path="/update-user/:id" component={UpdateUserComponent} exact />
 <Route path="/home/adminLogin/adminServices/userServices/view-user/:id" component={ViewUserComponent} exact />
          
          

             */}
      {/* 
            
           
            <Route path="/home/registrationForm" component={RegistrationForm} exact />
            <Route path="/home/registrationForm/login" component={Login} exact />
            <Route path="/services" component={Service} exact />
            <Route path="/services/learningLicence" component={LearningLicenceForm} exact />
            <Route path="/services/permanentLicence" component={PermanentLicenceForm} exact />
            <Route path="/services/vehicleRegistrationServices" component={NewVehicleRegistrationForm} exact />
            <Route path="/services/transferofVehicle" component={TransferOfVehicleRegistrationForm} exact />
            <Route path="/home/adminServices/userServices" component={UserServices} exact/>
            <Route path="/home/adminServices/userServices/userDetails/:id" component={UserServices} exact/>
            
            
           <Route path="/services/login/permanentLicencelogin" component={PermanentLicenceLoginForm} exact />
 <Route path="/services/login/permanentLicencelogin/permanentLicenceForm/:email" component={PermanentLicenceForm} exact /
       
            */}

    </div>
  );
}

export default App;
