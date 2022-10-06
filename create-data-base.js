const fs = require('fs');
const data = require('./db.json')
const newData = require('./database/employee.json')
const _length = newData.length;
data.employees = []

const _status = ["newlyRegistered", "approved", "unapproved"]
for (let i = 0; i < _length; i++) {
  const { _id, ...item } = newData[i]
  const status = _status[Math.floor(Math.random() * 3)]
  data.employees.push({ ...item, status, id: i + 1, })
}
fs.writeFileSync('db.json', JSON.stringify(data, null, 2));