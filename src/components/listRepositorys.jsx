import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getRepositorys } from '../actions/gitRepos';

class ListRepository extends Component {
  componentDidMount() {
    const { getRepositorys } = this.props;
    getRepositorys('vitocaio');
  }

  render() {
    return (
      <div>
        repositorio list
      </div>
    )
  }
}

const mapStateToProps = state => ({
  repository: state.repository,
});
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getRepositorys,
  },
  dispatch,
);
export default connect(mapStateToProps, mapDispatchToProps)(ListRepository);
