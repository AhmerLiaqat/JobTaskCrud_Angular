import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataTransferService {
  private data: any = [];  // In-memory data storage

  constructor() {}

  // Method to get data
  getData(): any[] {
    return this.data;
  }

  // Method to set data
  setData(newData: any[]): void {
    this.data = newData;
  }

  // Add a single item to data
  addData(newItem: any): void {
    this.data.push(newItem);
  }
}
