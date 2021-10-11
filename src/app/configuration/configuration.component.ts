import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  sendDataToMetrics: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  switchSendDataToMetrics(): void {

  }

  moveVocabulariesToNextColumn(): void {
    alert("it works")
  }

}
