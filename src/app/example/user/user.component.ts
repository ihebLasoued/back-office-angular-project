import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/User';
import { UserService } from '../../shared/services/user.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;
 users:User[];
 displayedColumns: string[] = ['No', 'Nom','prenom', 'email','actions'];

  constructor(private produitService:UserService) { this.user = new User();}

  ngOnInit() {
    this.produitService.listeUsers().subscribe((data: User[])=> {
      console.log(data);
      this.users=data;

    });
  }

  delete(user){

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this User!",
      icon: "warning",
      buttons: ["No!", true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.produitService.deleteUser(user).subscribe(res => {
          swal("Poof! this User has been deleted!", {
            icon: "success",
        });
        this.ngOnInit();
        });
      } else {
        swal("Your User safe!");
      }
    });


  }

}
