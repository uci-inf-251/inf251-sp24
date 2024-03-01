import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
assignments:any[] = [];

  constructor(private http:HttpClient) {
  	this.http.get('./assets/calendar.json').subscribe(calendar => {
  		this.parseCalendar(calendar as {});
  	});
  }

  ngOnInit() {
  }

  parseCalendar(calendar:{}) {
  	this.assignments = calendar['events'].filter(event => {
		return event.type == 'assignments';
	}).sort((a, b) => { //Sort ascending
		return moment(a.date).diff(moment(b.date));
	}).map(event => {
		let assignment:{} = {
			//All assignments due 11:59pm the day they are listed on the calendar
			'dueShort': moment(event.date).subtract(1, 'minutes').add(1, "days").format("MMMM D"),
			'dueLong': moment(event.date).subtract(1, 'minutes').add(1, "days").format("dddd, MMMM Do, YYYY [at] hh:mma"),
			'title': event.title
		};
		if('anchor' in event) {
			assignment['anchor'] = event.anchor;
		}
		if('link' in event) {
			assignment['link'] = event.link;
		}
		return assignment;
	});
	console.log(this.assignments);
  }

}
