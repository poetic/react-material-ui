var ThemeManager = new mui.Styles.ThemeManager();
injectTapEventPlugin();

var { Card, CardTitle, CardActions, FlatButton, CardText } = mui;

var App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
      <Card>
        <CardTitle title="Welcome to Meteor!"/>
        <CardActions>
          <FlatButton label="Click Me"/>
        </CardActions>
        <CardText>
          You've pressed the button {this.props.counter} times.
        </CardText>
      </Card>
    );
  }
});

// counter starts at 0
Session.setDefault('counter', 0);

Template.app.helpers({
  App: function() {
    return App;
  },
  counter: function () {
    return Session.get('counter');
  }
});

Template.app.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});
