'use strict';

var CLOUD_COLOR = '#ffffff';
var CLOUD_POS_X = 100;
var CLOUD_POS_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var TITLE_FONT = '16px PT Mono';
var TITLE_COLOR = '#000000';
var TITLE_X = 20;
var TITLE_Y = 20;

var TIMES_BOTTOM = 7;
var TIME_COLOR = TITLE_COLOR;

var NAMES_BOTTOM = 20;
var NAME_COLOR = TITLE_COLOR;

var HIST_HEIGHT = 150;
var HIST_X = 40;
var HIST_BOTTOM = NAMES_BOTTOM + 17;
var HIST_COLUMN_WIDTH = 40;
var HIST_SPACE_BETWEEN_COL = 50;

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = CLOUD_SHADOW_COLOR;
  ctx.fillRect(CLOUD_POS_X + 10, CLOUD_POS_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = CLOUD_COLOR;
  ctx.fillRect(CLOUD_POS_X, CLOUD_POS_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = TITLE_COLOR;
  ctx.font = TITLE_FONT;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_POS_X + TITLE_X, CLOUD_POS_Y + TITLE_Y);
  ctx.fillText('Список результатов:', CLOUD_POS_X + TITLE_X, CLOUD_POS_Y + TITLE_Y + 17);

  var columnsY = CLOUD_POS_Y + CLOUD_HEIGHT - HIST_BOTTOM;
  var namesY = CLOUD_POS_Y + CLOUD_HEIGHT - NAMES_BOTTOM;

  ctx.textBaseline = 'alphabetic';
  var maxTime = getMaxTime(times);
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var time = Math.round(times[i]);

    var columnX = CLOUD_POS_X + HIST_X + i * (HIST_COLUMN_WIDTH + HIST_SPACE_BETWEEN_COL);

    ctx.fillStyle = NAME_COLOR;
    ctx.fillText(name, columnX, namesY);

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 101) + '%, 50%)';
    }
    var columnHeight = Math.round(HIST_HEIGHT * times[i] / maxTime);
    ctx.fillRect(columnX, columnsY, HIST_COLUMN_WIDTH, -columnHeight);

    ctx.fillStyle = TIME_COLOR;
    ctx.fillText(time, columnX, columnsY - columnHeight - TIMES_BOTTOM);
  }
};

function getMaxTime(times) {
  var maxTime = 0;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (maxTime < time) {
      maxTime = time;
    }
  }
  return maxTime;
}
