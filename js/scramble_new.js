// scramble.js
// Simple email scrambler using character shuffling

function scrambledString(
  tag,
  objName,
  initScrambledString,
  initScrambledStringIndices,
  displayText,
) {
  this.tag = tag;
  this.objName = objName;
  this.originalString = initScrambledString;
  this.displayText = displayText;
  this.charPositions = [];
  this.currentString = "";
  this.step = 0;
  this.maxSteps = 0;
  this.interval = null;

  var self = this;

  // Bind methods to this object
  this.scrambleString = function () {
    var n = self.originalString.length;
    self.charPositions = [];
    for (var i = 0; i < n; i++) {
      self.charPositions.push(i);
    }

    // Fisher-Yates shuffle
    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = self.charPositions[i];
      self.charPositions[i] = self.charPositions[j];
      self.charPositions[j] = temp;
    }

    // Build scrambled string
    self.currentString = "";
    for (var i = 0; i < n; i++) {
      self.currentString += self.originalString[self.charPositions[i]];
    }
  };

  this.startUnscrambling = function () {
    self.step = 0;
    self.maxSteps = self.originalString.length * 3;
    self.interval = setInterval(function () {
      self.unscrambleStep();
    }, 20);
  };

  this.unscrambleStep = function () {
    self.step++;

    if (self.step < self.maxSteps) {
      // Find a pair that's out of order and swap
      for (var i = 0; i < self.charPositions.length - 1; i++) {
        if (self.charPositions[i] > self.charPositions[i + 1]) {
          // Swap in positions array
          var temp = self.charPositions[i];
          self.charPositions[i] = self.charPositions[i + 1];
          self.charPositions[i + 1] = temp;

          // Swap in string
          self.currentString =
            self.currentString.substring(0, i) +
            self.currentString.substring(i + 1, i + 2) +
            self.currentString.substring(i, i + 1) +
            self.currentString.substring(i + 2);

          self.tag.innerHTML = self.currentString;
          return;
        }
      }
    } else {
      // Done unscrambling
      clearInterval(self.interval);
      self.currentString = self.originalString;
      self.tag.innerHTML = self.currentString;
      if (self.tag.parentElement) {
        self.tag.parentElement.href = "mailto:" + self.originalString;
      }
    }
  };

  // Initialize with random positions
  this.scrambleString();

  window[this.objName] = this;

  // Display the initial display text
  this.tag.innerHTML =
    '<span onClick="' +
    this.objName +
    '.startUnscrambling();return false;">' +
    this.displayText +
    "</span>";
}
