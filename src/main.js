$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

(function(win) {
    "use strict";
    var App = React.createClass({
        render: function() {
            var Child;

            switch(this.props.route) {
                case 'about': Child = About; break;
                default: Child = Home;
            }

            return (
                <div>
                    <Header />
                    <Child />
                </div>
            );
        }
    });

    function render() {
        var route = win.location.hash.substr(1);
        React.render(<App route={route} />, document.getElementById('app'));
    }

    win.addEventListener('hashchange', render);
    render();
})(window);


/*
componentWillMount
- runs immediately before initial render
- great for setting initial state

componentDidMount
- runs immediately after render
- when this is called, the component DOM exists
- good for integrating with other 3rd party component lib
- good for setting timers and AJAX requests

componentWillReceiveProps
- runs when component is receiving new properties
- i.e. when properties have changed
- good for setting state before a render

shouldComponentUpdate
- runs before rendering when new properties or state are being received
- return void to avoid unnecessary render calls

componentWillUpdate
- runs before rendering when new properties or state are being received
- prepare for an update
- can't call setState in this function

componentDidUpdate
- runs after component's updates are flushed to the DOM
- allows you to operate on the DOM immediately after component update

componentWillUnmount
- runs before component is removed from the DOM
- good to clean up any resources or DOM elements when component was created
*/