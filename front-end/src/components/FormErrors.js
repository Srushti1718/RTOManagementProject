import React from 'react';
import {Alert} from 'reactstrap';

export const FormErrors = ({formErrors}) =>
<div className="alert-danger">
<div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <Alert color="warning"><p key={i}>{fieldName} {formErrors[fieldName]}</p>
          </Alert>
          
        )        
      } else {
        return '';
      }
    })}
  </div>
</div>
  
  