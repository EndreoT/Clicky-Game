import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  icon: {
    'marginTop': '50px',
  }
}

class Icon extends React.Component {
  // state = {
  //   clicked: this.props.clicked,
  // }

  // handleClick = async () => {
  //   // console.log(this.state.clicked)
  //   if (this.state.clicked) {
  //     return this.props.handleClick(true)
  //   }
  //   // console.log('set to true')
  //   await this.setState({ clicked: true });
  //   // console.log(this.state.clicked)
  //   return this.props.handleClick(false)
  // }

  render() {
    return (
      <div>
        <FontAwesomeIcon
          onClick={() => this.props.handleClick(this.props.id)}
          style={styles.icon} icon={this.props.icon}
          size="8x" border fixedWidth pull="left"
        />
      </div>
    );
  }
}


export default Icon;