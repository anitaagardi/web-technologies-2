npm install
Or:

1. Install angular CLI:
npm install –g @angular/cli 
2. Install angular material:
npm install --save @angular/material
npm install --save @angular/cdk 




Creating new project:
ng new my-dream-app // name of the project
cd my-dream-app
ng serve

http://localhost:4200/
4200 is the default port used when a new project is created. You can change the port with the following command :
ng serve --host 0.0.0.0 --port 4201

Command for Angular Update:
ng update @angular/cli @angular/core

Component:
ng g component new-component

Directive:
ng g directive new-directive

Service:
ng g service new-service

Module:
ng g module my-module

Test:
ng test