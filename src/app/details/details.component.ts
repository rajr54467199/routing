import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  detail:any=[];
  constructor(public s:ServiceService,private route:ActivatedRoute){}
  ngOnInit(){
    let id=this.route.snapshot.paramMap.get('id')
    this.s.getabou(id).subscribe((data)=>{
      this.detail=data;
    })
  }
}

