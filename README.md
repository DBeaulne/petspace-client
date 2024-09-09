# Petspace Client App

Petspace is a portal for users (pet-owners) to connect with sitters.
- The overaching goal of this app is to have an ai assistant help the user to find qualified sitters within
  a short distance to the user.

## Setup
1.  `$ git clone git@github.com:DBeaulne/petspace-client.git`
2.  `$ cd petspace-client`
3.  `$ npm install`
4.  Make a copy of the .env.sample file. Renane it to .env and add the variables required.
5.  `$ npm start`
6.  The app will load onto your default browser

## Limitations
  - The AI assitant is non-functioning at this time due to time constraints and a steeper than anticipated learning curve
    - The vast majority of documentation and examples utilize mongoDB and Python and the learning curve has had to include figuring out how to convert those examples into mySQL and javascript
  - The Map function is non-functioning at this time due to time lost on the AI learning curve

  - Future iterations
    - implement a search function for users to find sitters based on direct user input
      - the function will search the database:
        - first by date availability
        - then by sitter pet_types
        - sort the results by distance, nearest first
      - then the results will be sent to a map function that will add markers for all the returned results
      - the results will also be displayed below the map, in cards, to show the sitters profile-pic, name, city, hourly rate, and pet types that they care for
    
    - implement the ability for a new sitter registration
    - implement ai chat functionality to make the process easier for the users
      - this needs to include a fall-back for the times that the openAI servers are down. We want our users and sitters to still be able to function without ai
    
## Lessons Learned
  - Time management
    - there were multiple instances of time-blindness while deep into learning the openai or google maps api's
  - Excessive refactoring
    - there were many times where trying to refactor the code led to bugs and lost time
  - Lofty goals
    - the desire to deliver a fully functional app, in excess of the agreed upon deliverables, led to frustrations that inhibited progress