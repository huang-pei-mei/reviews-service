import React from 'react';

const FilterBy = (props) => {


  return (
    <div className="filterBy">
      <label htmlFor="filterBy">Filter by:</label>
      <select name="filterBy" id="filterBy">
        <option value="All Stars">All Stars</option>
        <option value="5 star only">5 star only</option>
        <option value="4 star only">4 star only</option>
        <option value="3 star only">3 star only</option>
        <option value="2 star only">2 star only</option>
        <option value="1 star only">1 star only</option>
      </select>
    </div>
  )
}


export default FilterBy;