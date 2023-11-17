import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="input"
export default class extends Controller {
  static targets = [ 'textContainer',
                     'textareaInput',
                     'textAlert']

  connect() {
    console.log(`Hello from input controller!`)
  }

  checkLength() {
    let lengthLimit = 280;
    let currentLength = this.textareaInputTarget.value.length;

    if (currentLength >= (lengthLimit - 28)) {
      this.textAlertTarget.textContent = `${currentLength} / ${lengthLimit}`
    } else {
      this.textAlertTarget.textContent = ""
    }
  }
}
