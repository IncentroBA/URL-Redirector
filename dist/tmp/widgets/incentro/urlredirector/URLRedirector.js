
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
define((function () { 'use strict';

    

    function ___$insertStyle(css) {
        if (!css || typeof window === 'undefined') {
            return;
        }
        const style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.innerHTML = css;
        document.head.appendChild(style);
        return css;
    }

    function URLRedirector({
      ExpressionURL,
      Target
    }) {
      console.info("ExpressionURL", ExpressionURL.value);
      console.info("Target.value", Target);

      if (Target === "Page") {
        window.location.replace(ExpressionURL.value);
      } else {
        window.open(ExpressionURL.value);
      }

      return null;
    }

    return URLRedirector;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVJMUmVkaXJlY3Rvci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL1VSTFJlZGlyZWN0b3IuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVSTFJlZGlyZWN0b3IoeyBFeHByZXNzaW9uVVJMLCBUYXJnZXQgfSkge1xuICAgIGNvbnNvbGUuaW5mbyhcIkV4cHJlc3Npb25VUkxcIiwgRXhwcmVzc2lvblVSTC52YWx1ZSk7XG4gICAgY29uc29sZS5pbmZvKFwiVGFyZ2V0LnZhbHVlXCIsIFRhcmdldCk7XG5cbiAgICBpZiAoVGFyZ2V0ID09PSBcIlBhZ2VcIikge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShFeHByZXNzaW9uVVJMLnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cub3BlbihFeHByZXNzaW9uVVJMLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG4iXSwibmFtZXMiOlsiVVJMUmVkaXJlY3RvciIsIkV4cHJlc3Npb25VUkwiLCJUYXJnZXQiLCJjb25zb2xlIiwiaW5mbyIsInZhbHVlIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBZSxTQUFTQSxhQUFULENBQXVCO0lBQUVDLEVBQUFBLGFBQUY7SUFBaUJDLEVBQUFBO0lBQWpCLENBQXZCLEVBQWtEO0lBQzdEQyxFQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSxlQUFiLEVBQThCSCxhQUFhLENBQUNJLEtBQTVDO0lBQ0FGLEVBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLGNBQWIsRUFBNkJGLE1BQTdCOztJQUVBLE1BQUlBLE1BQU0sS0FBSyxNQUFmLEVBQXVCO0lBQ25CSSxJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCUCxhQUFhLENBQUNJLEtBQXRDO0lBQ0gsR0FGRCxNQUVPO0lBQ0hDLElBQUFBLE1BQU0sQ0FBQ0csSUFBUCxDQUFZUixhQUFhLENBQUNJLEtBQTFCO0lBQ0g7O0lBQ0QsU0FBTyxJQUFQO0lBQ0g7Ozs7Ozs7OyJ9
