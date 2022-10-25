class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback()}
        this.currentTime += 1;
      }, 1000);

  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);

    return seconds;
  }

  computeTwoDigitNumber(value) {
    let string2 = value.toString();
    if (string2.length < 2){
      string2 = "0" + string2;

    }
    
    return string2;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`

  }
}
