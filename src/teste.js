class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = null;

    }


    start(printTimeCallback) {

        this.intervalId = setInterval(() => {
            if(printTimeCallback){
                printTimeCallback()
                this.currentTime +=1;
            }
        }, 1000);
    }
}






//     start(printTimeCallback) {



//         if (!printTimeCallback) {
//             this.currentTime = 0;
//         } else {
//             this.currentTime = printTimeCallback;
//         }

//         const intervalId = setInterval(function () {
//             let tm = chronometer.currentTime;

//             chronometer.currentTime = tm + 1;
//             return chronometer.currentTime;


//         }, 1000);



//     }
// }


// const at = () =>
//     eval(printTimeCallback);
//     this.currentTime += 1;

//   const int = setInterval(at, 1000);


const chronometer = new Chronometer();

chronometer.start();

