import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { FormControl } from '@angular/forms';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {
  peoples: any[] = [];
  peopleName = new FormControl('');

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getJson().pipe(
      take(1)
    ).subscribe(response => {
      this.peoples = response;
    });
  }

  addPeople() {
    const last = this.peoples[this.peoples.length - 1];
    this.peoples.push({
      id: Number(last.id) + 1,
      name: this.peopleName.value
    });
    this.peopleName.setValue('');
  }
}
