function ver1(){
    let xyz=1;
    console.log("xyz: " + xyz );
    if(true){
        let xyz=22;
        console.log("xyz 2: " +  xyz );
    }
    console.log("xyz: " + xyz );
}

function ver2(){
    var xyz=1;
    console.log("xyz: " + xyz );
    if(true){
        var xyz=22;
        console.log("xyz 2: " +  xyz );
    }
    console.log("xyz: " + xyz );
}