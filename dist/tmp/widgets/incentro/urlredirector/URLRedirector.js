define(['react'], (function (react) { 'use strict';

    

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
      react.useEffect(() => {
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

    return URLRedirector;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVJMUmVkaXJlY3Rvci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL1VSTFJlZGlyZWN0b3IuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVUkxSZWRpcmVjdG9yKHsgRXhwcmVzc2lvblVSTCwgVGFyZ2V0IH0pIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoRXhwcmVzc2lvblVSTC5zdGF0dXMgPT09IFwiYXZhaWxhYmxlXCIpIHtcbiAgICAgICAgICAgIGlmIChUYXJnZXQgPT09IFwiUGFnZVwiKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoRXhwcmVzc2lvblVSTC52YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKEV4cHJlc3Npb25VUkwudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cbiJdLCJuYW1lcyI6WyJVUkxSZWRpcmVjdG9yIiwiRXhwcmVzc2lvblVSTCIsIlRhcmdldCIsInVzZUVmZmVjdCIsInN0YXR1cyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsInZhbHVlIiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBRWUsU0FBU0EsYUFBVCxDQUF1QjtJQUFFQyxFQUFBQSxhQUFGO0lBQWlCQyxFQUFBQTtJQUFqQixDQUF2QixFQUFrRDtJQUM3REMsRUFBQUEsZUFBUyxDQUFDLE1BQU07SUFDWixRQUFJRixhQUFhLENBQUNHLE1BQWQsS0FBeUIsV0FBN0IsRUFBMEM7SUFDdEMsVUFBSUYsTUFBTSxLQUFLLE1BQWYsRUFBdUI7SUFDbkJHLFFBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0JOLGFBQWEsQ0FBQ08sS0FBdEM7SUFDSCxPQUZELE1BRU87SUFDSEgsUUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVlSLGFBQWEsQ0FBQ08sS0FBMUI7SUFDSDtJQUNKO0lBQ0osR0FSUSxDQUFUO0lBVUEsU0FBTyxJQUFQO0lBQ0g7Ozs7Ozs7OyJ9
