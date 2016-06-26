export default function () {
  this.elements.parkingInfoHeading.innerHTML =
    `${this.data.dictionary.bookYourParking} ${this.data.vendor.departureAirport}`;
  this.elements.parkingFeaturesTitle.innerHTML = this.data.dictionary.featuresTitle;
  this.elements.parkingFeaturesImage.src = this.data.vendor.map;

  for (let i = 0; i < this.data.vendor.features.length; i++) {
    const featureItem = document.createElement('li');
    featureItem.innerText = this.data.vendor.features[i];
    this.elements.parkingFeaturesList.appendChild(featureItem);
  }

  for (let j = 0; j < this.data.parkings.length; j++) {
    const parkingSpace = document.createElement('div');
    parkingSpace.classList.add('col-4');

    const parkingSpaceDetails = document.createElement('p');
    parkingSpaceDetails.classList.add('parking-space-details');
    parkingSpaceDetails.innerHTML = `<strong>Dettagli:</strong><br><br>
      <span>Parcheggio #${this.data.parkings[j].id}</span><br>
      <span>${(this.data.parkings[j].indoor) ?
        this.data.dictionary.indoorSpace : this.data.dictionary.outdoorSpace}</span><br>
      <span>${(this.data.parkings[j].insurance) ?
        this.data.dictionary.insuranceIncluded : this.data.dictionary.insuranceExcluded}
      </span><br>`;

    const parkingSpacePrice = document.createElement('p');
    parkingSpacePrice.classList.add('parking-space-price');
    parkingSpacePrice.innerHTML = `<strong>${this.data.parkings[j].price}</strong>`;

    const innerContainer = document.createElement('div');
    innerContainer.appendChild(parkingSpaceDetails);
    innerContainer.appendChild(parkingSpacePrice);
    parkingSpace.appendChild(innerContainer);
    this.elements.parkingSpaces.appendChild(parkingSpace);

    this.postDataToHost(parkingSpace, this.data.parkings[j]);
  }
}
