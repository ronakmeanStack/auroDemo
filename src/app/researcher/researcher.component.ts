import { Component, OnInit } from '@angular/core';
import{ResearchdataService} from '../services/research.service';
import { NgxSpinnerService } from 'ngx-spinner';
declare let require: any;
import {
 FormGroup,
 FormBuilder,
 Validators,
 FormControl
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

declare var $: any;
@Component({
 selector: 'app-researcher',
 templateUrl: './researcher.component.html',
 styleUrls: ['./researcher.component.css']
})
export class ResearcherComponent implements OnInit {
 data = [];
 //reviewdata=[];
private reviewData: Object = {};
private draftartData: Object = {};

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
 commentDiv: boolean;
 authorComment: any;
 administrationRoute: any;
 readonly:String;
 articleform: any;


 //
 authordata;
 abstractdata;
 modaltitle;
 //

 private reseachViewData: Object = {};
 constructor(private researchdataService:ResearchdataService,
  private toastr:ToastrService,
  private spinner: NgxSpinnerService) { }


draftForm = new FormGroup(
    {
      id: new FormControl(),
      belongstatus : new FormControl(),
      contryauth: new FormControl(),
      Publication_Date: new FormControl(),
      Product_Approval_Date: new FormControl(),
      Product_Withdrawn_Date: new FormControl(),
      drug_Start_Date: new FormControl(),
      drugApproval_Date : new FormControl(),
      drugWithdrawn_Date: new FormControl(),
      administration_of_Drug: new FormControl(),
      Formulation_of_Drug: new FormControl(),
      Brand_drug_mentioned: new FormControl(),
      Author_Comments: new FormControl(),
      product_name: new FormControl()
    }
  )

reviewForm = new FormGroup(
    {
       id: new FormControl(),
      belongstatus : new FormControl(),
      contryauth: new FormControl(),
      Publication_Date: new FormControl(),
      Product_Approval_Date: new FormControl(),
      Product_Withdrawn_Date: new FormControl(),
      drug_Start_Date: new FormControl(),
      drugApproval_Date : new FormControl(),
      drugWithdrawn_Date: new FormControl(),
      administration_of_Drug: new FormControl(),
      Formulation_of_Drug: new FormControl(),
      Brand_drug_mentioned: new FormControl(),
      Author_Comments: new FormControl(),
       product_name: new FormControl()
    }
  )

   






 ngOnInit() {

     this.formCreate();
     console.log("calling----")
       this.spinner.show();
          this.researchdataService.getsearchArt()
           .subscribe((res) => {
             this.data = res;
             this.spinner.hide();
             console.log("--data",this.data)
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
 $('#basemodal').hide();
 $('#draftModal').hide();
 $('#submitedModal').hide();
 this.draftForm.reset();
 this.reviewForm.reset();
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

       singleRecord(id){
        
        /* this.singleRecordData = this.data[id];*/
       }

       singleDaata(data) {
         this.articleform.patchValue({articleId: data.id});
         this.singleRecordData = this.data[data.id];


         console.log("-----data",data)
         this.authordata=data.author;
         this.abstractdata=data.result_abstract;
         this.modaltitle=data.result_title;
         console.log("---ronnak---",this.authordata)
         if(data.status==" " || data.status==null ||data.status=="NULL"){
           console.log("nothing");
           //$('#basemodal').show();
      $('#draftModal').show();
      this.draftartData['id']=data.id;
      this.draftartData['belongstatus']=data.belongstatus;
      this.draftartData['contryauth']=data.contryauth;
      this.draftartData['Publication_Date']=data.Publication_Date;
      this.draftartData['Product_Approval_Date']=data.Product_Approval_Date;
      this.draftartData['Product_Withdrawn_Date']=data.Product_Withdrawn_Date;
      this.draftartData['drug_Start_Date']=data.drug_Start_Date;
      this.draftartData['drugApproval_Date']=data.drugApproval_Date;
      this.draftartData['drugWithdrawn_Date']=data.drugWithdrawn_Date;
      this.draftartData['administration_of_Drug']=data.administration_of_Drug;
      this.draftartData['Formulation_of_Drug']=data.Formulation_of_Drug;
      this.draftartData['Brand_drug_mentioned']=data.Brand_drug_mentioned;
      this.draftartData['Author_Comments']=data.Author_Comments;
         }
         if(data.status=="saved as triage"){
           console.log("saved as triage");
            $('#submitedModal').show();

         }
         else if(data.status=="submit for review"){
           console.log("submit for review")
      $('#submitedModal').show();
       this.reviewData['id']=data.id;
      this.reviewData['belongstatus']=data.belongstatus;
      this.reviewData['contryauth']=data.contryauth;
      this.reviewData['Publication_Date']=data.Publication_Date;
      this.reviewData['Product_Approval_Date']=data.Product_Approval_Date;
      this.reviewData['Product_Withdrawn_Date']=data.Product_Withdrawn_Date;
      this.reviewData['drug_Start_Date']=data.drug_Start_Date;
      this.reviewData['drugApproval_Date']=data.drugApproval_Date;
      this.reviewData['drugWithdrawn_Date']=data.drugWithdrawn_Date;
      this.reviewData['administration_of_Drug']=data.administration_of_Drug;
      this.reviewData['Formulation_of_Drug']=data.Formulation_of_Drug;
      this.reviewData['Brand_drug_mentioned']=data.Brand_drug_mentioned;
      this.reviewData['Author_Comments']=data.Author_Comments;




         }
         else if(data.status=="saved as drafted"){
           console.log("saved as drafted")
      $('#draftModal').show();
      this.draftartData['id']=data.id;
      this.draftartData['belongstatus']=data.belongstatus;
      this.draftartData['contryauth']=data.contryauth;
      this.draftartData['Publication_Date']=data.Publication_Date;
      this.draftartData['Product_Approval_Date']=data.Product_Approval_Date;
      this.draftartData['Product_Withdrawn_Date']=data.Product_Withdrawn_Date;
      this.draftartData['drug_Start_Date']=data.drug_Start_Date;
      this.draftartData['drugApproval_Date']=data.drugApproval_Date;
      this.draftartData['drugWithdrawn_Date']=data.drugWithdrawn_Date;
      this.draftartData['administration_of_Drug']=data.administration_of_Drug;
      this.draftartData['Formulation_of_Drug']=data.Formulation_of_Drug;
      this.draftartData['Brand_drug_mentioned']=data.Brand_drug_mentioned;
      this.draftartData['Author_Comments']=data.Author_Comments;




         }


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
      this.showSuccessreview();
      console.log("----",this.articleform.value)
      this.reviewdata=this.articleform.value;
      // TODO: Use EventEmitter with form value
      this.researchdataService.sumbitreview(this.reviewdata)
      console.warn(this.articleform.value);
      this.articleform.reset();
      this.closemodal();
    }

     articlesaveDraft() {
      this.showSuccessreview();
      console.log("----",this.articleform.value)
      this.reviewdata=this.articleform.value;
      // TODO: Use EventEmitter with form value
      this.researchdataService.sumbitreview(this.reviewdata)
      console.warn(this.articleform.value);
      this.articleform.reset();
      this.closemodal();
    }

  /* articleondraft(data){
     this.showSuccessdraft();
       console.log("----articleondraft",data)
     this.researchdataService.sumbitdraftbyre(data);
       this.closemodal();
    }
    articlesumbit(data){
      this.showSuccessdraft();
       console.log("----articleondraft",data)
       console.warn(this.articleform.value);
      this.articleform.reset();
      this.closemodal();
    }*/
  
   

  ///new function
     articleondraft(data){
     this.showSuccessdraft();
     console.log("----articleondraft",data)
     this.researchdataService.sumbitdraftbyre(data);
       this.closemodal();
    }
    articlesumbit(data){
      this.showSuccessreview();
      console.log("----articleondraft",data)
     this.researchdataService.sumbitreview(data);
      this.closemodal();
    }
    //toaster function
     formreset(){
      this.articleform.reset();
    }
resetdraftform(){
  this.draftForm.reset();
}
showSuccessdraft() {
    this.toastr.success('Draft saved', 'Success!');
  }
  showSuccessreview() {
    this.toastr.success('Review saved', 'Success!');
  }
  
  removearticle(){
    this.toastr.error('Article', 'Removed');
  }
  deleteRecord(id){
      console.log("deleted id",id)
      this.removearticle()
      this.researchdataService.removearticle(id);
      
    }
}