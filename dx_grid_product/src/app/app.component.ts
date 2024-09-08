import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { HttpClientModule } from '@angular/common/http';
import config from 'devextreme/core/config'; 
import { licenseKey } from '../devextreme-license'; 
config({ licenseKey }); 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductGridComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dx_grid_product';
}
