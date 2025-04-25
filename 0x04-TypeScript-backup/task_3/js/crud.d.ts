import { RowID, RowElement } from './interface';

/**
 * Inserts a row into the database
 * @param row - Row element to insert
 * @returns A new row ID
 */
export declare function insertRow(row: RowElement): RowID;

/**
 * Deletes a row from the database
 * @param rowId - ID of the row to delete
 * @returns void
 */
export declare function deleteRow(rowId: RowID): void;

/**
 * Updates a row in the database
 * @param rowId - ID of the row to update
 * @param row - Updated row element
 * @returns The updated row ID
 */
export declare function updateRow(rowId: RowID, row: RowElement): RowID;