Instructions

Warm up
<Angular>localhost:4200
FrontEnd Framework -> Angular8
Enable bootstrap globally for this project 
npm install bootstrap -> "version": "5.0.0"
install package ngBootstrap -> ng add @ng-bootstrap/ng-bootstrap
Angular.json -> First Instance of Styles (Line 33) -> "node_modules/bootstrap/dist/css/bootstrap.min.css"

<NodeJS>localhost:3000
For this project, I implemented a connection between the FrontEnd Angular and DB with NodeJS
The most important reason was the power of Express Framework embedded.
For the NODE_MODULES file, we need to run: 'npm install express body-parser cors mysql'

<DB>
The SQL file is available under the NodeJS folder: drugstore_drugtable.sql to import locally and run the entire application.

<Improvements - In process>
Handle images upload in for the Dashboard.
Implement the DELETE and EDIT function.
Dive deeply into Angular technical researches, to extract all the resources from this tool.

<How to Execute the application>
After download the files drugStore and NodeJS from git, install into each folder the following dependencies:

Angular ->
npm install bootstrap -> "version": "5.0.0"
install package ngBootstrap -> ng add @ng-bootstrap/ng-bootstrap

NodeJS -> Dependencies: Express, Body-Parser, Cors, and MySQL
npm install express body-parser cors mysql

DB-> Import the SQL file available under the NodeJS folder and set the DB connection user and password. There are some samples of medication registered that might be retrieved when the Angular application will be loaded.

Run simultaneously both, Angular and NodeJS server on port 4200 and 3000 respectively and start monitoring the data flow between front and back end through terminal.

On the main page we have a Dashboard when we can see the registered medicines with pictures to make it easy to identify them, and also a NEW DRUG button to allow the user to add the medicines. At the navbar, we can find a link LIST to have a view of the required information after registration, Generic Name, Brand Name, Strength and Dosage Form through the table approach.
The registration is done through a pop-up form with the first field 'name' mandatory to enable the button ADD.

Thalis Vicente

