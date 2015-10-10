var { Card, CardTitle, CardActions, FlatButton, CardText } = mui;

var App = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      count: Session.get('count')
    }
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
  React.render(<App />, document.getElementById("render-target"));
});
