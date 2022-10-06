const data = require('./database/test.json');
const fs = require('fs');
const data1 = data.map((item) => {
    const { _id, ...rest } = item;
    return { ...rest }
});
const uniqueArray = data1.filter((item, pos, self) => {
    return self.indexOf(item) == pos;
})

const dubp = data1.filter(data => data.name === 'พระโขนง')
console.log(JSON.stringify(dubp, null, 2))

console.log(uniqueArray.length);
console.log(data1.length);

fs.writeFileSync('sub_district.json', JSON.stringify(uniqueArray, null, 2));