import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../../Services/product-service.service';
import { DataTransferService } from '../../Services/data-transfer.service';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{

  productList: any = [];

  constructor(private ProductService: ProductServiceService, private router: Router, private dataTransfer: DataTransferService) {
    
  }
  ngOnInit(): void {
   this.getProducts();
   }

   getProducts(): void{
    this.ProductService.getAllProducts().subscribe(
      (data) => {
        this.productList = data.payload;  
      },
      (error) => {
        console.error('Error fetching products:', error);  
      }
    );
   }

  onAddProduct(){
    this.dataTransfer.setData([]);
    this.router.navigate(['app-create-product']); 
  }

  onDeleteProduct(productId: number) {
    // Call delete API
    console.log('Deleting product with ID:', productId);

    this.ProductService.deleteProduct(productId).subscribe(
      (response: any) => {
        console.log('Product deleted:', response);
        this.getProducts();  
      },
      (error: any) => {
        console.error('Error deleting product:', error);
      }
    );
  }

  patchProduct(product: any){
    this.dataTransfer.setData(product);
    this.router.navigateByUrl('app-create-product');
  }
}
