export default function (element, data) {
  element.addEventListener('click', () => {
    parent.postMessage(data, '*');
  })
}