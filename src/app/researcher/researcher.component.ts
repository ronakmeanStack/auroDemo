import { Component, OnInit } from '@angular/core';
import{ResearchdataService} from '../services/research.service';
declare let require: any;

declare var $: any;
@Component({
  selector: 'app-researcher',
  templateUrl: './researcher.component.html',
  styleUrls: ['./researcher.component.css']
})
export class ResearcherComponent implements OnInit {
  data=[];

  private reseachViewData: Object = {};
  constructor(private researchdataService:ResearchdataService) { }

  ngOnInit() {
  	console.log("calling----")
  	   
           this.researchdataService.getreseachdata()
            .subscribe((res) => {
              this.data = res;
              console.log("---data",this.data)
            });       
        }
closemodal(){
  $('#myModal').hide();
}

        openfullmode(data){
           $('#myModal').show();
           console.log("----------full view data view",data)
            this.reseachViewData['authorname']=data.author;
            this.reseachViewData['created_date']=data.created_date
            this.reseachViewData['result_abstract']=data.result_abstract
            this.reseachViewData['result_title']=data.result_title
            this.reseachViewData['search_term']=data.search_term

        }
  
}
