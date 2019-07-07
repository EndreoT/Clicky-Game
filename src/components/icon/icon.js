import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Icon extends React.Component {

  state = {
    hover: false,
    style: {
      margin: '20px',
      cursor: 'pointer',
      backgroundColor: 'rgb(96, 125, 139)'
    }
  }

  toggleHover = async () => {
    await this.setState({ hover: !this.state.hover })
  }

  setColorOnHover = () => {
    let color;
    if (this.state.hover) {
      color = { color: '#ed1212' }
    } else {
      color = { color: '#000' }
    }
    return color
  }

  render() {

    return (
      <React.Fragment>
        <FontAwesomeIcon
          onClick={() => this.props.handleClick(this.props.id)}
          style={{ ...this.state.style, ...this.setColorOnHover() }}
          icon={this.props.icon}
          onMouseEnter={this.toggleHover} 
          onMouseLeave={this.toggleHover}
          spin={this.state.hover}
          size="10x" 
          border 
          fixedWidth 
        />
      </React.Fragment>
    );
  }
}


export default Icon;