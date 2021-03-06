var React = require('react');
var ReactDOM = require('react-dom');

var React = require('react');
var Bootstrap = require('react-bootstrap');

//var SoundButton = require('../SoundButton/index.jsx');

var ButtonToolbar = Bootstrap.ButtonToolbar;
var ButtonGroup = Bootstrap.ButtonGroup;
var Button = Bootstrap.Button;
//var style = require('./style.scss');

var SoundButton = React.createClass({
    getInitialState() {
        return {
            playing: false,
            selected: false
        }
    },
    killAnim() {
        this.setState({playing:false});
    },
    playSound() {
        this.setState({playing:true});
        var audioclip = document.getElementById('audioclip');
        audioclip.play();
        var timeout = setTimeout(this.killAnim, 450);
    },
    select() {
        this.setState({selected: !this.state.selected});
    },
    render: function() {
        var selectStatus = this.state.selected ? 'selected' : 'unselected'
        return (
            <div>
            <Button bsSize="large" onClick={this.playSound} className={selectStatus} >
                <img src="/assets/toolkit/images/speaker-off.gif" alt="speaker" id="speakerOff"/>
                <audio src="/assets/toolkit/sounds/chime2.m4a" id="audioclip" autoplay></audio>
                { this.state.playing ? <PlayAnim /> : null }
                </Button>
                <Button  bsSize="large" id="choicebutton" onClick={this.select} className={selectStatus}>
                    <span className="glyphicon glyphicon-ok"></span>
                </Button>
            </div>
        );
    }
});

var PlayAnim = React.createClass({
    render: function() {
        return (
            <div className="soundwave">
                <img src="/assets/toolkit/images/speaker-loop.gif" alt="soundbars"/>
            </div>
        );
    }
});


var SoundButtonGroup = React.createClass({
    getInitialState: function() {
        return {
            selected: 0
        }
    },
    handleClick: function(e) {
        alert('key: ' + e.target)
    },
    render: function() {
        var soundbuttons = [];
        for (var n = 0; n < this.props.count; n++) {
          // We can compare to state here so we're no longer always selecting the first board.
          soundbuttons.push(
            <div className="sound-button">
            <SoundButton key={n} onClick={this.handleClick} />
            </div>
          );
      }
      return (
        <div>
            <div className="sound-button-group">
                {soundbuttons}
            </div>
        </div>
      )
    }
});

module.exports =  SoundButtonGroup;

ReactDOM.render(
  <SoundButton />,
  document.getElementById('soundbuttons')
);
