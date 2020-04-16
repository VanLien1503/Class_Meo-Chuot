let Chuot = function (name, khoiluong, tocdo, status) {
    this.name = name;
    this.khoiluong = khoiluong;
    this.tocdo = tocdo;
    this.status = status;
    this.keu = function () {
        alert("chit chit");
    }
};
let Meo = function (name, khoiluong, tocdo) {
    this.name = name;
    this.khoiluong = khoiluong;
    this.tocdo = tocdo;
    this.getKeu = function () {
        alert("meo meo");
    };
    this.getBatchuot = function (chuot) {
        if (this.tocdo > chuot.tocdo) {
            alert("Chuột đẵ bị bắt");
            chuot.keu();

        }
    };
    this.getAnChuot = function (chuot) {
        this.getKeu();
        this.khoiluong += chuot.khoiluong;
        chuot.status = false;
    }
};
let chuot = new Chuot("jerry", 1, 20, true);
console.log(chuot);
let meo = new Meo("Tom", 5, 30);
console.log(meo);

function bat() {
    meo.getBatchuot(chuot);
}

function an() {
    meo.getAnChuot(chuot);
    alert("Khối Lượng Của meo = " + meo.khoiluong)
}