$('.tdnn').click(function () {
    $("body").toggleClass('light');
    $(".moon").toggleClass('sun');
    $(".tdnn").toggleClass('day');
  });


  function changeLanguage(language) {
    var element = document.getElementById("url");
    element.value = language;
    element.innerHTML = language;
}

function showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function myFunction(x) {
    if (x.classList.toggle("change")){
        document.getElementById('navbar').style.display='flex';
        document.getElementById('navbar').style.flexDirection='column';
        document.getElementById('navbar').style.justifyContent='center';
        document.getElementById('navbar').style.top='30px';
        document.getElementById('navbar').style.height='100vh';
        document.getElementById('navbar').style.position='fixed';
        document.getElementById('navbar').style.width='100%';
        document.getElementById('navbar').style.zIndex='1000';
        document.getElementById('navbar').style.backdropFilter='10px';        
        document.getElementById('mobile').addEventListener('click',function(){
            document.getElementById('navbar').style.display='none';
              
        });
    } 
    else{
        document.getElementById('navbar').style.display='none';
        }
}
    

document.querySelectorAll('.nava').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Delay before the scroll (in milliseconds)
        const delay = 600;

        setTimeout(() => {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }, delay);
    });
});


window.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.sec');
    
    // Scroll to the section with an offset of 10vh
    sections.forEach(function(section) {
        section.style.scrollMarginTop = '8vh';
    });
});