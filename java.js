  window.onload=inicio;
            var x,alto_navegador,alto_nave,ancho_navegador,ancho_nave
            var y=-20;
            var crono=setInterval(bajar,600);
            function inicio(){
                window.onkeydown= teclado;
                window.onkeyup= teclado;
                window.onresize= actualizar;
                alto_nave=document.getElementById("nave").offsetHeight;
                ancho_nave=document.getElementById("nave").offsetWidth;
                actualizar();
                nave=document.getElementById("nave");
                x=Math.floor(Math.random()*(ancho_navegador-ancho_nave));
                nave.style.left=`${x}px`;
            }
            function actualizar(){
                ancho_navegador=window.innerWidth;
                alto_navegador=window.innerHeight;
            }
            function teclado(e){
                let codigo=e.keyCode;
                if (codigo==38){
                 
                    if(y<alto_navegador-alto_nave-10){
                       y+=13;
                        nave.style.bottom=`${y}px`;  
                    }
                }
                if(codigo==40){
                    if(y>-30){
                        y-=20;
                    nave.style.bottom=`${y}px`
                    }
                }
                
                 if(codigo==39 && y>4){
                        x+=13;
                        if(x>ancho_navegador-10){
                        x=-ancho_nave+20;
                    }
                    nave.style.left=`${x}px` 
            }
                if(codigo==37 && y>4){
                    x-=13;
                        if(x<-ancho_nave){
                        x=ancho_navegador-20;
                    }
                    nave.style.left=`${x}px`
                    }
            }
            function bajar(){
               if(y>30){
                        y-=20;
                    nave.style.bottom=`${y}px`
                    } 
            }