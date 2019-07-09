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

  setHover = async (hover) => {
    await this.setState({ hover })
  }

  setHoverFalse = async () => {
    await this.setHover(false)
  }

  setHoverTrue = async () => {
    await this.setState({ hover: true })
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

  handleClick = async () => {
    await this.setHover(false);
    this.props.handleClick(this.props.id)
  }

  render() {

    return (
      <React.Fragment>
        <FontAwesomeIcon
          onClick={this.handleClick}
          style={{ ...this.state.style, ...this.setColorOnHover() }}
          icon={this.props.icon}
          onMouseEnter={this.setHoverTrue}
          onMouseLeave={this.setHoverFalse}
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