

$(document).ready(function() {
  $("#formPolitics").submit(function(event){
    var conservativeTally = 0;
    var moderateTally = 0;
    var liberalTally = 0;

    var question1Answer = $("input:radio[name=question1]:checked").val();

    if (question1Answer === "conservative") {
      alert(typeof conservativeTally);
      conservativeTally = conservativeTally + 1;
      alert(conservativeTally);
    } else if (question1Answer === "moderate") {
      alert(typeof moderateTally);
      moderateTally = moderateTally + 1;
      alert(moderateTally);
    } else {
      alert(typeof liberalTally);
      liberalTally = liberalTally + 1;
      alert(liberalTally);
    }


    event.preventDefault();

  });
});
