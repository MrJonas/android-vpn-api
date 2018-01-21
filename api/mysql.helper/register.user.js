import {config} from './config';
import phpPassword from "node-php-password";
import mysql from 'mysql2/promise';

function getNewUser(newUserData) {
    const user = {
        user_id : newUserData.username,
        user_pass: phpPassword.hash(newUserData.password),
        user_mail: newUserData.mail
    };
    return user;
}

async function registerUser(newUserData) {
    let connection;
    try {
        connection = await mysql.createConnection(config);
        const result = await connection.query('INSERT INTO user SET ?', getNewUser(newUserData));
        await connection.end();
        console.log(result);
        return Promise.resolve();
    } catch (e) {
        await connection.end();
        return Promise.reject();
    }
}

let nu = {
    username: 'test',
    password: 'test',
    mail: 'test@test.com'
}

registerUser(nu).then(r=>{}, e=>{});

export function registerUser;