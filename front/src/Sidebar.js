import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
  render() {
    return (
      <nav
        className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top"
        style={{ zIndex: '3', width: '250px', marginTop: '60px' }}
        id="mySidebar"
      >
        <h3 className="w3-container w3-display-container w3-padding-16 w3-wide">
          <b>E-Commerce </b>
        </h3>
        <div
          className="w3-padding-64 w3-large w3-text-grey"
          style={{ fontWeight: 'bold', left: '10px' }}
        >
          <Link to="/" className="w3-bar-item w3-button">
            All Categories
          </Link>

          <Link to="/BreadList" className="w3-bar-item w3-button">
            Bread
          </Link>

          <Link to="/DairyList" className="w3-bar-item w3-button">
            Dairy
          </Link>

          <Link to="/Fruits" className="w3-bar-item w3-button">
            Fruits
          </Link>

          <Link to="/SeasonalSpice" className="w3-bar-item w3-button">
            SeasonalSpice
          </Link>
          <Link to="/Vegetables" className="w3-bar-item w3-button">
            Vegetables
          </Link>
        </div>
      </nav>
    )
  }
}
