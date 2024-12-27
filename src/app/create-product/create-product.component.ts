import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductServiceService } from '../Services/product-service.service';
import { Router, RouterModule } from '@angular/router';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { routes } from '../app.routes';
import { DataTransferService } from '../Services/data-transfer.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule,FormsModule,ProductListComponent,RouterModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {
  newProduct: any = {
      name: '',
      price: 0,
     };

  patchProductData: any;

  constructor(private ProductService: ProductServiceService,private router: Router, private dataTransfer: DataTransferService) {
    this.patchProductData = dataTransfer.getData();
    this.newProduct.name = this.patchProductData.name;
    this.newProduct.price = this.patchProductData.price;
    this.newProduct.id = this.patchProductData.id;
    debugger;
  }

  onSubmit(): void {
    if(this.newProduct.id > 0)
    {
      this.updateProduct();
    }else{
      this.createProduct();
    }
  }

createProduct() : void{
  if (this.newProduct.name && this.newProduct.price > 0) {
    debugger
    this.ProductService.addProducts( this.newProduct).subscribe(
      (response : any) => {
        if(response.status === "Success")
          {
        console.log('Product added successfully:', response);
       this.router.navigate(['app-product-list']);
          }else{
            alert(response.error);
          }
      },
      (error: any) => {
        console.error('Error adding product:', error);
      }
    );
  } else {
    console.error('Invalid product data: Please ensure name and price are correct.');
  }
}

  updateProduct():void
  {
    if (this.newProduct.name && this.newProduct.price > 0) {
      debugger
      this.ProductService.UpdateProducts( this.newProduct).subscribe(
        (response : any) => {
          if(response.status === "Success")
          {
          console.log('Product Updated successfully:', response);
         this.router.navigate(['app-product-list']);
          }else{
          alert(response.error);
          }
        },
        (error: any) => {
          console.error('Error Updating product:', error);
        }
      );
    } else {
      console.error('Invalid product data: Please ensure name and price are correct.');
    }
  }
}
