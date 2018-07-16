import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SidebarService {
  menu: any = [
    {
      title: "Main",
      icon: "mdi mdi-gauge",
      subMenu: [
        { title: "Dashboard", icon: "", path: "/dashboard" },
        { title: "Progress Bar", icon: "", path: "/progress" },
        { title: "Graph", icon: "", path: "/graph1" },
        { title: "Promise", icon: "", path: "/promise" },        
        { title: "Obsevable", icon: "", path: "/observable" }
      ]
    }
  ];
  constructor() {}
}
