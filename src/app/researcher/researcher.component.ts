import { Component, OnInit } from '@angular/core';
import{ResearchdataService} from '../services/research.service';
@Component({
  selector: 'app-researcher',
  templateUrl: './researcher.component.html',
  styleUrls: ['./researcher.component.css']
})
export class ResearcherComponent implements OnInit {
  data=[];
  constructor(private researchdataService:ResearchdataService) { }

  ngOnInit() {
  	console.log("calling----")
  	   
           this.researchdataService.getreseachdata()
            .subscribe((res) => {
              this.data = res;
              console.log("---data",this.data)
            });       
        }
  
}
