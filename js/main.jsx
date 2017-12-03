import React from 'react';
import ReactDOM from 'react-dom';
import projects from './projects';
import css from '../css/style.css';

document.addEventListener('DOMContentLoaded', function() {

  class Project extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: true
      };
    }

    handleClick = () => {
      this.setState({
        open: !this.state.open
      })
    }

    render() {
      const divStyle = {
        backgroundImage: 'url(' + this.props.image + ')'
      };
      return <div onClick={this.handleClick} key={this.props.i} className={`${this.state.open || "open-active open"}  panel panel${this.props.i + 1}`} style={divStyle}>
        <h3>{this.props.name}
        </h3>
        <div className="info">
          <p>
            <b>Location:</b>
            {this.props.location}</p>
          <p>
            <b>Year:</b>
            {this.props.year}</p>
          <p>
            <b>Architect:</b>
            {this.props.architect}</p>
          <p>
            <b>Main contractor:</b>
            {this.props.contractor}</p>
        </div>
      </div>
    }
  }

  class Projects extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pic: 0
      };
    }
    scroll = () => {

      this.setState({
        pic: this.state.pic > 6
          ? 0
          : this.state.pic + .05

      })
    }

    render() {
      return (<div onWheel={this.scroll} className="panels">
        {
          this.props.items.map(
            (el, i) => (i >= this.state.pic && i < this.state.pic + 6)
            ? <Project key={i} i={i} name={el.project} location={el.location} year={el.year}
              architect={el.architect} contractor={el.contractor} image={el.image}/>
            : null)
        }
      </div>);
    }
  }

  class App extends React.Component {
    render() {
      return <Projects items={projects}/>;
    }
  }

  ReactDOM.render(<App/>, document.getElementById('app'))

});
