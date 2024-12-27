import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'app-product-list', component: ProductListComponent },
    { path: 'app-create-product', component: CreateProductComponent },
];
