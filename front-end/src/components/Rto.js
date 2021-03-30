import React, { Component } from 'react';
import {Button} from 'reactstrap';


class Rto extends Component {
    render() {
        return (
<div className='rto App-header'>

                <h1 className="display-4 text-white">Online RTO Management System</h1>
               
                <hr class="my-4" />
                <small className="text-white">(For User)</small>
                <a class="btn btn-primary btn-lg button" href="/login" role="button"><span>Get Started<br />
                </span></a>
                <small className="text-white">(For Admin)</small>
                <a class="btn btn-primary btn-lg button" href="/adminLogin" role="button"><span>Get Started<br />
                </span></a>
                
                
</div>
            

        );
    }
}

export default Rto;