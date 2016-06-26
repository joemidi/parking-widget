export default function (element, data) {
  element.addEventListener('click', () => {
    const postData = {};
    postData.name = 'parkingWidget';
    postData.props = data;
    parent.postMessage(postData, '*');
  })
}