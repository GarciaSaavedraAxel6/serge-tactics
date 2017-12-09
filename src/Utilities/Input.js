//CustomEvent Polyfill
(function () {

    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();

/*commands
    OK
    CANCEL

    UP
    LEFT
    DOWN
    RIGHT
*/

class Input{

    constructor() {
        this.keyboardSetup();
    }

    //Keyboard
    keyboardSetup() {
        document.addEventListener('keydown', this.keyboardHandler);
    }    

    keyboardHandler(event) {
        let key = event.keyCode;

        switch (key) {
            case 37: { //left arrow
                fireEvent(createEvent("left", {details: "keyboard"}));
                break;
            }
            case 38: { //up arrow
                fireEvent(createEvent("up", {details: "keyboard"}));
                break;
            }
            case 39: { //right arrow
                fireEvent(createEvent("right", {details: "keyboard"}));
                break;
            }
            case 40: { //down arrow
                fireEvent(createEvent("down", {details: "keyboard"}));
                break;
            }
            case 13: { //enter/return
                fireEvent(createEvent("ok", {details: "keyboard"}));
                break;
            }
            case 27: { //esc
                fireEvent(createEvent("cancel", {details: "keyboard"}));
                break;
            }    
            
            default: {
                break;
            }    
        }
    }




    createEvent(type, CustomInit) {
        return new CustomEvent(type, CustomInit);
    }

    fireEvent(event) {
        document.dispatchEvent(event);
    }

}