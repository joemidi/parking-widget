class Base {
  constructor() {
    this.bindSelectors();
    this.bindEvents();
  }

  bindSelectors() {
    this.selectedSpace = document.querySelector('.selected-item>span');
  }

  bindEvents() {
    this.receiveMessage = this.receiveMessage.bind(this);
    window.addEventListener('message', this.receiveMessage, false);
  }

  receiveMessage(event) {
    this.selectedSpace.innerHTML = `#${event.data.id}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Base(); // eslint-disable-line no-new
});
