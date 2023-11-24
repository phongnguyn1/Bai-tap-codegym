class remote = function (id, changeChannel, turnVolume){
    this.id= id
    this.tv=tv
}
setChannel(channel) {
    this.changeChannel = channel;
}

setVolume(volume) {
    this.turnVolume = volume;
}
}

class Tivi {

    status;
    constructor(channel, volume) {
        this.channel = channel;
        this.volume = volume;
    }

    getStatus() {
        if (this.status) {
            console.log("Tivi is on")
        } else {
            alert("TV is off ")
        }
    }

    turnOn() {
        return this.status = true;
    }

    turnOff() {
        return this.status = false;
    }

    getChannelTV() {
        return this.channel;
    }

    getVolumeTV() {
        return this.volume;
    }

    setChannelTV(new_channel) {
        this.channel = new_channel;
    }

    setVolumeTV(new_volume) {
        this.volume = new_volume;
    }
}


let Sony = new Tivi(1, 10);
let remote1 = new Remote(1, Sony);

