const app = {
    currentIndex:0,
    sections: [],
    setup(){
        const nodes = document.querySelectorAll("main section");
        console.log(nodes);
        this.sections = Array.from(nodes);
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

const swipeHandler = {
    touchStartY:0,
    touchEndY:0,
    minSwipeDistance:50,
    setup(){
        document.addEventListener("touchstart", evt => {
            this.onTouch(evt);
        });
        document.addEventListener("touchend", evt => {
            this.onTouchEnd(evt);
        });
    },
    onTouch(touch){
        this.touchStartY = touch.changedTouches[0].clientY;
    },
    onTouchEnd(touch){
        this.touchEndY = touch.changedTouches[0].clientY;
        this.handleTouch();
    },
    handleTouch(){
        //get finger distance travelled
        var diffY = this.touchEndY - this.touchStartY;

        //swipe sensitivity check
        if(Math.abs(diffY) > this.minSwipeDistance){
            if(diffY < 0){
                console.log("swipe up");
                app.down();
            }else{
                app.up();
                console.log("swipe down")
            }
        }
        console.log(diffY);
    }
};


//very buggy
const scrollHandler = {
    scrollSensitivity: 100,
    setup(){
        document.addEventListener("wheel", evt => {
            const delta = evt.deltaY;
            console.log(evt);
            if(Math.abs(delta) < this.scrollSensitivity) return;

            
            if(delta > 0){
                this.scrollUp();
            }else{
                this.scrollDown();
            }
        });
    },
    scrollUp(){
        app.down();
    },
    scrollDown(){
        app.up();
    }
};
document.addEventListener("DOMContentLoaded", () => {
    swipeHandler.setup();
    // scrollHandler.setup();
    app.setup();

});