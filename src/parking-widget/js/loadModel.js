export default function () {
  function makeRequest(method, url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.responseType = 'json';
      xhr.onload = function onload() {
        if (this.status >= 200 && this.status < 400) {
          resolve(xhr.response);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function onerror() {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
      xhr.send();
    });
  }

  makeRequest('GET', 'data/model.json')
  .then((data) => {
    console.log('Data: ', data);
    this.data = data;
    this.renderData();
  })
  .catch((err) => {
    console.error('Error: ', err);
  });
}
