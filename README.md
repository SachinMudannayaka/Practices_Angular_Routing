# Routingng

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Research For Angular technologies


<= FREECODECAMP Tutotial With OctAcademy =>
*****************ANGULAR*******************

+ A UI Framework by google
+ A component based framework
+ Proviede collection of libraries to cover features like Routing, Forms.

Framework 
+ Generally contains a set of libraries.
+ Can extend the frameworks.
+ Some examples are Angular,.Net, Ionic, ExpressJs 

Libraries
+ Libraries generally perform specific operation.
+ You can combine multiple libs to build apps.
+ Some examples are React, MomentJs, LodAsh

Features of Angular
*Template
*Data Binding
*Forms
*Routing
*Observables
*PWA

Agenda
@ Intro to Typescript
@ Why Typescript
@ Type Safety
@ Insalling and creating your first Typescript Program

Intro to Typescript
+ A strongly typed Programminf Language
+ Created and maintained by Microsoft
+ Superset of JavaScript

Why Typescript
+ Compiles to JavaScript
+ Keeps your code ecergreen.
+ Supported by all major libraries and frameworks

Type Safety 
+ Keep your application free from Type Errors.
+ Languages Like C#, Java are example of type safe Languages.
+ Keeps your JS code free from undefined and null values.
+ In typescript types are stripped when your code is convenient to JS.

Install and Create typeScript 

-> Install node(Use Lateset version of Node js)
-> 'npm init' to create package json 
-> Install Typescript 'npm i typescript'
-> Initialize Typescript 
-> npm install -g typescript
-> 'tsc --init'

Single Page Application (SPA)
? What is SPA?
? How angular helps?

+ SPA stands for Single Page Application (SPA)
+ You can use modern frameworks like Angular ,React ,Vue to create SPA
+ SPA does not make requests to server for every URL Requests.

++++AGENDA++++

> Data Types
> Type Interfaces
> Union and intersection Types
> Generics
> Literal Types

=> Data Types
+ string  + number  + boolean  + array  + enum 
+ tuple   + any     + void     +never


++++Functions++++

> Agenda
@ Different ways to write functions
@ Generic Functions
@ Optional Parameters
@ Required Parameters
@ Rest Parameters


______Classes_______

+++++++Agenda++++++
@ Intro to Classes 
@ Creating Classes 
@ Class Properties and Constructors
@ Class Methods
@ Creating Instance of Class
@ Member Visibility
@ Static Members

______Interfaces_______

@ Create Interfaces
@ Using Interfaces as Types
@ Implemeting Interfaces
@ Extending Interfaces
@ Optional Properties
@ Objective Destructuring 
@ Array DDEstructuring

_______Decorators________

@ Intro to decorators
@ Class Decorators
@ Method Decorators


<2nd>
<= OctAcademy(0 to Hero Angular) was provided by Mr.Hasika =>

> npm i -g @angular/cli
> ng new <project_name>
+> To change port no > ng serve -port 4300
> ng generate component <component_name> How to create a component(CLI) 

>>> Data Binding <<<
>>> Input Decorator(To pass data from parent to child component) <<<


>>> Output Decorator <<<
+ Shere data between child components to parent component
1) Child to parent component via @ViewChild Decorator
2) Child to parent when there is Event,Using the @Output Decorator and Event Emittor. 

# HERE I LEARN RELATIONSHIP BETWEEN PARENT AND CHILD COMPONENTS
# AND SHARE DATA AMONG THEM 

>>> Display Data & Event Handling <<<
You will learn,
> Angular data binding methods.
> Angular two-way data binding.
> How to handle events in angular.  


+++ Angular String Interpolation +++
* String interpolation used to show dynamic data inside the view (HTML PAGE).
* Image handling (Prprerty binding)

< Angular Class Binding >
< Angular Style Binding >
< Angular Envent Binding >
< Angular Event Filtering >
< Angular Template Variable >
< Angular Two Way Data Binding >


< One Way vs Two Way >
One way binding-> We cannot change data when change in input field,

# String Interpolation - {{title}}
# Property Binding - [src]
# Class Binding- [class.text-red]
# Style Binding - [style.backgroundColor]

Two way data binding-> We can change data when change in input field
# Two-way Binding -[(ngModel)]

********<TASK OF TWO WAY DATA BINDING>*******

+++++++++ End Display Data & Handling Events ++++++

__________________Angular Directives _______________

@ What is Angular Directives and how to use 
@ Types of Angular directives
@ About * ngIf directive * ngTemplate Directive 
        * ngSwitchCase   * ngFor Directives
@ Learn about ngClass & ngStyle Directives
@ Learn about difference of Structural and Attribute Directive

1)  What is Angular Directive
# An angular directive is special type oftechnology that can manipulate the DOM object,(Document Object Model)

# Directives can do adding HTML elements removing HTML elements from DOM Dinamically.

# Directives are component without a view

# Angular components are Directives,With a view.


___Types Of Directives___
1) Component Directives   -> With a template view. 
2) Structural Directives  -> Can add or remove the DOM Layout  
3) Attribute Directives   -> can change appearence of behavior of an element
                             ,component or another directive.
4) Custom Directives      -> which can create our custom directive from
                             scratch                        


^^ ngFor Directive ^^

1) We use ngFor Directive to render an Array inside the view.
2) ngFor Directive is a Structural Directive.
3) with ngFor Directive we can manipulate the DOM.

> Fetch Object Array( Using ngFor )
> Change Detection
> Usage Of Array Index

^^ ngIf Directive ^^
According to the given condition *ngIf detective automatically remove elements from the DOM.

^^ ng-template ^^ (3.06)

^^ NgSwitchCase ^^ (3.10)

^^ NgStyle ^^ (3.17)

^^ NgClass ^^ (3.22)


---------Structural Vs Attribute Directives----------

Angular Directive types-
* Component Directive
* Structural Directive
* Attribute Directive
* Custom Directive

Structural Directive=>
1) Responsible for the HTML Layout
2) Shape or Reshape the DOM structure by adding and removing HTML element.
3) Can Identify with leading * symbol
4) Types-: #) *ngFor #) *ngIf #) *ngSwitchCase

Attribute Directive>
1) Change the appearence or the behavior of a DOM Element.
2) Attribute Directives- 
                        * ngStyle
                        * ngClass

Structural=> we can manipulate the DOM by adding and removing HTML Elements to the DOM
Attribute => we can only change the appearence of the DOM

<<<<<<<<<<<<<<<<<<<<<< TASK 2  >>>>>>>>>>>>>>>>>>>>

______________Angular Pipes____________ (03.43)
1) What is Angular Pipes and how to use it.
2) What are the inbuilt Pipes in Angular.
3) How to pass parameters to an Angular Pipe.
4) How to create a custom Pipe from Scretch.

1) What is Angular Pipes 

Pipes are used to transforming data into a particular format when we only need that data transformed 'in' a template, or the HTML view.

___________Inbuilt Pipes________
1) Uppercase Pipe
2) Lowercase Pipe
3) Decimal/Number Pipe (03.48)
4) Currency Pipe (03.51)(currency type in every countries)
5) Date Pipe (03.55) (refer angular datePipe)
6) JSON pipe (03.57)
7) Precent Pipe (03.59)
8) Slice Pipe (4.00)

*) Custom Pipe (4.2)
Custome pipe generate using CLI (4.11)

=> ng generate pipe <direction-folder>/<pipeName>

Custom Pipe with arguement

____________Angular Services______(4.17)
1. What is Angular Services & How to use it?
2. How to create Angular service from scratch?
3. How to Generate Angular services using Angular CLI?
4. What is Dependency Injection & how to use it?
5. What is data modeling and Angular Interfaces?


What is Angular Services & How to use it? (04.17)

Simply we use angular services, to share data and common methods among components wheather there is relationship between components or not.

How to create an angular service manually.(4.20)

< Angular Dependancy Injection >

< DI Provides & injectable Decorator >

=> How  to Generate Angular Services using angular CLI (4.35)
=> ng generate service <filepath>/<serviceName>
 

_________Angular Interface_________(04.41)
Uses for debugging purposes before execute the program.

-> ng g i <pathfolder>/post



++++++++++++ Angular Template Deiven Forms +++++++++++++++++++

1) What are the form types of Angular?
2) What is the template driven form and how to use that?
3) How to validate forms user interface?
4) How to control Enable/ disable state of a button ? 


_____ Form types in Angular _______
1) Template Driven Form -> By using Angular Directive(NgForm).
2) Reactive Form        -> Hand Code from Scratch.

________ Angular Template Driven Form_______

< Ctreate bootstrap form >

ngForm Explained (5.0)

-> Handle Form Data-:
1) formGroup Class.---------> Form Tags
2) formControl Class.-------> Input Fields

 + ngModel & formControl Class

+++++++ Styling Invalid Inputs ++++++++++++


---------- Angular Form Validation Types -----
 
 Validating E mail input Field(5.22)

++++++++++++++++ Angular Reactive forms ++++++++++++ (5.32)
1) What is angular reactive forms & how to use them.?
2) How to validate a Reactive form?
3) How to get data from Reactive Forms?
4) How to nest form groups?
5) Reactive form Arrays, From builders.
6) Custom form Validators?

+++++ Nested Reactive Forms +++++++

+++++ Reactive Form Arrays ++++++++(06.08)


-------Reactive Forms Builder ------------(6.18)

Custom validation 1-:


Conclutions-: What is reactive forms
              How to set up reactive form from scratch
              How to create our own custom validation.




_____________Angular Routing and Navigation____________

1) What is Angular Routing & navigation?
2) How to implement an angular routing From Scratch?
3) How to pass router parameters and query parameters?
4) What is obervable and how to use it?
5) How to get Router parameters and Query parameters?
6) How to navigate routers programmatically?

> What is routing & navigation
+ Routing is basically means navigating between pages.

> How to implement Angular routing 
* We use angular routing navigate through components.
* Router is a main building core module of an Angular Framework.

Implementation Steps____
1) Configure the Routes
2) Add router-outlet
3) Add Navigation Link Paths

____________Observable (7.20)
What is observable =>  Am observable is a sequence of data that is emitted data asynchronously or synchronosly over a time of period.

An obervable will continuously observe a set of stream data and automatically update or trackthat sequence of data whenever there is something changed.



********** RXJS Obervable VS JavaScript Functions ********(7.28)

In traditional JS functions return only one return statement but Observables return more than one outputs.


_________________ Asynchronous VS Synchronos Programming_____(7.30)
1) Synchronus code is executed in sequence- each statement waits for the provided statement to finish before executing.

2) Asynchronus code doesn't have to wait to excecute the previous code completely this can continue to run.

3) Mostly JavaScript work as the asynchronusly.


_______________Obervable Subscriber Vs Unsubscriber(07.34)
___________Multiple Router Parameters(07.36)
___________Query Parameter (7.40)
___________Seperate File In Angular(7.46)
____________Navigate Programmatcally(07.52)
__________Pass Query Parameters(7.55)
___________Wild Card Router(07.56)
******Alwayas Add Wil card router at the end of the router list
