/*
  YouTube 初回表示軽量化スクリプト
  Copyright Rectus Inc, 2025/01/29 Ver 1.04
  javascript版
  https://www.rectus.co.jp/
  Released under the MIT license
 */

document.addEventListener("DOMContentLoaded", function() {
  var srcs = [];
  var images = [];
  var heights = [];
  var widths = [];
  var thumbs = [];
  var imgs = [];
  var alt = [];

  var fyt = document.getElementsByClassName('fastyt');
  var fy = Array.prototype.filter.call(fyt, ele => ele.nodeName === 'IFRAME');

  // 全ての iframe.fastyt に対して処理を実行
  Array.prototype.forEach.call(fy, function(ele, index) {
    var img;
    
    // 属性を配列に格納
    srcs[index] = ele.getAttribute('data-src');
    heights[index] = ele.getAttribute('height');
    widths[index] = ele.getAttribute('width');
    thumbs[index] = ele.getAttribute('data-thumbnail');
    imgs[index] = ele.getAttribute('data-img');
    alt[index] = ele.getAttribute('data-alt');
    maxWidth = getAncestorWidth(ele);

    img = 'mqdefault';
    if (imgs[index]) {
      img = imgs[index];
    }

    // サムネイルのサイズ指定に応じてサイズを代入
    if (widths[index] === null) {
      switch (img) {
      case 'default':
        widths[index] = 120;
        heights[index] = 90;
        break;
      case 'mqdefault':
        widths[index] = 320;
        heights[index] = 180;
        break;
      case 'hqdefault':
        widths[index] = 480;
        heights[index] = 360;
        break;
      case 'sddefault':
        widths[index] = 640;
        heights[index] = 480;
        break;
      case 'maxresdefault':
        widths[index] = 1280;
        heights[index] = 720;
        break;
      }
    }

    // 取りうる最大幅を超えている場合はそこまでにする．
    if (maxWidth < widths[index]) {
      heights[index] = Math.floor(heights[index] * maxWidth / widths[index]);
      widths[index] = Math.floor(maxWidth);
    }

    // URL から動画 id のみを取得して文字連結をしてサムネイルを取得
    var id = srcs[index].match(/[\/?=]([a-zA-Z0-9_-]{11})[&\?]?/)[1];
    if (thumbs[index]) {
      images[index] = thumbs[index];
    } else {
      // 高精細にしたい場合は data-img="maxresdefault" を指定
      images[index] = '//img.youtube.com/vi/' + id + '/' + img + '.jpg';
    }

    // iframeをサムネイル画像に置換
    var divyt = document.createElement("div");
    divyt.className = "yt";
    divyt.style.width = widths[index] + 'px';
    divyt.style.height = heights[index] + 'px';
    var divyt_play = document.createElement("div");
    divyt_play.className = "yt_play";
    var imgmovie = document.createElement("img");
    imgmovie.className = "recmovie";
    imgmovie.setAttribute("src", images[index]);
    imgmovie.setAttribute("alt", alt[index]);
    imgmovie.setAttribute("loading", "lazy");
    imgmovie.width = widths[index];
    imgmovie.height = heights[index];
    imgmovie.dataset.youtubeid = id;
    divyt_play.appendChild(imgmovie);
    divyt.appendChild(divyt_play);
    ele.parentNode.insertBefore(divyt, ele.nextElementSibling);
    
    ele.remove();
  });

  var ytp = document.getElementsByClassName('yt_play');
  Array.prototype.forEach.call(ytp, function(ele, index) {
    // サムネイルがクリックされた時の処理
    ele.addEventListener('click', function (){
      // iframeに置換
      var autoplay;
      if (0 < srcs[index].indexOf("?")) {
        autoplay = '&';
      } else {
        autoplay = '?';
      }
      autoplay += "autoplay=1";
      var ifr = document.createElement("iframe");
      ifr.className = "recmovie";
      ifr.setAttribute("src", srcs[index] + autoplay);
      ifr.setAttribute("allow", "autoplay");
      ifr.setAttribute("allowfullscreen", "allowfullscreen");
      ifr.width = widths[index];
      ifr.height = heights[index];
      ele.parentNode.replaceChild(ifr, ele);
    })
  }, false);
});

function getAncestorWidth(ele) {
  if (ele.parentNode === undefined) {
    return ele.offsetWidth;
  }
  width = ele.parentNode.offsetWidth;
  if (width == 0) {
    width = getAncestorWidth(ele.parentNode);
  } else {
    width = ele.parentNode.offsetWidth;
  }
  return width;
};