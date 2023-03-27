# Varivas_project

After Downloading.

This project Version:-

Angular CLI: 15.0.0
Node: 16.16.0
Package Manager: npm 8.16.0

Note** 
Do npm install / npm install --force in Both Folder Varivas backend And Varivas Frontend


To Run THis Project in Terminal
For Nodejs : npm start / Nodemon
For Angular : ng serve -o

Thought Process***

1-we have created Angular project and Nodejs project.
2-Created MongoDb Atlas collections.
3-created Component for Movies Listing And Movies Details.
4-Created Services for Same.
5-In Services, we have created Fucntion to Fetch popular movies from Api of theMovieDb website.
6-We have created 3 Function to get Movies List,Movies Trailer,Movies Details.
7-Added All Details received from above to an Objects.
8-Now, Created Api in Nodejs to Post Movies details to MongoDb.
--Created Api to get AllMovies to show in Listing.
9-so, Now the Movies Data is published.
10-Created services in angular to get Movies Data from Nodejs Api.
11-With *ngFor we have shown Movies Listing.
--Added OnHover in movie listing.
12- For Popup model, we have Boolean to show only those movies which are clicked.
13-this boolean gets true on clicking any specific movies from listing.
--On popup model we have showned Movies information.
14-On pop Model, Clicking on "Play". it will redirect to Movie Detail.
15-For Movie Details, we have used router param. On clicking on Movie popup , we recieved Specific movies Id.
--This ID we have useded to filter and show this Movies Trailer and Other Information.
--Also Add Movie Autoplay.

 Design Choices***

1.According to a recent study, 81.9% of people use dark mode so i selected Black color instead of other color 
2.since the requriment was to Show a dashboard with movie titles I did listing
3.I almost tried to fullfied all the requirment 
4.Being a fan of marvel movies I have pick marvel movies for demo purpose.
5.I tried to keep the things very Minimal yet very Cool 
