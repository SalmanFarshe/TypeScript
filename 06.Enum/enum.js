// nummber type enum
// string type enum
// Heterogenous type enum
// number type
var NumberTypeEnum;
(function (NumberTypeEnum) {
    NumberTypeEnum[NumberTypeEnum["getData"] = 100] = "getData";
    NumberTypeEnum[NumberTypeEnum["storeData"] = 101] = "storeData";
    NumberTypeEnum[NumberTypeEnum["deleteData1"] = 102] = "deleteData1";
    NumberTypeEnum[NumberTypeEnum["deleteData2"] = 1] = "deleteData2";
    NumberTypeEnum[NumberTypeEnum["deleteData3"] = 2] = "deleteData3";
    NumberTypeEnum[NumberTypeEnum["deleteData4"] = 3] = "deleteData4";
})(NumberTypeEnum || (NumberTypeEnum = {}));
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
var StringTypeEnum;
(function (StringTypeEnum) {
    StringTypeEnum["getData"] = "a";
    StringTypeEnum["storeData"] = "b";
    StringTypeEnum["deleteData1"] = "c";
    StringTypeEnum["deleteData2"] = "d";
    StringTypeEnum["deleteData3"] = "e";
    StringTypeEnum["deleteData4"] = "f";
})(StringTypeEnum || (StringTypeEnum = {}));
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
var HeterogenousTypeEnum;
(function (HeterogenousTypeEnum) {
    HeterogenousTypeEnum["getData"] = "a";
    HeterogenousTypeEnum[HeterogenousTypeEnum["storeData"] = 1] = "storeData";
    HeterogenousTypeEnum[HeterogenousTypeEnum["deleteData1"] = 2] = "deleteData1";
    HeterogenousTypeEnum[HeterogenousTypeEnum["deleteData2"] = 3] = "deleteData2";
    HeterogenousTypeEnum["deleteData3"] = "e";
    HeterogenousTypeEnum["deleteData4"] = "f";
})(HeterogenousTypeEnum || (HeterogenousTypeEnum = {}));
console.log(HeterogenousTypeEnum);
console.log(HeterogenousTypeEnum.getData);
