import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { DxDataGridModule } from 'devextreme-angular';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
  standalone: true,
  imports: [CommonModule, DxDataGridModule]
})
export class ProductGridComponent implements OnInit {
  products: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(data => {
      this.products = data;
    }, error => {
      console.error('Error loading products:', error);
    });
  }
}