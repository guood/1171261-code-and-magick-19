'use strict';

var FIRST_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var LAST_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var SETUP_DIALOG = document.querySelector('.setup');
var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getWizardName() {
  return getRandomItem(FIRST_NAMES) + ' ' + getRandomItem(LAST_NAMES);
}

function getCoatColor() {
  return getRandomItem(COAT_COLORS);
}

function getEysColor() {
  return getRandomItem(EYES_COLORS);
}

function mockData() {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards[i] = {
      name: getWizardName(),
      coatColor: getCoatColor(),
      eyesColor: getEysColor()
    };
  }
  return wizards;
}

function renderSimilarWizard(wizard) {
  var wizardElement = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

(function renderSimilarWizards() {
  var wizards = mockData();

  var fragment = document.createDocumentFragment();

  wizards.forEach(function (wizard) {
    fragment.appendChild(renderSimilarWizard(wizard));
  });

  SETUP_DIALOG.querySelector('.setup-similar-list').appendChild(fragment);
  SETUP_DIALOG.classList.remove('hidden');
  SETUP_DIALOG.querySelector('.setup-similar').classList.remove('hidden');
}());
