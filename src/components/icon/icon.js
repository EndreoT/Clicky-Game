import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  icon: {
    'marginTop': '50px',
  }
}

class Icon extends React.Component {
  
  render() {
    return (
      <div>
        <FontAwesomeIcon
          onClick={() => this.props.handleClick(this.props.id)}
          style={styles.icon} icon={this.props.icon}
          size="10x" border fixedWidth pull="left"
        />
      </div>
    );
  }
}


export default Icon;