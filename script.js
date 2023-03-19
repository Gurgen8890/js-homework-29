class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    async delay(hours, min, sec) {
        setInterval(() => {
            console.clear()
            sec += 1
            console.clear;
            if (sec > 59) {
                min += 1;
                sec = 0;
            }
            if (min > 59) {
                hours += 1;
                min = 0;
            }

            if (hours > 23) {
                hours = 0;
                return
            }
            console.log(`${hours} : ${min} : ${sec}`);
        }, 1000)
    }

    async watch() {
        await this.delay(17, 30, 0);
    }
}



let clock = new Clock();

clock.watch()

//aranc setAlert





//nuyn@ setAlert-ov

class Clock1 {
    constructor(hours, minutes, seconds) {
        this._hours = hours;
        this._minutes = minutes;
        this._seconds = seconds;
    }
    start() {
        setInterval(() => {
            this._seconds += 1
            if (this._seconds > 59) {
                this._minutes += 1;
                this._seconds = 0;
                if (this._minutes > 59) {
                    this._hours += 1;
                    this._minutes = 0;
                    if (this._hours > 23) {
                        this._hours = 0
                        return
                    }
                }
            }
            setTimeout(() => {
                console.log(clock._hours, clock._minutes, clock._seconds);
            }, 1000,)
        }, 1000)
    };
    async setAlert(hours, minutes, seconds) {
        try {
            await new Promise((resolve) => {
                setTimeout(resolve, (hours - this._hours) * 60 * 60 * 1000 + (minutes - this._minutes) * 60 * 1000 + (seconds - this._seconds) * 1000)
            })
            await new Promise((resolve) => {
                setTimeout(resolve, (hours - this._hours) * 60 * 60 * 1000 + (minutes - this._minutes) * 60 * 1000 + (seconds - this._seconds) * 1000)
            })
            await new Promise((resolve) => {
                setTimeout(resolve, (hours - this._hours) * 60 * 60 * 1000 + (minutes - this._minutes) * 60 * 1000 + (seconds - this._seconds) * 1000)
            })
        } catch (error) {
            console.log(err);
        }
    }
};

let clock1 = new Clock1(19, 30, 40);
clock1.start();


clock1.setAlert(19, 35, 45).then(() => {
    console.log('Wake Up');
});


