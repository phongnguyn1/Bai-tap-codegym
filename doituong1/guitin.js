let GiaHuy = function (speed,weight,status,actions){
    this.speed = 20
    this.weight=100
    this.status=live
    this.actions=sayChit
    getSpeed = function (){
        return speed
    }
    getWeight = function (){
        return weight

    }
    getStatus = function (){
        return status
    }
    getActions = function (){
        return actions
    }
};

let Tam = function (speed,weight,status){
    this.speed = 30
    this.weight=1000
    this.status=live

    getSpeed = function (){
        return speed
    }
    getWeight = function (){
        return weight
    }
    getStatus = function (){
        return status
    }getActions = function ()
    {
        return actions
    }
    sound(text){
        console.log(text);
    }
catch(GiaHuy){
        if (this.Speed >= rat.speed)
            console.log("meo "+ this.name + " da bat dc chuot " + GiaHuy.name);
        else
            console.log(`${GiaHuy.name}: Leu leu do di cham`)
    }
    eat(GiaHuy){
        console.log("meo "+ this.name + " da an chuot" + GiaHuy.name);

        GiaHuy.status = false;

        this.weight += GiaHuy.weight;
    }
};
let chuot = new GiaHuy("chuot", 62, 60);
let meo = new Tam("meo", 80, 30);
