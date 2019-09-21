var firebaseConfig = {
    apiKey: "AIzaSyBPP0cpDxUON2Zdz_mnruwsyH0QNrXNcBM",
    authDomain: "train-schedule-6d963.firebaseapp.com",
    databaseURL: "https://train-schedule-6d963.firebaseio.com",
    projectId: "train-schedule-6d963",
    storageBucket: "",
    messagingSenderId: "979148485320",
    appId: "1:979148485320:web:127d091027957c9aad2bfd"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

var database = firebase.database();
console.log(database);


$("#submit").on("click", function (event) {
    event.preventDefault();
    //console.log("I've been clicked!");
    var train = $("#name").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = $("#first-train").val().trim();
    var frequency = $("#frequency").val().trim();

    console.log(train);
    console.log(destination);
    console.log(firstTrain);
    console.log(frequency);

    database.ref().push({
        Train: train,
        Destination: destination,
        FirstTrain: firstTrain,
        Frequency: frequency
    })

});
database.ref().on("child_added", function (snapshot) {
    var train = snapshot.val().Train;
    var destination = snapshot.val().Destination;
    var firstTrain = snapshot.val().FirstTrain;
    var frequency = snapshot.val().Frequency;

    // var frequency = $("#frequency");
    // var firstTrain = $("#first-train");

    // var firstTimeConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
    // console.log(firstTimeConverted);

    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    var row = $("<tr>");

    row.append(
        $("<td>").text(train),
        $("<td>").text(destination),
        $("<td>").text(firstTrain),
        $("<td>").text(frequency));
        $("tbody").append(row);
    })