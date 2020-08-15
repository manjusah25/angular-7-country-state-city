import { Component } from '@angular/core';
import sdk from '@stackblitz/sdk';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 electedCountry: String = "--Choose Country--";
  
	Countries: Array<any> = [
		{ name: 'Germany', states: [ {name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
		{ name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
		{ name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
		{ name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
		{ name: 'India', states: [ {name: 'Maharashtra', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
	];
  
	states: Array<any>;

	cities: Array<any>;
  changeCountry(countryname){
   this.states = this.Countries.find(countryval => countryval.name == countryname).states;
   console.log(typeof(this.states));
  }
  changestate(statename){
    this.cities =this.states.find(state => state.name == statename).cities;
    console.log(this.cities);
  }
}
