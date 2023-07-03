class Mackbook{
    precio(){
        return 1000;
    }
};

const memmory = mac => {
    const mackbook = mac.precio();
    mac.precio = function () {
        return mackbook + 100;
    }
};

const mackbook = new Mackbook();
console.log(mackbook.precio());

memmory(mackbook)
console.log(mackbook.precio());