Welcome to Grapher.

[Click here](https://github.com/parryd4/grapher-api) to view the repository for my Rails API backend.


The app's purpose is for a user to be able to generate a chart or graph based on the CSV file they have uploaded. This will either be done directly from the CSV uploaded, or the CSV can be persisted in the back end for the user to access or manipulate the data later.


Features:
A user can upload a CSV and read all data in a table.
A user can view 2 columns of that data in a Scatter Plot

A user can upload a CSV, (optional: save it to database, grab it from database)

Main Component holds state for being logged in
DataContainer will hold state for Current Data, and existing sets.
Two children: Side bar, Body.
Side bar will have login/logout.
  Below that it will have the upload button.
  Below the upload button will be a list of existing data sets with links.

Body will display:
  Root: first visit, will display Sign Up, Log In, or text "Get Started and Upload a Data Set"
  If has Current Data, will take user to Dashboard

  Dashboard will display an input, by default "Unnamed Data Set"
    Table of the current data set, and div with options to pick which type of chart, which will render different options depending on the chart.
