import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  icon: {
    'marginTop': '50px',
  }
}

class Icon extends React.Component {

  state = {
    hover: false,
    style: {
      marginTop: '50px',
      cursor: 'pointer',
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
      <div>
        <FontAwesomeIcon
          onClick={() => this.props.handleClick(this.props.id)}
          style={{ ...this.state.style, ...this.setColorOnHover() }} icon={this.props.icon}
          size="10x" border fixedWidth pull="left"
          onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
        />
      </div>
    );
  }
}


export default Icon;