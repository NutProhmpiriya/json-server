const folder = './database/';
const fs = require('fs');

const db = {};

(async () => {
    fs.readdirSync(folder).forEach(file => {
        if (file.endsWith('.json')) {
            db[file.split('.')[0]] = require(folder + file);
        }
    });
    fs.writeFile('db2.json', JSON.stringify(db, null, 2), (err) => {
        if (err) {
            console.log(err);
        }
    })
})()

