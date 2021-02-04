import { Component, OnInit, SecurityContext } from '@angular/core';
import { Product } from '../../shared/models/Product';
import { ProduitService } from '../../shared/services/produit.service';
import swal from 'sweetalert';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
product:Product;
products:Product[];
imagePath="http://127.0.0.1:8000/uploads/products/"
file:any
displayedColumns: string[] = ['No', 'Image','name', 'price', 'quantity','actions'];
dataSource;
  constructor(private produitService:ProduitService) {
      this.product = new Product();
  }

  ngOnInit() {
    this.produitService.listeProduct().subscribe((data: Product[])=> {
      console.log(data);
      this.products=data;
      this.dataSource = data;
    });
  }

  imageUpload(event)
  {
console.log(event)
this.file=event.target.files[0];
  }
  addProduct(f:NgForm){
    const myFormData = new FormData();

    myFormData.append('label',f.value.name)
    myFormData.append('quantity',f.value.quantity)
    myFormData.append('prix',f.value.prix)

    myFormData.append('image',this.file)
  this.produitService.addProduct(myFormData).subscribe(res => {
    swal("Good job!", "Product Adeed", "success");
    this.ngOnInit();
    });
  }


  delete(product){

      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this Product!",
        icon: "warning",
        buttons: ["No!", true],
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          this.produitService.deleteProduct(product).subscribe(res => {
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


}
