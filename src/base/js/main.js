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
    if (event.data.name === 'parkingWidget') {
      this.selectedSpace.innerHTML = `#${event.data.props.id}`;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Base(); // eslint-disable-line no-new
});
