import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/Product';
import { ProduitService } from '../../shared/services/produit.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  imagePath="http://127.0.0.1:8000/uploads/products/"
  product:Product;
  displayedColumns: string[] = ['No', 'Image','name', 'price', 'quantity','actions'];
  products;
  constructor(private produitService:ProduitService,private router:Router) { }

  ngOnInit() {
    this.produitService.listeProduct().subscribe((data: Product[])=> {
      console.log(data);

this.products=data;
    });
  }
  delete(id){

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Product!",
      icon: "warning",
      buttons: ["No!", true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.produitService.deleteProduct(id).subscribe(res => {
          swal("Poof! this Product has been deleted!", {
            icon: "success",
        });
        this.ngOnInit();
        });
      } else {
        swal("Your Productis safe!");
      }
    });


  }
  update(id)
  {
this.router.navigate(['example/product',id])
  }
}
