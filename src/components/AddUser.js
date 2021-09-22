import React, {useContext, useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import { GlobalContext } from '../context/GlobalState';

export default function AddUser(){
   const {addUser}  = useContext(GlobalContext);
   const [name, setName] = useState('');
   const history = useHistory();

   const onSubmit = () => {
       const newUser = {
          id: uuid(),
          name
       }
       addUser(newUser);
      history.push('/');
   };

   const onChange = (e) => {
     setName(e.target.value);
   }
  
    return (
       
       <Form onSubmit={onSubmit}>
         <FormGroup>
            <Label className="m-2"><strong>Name:</strong></Label>
            <Input type="text" value={name} onChange={onChange}  placeholder="Enter the name"></Input>
         </FormGroup>
        
         <Button type="submit" className="btn btn-warning m-2 ">Add</Button>
         <Link to="/"><Button className="btn btn-danger m-2 ">Cancel</Button></Link>
       </Form>
      
    );
}
