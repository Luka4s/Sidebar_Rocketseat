const Open = document.getElementById('#Open')
const Side = document.getElementById('#Side')
const h2 = document.querySelectorAll('h2')

const logo = document.getElementById('img')
const gridtxt = document.getElementById('gridtxt')
const pettxt = document.getElementById('pettxt')
const usertxt = document.getElementById('usertxt')
const vettxt = document.getElementById('vettxt')
const settingstxt = document.getElementById('settingstxt')
const search = document.getElementById('search')

function Assignment(){
    
    console.log('Click')
    Side.style.width = '200px'
    Side.style.backgroundColor ='#18c29c;'
    Open.style.left = '45px'
    search.style.removeProperty('visibility')
    logo.style.removeProperty('visibility')
    gridtxt.style.removeProperty('visibility')
    pettxt.style.removeProperty('visibility')
    usertxt.style.removeProperty('visibility')
    vettxt.style.removeProperty('visibility')
    settingstxt.style.removeProperty('visibility') 
}
function back_off(){
    console.log('back')
    Open.style.left = '0px'
    Side.style.width = '78px'
    Side.style.backgroundColor ='#18c29c;'
    search.style.setProperty('visibility', 'hidden')
    logo.style.setProperty('visibility','hidden')
    gridtxt.style.setProperty('visibility', 'hidden')
    pettxt.style.setProperty('visibility', 'hidden')
    usertxt.style.setProperty('visibility', 'hidden')
    vettxt.style.setProperty('visibility', 'hidden')
    settingstxt.style.setProperty('visibility', 'hidden')
}   
 
