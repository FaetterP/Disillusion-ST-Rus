(function () {
    function fakeTabEvent() {
        return {
            keyCode: 9,
            preventDefault:           function () {},
            stopPropagation:          function () {},
            stopImmediatePropagation: function () {}
        };
    }

    document.addEventListener('keydown', function (e) {
        if (e.keyCode !== 27) return;
        e.stopImmediatePropagation();
        e.preventDefault();
        Input._onKeyDown.call(Input, fakeTabEvent());
    }, true);

    document.addEventListener('keyup', function (e) {
        if (e.keyCode !== 27) return;
        e.stopImmediatePropagation();
        e.preventDefault();
        if (typeof Input._onKeyUp === 'function') {
            Input._onKeyUp.call(Input, fakeTabEvent());
        }
    }, true);
})();
