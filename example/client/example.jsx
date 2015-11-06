var { Card, CardTitle, CardActions, FlatButton, CardText } = mui;

var App = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  getInitialState() {
    let ThemeManager = mui.Styles.ThemeManager

    let DefaultRawTheme = mui.Styles.LightRawTheme

    return {
      hovered: false,
      isKeyboardFocused: false,
      touch: false,
      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme),
    };
  },
  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      count: Session.get('count')
    }
  },

  contextTypes: {
    muiTheme: React.PropTypes.object,
  },

  //for passing default theme context to children
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext () {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  increaseCount() {
    Session.set('count', Session.get('count') + 1)
  },

  render: function() {
    return (
      <Card>
        <CardTitle title="Welcome to Meteor!"/>
        <CardActions>
          <FlatButton label="Click Me" onClick={this.increaseCount}/>
        </CardActions>
        <CardText>
          You've pressed the button {this.data.count} times.
        </CardText>
      </Card>
    );
  }
});

Meteor.startup(function () {
  Session.setDefault('count', 0);

  // Use Meteor.startup to render the component after the page is ready
  ReactDOM.render(<App />, document.getElementById("render-target"));
});
