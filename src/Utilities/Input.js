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
                break;
            }
            case 38: { //up arrow
                break;
            }
            case 39: { //right arrow
                break;
            }
            case 40: { //down arrow
                break;
            }
            case 13: { //enter/return
                break;
            }
            case 27: { //esc
                break;
            }    
            
            default: {
                break;
            }    
        }
    }




    createEvent(type, CustomInit) {
        let event = new CustomEvent(type, CustomInit);
    }

    fireEvent(event) {
        document.dispatchEvent(event);
    }

}