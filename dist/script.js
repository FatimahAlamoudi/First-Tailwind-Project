
const menuBtn = document.querySelector('.menu-btn');
const navItems = document.querySelector('.nav-items');

menuBtn.addEventListener('click', () =>{
   if(navItems.classList.contains('hidden')){
	navItems.classList.toggle('mobile-nav-position');
   }
})

