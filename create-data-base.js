const fs = require('fs');
const data = require('./db.json')
const newData = require('./database/address.json')
const addressLength = newData.length;
data.locations = []
for(let i = 0; i <= addressLength ; i++) {
  data.locations.push({  ...newData[i], id: i+1, })
}
fs.writeFileSync('db.json', JSON.stringify(data, null, 2));