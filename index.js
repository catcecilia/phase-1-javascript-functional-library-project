const myEach =(collection, alert) => {
    if (collection.isArray){
        collection.map(x => alert(x));
    } else {
        for (let i = 0; i < Object.values(collection).length; i++){
            alert(Object.values(collection)[i]);
        }
    }         return collection;

}

const myMap = (collection, callback) =>{
    let newArray;
    if (collection.isArray){
        newArray = collection.map(x => x);
    } 
    else {
        newArray = Object.values(collection);
    }
    newArray = newArray.map(x => callback(x));
    return newArray
}

const myReduce = (collection, callback, acc) =>{
    if(collection.isArray){
        if (acc === undefined) {
            acc = collection[0];
            collection = collection.slice(1);
        }
        return collection.reduce(callback, acc);
    } else {
        let newArray=Object.values(collection);
        if (acc === undefined) {
            acc = newArray[0];
            newArray = newArray.slice(1);
        }
        return newArray.reduce(callback, acc);
    }
}

const myFind= (collection, predicate)=>{
    if(collection.isArray){
        return collection.find(predicate);
    } else {
        let newArray=Object.values(collection);
        return newArray.find(predicate);
    }
}

const myFilter = (collection, predicate)=>{
    if(collection.isArray){
        return collection.filter(predicate);
    } else {
        let newArray=Object.values(collection);
        return newArray.filter(predicate);
    }
}

const mySize = (collection)=>{
    if(collection.isArray){
        return collection.length;
    } else{
        let newArray = Object.values(collection);
        return newArray.length;
     }
}

const myFirst = (collection, integer)=>{
    if(integer === undefined){
        if(collection.isArray){
            return collection[0];
        } else{
            let newArray = Object.values(collection);
            return newArray[0];
         }
    }
    let returnArray = [];
    let newestArray = [];
    if(collection.isArray){
        for (let i = 0; i < collection.length ; i++){
            if(collection[i]!=integer){
                returnArray.push(collection[i]);
            } else {
                if (i === 0){
                    return collection[0];
                } else {
                    returnArray.push(collection[i]);
                    return returnArray;
                }
            }
        }
    } else{
        newestArray = Object.values(collection);
        for (let i = 0; i < newestArray.length; i++){
            if(newestArray[i]!=integer){
                returnArray.push(newestArray[i]);
            } else {
                if (i === 0){
                    return newestArray[0];
                } else {
                    returnArray.push(newestArray[i]);
                    return returnArray;
                }
            }
        }
     }
}

const myLast = (collection, integer) => {
    if (integer === undefined) {
      return collection[collection.length-1];
    }
  
    let returnArray = [];
    let newestArray = [];
  
    if (Array.isArray(collection)) {
      for (let i = collection.length-1; i >= 0 ; i--) {
        if (returnArray.length === integer) {
          break;
        }
  
        returnArray.unshift(collection[i]);
      }
  
      return returnArray;
    } else {
      newestArray = Object.values(collection);
  
      for (let i = newestArray.length-1; i >= 0 ; i--) {
        if (returnArray.length === integer) {
          break;
        }
  
        returnArray.unshift(newestArray[i]);
      }
  
      return returnArray;
    }
  };
  
const myKeys=(object) =>{
    return Object.keys(object);
}

const myValues = (object) =>{
    return Object.values(object);
}