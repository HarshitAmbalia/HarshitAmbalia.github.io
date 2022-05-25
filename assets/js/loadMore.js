function showProject() {
    var project_dots = document.getElementById("project-dots");
    var project_moreText = document.getElementById("project-more");
    var project_btnText = document.getElementById("project-myBtn");
    console.log(project_dots.style.display)
    if (project_dots.style.display === "none") {
      project_dots.style.display = "inline";
      project_btnText.innerHTML = "Show more";
      project_moreText.style.display = "none";
    }
    else{
      project_dots.style.display = "none";
      project_btnText.innerHTML = "Show less";
      project_moreText.style.display = "inline";
    }
  }
  
function loadMoreButton() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  } 
