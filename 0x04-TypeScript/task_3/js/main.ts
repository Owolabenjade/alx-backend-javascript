/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
// Using require instead of import for the crud.js file
const CRUD = require('./crud.js');

// Create a row element
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert row and get new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with age field
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);