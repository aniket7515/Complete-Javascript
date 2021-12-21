console.log("17");

document.getElementById('heading').addEventListener('click', function(e){
    console.log("You have clicked the heading");
    let variable =e.target.className;
    console.log(e.target);
    console.log(variable);
    // location.href='www.google.com';
})