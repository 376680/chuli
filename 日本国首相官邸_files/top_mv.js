/**
 * KVの非同期表示
 */
(function () {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const topMainVisual = document.querySelector('.top-main-visual');
      topMainVisual.innerHTML = xhr.responseText;
      if (topMainVisual.querySelector('.top-main-banner')) {
        topMainVisual.classList.add('has-banner');
      }
      if (topMainVisual.querySelector('.top-main-attention')) {
        topMainVisual.classList.add('has-attention');
      }

      $('.top-main-visual').trigger('TPL_LOADED');
    }
  };
  xhr.open('GET', '/cn/n3-common/include/top-main-visual.tpl', true);
  xhr.setRequestHeader('Pragma', 'no-cache');
  xhr.setRequestHeader('Cache-Control', 'no-cache');
  xhr.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
  xhr.send();
})();
