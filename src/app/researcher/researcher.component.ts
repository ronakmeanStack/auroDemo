import { Component, OnInit } from '@angular/core';
import{ResearchdataService} from '../services/research.service';
declare let require: any;
import {
 FormGroup,
 FormBuilder,
 Validators,
 FormControl
} from '@angular/forms';

declare var $: any;
@Component({
 selector: 'app-researcher',
 templateUrl: './researcher.component.html',
 styleUrls: ['./researcher.component.css']
})
export class ResearcherComponent implements OnInit {
 data = [];
 //reviewdata=[];
 reviewdata :any ={};
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
 readonly:String;
 articleform: any;

 private reseachViewData: Object = {};
 constructor(private researchdataService:ResearchdataService) { }

 ngOnInit() {

     this.formCreate();
     console.log("calling----")
       
          this.researchdataService.getUser()
           .subscribe((res) => {
             this.data = res;
           });
       }

       formCreate() {

         this.articleform = new FormGroup({
                      belongstatus: new FormControl(false),
                      contryauth: new FormControl(''),
                      Publication_Date: new FormControl(''),
                      Product_Approval_Date: new FormControl(''),
                      Product_Withdrawn_Date: new FormControl(''),
                      drug_Start_Date: new FormControl(''),
                      drugApproval_Date: new FormControl(''),
                      drugWithdrawn_Date: new FormControl(''),
                      administration_of_Drug: new FormControl(''),
                      Formulation_of_Drug: new FormControl(''),
                      Brand_drug_mentioned: new FormControl(false),
                      Author_Comments: new FormControl(''),
                      articleId: new FormControl(''),
                      /*comments: new FormGroup({

                      })*/
                    });
       }

closemodal() {
 $('#myModal').hide();
}

       openfullmode(data){
           this.singleRecordData = data
          console.log("----------full view data view",data)
           this.reseachViewData['authorname']=data.author;
           this.reseachViewData['created_date']=data.created_date
           this.reseachViewData['result_abstract']=data.result_abstract
           this.reseachViewData['result_title']=data.result_title
           this.reseachViewData['search_term']=data.search_term

       }

       singleRecord(id) {
         this.articleform.patchValue({articleId: id});
         this.singleRecordData = this.data[id];
       }


       draftData() {
        
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
         this.researchdataService.sumbitreview(obj)/*.subscribe(
           (data: any) => {
             this.draftDataResponse = data;
           }, error => {
             console.log(error);
           });*/
     }

     next() {
       console.log("clicked")
     }

      articleonSubmit() {

        this.reviewdata=this.articleform.value;
      // TODO: Use EventEmitter with form value
      this.researchdataService.sumbitreview(this.reviewdata)
      console.warn(this.articleform.value);
      this.articleform.reset();
    }
    deleteRecord(id){
      console.log("deleted id",id)
      this.researchdataService.removearticle(id);
      
    }
}