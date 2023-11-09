// nummber type enum
// string type enum
// Heterogenous type enum

// number type
enum NumberTypeEnum{
    getData = 100,
    storeData,
    deleteData1,
    deleteData2 = 1,
    deleteData3,
    deleteData4
}
console.log(NumberTypeEnum);
console.log(NumberTypeEnum.getData);
//            outputs
//            getData: 100,
//            storeData: 101,
//            deleteData1: 102,
//            deleteData2: 1,
//            deleteData3: 2,
//            deleteData4: 3


// string type
enum StringTypeEnum {
  getData = "a",
  storeData = "b",
  deleteData1 = "c",
  deleteData2 = "d",
  deleteData3 = "e",
  deleteData4 = "f",
}
console.log(StringTypeEnum);
console.log(StringTypeEnum.getData);
//          output
//          {
//            getData: 'a',
//            storeData: 'b',
//            deleteData1: 'c',
//            deleteData2: 'd',
//            deleteData3: 'e',
//            deleteData4: 'f'
//          }
//          a

// Heteroginous type
enum HeterogenousTypeEnum {
  getData = "a",
  storeData = 1,
  deleteData1,
  deleteData2,
  deleteData3 = "e",
  deleteData4 = "f",
}
console.log(HeterogenousTypeEnum);
console.log(HeterogenousTypeEnum.getData);