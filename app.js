const app = {
    currentIndex:0,
    sections: [],
    setup(){
        this.sections = Array.from(document.querySelectorAll("main section"));
        console.log("currentIndex: " + this.currentIndex);
        console.log(this.sections.length);
    },
    up() {
        if(this.currentIndex > 0){
            this.currentIndex--;
            console.log(this.currentIndex);
            this.navigateTo(this.sections[this.currentIndex].id)
        }else{
            console.log("limit");
        }
    },
    down(){
        if(this.currentIndex < this.sections.length -1){
            this.currentIndex++;
            this.navigateTo(this.sections[this.currentIndex].id);
            console.log(this.currentIndex);
        }else{
            console.log("limit");
        }
    },
    navigateTo(url){
        window.location.href = "#"+url;
    }
};



document.addEventListener("DOMContentLoaded", () => {
    app.setup();
});