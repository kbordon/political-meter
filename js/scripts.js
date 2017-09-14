

$(document).ready(function() {
  $("#formPolitics").submit(function(event){
    var conservativeTally = 0;
    var moderateTally = 0;
    var liberalTally = 0;

    var question1Answer = $("input:radio[name=question1]:checked").val();
    var question2Answer = $("input:radio[name=question2]:checked").val();
    var question3Answer = $("input:radio[name=question3]:checked").val();
    var question4Answer = $("input:radio[name=question4]:checked").val();
    var question5Answer = $("input:radio[name=question5]:checked").val();


    if (question1Answer === "conservative") {
      conservativeTally = conservativeTally + 1;
    } else if (question1Answer === "moderate") {
      moderateTally = moderateTally + 1;
    } else {
      liberalTally = liberalTally + 1;
    }

    if (question2Answer === "conservative") {
      conservativeTally = conservativeTally + 1;
    } else if (question2Answer === "moderate") {
      moderateTally = moderateTally + 1;
    } else {
      liberalTally = liberalTally + 1;
    }

    if (question3Answer === "conservative") {
      conservativeTally = conservativeTally + 1;
    } else if (question3Answer === "moderate") {
      moderateTally = moderateTally + 1;
    } else {
      liberalTally = liberalTally + 1;

    }

    if (question4Answer === "conservative") {
      conservativeTally = conservativeTally + 1;
    } else if (question4Answer === "moderate") {
      moderateTally = moderateTally + 1;
    } else {
      liberalTally = liberalTally + 1;

    }

    if (question5Answer === "conservative") {
      conservativeTally = conservativeTally + 1;
    } else if (question5Answer === "moderate") {
      moderateTally = moderateTally + 1;
    } else {
      liberalTally = liberalTally + 1;

    }

    if ( conservativeTally > moderateTally && conservativeTally > liberalTally) {
      alert("conserative.");
    } else if ( liberalTally > moderateTally && liberalTally > conservativeTally) {
      alert("liberal.");
    } else {
      alert("moderate.");
    }


    alert(conservativeTally);
    alert(moderateTally);
    alert(liberalTally);


    event.preventDefault();

  });
});
