    const menu = document.querySelector('.menu')
    const bar = document.querySelector('.nav-bar');
      bar.addEventListener('click', () => {
      bar.classList.toggle('active');
      menu.classList.toggle('active');
  });




let darkMode = localStorage.getItem('darkMode') === 'enabled';

function toggleDarkMode() {
    darkMode = !darkMode;
    updateDarkMode();
}


function updateDarkMode() {
    const body = document.querySelector('body');
    body.style.backgroundColor = darkMode ? '#242424' : '#dfe9f5';
    
    const mainEL = document.getElementById('main');
    mainEL.style.background = darkMode ? '#242424' : '#b8cae0'

    const modeText = document.querySelector('.mode-text');
    modeText.textContent = darkMode ? 'Lightmode' : 'Darkmode'

    const mainTopEl = document.getElementById('main-top');
    mainTopEl.style.backgroundColor = darkMode ? '#242424' :'';
    mainTopEl.style.color = darkMode ? '#fff' : '';

    const barEL = document.getElementById('bar');
    barEL.style.color = darkMode ? '#fff' : ''

    const cardEl = document.getElementById('card1');
    cardEl.style.backgroundColor = darkMode ? '#fafafa' : '#fff';
    cardEl.style.boxShadow = darkMode ? '0 10px 10px rgba(0, 0, 0, .5)' :''

    const cardEle = document.getElementById('card2');
    cardEle.style.backgroundColor = darkMode ? '#fafafa' : '#fff';
    cardEle.style.boxShadow = darkMode ? '0 7px 10px rgba(0, 0, 0, .5)' :''


    const carde = document.getElementById('card3');
    carde.style.backgroundColor = darkMode ? '#fafafa' : '#fff';
    carde.style.boxShadow = darkMode ? '0 7px 10px rgba(0, 0, 0, .5)' :''


    const card = document.getElementById('card4');
    card.style.backgroundColor = darkMode ? '#fafafa' : '#fff';
    card.style.boxShadow = darkMode ? '0 7px 10px rgba(0, 0, 0, .5)' :''

    const courseTextEl = document.getElementById('course-text');
    courseTextEl.style.color = darkMode ? '#fff' : 'rgb(85, 83, 83)';

    const courseBoxEl = document.getElementById('course-box');
    courseBoxEl.style.backgroundColor = darkMode ? '#fafafa' : '#fff';

    const menuEl = document.getElementById('menu');
    menuEl.style.backgroundColor = darkMode ? '#242424' : '';
    


    const listMode = document.querySelectorAll('.li-color');
    listMode.forEach(list => {
        list.style.color = darkMode ? '#fff' : 'rgb(85, 83, 83)';
        
    });

    const logo = document.querySelectorAll('.logo-text');
    logo.forEach(list => {
        list.style.color = darkMode ? '#fff' : 'rgb(85, 83, 83)';
    });


    const listHover = document.querySelectorAll('.li-color');
    listHover.forEach(list => {
        list.addEventListener('mouseover', () => {
             list.style.color = darkMode ? 'rgb(85, 83, 83' : '';
        })

        list.addEventListener('mouseout', () => {
            list.style.color = darkMode ? '#fff' : '';
        })
        
    });

    

    
    localStorage.setItem('darkMode', darkMode ? 'enabled' : 'disabled');

};


const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', toggleDarkMode);

updateDarkMode();










