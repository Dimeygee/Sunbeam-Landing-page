
       
    let links = document.querySelectorAll('ul li a')
    let resp_links = document.querySelectorAll('.resp_menu ul li a')
    let sections = document.querySelectorAll('section[id]')
    let header = document.querySelector('header')
    let nav = document.querySelector('nav')

 
    

    window.addEventListener('load', pageLoad)
    function pageLoad(){
        links[0].classList.add('active')
        resp_links[0].classList.add('active')
    }

    console.log(window.pageYOffset,header.offsetHeight)

    function checkWithin(){
        if(window.pageYOffset >= header.offsetTop && window.pageYOffset <= header.offsetHeight + header.offsetTop - 150){
            return true
        }
        return false
    }

  

    window.addEventListener('scroll', addActive)

    function addActive(){
        if(window.pageYOffset > header.offsetHeight - 100){
            document.querySelector('nav').classList.add('active')
        }  
        else{
            document.querySelector('nav').classList.remove('active')
        }
       if(!checkWithin()){
            links[0].classList.remove('active')
            resp_links[0].classList.remove('active')
            window.removeEventListener('load', pageLoad)
       }else{
            links[0].classList.add('active')
            resp_links[0].classList.add('active')
       }

       let scrollY = window.pageYOffset

       sections.forEach(section => {
            let sectionHeight = section.offsetHeight
            let sectionTop = section.offsetTop - 150
            let sectionId = section.getAttribute('id')

            if(scrollY  > sectionTop && scrollY <= sectionTop + sectionHeight){
                
                 
                  document.querySelector(`ul li a[href*="${sectionId}"]`).classList.add('active')
                  document.querySelector(`.resp_menu div ul li a[href*="${sectionId}"]`).classList.add('active')
              }else{
                  document.querySelector(`ul li a[href*="${sectionId}"]`).classList.remove('active')
                  document.querySelector(`.resp_menu div ul li a[href*="${sectionId}"]`).classList.remove('active')
              }

        })

    }

  
   function toggleMenu() {
                    const menus = document.querySelectorAll('.hamburger');
                    const sm_menu = document.querySelector('.resp_menu')
                    menus.forEach(menu => {
                        menu.classList.toggle('active');
                    })
                    sm_menu.classList.toggle('active');
                }

     
