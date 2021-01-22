

//kilometerToMeter

function kilometerToMeter(kilo){
    if(kilo <= 0){
        return("Please input valid number");
    }
    else{
        var meter = kilo*1000;
        return meter;
    }
}

//budgetCalculator

function budgetCalculator(watch, phone, laptop){
    var watchCost = watch*50;
    var phoneCost = phone*100;
    var laptopCost = laptop*500;
    var total = (watchCost + phoneCost + laptopCost);

    return total;
}


//hotelCost

function hotetCost(days){
    if(days <= 0){
        return "Please Enter valid day"
    }
    else if(days <= 10){
        var totalBill = days * 100;
        return totalBill;
    }
    else if(days <= 20){
        var dicountDays = days - 10;
        var discountDaysBill = dicountDays * 80;
        var totalBill = (1000 + discountDaysBill);
        return totalBill;
    }
    else{
        var dicountDays = days - 20;
        var discountDaysBill = dicountDays * 50;
        var totalBill = (1800 + discountDaysBill);
        return totalBill;
    }
}

//megaFriend

function megaFriend(array){
    if(array == ""){
        return "Please input name in your array"
    }
    var largeName = array[0]
    for(i = 0; i<array.length; i++){
        var name = array[i];
        if(name.length > largeName.length){
            largeName = name;
        }
    }
    return largeName;
}


// var array = ["kamal", "jamal", "rumal", "suraiya", "elenahasan"];
// console.log(megaFriend(array));

// var names = [];
// console.log(megaFriend(names));