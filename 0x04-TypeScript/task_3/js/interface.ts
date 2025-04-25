/**
 * Type representing a row ID in the database
 */
export type RowID = number;

/**
 * Interface representing a row element with user information
 */
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}