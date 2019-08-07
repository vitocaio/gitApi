import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getRepositorys } from '../actions/gitRepos';

//Styles
const Content = styled.div`
`;

const StyledList = styled.ul`
list-style: none;
`;

class ListRepository extends Component {
  componentWillMount() {
    const { getRepositorys } = this.props;
    getRepositorys('vitocaio');
  }

  renderList() {
    const { repositorys } = this.props;
    
    if (repositorys !== undefined) {
      const list = repositorys.map(item => {
        return ( <li key={item.id}> {item.name} </li>);
      });

      return list;
    }
  }

  render() {
    return (
      <Content>
        <StyledList>
          {this.renderList()}
        </StyledList>
      </Content>
    )
  }
}

const mapStateToProps = state => ({
  repositorys: state.gitApi.data.repositorys,
});
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getRepositorys,
  },
  dispatch,
);
export default connect(mapStateToProps, mapDispatchToProps)(ListRepository);
