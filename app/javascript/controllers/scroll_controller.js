import { Controller } from "@hotwired/stimulus";
export default class extends Controller{
    /** While starting **/
    connect(){
        console.log("Connected");
        const messages = document.getElementById("messages");
        messages.addEventListener("DOMNodeInserted", this.resetScroll);
        this.resetScroll(messages); 
    }

    /** While stopping **/
    disconnect(){
        console.log("Disconnected");
    }
    /** Custom Method for Scroll **/
    resetScroll(){
        messages.scrollTop = messages.scrollHeight - messages.clientHeight;
    }
}