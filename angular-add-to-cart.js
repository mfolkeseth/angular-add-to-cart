(function() {
    'use strict';

    angular
        .module('ngAddToCart', [
        ])
        .directive('ngAddToCart', addToWishList);

    function addToWishList () {
        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
              source: '@',
              target: '@'
            }
        };
        return directive;

        function link(scope, element, attrs) {
          element.bind('click', function(){
            // transition event for desktop
              // source image
              var src = $(scope.source);
              // target (shopping cart)
              var target = $(scope.target);
              // image clone
              var clone = src.clone();
              // css properties for clone
              clone.attr('id', 'product-image-clone')
                .css('position', 'absolute')
                .css('top', '0')
                .offset({top: src.offset().top, left: src.offset().left})
                .css('transform-origin', 'top left')
                .css('z-index', '101')
                .css('transition', 'all 1s ease')
                .css('width', src.width())
                .css('height', src.height());

              // append clone to body
              $('body').append(clone);

              // transition image to shopping cart
              window.setTimeout(function(){
                var y = -src.offset().top + target.offset().top + target.height()/2;
                var x = (target.offset().left-src.offset().left)+(target.width()/2);
                console.log(target);
                clone
                  .css('transform', 'translateX('+x+'px) translateY('+y+'px) scale(.01)')
                  .addClass('transform');
              }, 200);
              // fade out clone and remove
              window.setTimeout(function(){
                clone.fadeOut('slow', function(){
                  $(this).remove();
                });
              }, 600);
          });
        }
    }
})();
