import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  initialize(){
    this.resetScrollWithoutThreshold(messages);
  }
  /** On start */
  connect() {
    console.log("Connected");
    const messages = document.getElementById("messages");
    messages.addEventListener("DOMNodeInserted", this.resetScroll);
    // this.resetScroll(messages);
  }
  /** On stop */
  disconnect() {
    console.log("Disconnected");
  }
  /** Custom function */
  resetScroll() {
    const bottomOfScroll = messages.scrollHeight - messages.clientHeight;
    const upperScrolThreshold = bottomOfScroll - 500;

    if(messages.scrollTop > upperScrolThreshold){
      this.resetScrollWithoutThreshold(messages);
    }
  }
  resetScrollWithoutThreshold(messages){
    messages.scrollTop = messages.scrollHeight - messages.clientHeight;
  }
}