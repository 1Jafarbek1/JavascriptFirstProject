let boxChildren = document.querySelector(".boxO");
let x = 0;
let y = 0;
console.log(x, y)

document.addEventListener('keydown', (el) => {
    let keyValue = el.key;
    if (keyValue == "d") {
        x++;
        if (x >= 43) {
            x = 43;
        }
        boxChildren.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
    } else if (keyValue == "a") {
        x--;
        if (x <= 0) {
            x = 0;
        }
        boxChildren.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
    }else if (keyValue == "s") {
        y++;
        if (x >= 43) {
            y = 43;
        }
        boxChildren.style.transform = `translate(${x *8}px, ${y *8}px)`;
    }else if (keyValue == "w") {
        y--;
        if (y <= 0){
        y = 0;
    }
    boxChildren.style.transform = `translate(${x *8}px, ${y *8}px)`
    }

});
