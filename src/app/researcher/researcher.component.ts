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
 data = [];
 draftDataResponse: any;
 singleRecordData: any = [];
 drugsAurobindo: boolean;
 counterAuthorization: any;
 publicationDate: any;
 withdrawDate: any;
 approvalDate: any;
 drugWithdrawCode: any;
 drugApprovalDate: any;
 brandDrag: boolean;
 startDate: any;
 formulationDrug: any;
 authorComment: any;
 administrationRoute: any;
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

closemodal() {
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

       singleRecord(id) {
         this.singleRecordData = this.data[id];
       }


       draftData() {
         debugger;
         const obj = {
         'aurobindoDrug': this.drugsAurobindo,
         'authoriztionCounter': this.counterAuthorization,
         'publicationDate': this.publicationDate,
         'approvalDate': this.approvalDate,
         'withdrawnDate': this.withdrawDate,
         'administrationRoute': this.administrationRoute,
         'formulationDrug': this.formulationDrug,
         'brandDrug': this.brandDrag
         };
         this.researchdataService.checkListData(obj).subscribe(
           (data: any) => {
             this.draftDataResponse = data;
           }, error => {
             console.log(error);
           });
     }
}