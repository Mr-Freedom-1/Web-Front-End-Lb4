"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var data = [{
  img: './img/jpg/projects/1.jpg',
  title: 'Project Tile goes here',
  desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
  technology: [{
    title: 'HTML',
    id: 'html'
  }, {
    title: 'JavaScript',
    id: 'java-script'
  }, {
    title: 'SASS',
    id: 'sass'
  }, {
    title: 'React',
    id: 'react'
  }],
  theme: [{
    title: 'Landing',
    id: 'landing'
  }],
  platform: [{
    title: 'Web',
    id: 'web'
  }]
}, {
  img: './img/jpg/projects/1.jpg',
  title: 'Project Tile goes here',
  desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
  technology: [{
    title: 'HTML',
    id: 'html'
  }, {
    title: 'React',
    id: 'react'
  }],
  theme: [{
    title: 'Ecommerce',
    id: 'ecommerce'
  }],
  platform: [{
    title: 'Ios',
    id: 'ios'
  }]
}, {
  img: './img/jpg/projects/1.jpg',
  title: 'Project Tile goes here',
  desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
  technology: [{
    title: 'HTML',
    id: 'html'
  }, {
    title: 'JavaScript',
    id: 'java-script'
  }, {
    title: 'SASS',
    id: 'sass'
  }, {
    title: 'React',
    id: 'react'
  }],
  theme: [{
    title: 'Blog',
    id: 'blog'
  }],
  platform: [{
    title: 'Android',
    id: 'android'
  }]
}, {
  img: './img/jpg/projects/1.jpg',
  title: 'Project Tile goes here',
  desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
  technology: [{
    title: 'HTML',
    id: 'html'
  }],
  theme: [{
    title: 'Landing',
    id: 'landing'
  }],
  platform: [{
    title: 'Web',
    id: 'web'
  }]
}];
var projectsContainer = document.querySelector('.js-projects-container');
var filtersForm = document.querySelector('.js-filters');
var activeFilters = {};

var createProjectTemplate = function createProjectTemplate(project) {
  return "\n        <article class=\"project-card\">\n            <img class=\"img\" src=\"".concat(project.img, "\" alt=\"\">\n            <div class=\"content\">\n                <h3 class=\"name\">").concat(project.title, "</h3>\n                <p class=\"desc\">").concat(project.desc, "</p>\n                <p class=\"stack\"><b>Tech stack</b>: ").concat(project.technology.map(function (item) {
    return item.title;
  }).join(', '), "</p>\n                <p class=\"stack\"><b>Platform</b>: ").concat(project.platform.map(function (item) {
    return item.title;
  }).join(', '), "</p>\n                <p class=\"stack\"><b>Theme</b>: ").concat(project.theme.map(function (item) {
    return item.title;
  }).join(','), "</p>\n                <div class=\"actions\">\n                    <a href=\"\" class=\"link\">\n                        <img class=\"icon\" src=\"./img/svg/link.svg\" alt=\"\">\n                        Live Preview\n                    </a>\n                    <a href=\"\" class=\"link\">\n                        <img class=\"icon\" src=\"./img/svg/github.svg\" alt=\"\">\n                        View Code\n                    </a>\n                </div>\n            </div>\n        </article>");
};

var dataRender = function dataRender(data, container) {
  if (!(_typeof(data) === 'object')) {
    return '';
  }

  if (data.length === 0) {
    container.innerHTML = "<p class='no__item'>There are no items that satisfy the filter</p>";
    return;
  }

  var content = '';

  for (var i = 0; i < data.length; i++) {
    content += createProjectTemplate(data[i]);
  }

  container.innerHTML = content;
};

var itemIsValid = function itemIsValid(dataItem, activeFilters) {
  var count = 0;

  for (var activeFilterKey in activeFilters) {
    var activeFilterValue = activeFilters[activeFilterKey];
    var itemHasFilterValue = dataItem[activeFilterKey].map(function (item) {
      return item.id;
    }).includes(activeFilterValue);

    if (itemHasFilterValue) {
      count++;
    }
  }

  return Object.keys(activeFilters).length === count;
};

var handleFormChange = function handleFormChange(event) {
  var target = event.target;
  var targetValue = target.value;
  var targetName = target.name;

  if (targetValue === '') {
    delete activeFilters[targetName];

    if (!Object.keys(activeFilters).length) {
      dataRender(data, projectsContainer);
      return;
    }
  } else {
    activeFilters[targetName] = targetValue;
  }

  var filteredData = data.filter(function (dataItem) {
    return itemIsValid(dataItem, activeFilters);
  });
  dataRender(filteredData, projectsContainer);
};

filtersForm.addEventListener('change', handleFormChange);
dataRender(data, projectsContainer);
var projectsSection = document.querySelector('.projects-section');
var viewToggleBtn = document.querySelector('.display-toggle-btn');

var handleViewToggle = function handleViewToggle(event) {
  event.preventDefault();
  projectsSection.classList.toggle('column-view');
};

viewToggleBtn.addEventListener('click', handleViewToggle);