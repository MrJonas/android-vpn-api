import {config} from './config';
import phpPassword from "node-php-password";
import mysql from 'mysql2/promise';

function getNewUser(newUserData) {
    //TODO: use express-validor
    if(!newUserData.username.trim() || !newUserData.password.trim() || !newUserData.mail.trim()) {
        throw "Data not valid";
    }

    const user = {
        user_id : newUserData.username.trim(),
        user_pass: phpPassword.hash(newUserData.password).trim(),
        user_mail: newUserData.mail.trim()
    };
    return user;
}

export async function registerUser(newUserData) {
    let connection;
    try {
        let newUser = getNewUser(newUserData);
        connection = await mysql.createConnection(config);
        const result = await connection.query('INSERT INTO user SET ?', newUser);
        await connection.end();
        return Promise.resolve();
    } catch (e) {
        await connection.end();
        return Promise.reject();
    }
};