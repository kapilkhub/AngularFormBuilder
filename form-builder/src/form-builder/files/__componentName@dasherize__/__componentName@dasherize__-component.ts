import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: '<%=dasherize(componentName)%>',
  templateUrl: './<%=dasherize(componentName)%>.component.html',
  styleUrls: ['./<%=dasherize(componentName)%>.component.css']
})
export class <%=classify(componentName)%>Component extends BaseComponent implements OnInit,OnDestroy  {
  
 
  constructor() {
      super();
  }

  ngOnInit(): void {
   this.initiializeForm();
  }

  ngOnDestroy(): void {
    if(this.subscription){
        this.subscription.unsubscribe();
    }

  initializeForm(){
    <%if (getLength() > 0){%>
      this.group = new FormGroup({
        <% for(let control of getControls()) {%>
          <%=control.name%> : new FormControl(null,[<%=control.validations%>])
          <%}%>
      })
      <%}%>
  }

  onClickSave(){
    console.log(this.HTMLOptGroupElement.value);
  }

  onClickClear(){
    this.group.reset();
  }
 
}


 
}