import React from "react";
import { connect } from "react-redux";

import { Typography } from '@material-ui/core';

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <Typography className="header"><strong>{user.name}</strong></Typography>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
