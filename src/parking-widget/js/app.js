import loadModel from './loadModel';
import renderData from './renderData';
import postDataToHost from './postDataToHost';

export default class App {
  constructor() {
    this.loadModel();
    this.bindSelectors();
    this.bindEvents();
  }

  bindSelectors() {
    this.elements = {};

    this.elements.detailsToggle = document.querySelector('.parking-features-state');
    this.elements.parkingFeatures = document.querySelector('.parking-features');
    this.elements.parkingFeaturesState = document.querySelector('.parking-features-state');
    this.elements.parkingInfoHeading = document.querySelector('.parking-info-heading');
    this.elements.parkingFeaturesTitle = document.querySelector('.parking-features-title');
    this.elements.parkingFeaturesImage = document.querySelector('.parking-features-image');
    this.elements.parkingFeaturesList = document.querySelector('.parking-features-list');
    this.elements.parkingSpaces = document.querySelector('.parking-spaces');
  }

  bindEvents() {
    this.elements.detailsToggle.addEventListener('click', () => {
      const openClass = 'parking-features__open';
      if (this.elements.parkingFeatures.classList.contains(openClass)) {
        this.elements.parkingFeatures.classList.remove(openClass);
        this.elements.parkingFeaturesState.innerHTML = 'Mostra dettagli';
      } else {
        this.elements.parkingFeatures.classList.add(openClass);
        this.elements.parkingFeaturesState.innerHTML = 'Nascondi dettagli';
      }
    });
  }
}

App.prototype.loadModel = loadModel;
App.prototype.renderData = renderData;
App.prototype.postDataToHost = postDataToHost;

document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});

