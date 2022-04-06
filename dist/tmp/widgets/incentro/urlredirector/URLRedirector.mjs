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

import { useEffect } from 'react';

function URLRedirector({
  ExpressionURL,
  Target
}) {
  useEffect(() => {
    if (ExpressionURL.status === "available") {
      if (Target === "Page") {
        window.location.replace(ExpressionURL.value);
      } else {
        window.open(ExpressionURL.value);
      }
    }
  });
  return null;
}

export { URLRedirector as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVJMUmVkaXJlY3Rvci5tanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9VUkxSZWRpcmVjdG9yLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVVJMUmVkaXJlY3Rvcih7IEV4cHJlc3Npb25VUkwsIFRhcmdldCB9KSB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKEV4cHJlc3Npb25VUkwuc3RhdHVzID09PSBcImF2YWlsYWJsZVwiKSB7XG4gICAgICAgICAgICBpZiAoVGFyZ2V0ID09PSBcIlBhZ2VcIikge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKEV4cHJlc3Npb25VUkwudmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihFeHByZXNzaW9uVVJMLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG51bGw7XG59XG4iXSwibmFtZXMiOlsiVVJMUmVkaXJlY3RvciIsIkV4cHJlc3Npb25VUkwiLCJUYXJnZXQiLCJ1c2VFZmZlY3QiLCJzdGF0dXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJ2YWx1ZSIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFZSxTQUFTQSxhQUFULENBQXVCO0FBQUVDLEVBQUFBLGFBQUY7QUFBaUJDLEVBQUFBO0FBQWpCLENBQXZCLEVBQWtEO0FBQzdEQyxFQUFBQSxTQUFTLENBQUMsTUFBTTtBQUNaLFFBQUlGLGFBQWEsQ0FBQ0csTUFBZCxLQUF5QixXQUE3QixFQUEwQztBQUN0QyxVQUFJRixNQUFNLEtBQUssTUFBZixFQUF1QjtBQUNuQkcsUUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3Qk4sYUFBYSxDQUFDTyxLQUF0QztBQUNILE9BRkQsTUFFTztBQUNISCxRQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWVIsYUFBYSxDQUFDTyxLQUExQjtBQUNIO0FBQ0o7QUFDSixHQVJRLENBQVQ7QUFVQSxTQUFPLElBQVA7QUFDSDs7OzsifQ==
