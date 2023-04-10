const fs = require('fs');
let input = fs.readFileSync('BackPack.txt','utf-8');
const bpList = input.split('\n').map(String);


let newArrCod = [];
function Codes() {
    for(let i = 0;i<bpList.length;i++){
        let codes = []
         for(let j = 0;j<bpList[i].length;j++){
           codes.push(bpList[i].charCodeAt(j));
        }
        newArrCod.push(codes);

    }; // знаходимо коди букв
    const priority = newArrCod.map(item => {
        return item.map(charCode => {
          if (charCode >= 65 && charCode <= 90) {
            return charCode - 38;
          } 
           if (charCode >= 97 && charCode <= 122) {
            return charCode - 96;
          } 
          else {
            return charCode;
          }
        });
      }); // обчислюємо коди які потрібні в задачі 

    
        const arrObj = priority.map(item => {
            let num = item.length / 2;
            let obj = {};
            obj.front = item.slice(0,num);
            obj.back = item.slice(num);
            return obj;
        });// розділяємо масив на об'єкти 
      const commonPriority = arrObj.reduce((acc, curr) => {
        let common = [];
      
        for (let i = 0; i < curr.front.length; i++) {
          if (curr.back.includes(curr.front[i]) && !common.includes(curr.front[i])) {
            common.push(curr.front[i]);
          }
        }
        return acc.concat(common);
      }, []);// шукаємо співпадіння
      
     const sumPriority = commonPriority.reduce((acc,curr) => acc + curr,0);//part 1

      let arrGroup = []
     for(let i = 0;i<priority.length; i+=3){
       const group = priority[i].filter(num => priority[i+1].includes(num) && priority[i+2].includes(num))
       arrGroup.push(group[0]);
     }
     let sumGroup = 0
     
     for(let i = 0;i<arrGroup.length;i++){
        sumGroup += arrGroup[i];
        console.log(sumGroup)
     }
     console.log(sumGroup)//Part 2
      return sumPriority;
      
}


console.log(Codes())


