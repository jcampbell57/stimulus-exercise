# README

Project info:
* Ruby version 3.2.2
* Link to project description: https://www.theodinproject.com/lessons/ruby-on-rails-stimulus

This app makes use of:
* Rails 7
* Stimulus

Misc terminal setup:
* rails new stimulus-exercise --database=postgresql
* rails g stimulus toggle
* rails g controller home
* rails g stimulus input

This project could be improved with:
* styling

Notes:
* I had a hard time with my stimulus controllers not working. The issue was I was using public/index.html instead of a regular rails view. Once I added the home#index controller/view, the issue was resolved. 