/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}*/




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
 selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 data=[];
 tempdata=[];
reviewdataValue;
reviewdatas=[];
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
 constructor(private researchdataService:ResearchdataService, private toastr:ToastrService, private spinner: NgxSpinnerService) { }


draftForm = new FormGroup(
    {
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
      id:new FormControl(),
       product_name: new FormControl()
    }
  )

reviewForm = new FormGroup(
    {
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

   
showSuccessdraft() {
    this.toastr.success('Draft', 'Success!');
  }
  showSuccessreview() {
    this.toastr.success('review', 'Success!');
  }
  showError(){
    this.toastr.error('password or user not matching!', 'Error!');
  }





 ngOnInit() {

     this.formCreate();
     console.log("calling----")
       this.spinner.show();
          this.researchdataService.getsearchArt()
           .subscribe((res) => {
             console.log("--------here",res)
            /* for(var i=0;i<res.length();i++){
               console.log("filtter data is here",res[i])
             }*/
             this.tempdata = res;
            /* this.tempdata.forEach(function(x){
               
               if(x.status=="submit for review"){
                 console.log("matching",x)
                
                this.datas.push(x)
                //this.data.push(x);
               }
               
             })*/
             for(var i=0;i<this.tempdata.length;i++){
               if(this.tempdata[i].status=="submit for review" || this.tempdata[i].status=="saved as triage"){
                 console.log("matching",this.tempdata[i])
               
               this.data.push(this.tempdata[i])
                //this.data.push(x);
               }
               if(this.tempdata[i].status=="submit for review"){
                  this.reviewdatas.push(this.tempdata[i])
               }
              
               console.log("----data--",this.data)
             }
            
             this.spinner.hide();
             this.reviewdataValue=this.reviewdatas.length;
             
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
 $('#triagemodal').hide();

}

      

      

       singleDaata(data) {
         this.articleform.patchValue({articleId: data.id});
         this.singleRecordData = this.data[data.id];

         this.authordata=data.author;
         this.abstractdata=data.result_abstract;
         this.modaltitle=data.result_title;

         console.log("----data----",data)


if(data.status=="saved as triage"){
  console.log("========save as triage")
$('#triagemodal').show()
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
else{


 $('#basemodal').show();
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

     
      
          // $('#basemodal').show();

      
      /*   else if(data.status=="submit for review"){
           console.log("submit for review")
      $('#basemodal').show();

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




         }*/
       /*  else if(data.status=="saved as drafted"){
           console.log("saved as drafted")
      $('#draftModal').show();
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




         }*/


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
      console.log("----",this.articleform.value)
      this.reviewdata=this.articleform.value;
      // TODO: Use EventEmitter with form value
      this.researchdataService.sumbitreview(this.reviewdata)
      console.warn(this.articleform.value);
      this.articleform.reset();
    }

    articleondraft(data){
      this.showSuccessdraft()
       console.log("----articleondraft",data)
       this.researchdataService.sumbitdraft(data);

    }
    deleteRecord(id){
      console.log("deleted id",id)
      this.researchdataService.removearticle(id);
      
    }
    articleontriage(data){
       console.log("----articleondraft",data)
       this.researchdataService.sumbitdtriage(data);
    }
    draftartreset(){
      this.draftForm.reset();
    }

}