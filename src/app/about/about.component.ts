import { Component,OnInit} from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
// Router
// ServiceService
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  // about:any;

  about:any;
  constructor(private s:ServiceService, private router:Router){}
  ngOnInit(){
    this.s.getabout().subscribe((data)=>this.about=data)
  }
  list(id:number){
    this.router.navigate(['contact',id])
  }
}
