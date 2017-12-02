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

      return <div onClick={this.handleClick} key={this.props.i} className={`${this.state.open || "open"} ${this.state.open || "open-active"} panel panel${this.props.i + 1}`}>
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

    render() {
      return (<div className="panels">
        {this.props.items.map((el, i) => <Project key={i} i={i} name={el.project} location={el.location} year={el.year} architect={el.architect} contractor={el.contractor}/>)}
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
