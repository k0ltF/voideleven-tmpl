let self = liberator.plugins.smooziee = (function(){

  // Mappings  {{{
  mappings.addUserMap(
    [modes.NORMAL],
    ["j"],
    "Smooth scroll down",
    function(count){
      self.smoothScrollBy(getScrollAmount() * (count || 1));
    },
    {
      count: true
    }
  );
  mappings.addUserMap(
    [modes.NORMAL],
    ["k"],
    "Smooth scroll up",
    function(count){
      self.smoothScrollBy(getScrollAmount() * -(count || 1));
    },
    {
      count: true
    }
  );
  // }}}
  // PUBLIC {{{
  var PUBLICS = {
    smoothScrollBy: function(moment) {
      win = findScrollableWindow();
      interval = window.eval(liberator.globalVariables.smooziee_scroll_interval || '20');
      destY = win.scrollY + moment;
      clearTimeout(next);
      smoothScroll(moment);
    }
  }

  // }}}
  // PRIVATE {{{
  var next;
  var destY;
  var win;
  var interval;

  function getScrollAmount() window.eval(liberator.globalVariables.smooziee_scroll_amount || '400');

  function smoothScroll(moment) {
    if (moment > 0)
      moment = Math.floor(moment / 2);
    else
      moment = Math.ceil(moment / 2);

    win.scrollBy(0, moment);

    if (Math.abs(moment) < 1) {
      setTimeout(makeScrollTo(win.scrollX, destY), interval);
      destY = null;
      return;
    }
    next = setTimeout(function() smoothScroll(moment), interval);
  }

  function makeScrollTo(x, y) function() win.scrollTo(x, y);

  function findScrollableWindow() {
    var win = this.focusedWindow;
    if (win && (win.scrollMaxX > 0 || win.scrollMaxY > 0)) return win;

    win = config.browser.contentWindow;
    if (win.scrollMaxX > 0 || win.scrollMaxY > 0) return win;

    for (let frame in util.Array.itervalues(win.frames)) {
      if (frame.scrollMaxX > 0 || frame.scrollMaxY > 0) return frame;
    }
    return win;
  }
  // }}}
  return PUBLICS;
})();
// vim: sw=2 ts=2 et si fdm=marker:
