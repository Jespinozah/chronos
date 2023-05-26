import { Card } from '@mui/material';
import { User } from 'src/models/user';
import UsersTable from 'src/content/applications/Users/managment/UsersTable';

function Users() {
    const users: User[] = [
        {
            id: '1',
            status: 'active',
            name: 'Brayan Espinoza',
            email: 'b..h@gmail.com'
        },
        {
            id: '2',
            status: 'inactive',
            name: 'Berney Espinoza',
            email: 'b..@gmail.com'
        },
        {
            id: '3',
            status: 'active',
            name: 'Jasem Valencia',
            email: 'b..@gmail.com'
        }
        
    ];

    return (
        <Card>
            <UsersTable users={users} />
        </Card>
    );
}

export default Users;
