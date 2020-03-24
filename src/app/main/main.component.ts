import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  constructor(public router: Router, public activatedRoute: ActivatedRoute) {}

  tabs = []; // tab name 배열 저장
  selected = new FormControl(0); // 클릭한 tab 의 number
  urls = []; // 현재 화면(Tab) url 저장
  checkMenuClicked = false;

  addTab(buttonNumber, buttonName) {
    if (this.tabs.length > 10) {
      alert("최대 탭의 갯수는 10개 입니다.");
      return false;
    }
    this.tabs.push(buttonName);
    this.selected.setValue(this.tabs.length - 1);
    this.menuRouting(buttonNumber);
    this.checkMenuClicked = true;
  }

  menuRouting(buttonNumber) {
    const routeConfig = this.activatedRoute.routeConfig;
    const parentPath = routeConfig.path;
    const childPath = routeConfig.children[buttonNumber - 1].path;
    const fullPath = `${parentPath}/${childPath}`;
    this.urls.push(fullPath);
    this.router.navigate([fullPath]);
  }

  tabRouting() {
    const tabUrl = this.urls[this.selected.value];
    this.router.navigate([tabUrl]);
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    this.urls.splice(index, 1);
  }

  ngOnInit(): void {
    this.router.navigate(["/main/menu1"]);
  }
}
