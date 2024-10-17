import { Component, OnInit, ViewChild } from '@angular/core';
import { Add personService } from './add person.service';





@Component({
  selector: 'app-add person',
  templateUrl: './add person.component.html',
  styleUrls: ['./add person.component.scss'],
})

export class Add personComponent implements OnInit {
    public person:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        personid: '',
        name: '',
        age: '',
        address: '',
    }




    constructor (
        private add personService: Add personService,
    ) { }

    ngOnInit() {
        this.person.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }


}