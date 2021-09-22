import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem, Button } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

export const UserList = () => {
   const {users, removeUser} = useContext(GlobalContext);
    return (
      <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map(user => (
            <ListGroupItem className="d-flex justify-content-between align-items-center text-break bg-dark text-primary my-1 mx-4" key={user.id}>
              <strong>{user.name}</strong>
              <div className="ml-auto">
                <Link to={`/edit/${user.id}`} color="warning" className="btn btn-primary m-2">Edit</Link>
                <Button onClick={() => removeUser(user.id)} color="primary">Delete</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
          <h4 className="text-center">No Users</h4>
        )}
    </ListGroup>   
    );
}
