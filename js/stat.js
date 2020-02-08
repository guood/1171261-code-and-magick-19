'use strict';

var Cloud = {
  LEFT: 100,
  TOP: 10,
  WIDTH: 420,
  HEIGHT: 270,
  COLOR: '#ffffff',
  SHADOW_COLOR: 'rgba(0, 0, 0, 0.7)'
};

var Title = {
  LEFT: 20,
  TOP: 20,
  FONT: '16px PT Mono',
  COLOR: '#000000'
};

var Times = {
  BOTTOM: 7,
  COLOR: Title.COLOR
};

var Names = {
  BOTTOM: 20,
  COLOR: Title.COLOR
};

var Hist = {
  HEIGHT: 150,
  LEFT: 40,
  BOTTOM: Names.BOTTOM + 17,
  COLUMN_WIDTH: 40,
  SPACE_BETWEEN_COL: 50
};

function getHistColumnColor(name) {
  return (name === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.floor(Math.random() * 101) + '%, 50%)';
}

function fillShadowedRect(ctx, left, top, width, height, backgroundColor, shadowColor) {
  ctx.fillStyle = shadowColor;
  ctx.fillRect(left + 10, top + 10, width, height);

  ctx.fillStyle = backgroundColor;
  ctx.fillRect(left, top, width, height);
}

window.renderStatistics = function (ctx, names, times) {
  fillShadowedRect(ctx, Cloud.LEFT, Cloud.TOP, Cloud.WIDTH, Cloud.HEIGHT, Cloud.COLOR, Cloud.SHADOW_COLOR);

  ctx.fillStyle = Title.COLOR;
  ctx.font = Title.FONT;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', Cloud.LEFT + Title.LEFT, Cloud.TOP + Title.TOP);
  ctx.fillText('Список результатов:', Cloud.LEFT + Title.LEFT, Cloud.TOP + Title.TOP + 17);

  var columnsTop = Cloud.TOP + Cloud.HEIGHT - Hist.BOTTOM;
  var namesTop = Cloud.TOP + Cloud.HEIGHT - Names.BOTTOM;

  ctx.textBaseline = 'alphabetic';

  var maxTime = Math.max.apply(null, times);
  names.forEach(function (name, i) {
    var time = Math.round(times[i]);

    var columnLeft = Cloud.LEFT + Hist.LEFT + i * (Hist.COLUMN_WIDTH + Hist.SPACE_BETWEEN_COL);

    ctx.fillStyle = Names.COLOR;
    ctx.fillText(name, columnLeft, namesTop);

    ctx.fillStyle = getHistColumnColor(name);
    var columnHeight = Math.round(Hist.HEIGHT * times[i] / maxTime);
    ctx.fillRect(columnLeft, columnsTop, Hist.COLUMN_WIDTH, -columnHeight);

    ctx.fillStyle = Times.COLOR;
    ctx.fillText(time, columnLeft, columnsTop - columnHeight - Times.BOTTOM);
  });
};
