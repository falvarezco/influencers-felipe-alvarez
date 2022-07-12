import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchUsers, getTableData, setCurrentPage } from '../../store/reducer';
import { PaginatedData } from '../../types';
import Layout from '../../components/Layout';
import UsersGrid from '../../components/UsersGrid';
import SearchHeader from '../../components/SearchHeader';


interface InfluencersProps {
  users: PaginatedData,
  currentPage: number,
  isLoading: boolean,
  onLoad: Function,
  setPage: (value: number) => void,
}

export class Influencers extends Component<InfluencersProps> {
  componentDidMount () {
    this.props.onLoad();
  }
  onSearchChange = (e: any) => {
    console.log(e);
  }
  render() {
    const {users} = this.props;
    return (
      <Layout>
        <SearchHeader onChange={this.onSearchChange}/>
        {users && (
          <UsersGrid {...this.props}/>
        )}
      </Layout>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const {usersState: {isLoading, currentPage}} = state;
  return {
    isLoading,
    currentPage,
    users: getTableData(state),
  }
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onLoad:() => dispatch(fetchUsers()),
  setPage:(val: number) => dispatch(setCurrentPage(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Influencers);
