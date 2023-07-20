import './style.css';
// import Icon from './icon.jpg';

const servicesContainer = document.getElementById('servicesContainer')
servicesContainer.classList.add('hidden')

const services = document.getElementById('services')
services.addEventListener('mouseover', ()=> {
    servicesContainer.classList.toggle('hidden')
})


