
function mostrarSide() {
    console.log('Hola');
    var foo = document.getElementById('sidebar-wrapper');
    if(foo.style.display == '' || foo.style.display == 'none'){
         foo.style.display = 'block';
         
    console.log(foo);
    } else {
        console.log(foo);
        foo.style.display = 'none';
    }
}

function abrirProfile(){
    console.log('Hola');
    var foo = document.getElementById('profiles');
    if(foo.style.display == '' || foo.style.display == 'none'){
        foo.style.display = 'block';
    } else {
        foo.style.display = 'none';
    }
}
const tabs = ["asignaciones", "clase", "participantes"];
showTab = (nombreTab, idTab) => {
  tabs.forEach(tab => {
    document.getElementById(tab).style.display="none";
    document.getElementById('tab-' + tab).classList.remove("active");
  });

  document.getElementById(nombreTab).style.display="block";
  document.getElementById('tab-' + nombreTab).classList.add("active");
}

showClass = (clase) => {
  console.log("Mostrar clase", clase);

  tabs.forEach(tab => {
    document.getElementById(tab).style.display="none";
  });
  document.getElementById('clases').style.display="none";
  document.getElementById('tabs').style.display="block";
  document.getElementById('clase').style.display="block";
}

showClasses = () => {
  document.getElementById('clases').style.display="block";
  document.getElementById('tabs').style.display="none";
  document.getElementById('clase').style.display="none";
}

