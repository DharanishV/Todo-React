import React from 'react';
import { Heading } from './Heading';
import { UserList } from './UserList';

export default function Home(){
    return (
        <div className="mt-4">
        <Heading />
        <UserList />
        </div>
    );
}
