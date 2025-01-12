// On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.

// You can move according to these rules:

// In 1 second, you can either:
// move vertically by one unit, move horizontally by one unit, or  move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
// You have to visit the points in the same order as they appear in the array. You are allowed to pass through points that appear later in the order, but these do not count as visits.

// Approach: The key idea here is that the quickest way to traverse is going to be diagonally. How far you travel diagonally depends on the max value you are moving horizontally or vertically. For example to go from [1,1] to [3,4] we need to travel 2 horizontally and 3 vertically, so the min steps we need to take is the max of the horizontal and vertical. Use this approach and shift off coordinates from the points array and compare the distance needed to travel between pairs.

const minTimeToVisitAllPoints = (points) => {
  let res = 0;
  let [x1, y1] = points.shift(); // Get the first point

  while (points.length > 0) {
    // Check if there are still points to visit
    let [x2, y2] = points.shift(); // Get the next point
    res += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)); // Add the maximum of the x and y distance
    x1 = x2; // Update x1 to the new point
    y1 = y2; // Update y1 to the new point
  }

  return res;
};

// BigO
// Time Complexity: O(n) - Because we iterate through all the coordinates in points.
// Space Complexity: O(1) - Because we only use variables.
