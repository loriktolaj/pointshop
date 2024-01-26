import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Test',
        email: 'test@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Test2',
        email: 'test2@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    }
];

export default users;