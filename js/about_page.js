// This file is for my app only
console.log('About Page JS loaded...');

var img = document.createElement('img');
img.style.width = "25%";
img.src = require('../images/webpack_logo.png');

document.getElementById('img_container').appendChild(img);

require("../css/app.css");
require("../css/about.scss");