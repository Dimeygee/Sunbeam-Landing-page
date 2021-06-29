   function toggleMenu() {
                    const menus = document.querySelectorAll('.hamburger');
                    const sm_menu = document.querySelector('.resp_menu')
                    menus.forEach(menu => {
                        menu.classList.toggle('active');
                    })
                    sm_menu.classList.toggle('active');
                }

        
        let links = document.querySelectorAll('ul li a')
        let resp_links = document.querySelectorAll('.resp_menu ul li a')
        let sections = document.querySelectorAll('section[id]')

        let hH = document.querySelector('header').offsetHeight

        links[0].classList.add('active')
        resp_links[0].classList.add('active')

        links.forEach(link => {
            link.addEventListener('click', addActive)
        })
        function addActive(e){
            links.forEach(link => {
                link.classList.remove('active')
            })
            e.target.classList.add('active')

        }      

         window.addEventListener('scroll', addActiveOnScroll)

        function addActiveOnScroll(){
         if(window.pageYOffset > hH - 100){
                document.querySelector('nav').classList.add('active')
            }  
            else{
                document.querySelector('nav').classList.remove('active')
            }
           
          let scrollY = window.pageYOffset

            sections.forEach(section => {
                let sectionHeight = section.offsetHeight
                let sectionTop = section.offsetTop - 150
                let sectionId = section.getAttribute('id')

                if(scrollY  > sectionTop && scrollY <= sectionTop + sectionHeight){
                  /*  links.forEach(link => {
                        
                        if(scrollY > hH){
                            link.classList.remove('active')
                        }else{
                            link.classList.add('active')
                        }
                    })*/

                    if(scrollY > hH){
                        links[0].classList.remove('active')
                        resp_links[0].classList.remove('active')
                    }else{
                        links[0].classList.add('active')
                        resp_links[0].classList.add('active')
                    }

                    resp_links.forEach(link => {
                        link.classList.remove('active')
                    })
                    
                   
                    document.querySelector(`ul li a[href*="${sectionId}"]`).classList.add('active')
                    document.querySelector(`.resp_menu div ul li a[href*="${sectionId}"]`).classList.add('active')
                }else{
                    document.querySelector(`ul li a[href*="${sectionId}"]`).classList.remove('active')
                    document.querySelector(`.resp_menu div ul li a[href*="${sectionId}"]`).classList.remove('active')
                }
            })

            
        }
