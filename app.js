function Cat(name, url) {
    this.name = name;
    this.clicks = 0;
    this.url = url;

    this.drawDivCat();    
}

Cat.prototype.increment = function() {
    this.clicks++;
    document.getElementById(this.spanId).innerHTML = this.clicks;
}

Cat.prototype.drawDivCat = function() {
    let el = document.createElement("div");

    let photo = document.createElement("img");
    photo.setAttribute("src", this.url);

    let counter = document.createElement("span");
    counter.innerHTML = this.clicks; 

    el.appendChild(photo); 
    el.appendChild(counter); 

    document.querySelector(".cats").appendChild(el); //wstawiamy element do drzewa dokumentu

    let _this = this;

    photo.addEventListener("click", function() {
        _this.clicks++;
        counter.innerHTML = _this.clicks;
    });

}


let szarek = new Cat("Szarek", "img/cat.jpg"); 
let miauczek = new Cat("Miauczek", "img/cat2.jpg"); 


