## [Monthly Mess](https://projects.myankpraksh.me/monthlymess/)

## About
This is my submission for Neighborhood Hacks 2.

## Inspiration
Being a student myself, I've faced a really hard time searching for an authentic mess who meets my diet needs. Being tried a few yet never felt fulfilled because it is really next to impossible to find a perfect match. Not to talk about finding one in a new city.
So this is how I got the idea to build a simple application, which will help students or anyone living far away from their home to get the food as per their requirements.
It's like a mini search engine as well as a feedback database, I hope this will help others like me.

## Demo
This project is live [here](https://projects.myankpraksh.me/monthlymess/) and [here](https://monthlymess.compare)
If links are down, please raise an issue to let me know and I will fix it ASAP.

For demostration puposes I have registered few dummy accounts, they have the following pincodes
 * 110001
 * 110011
 * 110022
 * 110033
 * 110044
 * 110048
 * 122001
 * 122002
 * 302018
 * 400011
 * 400014
 * 400021
 * 400023
 * 400050
 * 400053
 * 400080
 * 400101
 * 412207
 * 500032
 * 600011
 * 825403
 
 To get a result while searching use one of these pincodes. Also feel free to register new accounts and play around!

## Requirements
* This repo is the frontend, to run this you would need the [backend](https://github.com/myankpraksh/monthly-mess-back)
* Make sure the backend is live at `http://localhost:3000`
* If you are running backend at some other location, update its address in following components
  * `CardContainer`
  * `Menu`
  * `MessProfile`
  * `ProfileEdit`
  * `RateButton`
  * `Register`
  * `SignIn`

## How to run it?
### Step 1
Clone this repo
### Step 2
### Run `npm install`
### Step 3
### Run `npm start`

## Features

### For users
1. Users can search for messes in their areas by using their pincode. They can simply enter the pincode and hit the "Find Mess" button.
2. Users can also rate any Mess, on a scale of 1 to 5.

### For Mess Owners
1. They can list their Mess on this platform by creating an account using the sign up form in sign up page.
2. They can view, update or delete their profile by signing in.

## App
This frontend is a ReactJS based SPA. It offers basic input validations. It communicates with its backend using API.
