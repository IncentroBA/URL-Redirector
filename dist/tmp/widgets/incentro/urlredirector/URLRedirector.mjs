
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
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

export { URLRedirector as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVJMUmVkaXJlY3Rvci5tanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9VUkxSZWRpcmVjdG9yLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVUkxSZWRpcmVjdG9yKHsgRXhwcmVzc2lvblVSTCwgVGFyZ2V0IH0pIHtcbiAgICBjb25zb2xlLmluZm8oXCJFeHByZXNzaW9uVVJMXCIsIEV4cHJlc3Npb25VUkwudmFsdWUpO1xuICAgIGNvbnNvbGUuaW5mbyhcIlRhcmdldC52YWx1ZVwiLCBUYXJnZXQpO1xuXG4gICAgaWYgKFRhcmdldCA9PT0gXCJQYWdlXCIpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoRXhwcmVzc2lvblVSTC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93Lm9wZW4oRXhwcmVzc2lvblVSTC52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuIl0sIm5hbWVzIjpbIlVSTFJlZGlyZWN0b3IiLCJFeHByZXNzaW9uVVJMIiwiVGFyZ2V0IiwiY29uc29sZSIsImluZm8iLCJ2YWx1ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxhQUFULENBQXVCO0FBQUVDLEVBQUFBLGFBQUY7QUFBaUJDLEVBQUFBO0FBQWpCLENBQXZCLEVBQWtEO0FBQzdEQyxFQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSxlQUFiLEVBQThCSCxhQUFhLENBQUNJLEtBQTVDO0FBQ0FGLEVBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLGNBQWIsRUFBNkJGLE1BQTdCOztBQUVBLE1BQUlBLE1BQU0sS0FBSyxNQUFmLEVBQXVCO0FBQ25CSSxJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCUCxhQUFhLENBQUNJLEtBQXRDO0FBQ0gsR0FGRCxNQUVPO0FBQ0hDLElBQUFBLE1BQU0sQ0FBQ0csSUFBUCxDQUFZUixhQUFhLENBQUNJLEtBQTFCO0FBQ0g7O0FBQ0QsU0FBTyxJQUFQO0FBQ0g7Ozs7In0=
