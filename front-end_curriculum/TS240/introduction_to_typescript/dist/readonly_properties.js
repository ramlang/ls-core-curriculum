"use strict";
// Create a function movePoint that takes a Point object, a dx value, and a dy value, and returns a new Point object with dx and dy added to its x and y coordinates.
// For example, calling movePoint({x: 3, y: 4}, 2, 2) should return a Point object with x as 5 and y as 6.
function movePoint(point, dx, dy) {
    const newPoint = {
        x: point.x + dx,
        y: point.y + dy,
    };
    return newPoint;
}
