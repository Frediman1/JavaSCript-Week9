var run = exercise('running');
console.log(run()); // prints "Today's exercise: running"
var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming"

function exercise(workout) {
    function doExercise() {
        return `Today's exercise : ${workout}`
    }
    return doExercise;
    // return (`Today's exercise : ${workout}`)
}
var run = exercise('running')
console.log(run())
var swim = exercise('swimming')
console.log(swim())
