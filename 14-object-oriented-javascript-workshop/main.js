class Classic {
    constructor(art_url="https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",frame="black-border"){
        this.frame = frame;
        this.art_url = art_url;
    }
    get render(){
        let image = document.createElement("img");
        image.height = 300
        image.width = 300
        image.src = this.art_url;
        image.className += this.frame;
        document.body.appendChild(image);
    }
}
class Meme extends Classic {
    constructor(art_url,frame="red-border"){
        super(art_url,frame);
        }
}
let photo = new Classic()
photo.render;
let art1 = new Meme("http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg")
art1.render();
