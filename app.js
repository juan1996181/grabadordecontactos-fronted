
const p = {
    form:document.getElementById('form'),
    borrar:document.getElementById('slot')
}
const m ={
    capturaSubmit:function(){
        p.form.addEventListener('submit',m.mostrarDatos);
        
    },
    mostrarDatos:function(e){
        e.preventDefault();
        
        let nombres = document.getElementById('fullname');
        let cel = document.getElementById('phone');
        let email = document.getElementById('email');
        let tablas = document.getElementById('slot');
        let tdname = document.createElement('td');
        let tdcel = document.createElement('td');
        let tdemail = document.createElement('td');
        let boton = document.createElement('td');
        tdname.innerText = nombres.value;
        tdcel.innerText = cel.value;
        tdemail.innerText = email.value;
        let botones = '';
        botones = `     
            <input type="button" value="Editar" class="editar" >
            <input type="button" value="Borrar" class="eliminar"> 
                        `;
        boton.classList= "botones";
        boton.innerHTML=botones;
        let tr = document.createElement('tr');
        tr.appendChild(tdname);
        tr.appendChild(tdcel);
        tr.appendChild(tdemail)
        tr.appendChild(boton);        
        tablas.appendChild(tr); 
        nombres.addEventListener('focus',function(){
            nombres.value="";
        })
        cel.addEventListener('focus',function(){
            cel.value="";
        })
        email.addEventListener('focus',function(){
            email.value="";
        })      
    },
    eliminartexto:function(){
        p.borrar.addEventListener('click',m.borrarDato);
    },
    borrarDato:function(e){
        
        if(e.target.className == 'eliminar') {
        e.target.parentElement.parentElement.remove()
        }
    }

   
}
m.capturaSubmit();
m.eliminartexto();
