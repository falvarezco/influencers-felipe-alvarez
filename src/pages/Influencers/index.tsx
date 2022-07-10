import React, { Component } from 'react';
import Layout from '../../components/Layout';
// import { connect } from 'react-redux';
// import { AppDispatch, RootState } from './store';
// import { fetchResults, getTableData } from './store/reducer';
// import { DataRow } from './types';
// import Header from './components/Header';
// import Results from './components/Results';
// import Text from './components/Text';

// interface AppProps {
//   tableData: Array<DataRow> | undefined,
//   hasFetchError: boolean,
//   isLoading: boolean,
//   onSubmit: Function,
// }

export class Influencers extends Component {
  render() {
    // const {isLoading, tableData, hasFetchError} = this.props;
    return <Layout>Influencers Page</Layout>
  }
}

// const mapStateToProps = (state: RootState) => {
//   const {searchState: {isLoading, hasFetchError}} = state;
//   return {
//     isLoading,
//     hasFetchError,
//     tableData: getTableData(state),
//   }
// };

// const mapDispatchToProps = (dispatch: AppDispatch) => ({
//   onSubmit:(value: string) => dispatch(fetchResults(value)),
// });

export default Influencers;
