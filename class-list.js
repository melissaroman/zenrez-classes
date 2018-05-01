fetch('https://zenrez-interview.herokuapp.com/classes').then((response) => {
  return response.json();
}).then((data) => {
  let classList = data.classes;
  let length = classList.length;
  ulContainer = document.getElementById('scroll-container');
  for (let i=0; i<length; i++) {
    createClassComponentElements();
    let title = document.createTextNode(classList[i].title);
    let withText = document.createTextNode(' with ');
    let instructor = document.createTextNode(classList[i].instructor);
    let startTime = document.createTextNode(classList[i].start_time);
    let timeSpacer = document.createTextNode(' - ');
    let endTime = document.createTextNode(classList[i].end_time);
    let dollarSign = document.createTextNode('$');
    let price = document.createTextNode(classList[i].price);
    let previewImg = document.createElement('img');
    previewImg.src = classList[i].img_url;
    previewImg.alt = 'alt';
    classImg.appendChild(previewImg);
    classLi.appendChild(classImg);
    classDetails.appendChild(title);
    classDetails.appendChild(withText);
    classDetails.appendChild(instructor);
    classInfo.appendChild(classDetails);
    classTime.appendChild(startTime);
    classTime.appendChild(timeSpacer);
    classTime.appendChild(endTime);
    classInfo.appendChild(classTime);
    classLi.appendChild(classInfo);
    classPrice.appendChild(dollarSign);
    classPrice.appendChild(price);
    classLi.appendChild(classPrice);
    ulContainer.appendChild(classLi);
  }
})

function createClassComponentElements() {
  classLi = document.createElement('li');
  classImg = document.createElement('figure');
  classInfo = document.createElement('main');
  classDetails = document.createElement('h3');
  classTime = document.createElement('time');
  classPrice = document.createElement('div');
  classPrice.className += 'class-details--price';
}
