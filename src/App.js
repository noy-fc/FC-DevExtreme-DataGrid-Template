import React, { Component } from "react";
import Popup from "devextreme-react/popup";
import { employees, contextMenuItems } from "./data.js";
import FCDataGrid from "./FCDataGrid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false
    };
    this.contextMenuItemClick = this.contextMenuItemClick.bind(this);
    this.showPopup = this.showPopup.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
    this.clickOkOnPopup = this.clickOkOnPopup.bind(this);
  }

  contextMenuItemClick(e) {
    if (!e.itemData.items) {
      if (e.itemData.text === "ShowPopup") {
        this.showPopup();
      } else {
        alert(`The "${e.itemData.text}" item was clicked`);
      }
    }
  }

  showPopup() {
    this.setState({ popupVisible: true });
  }
  hidePopup() {
    this.setState({ popupVisible: false });
  }
  clickOkOnPopup() {
    this.hidePopup();
  }

  getColumnsConfig() {
    const configs = [
      { dataField: "Prefix", caption: "Title", dataType: "string" },
      { dataField: "FirstName", caption: "FirstName", dataType: "string" },
      { dataField: "LastName", caption: "LastName", dataType: "string" },
      { dataField: "Position", caption: "Position", dataType: "string" },
      { dataField: "BirthDate", caption: null, dataType: "date" }
    ];
    return configs;
  }

  render() {
    return (
      <div>
        <h3>This is a Grid#1 render by FCDataGrid Component</h3>
        <FCDataGrid
          dataSource={employees}
          keyExpr={"ID"}
          gridCssClassName={"grid1"}
          exportFileName={"grid1"}
          columnConfigs={this.getColumnsConfig()}
          selectionMode={"multiple"}
          showMoreFunctionsColumn={false}
          showScrollbarMode={"always"}
          contextMenuItems={contextMenuItems}
          contextMenuItemClick={this.contextMenuItemClick}
          hideFilterRow={true}
          hideSearchPanel={true}
          hideExportExcel={true}
          hideColumnChooser={true}
          hideGroupPanel={true}
        />

        <br />

        <h3>This is a Grid#2 render by FCDataGrid Component</h3>
        <FCDataGrid
          dataSource={employees}
          keyExpr={"ID"}
          gridCssClassName={"grid2"}
          exportFileName={"grid2"}
          columnConfigs={this.getColumnsConfig()}
          showMoreFunctionsColumn={true}
          contextMenuItems={contextMenuItems}
          contextMenuItemClick={this.contextMenuItemClick}
        />

        <Popup
          className={"popup"}
          visible={this.state.popupVisible}
          onHiding={this.hidePopup}
          dragEnabled={true}
          closeOnOutsideClick={true}
          showTitle={true}
          title={"Test Popup"}
          defaultWidth={"300"}
          defaultHeight={"250"}
          resizeEnabled={true}
        >
          <button onClick={this.clickOkOnPopup}>OK</button>
        </Popup>
      </div>
    );
  }
}

export default App;
