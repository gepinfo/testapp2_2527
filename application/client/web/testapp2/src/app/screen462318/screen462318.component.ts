import { Component, OnInit, ViewChild } from '@angular/core';
import { Screen462318Service } from './screen462318.service';





@Component({
  selector: 'app-screen462318',
  templateUrl: './screen462318.component.html',
  styleUrls: ['./screen462318.component.scss'],
})

export class Screen462318Component implements OnInit {
    columnDefs: any = [{ headerName: 'personid', field: 'personid'  },{ headerName: 'name', field: 'name'  },{ headerName: 'age', field: 'age'  },{ headerName: 'address', field: 'address'  },];
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
    paginationPageSize = 10;
 	page=1;
 	rowData: any[] = [];
 	rowIndex: Number = 0;




    constructor (
        private screen462318Service: Screen462318Service,
    ) { }

    ngOnInit() {
        this.person.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }


}