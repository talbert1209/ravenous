import React from 'react';
import './businessList.css';
import Business from '../Business/business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    )
  }
}

export default BusinessList;
