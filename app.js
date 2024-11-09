var typed = new Typed('#element', {
    strings: ['Erick Oktavianto.','18 Years Old.','Atma Luhur Student.'],
    typeSpeed: 100,
    backSpeed: 50,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    loop: true
    });




const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('show')
}

const button = document.getElementById('submit');
button.addEventListener('click', function(){
    alert("PESAN SUKSES DIKIRIM");
});