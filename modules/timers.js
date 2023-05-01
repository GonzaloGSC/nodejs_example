setTimeout(() => {
    egg();
}, 10000);


function egg(){
    let x = 0;
    setInterval(() => {
        x++;
        console.log("egg number " + x.toString());
    }, 2000);
}