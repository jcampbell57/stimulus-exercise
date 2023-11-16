import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = [ 'input',
                     'output',
                     'list',
                     'secretButton',
                     'secretMessage',
                     'buttonContainer']

  connect() {
    console.log(`Hello from toggle controller!`)
  }

  greet() {
    this.outputTarget.textContent = `Hello, ${this.input}!`
  }

  dropdown() {
    if (this.listTarget.hidden == true) {
      this.listTarget.hidden = false
    }
    else {
      this.listTarget.hidden = true
    }
  }

  replace() {
    this.secretButtonTarget.hidden = true
    this.secretMessageTarget.hidden = false
  }

  highlight() {
    if (this.buttonContainerTarget.style.backgroundColor == '') {
      this.buttonContainerTarget.style.backgroundColor = "#FDFF47";
    }
    else {
      this.buttonContainerTarget.style.backgroundColor = ''
    }
  }

  get input() {
    return this.inputTarget.value
  }

}
