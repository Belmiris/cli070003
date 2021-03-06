import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
  title = 'dotnet-techy-ag-grid';
  columnDefs = [
    {headerName: 'Make', field: 'make', checkboxSelection: true },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
  ];
  rowData: any;
//
//  rowData = [
//    { make: 'Toyota', model: 'Celica', price: 35000 },
//    { make: 'Ford', model: 'Mondeo', price: 32000 },
//    { make: 'Porsche', model: 'Boxter', price: 72000 }
//  ];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);    
  }
}
