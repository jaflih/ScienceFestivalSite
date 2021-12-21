const nbSpeakers = 6;
let usersImage;
const speakers = [];

// Create a new HTML element, add a class and innerhtml and append it to its parent
function createElement(parent, elementName, elementClass, innerHTML = null) {
  const element = document.createElement(elementName);
  element.classList.add(elementClass);
  element.innerHTML = innerHTML;
  parent.appendChild(element);
  return element;
}

/* global faker */
/* eslint no-undef: "error" */
for (let i = 0; i < nbSpeakers; i += 1) {
  const speaker = {};
  speaker.name = faker.name.findName();
  speaker.jobTitle = faker.name.jobTitle();
  speaker.jobDescription = faker.lorem.sentences(3);
  speakers.push(speaker);
}

// Generate the HTML speakers section
for (let i = 0; i < speakers.length; i += 1) {
  const speaker = createElement(document.querySelector('.speakers_list'), 'div', 'speakers_item');
  const speakerPhotoContainer = createElement(speaker, 'div', 'speakers_item_photo');
  const speakerPhoto = createElement(speakerPhotoContainer, 'img', 'speakers_item_photo_image');
  speakerPhoto.setAttribute('index', i);

  const speakerContainer = createElement(speaker, 'div', 'div');
  createElement(speakerContainer, 'div', 'speakers_item_speaker_name', speakers[i].name);
  createElement(speakerContainer, 'div', 'speakers_item_speaker_title', speakers[i].jobTitle);
  createElement(speakerContainer, 'hr', 'gray');
  createElement(speakerContainer, 'div', 'speakers_item_cursus', speakers[i].jobDescription);
}

fetch(`https://randomuser.me/api/?results= ${nbSpeakers}`)
  .then((response) => response.json())
  .then((data) => {
    usersImage = data.results;
    document.querySelectorAll('.speakers_item_photo img').forEach((element) => {
      element.setAttribute('src', usersImage[element.getAttribute('index')].picture.large);
    });
  });
