const fs = require('fs');
const data = require('./db.json')
const newData = require('./database/branch.json')
const _length = newData.length;
data.branchs = []
for (let i = 0; i < _length; i++) {
  const { id, ...item } = newData[i]
  data.branchs.push({ ...item, id: i + 1, })
}
fs.writeFileSync('db.json', JSON.stringify(data, null, 2));