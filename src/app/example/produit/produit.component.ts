import { Component, OnInit, SecurityContext } from '@angular/core';
import { Product } from '../../shared/models/Product';
import { ProduitService } from '../../shared/services/produit.service';
import swal from 'sweetalert';

import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
product:Product;
products:Product[];
id : number=0;
file:any

  constructor(private produitService:ProduitService,private router : ActivatedRoute) {
      this.product = new Product();

  }

  ngOnInit() {
    console.log(this.id)
    this.id=this.router.snapshot.params['id'];
    console.log(this.id)

  if(this.id!=null)
  this.produitService.getProductById(this.id).subscribe((data: Product)=> {

    this.product=data

  });

  }

  imageUpload(event)
  {
console.log(event)
this.file=event.target.files[0];
  }
  addProduct(){
    /*const myFormData = new FormData();
    myFormData.append('label',f.value.name)
    myFormData.append('quantity',f.value.quantity)
    myFormData.append('prix',f.value.prix);
    myFormData.append('image',this.file);*/

    if(this.id==null)
    {

  this.produitService.addProduct(this.product).subscribe(res => {
    swal("Good job!", "Product Adeed", "success");

    });
  }

  else
{
/*console.log(f.value.name)
myFormData.append('id',this.id.toString());*/

  this.produitService.updateProduct(this.id,this.product).subscribe(res => {
    swal("Good job!", "Product updated", "success");

    });
  }
}






}
