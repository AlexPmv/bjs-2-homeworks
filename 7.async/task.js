class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    };

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не задан.');
        } else if (this.alarmCollection.find((item) => item.id === id)) {
            return console.error('Будильник с таким id уже существует')
        }
        this.alarmCollection.push({time, callback, id});
    };

    removeClock(id) {
        if (id === undefined) {
            throw new Error ('Не указан id будульника');
          };
        return this.alarmCollection.length !== 
        (this.alarmCollection = this.alarmCollection.filter((item) => 
        item.id !== id)).length ? true : false;
    };  
    
    getCurrentFormattedTime() {
        const currentDate = new Date();
        const currentHours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const currentMinutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return `${currentHours}:${currentMinutes}`;

    };

    start() {
        const checkClock = (alarm) => {
            const currentTime = this.getCurrentFormattedTime();
            if (alarm.time === currentTime) {
                alarm.callback();
            };
        };

        if (this.timerId === null) {
            this.timerId = setInterval(() => 
                {this.alarmCollection.forEach((time) => checkClock(time))}, 1000);
        };
    };

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        };
    };

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach((item) => console.log(`Будильник №${item.id} на ${item.time}`));
    };

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    };
};
