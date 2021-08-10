const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jone Doe',
        email: 'jone@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'James',
        email: 'james@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jamess',
        email: 'jamess@gmail.com',
        password: bcrypt.hashSync('1234567', 10),
    },
]

module.exports = users;