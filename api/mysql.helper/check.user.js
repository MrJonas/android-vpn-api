import {config} from './config';
import phpPassword from "node-php-password";
import mysql from 'mysql2/promise';

async function checkUser(username, password) {
    console.log("000")
    let connection;
    try {
        connection = await mysql.createConnection(config);
        const rows = await connection.query('SELECT * FROM user where user_id = ? ;', [username, password]);
        console.log("111")
        console.log(rows);
        let storedPassHash = rows[0][0].user_pass;
        await connection.end();
        if(phpPassword.verify(password,storedPassHash)) {
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
    } catch (e) {
        console.log("3333")
        console.log(e);
        await connection.end();
        return Promise.reject();
    }
}

function asyncAuthorizer(username, password, cb) {
    checkUser(username, password).then(r=>cb(null, true), e=>cb(null, false));
}

export function asyncAuthorizer;
