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
id : number;
file:any

  constructor(private produitService:ProduitService,private router : ActivatedRoute) {
      this.product = new Product();
      this.id=this.router.snapshot.params['id'];
      console.log(this.id)
    //  this.product=new Product(1,"hhhh",100,100,null,null);
    if(this.id!=null)
    this.produitService.getProductById(this.id).subscribe((data: Product)=> {
      console.log(data);
      this.product=data

    });
  }

  ngOnInit() {


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
    myFormData.append('prix',f.value.prix);
    myFormData.append('image',this.file);

    if(this.id==null)
    {

  this.produitService.addProduct(myFormData).subscribe(res => {
    swal("Good job!", "Product Adeed", "success");

    });
  }

  else
{
console.log(f.value.name)
myFormData.append('id',this.id.toString());

  this.produitService.updateProduct(myFormData).subscribe(res => {
    swal("Good job!", "Product Adeed", "success");

    });
  }
}






}
