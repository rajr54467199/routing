import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  conList:any;
  constructor(private s:ServiceService ,private router:Router){}
  ngOnInit(){
    this.s.getcontact().subscribe((data)=>this.conList=data)
  }
  list(id:number){
    this.router.navigate(['contact',id])
  }
}
