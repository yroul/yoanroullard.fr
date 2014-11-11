(function() {
  var allowedHash, getPartialName, replaceWithPartial,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  allowedHash = ["contact", "programming", "music"];

  getPartialName = function(location) {
    var partialName;
    return partialName = location.hash.replace("#!/", "");
  };

  replaceWithPartial = function(partialName) {
    if (__indexOf.call(allowedHash, partialName) >= 0) {
      return $.ajax({
        url: "partials/" + partialName + ".html",
        dataType: 'html',
        success: function(data) {
          $("#content").html(data);
          $("a span").removeClass('active');
          $("a." + partialName + " span").addClass('active');
          $("ul.navbar-nav li").removeClass('active');
          return $("ul.navbar-nav li." + partialName).addClass('active');
        },
        error: function(err) {
          return console.log(err);
        }
      });
    }
  };

  $(window).on("hashchange", (function(_this) {
    return function() {
      var partialName;
      partialName = getPartialName(window.location);
      console.log("requested partial : " + partialName);
      return replaceWithPartial(partialName);
    };
  })(this));

  $(document).ready(function() {
    var partialName;
    partialName = getPartialName(window.location);
    if (partialName !== '') {
      return replaceWithPartial(partialName);
    }
  });

}).call(this);
