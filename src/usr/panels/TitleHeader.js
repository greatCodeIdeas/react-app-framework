import React from 'react';
import PropTypes from 'prop-types';

class TitleHeader extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    index: PropTypes.number,
    initialData: PropTypes.string,
  };

  static defaultProps = {
    title: 'None',
    index: 1,
    initialData: 'Empty'
  };

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>
          Title: {this.props.title}
        </h1>
        <h4>Index: {this.props.index}</h4>
        <h4>InitialData: {this.props.initialData}</h4>
      </div>
    );
  }
}

export default TitleHeader;
