// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

;("use strict")

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-02-HTML/sw.js", {
    scope: "/ICS2O-Unit-5-02-HTML/",
  })
}

/**
 * This function compares slider with random number.
 */
function myButtonClicked() {
  var day = document.getElementById("day").value
  var age = document.getElementById("age").value

  // process
  if (( day == "tuesday" || day == "thursday") || (age > 12 && age < 21)) {
      document.getElementById("answer").innerHTML= "You're eligible for student pricing"
  } else {
      document.getElementById("answer").innerHTML= "You must pay regular price"
  }
}