const fs = require('fs');
const data = require('./db.json')
const newData = require('./database/bookbank.json')
const _length = newData.length;
data.bookbanks = []
for (let i = 0; i < _length; i++) {
  data.bookbanks.push({ ...newData[i], id: i + 1, })
}
fs.writeFileSync('db.json', JSON.stringify(data, null, 2));