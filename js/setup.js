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

var getRandomArrayItem = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getWizardName = function () {
  return getRandomArrayItem(FIRST_NAMES) + ' ' + getRandomArrayItem(LAST_NAMES);
};

var getCoatColor = function () {
  return getRandomArrayItem(COAT_COLORS);
};

var getEysColor = function () {
  return getRandomArrayItem(EYES_COLORS);
};

var createSimilarWizards = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards[i] = {
      name: getWizardName(),
      coatColor: getCoatColor(),
      eyesColor: getEysColor()
    };
  }
  return wizards;
};

var renderWizard = function (wizard, htmlTemplate) {
  var wizardElement = htmlTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var wizards = createSimilarWizards();

var simularWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();
wizards.forEach(function (wizard) {
  fragment.appendChild(renderWizard(wizard, simularWizardTemplate));
});

var dialog = document.querySelector('.setup');
dialog.querySelector('.setup-similar-list').appendChild(fragment);
dialog.classList.remove('hidden');
dialog.querySelector('.setup-similar').classList.remove('hidden');
