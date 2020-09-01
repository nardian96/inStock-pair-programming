import React, { Component } from "react";
import searchIcon from "../../assets/Icons/search-24px.svg";
import WHListItemContainer from "./WHListItemContainer";
import { Link } from "react-router-dom";
import axios from "axios";

class WHList extends Component {
  state = {
    searchVal: "",
    warehouseList: [],
    sort: {
      name: true,
      address: true,
      contactName: true,
      contactEmail: true,
    },
  };

  onSearch = (event) => {
    this.setState({ searchVal: event.target.value });

    if (event.target.value !== "") {
      this.warehouseSearch(event.target.value);
    } else {
      this.setState({ warehouseList: this.props.warehouses });
    }
  };

  sort = (asc, property, sortConditions) => {
    const warehouseApi = `http://localhost:8080/warehouse/sort/${property}`;
    axios.get(warehouseApi).then((response) => {
      let sortArr = response.data;
      if (!asc) {
        sortArr = sortArr.reverse();
      }
      this.setState({ warehouseList: sortArr, sort: sortConditions });
    });
  };

  warehouseSearch = (text) => {
    let reg = new RegExp(`^${text}.*`, "i");
    let filterList = [];
    this.props.warehouses.map((warehouse) => {
      if (reg.test(warehouse.name)) {
        filterList.push(warehouse);
      } else if (reg.test(warehouse.address)) {
        filterList.push(warehouse);
      } else if (reg.test(warehouse.city)) {
        filterList.push(warehouse);
      } else if (reg.test(warehouse.country)) {
        filterList.push(warehouse);
      } else if (reg.test(warehouse.contact.name)) {
        filterList.push(warehouse);
      } else if (reg.test(warehouse.contact.phone)) {
        filterList.push(warehouse);
      } else if (reg.test(warehouse.contact.email)) {
        filterList.push(warehouse);
      }
    });
    console.log("filer", filterList);
    this.setState({
      warehouseList: filterList,
    });
  };

  dynamicSearch = () => {
    return this.props.warehouses.filter((warehouse) =>
      warehouse.name.toLowerCase().includes(this.state.searchVal.toLowerCase())
    );
  };

  render() {
    console.log(
      this.props.warehouses.filter((wh) =>
        wh.name.toLowerCase().includes(this.state.searchVal.toLowerCase())
      )
    );

    let list = [];
    console.log(this.state.warehouseList);
    if (this.state.searchVal === "" && this.state.warehouseList.length === 0) {
      list = this.props.warehouses;
    } else {
      list = this.state.warehouseList;
    }

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
                value={this.state.searchVal}
                onChange={this.onSearch}
                name="searchbar"
                placeholder="Search..."
              ></input>
            </form>
            <Link to="/warehouse/add">
              <button className="header__button"> + Add New Warehouse</button>
            </Link>
          </div>
        </div>
        <WHListItemContainer
          warehouses={this.props.warehouses}
          filteredList={list}
          action={this.props.action}
          sortName={this.state.sort.name}
          sortAddress={this.state.sort.address}
          sortContactName={this.state.sort.contactName}
          sortContactEmail={this.state.sort.contactEmail}
          sort={this.sort}
        />
      </>
    );
  }
}
export default WHList;
