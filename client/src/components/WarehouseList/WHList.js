import React, { Component } from "react";
import searchIcon from "../../assets/Icons/search-24px.svg";
import WHListItemContainer from "./WHListItemContainer";

class WHList extends Component {
  state = {
    searchTerm: "",
  };

  onSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  dynamicSearch = () => {
    return this.props.warehouses.filter((warehouse) =>
      warehouse.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  render() {
    console.log(
      this.props.warehouses.filter((wh) =>
        wh.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      )
    );
    return (
      <>
        <div className="warehouse__list-header">
          <h1 className="header__title">Warehouses</h1>
          <div className="warehouse__list-subheader">
            <form className="header__search-container">
              <label htmlFor="header__search" className="header__search-icon">
                <img src={searchIcon} alt="search icon" />
              </label>
              <input
                className="header__search"
                type="search"
                value={this.state.searchTerm}
                onChange={this.onSearch}
                name="searchbar"
                placeholder="Search..."
              ></input>
            </form>
            <button className="header__button"> + Add New Warehouse</button>
          </div>
        </div>
        <WHListItemContainer
          warehouses={this.props.warehouses}
          filteredList={this.dynamicSearch()}
          action={this.props.action}
        />
      </>
    );
  }
}

export default WHList;
