function validarUsuario()
{
	var passwdOperaciones = document.getElementById('tPasswordOperaciones'),
		passwdVerificador = document.getElementById('tPasswordVerificador'),
		btnGuardar = document.getElementById('btnGuardar'),
		btnValidar = document.getElementById('btnValidar');
	
	if(passwdOperaciones.value == passwdVerificador.value)
		{
			btnGuardar.disabled = false;
            passwdOperaciones.style.display = 'none';
            btnValidar.style.display = 'none';
		}
}

function fnRedireccionar(seccion)
{
	window.location = seccion;
}

function cerrarSesion()
{
	if(confirm("Realmente deseas salir?"))
		{
			window.location="/logout/";
		}
}

function activarValidacion()
{
    document.getElementById('tPasswordOperaciones').style.display = 'inline';
    
    document.getElementById('tPasswordOperaciones').focus();
}

function consultarFecha()
{
	var formulario = document.getElementById('datos');
    
			formulario.submit();
	
}



function consultarDetalle(codigo)
      {
          document.getElementById('eCodEvento').value=codigo;
          
          var obj = $('#consDetalle').serializeJSON();
          var jsonString = JSON.stringify(obj);
          
           $('#resDetalle').modal('show'); 
          
          $.ajax({
              type: "POST",
              url: "/cla/cons-deta.php",
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  
                  
                 
                  document.getElementById('detalleEvento').innerHTML = data.detalle;
              },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });    
          
      }

      
      function cargarTransporte(codigo)
      {
          document.getElementById('eCodEvento').value=codigo;
          document.getElementById('eCodEventoCarga').value=codigo;
          
          document.getElementById('eCodCamioneta').value="";
          
          var obj = $('#consDetalle').serializeJSON();
          var jsonString = JSON.stringify(obj);
          
           $('#detCarga').modal('show'); 
          
          $.ajax({
              type: "POST",
              url: "/cla/deta-reg.php",
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  
                  
                 
                  document.getElementById('detalleCarga').innerHTML = data.detalle;
              },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });
             
          
      }
    
      function nvaTran()
      {
          var obj = $('#nvaTran').serializeJSON();
          var jsonString = JSON.stringify(obj);
          
          $.ajax({
              type: "POST",
              url: "/cla/nva-tran.php",
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  if(data.exito==1)
                  {
                      $('#resExito').modal('show');
                      setTimeout(function(){ $('#resExito').modal('hide'); }, 3000);
                  }
                  else
                      {
                          var mensaje="";
                          for(var i=0;i<data.errores.length;i++)
                     {
                         mensaje += "-"+data.errores[i]+"\n";
                     }
                          alert("Error al procesar la solicitud.\n<-Valide la siguiente informacion->\n\n"+mensaje);
                         
                      }
              },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });
          
      }
            
      function nvaOper()
      {
          var obj = $('#nvaOperador').serializeJSON();
          var jsonString = JSON.stringify(obj);
          
          $.ajax({
              type: "POST",
              url: "/cla/nva-oper.php",
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  if(data.exito==1)
                  {
                      $('#resExito').modal('show');
                      setTimeout(function(){ $('#resExito').modal('hide'); }, 3000);
                  }
                  else
                      {
                          var mensaje="";
                          for(var i=0;i<data.errores.length;i++)
                     {
                         mensaje += "-"+data.errores[i]+"\n";
                     }
                          alert("Error al procesar la solicitud.\n<-Valide la siguiente informacion->\n\n"+mensaje);
                         
                      }
              },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });
          
      }

/*Asignaciones*/
      function asignarParametro(codigo,nombre)
      {
          document.getElementById('eCodCliente').value = codigo;
          document.getElementById('tNombreCliente').value = nombre;
          document.getElementById('tNombreCliente').style.display = 'inline';
          document.getElementById('asignarCliente').style.display = 'inline';
          document.getElementById('cot1').style.display = 'inline';
          document.getElementById('cot2').style.display = 'inline';
          document.getElementById('cot3').style.display = 'inline';
          var tblClientes = document.getElementById('mostrarTabla');
          if(tblClientes)
          {
          tblClientes.style.display='none';
          }
      }
      
      function verMisClientes()
      {
          $('#misClientes').modal({
                show: 'false'
            });
      }
      
      function agregarTransaccion(codigo)
      {
          document.getElementById('eCodEventoTransaccion').value = codigo;
      }
            
      function nuevaTransaccion(codigo)
      {
          document.getElementById('eCodEventoTransaccion').value = codigo;
          $('#myModal').modal('show');
      }
      
      function agregarOperador(codigo)
      {
          document.getElementById('eCodEventoOperador').value = codigo;
      }
            
    function asignarFecha(fecha,etiqueta)
      {
          document.getElementById('fhFechaConsulta').value=fecha;
          document.getElementById('tFechaConsulta').innerHTML = '<br><h2>'+etiqueta+'</h2>';
          consultarFecha();
      }
            
    function cambiarFechaEvento(mes,anio)
      {
          document.getElementById('nvaFecha').value=mes+'-'+anio;
          
          var obj = $('#datos').serializeJSON();
          var jsonString = JSON.stringify(obj);
          
          $.ajax({
              type: "POST",
              url: "/inc/cal-cot.php",
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  document.getElementById('calendario').innerHTML = data.calendario;
              },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });
          
      }
            
    function asignarFechaEvento(fecha,etiqueta,codigo)
      {
          document.getElementById('fhFechaEvento').value=fecha;
          document.getElementById('tFechaConsulta').innerHTML = '<br><h2>'+etiqueta+'</h2>';
      }
            
    function validarCarga()
      {
          var cmbTotal = document.querySelectorAll("[id^=eCodInventario]"),
              eCodCamioneta = document.getElementById('eCodCamioneta'),
              clickeado = 0;
          
          cmbTotal.forEach(function(nodo){
            if(nodo.checked==true)
                { clickeado++;}
        });
          
          if(clickeado==cmbTotal.length && eCodCamioneta.value>0)
              { document.getElementById('guardarCarga').style.display = 'inline'; }
          else
              { document.getElementById('guardarCarga').style.display = 'none'; }
      }
            
    function registrarCarga()
        {
            $('#detCarga').modal('hide');
            
            var obj = $('#carga').serializeJSON();
          var jsonString = JSON.stringify(obj);
          
          $.ajax({
              type: "POST",
              url: "/cla/reg-carga-eve.php",
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  if(data.exito==1)
                  {
                      
                      $('#resExito').modal('show');
                      setTimeout(function(){ $('#resExito').modal('hide'); consultarFecha(); }, 3000);
                      
                  }
                  else
                      {
                          $('#detCarga').modal('show');
                          var mensaje="";
                          for(var i=0;i<data.errores.length;i++)
                     {
                         mensaje += "-"+data.errores[i]+"\n";
                     }
                          alert("Error al procesar la solicitud.\n<-Valide la siguiente informacion->\n\n"+mensaje);
                         
                      }
              },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });    
        }
        
         function buscarSubclasificacion()
        {
          var obj = $('#datos').serializeJSON();
          var jsonString = JSON.stringify(obj);
          
          $.ajax({
              type: "POST",
              url: "/que/buscar-subclasificaciones.php",
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  document.getElementById('eCodSubclasificacion').innerHTML = data.valores;
              },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });    
        }

//eliminaciones
function deleteRow(rowid,tabla)  {   
    var row = document.getElementById(rowid);
    row.parentNode.removeChild(row);
        
        if(tabla=="extras")
            {
               var x = document.getElementById("extras").rows.length;
                if(x<2)
                    {
                        agregarFilaExtra(0);
                    }
            }
        if(tabla=="clientes")
            {
               var x = document.getElementById("clientes").rows.length;
                if(x<2)
                    {
                        agregarFilaCliente(0);
                    }
            }
        if(tabla=="supervisores")
            {
               var x = document.getElementById("supervisores").rows.length;
                if(x<2)
                    {
                        agregarFilaSupervisor(0);
                    }
            }
        if(tabla=="promotores")
            {
               var x = document.getElementById("promotores").rows.length;
                if(x<2)
                    {
                        agregarFilaPromotor(0,0);
                    }
            }
        if(tabla=="productos")
            {
               var x = document.getElementById("productos").rows.length;
                if(x<2)
                    {
                        agregarFilaProducto(0);
                    }
            }
        if(tabla=="presentaciones")
            {
               var x = document.getElementById("presentaciones").rows.length;
                if(x<2)
                    {
                        agregarFilaPresentacion(0,0);
                    }
            }
       
}


// para cotizaciones
function validarPiezas(prefijo)
{
    var eMaxPiezas  =   document.getElementById(prefijo+'-eMaxPiezas'),
        ePiezas     =   document.getElementById(prefijo+'-ePiezas');
    
    if(parseInt(ePiezas.value)>parseInt(eMaxPiezas.value))
        { 
            alert("El máximo permitido es de "+eMaxPiezas.value+" unidades"); 
            ePiezas.value="";
        }
}

function validarExtra(indice)
    {
        var tDescripcion    =   document.getElementById('extra'+indice+'-tDescripcion'),
            dImporte        =   document.getElementById('extra'+indice+'-dImporte'),
            nIndice         =   parseInt(indice)+1;
        
        if(tDescripcion.value && dImporte.value)
            {
                agregarFilaExtra(nIndice);    
            }
    }
    
function agregarFilaExtra(indice)
    {
        var x = document.getElementById("extras").rows.length;
        
        var tExtra = document.getElementById('extra'+indice+'-tDescripcion');
        if(typeof tExtra != "undefined")  
        {
           
    var table = document.getElementById("extras");
    var row = table.insertRow(x);
    row.id="ext"+(indice);
    row.innerHTML = '<td><i class="far fa-trash-alt" onclick="deleteRow(\'ext'+indice+'\',\'extras\')"></i></td>';
    row.innerHTML += '<td><input type="checkbox" id="extra'+indice+'-bSuma" name="extra['+indice+'][bSuma]" value="1" onclick="calcular();"></td><td><input type="text" class="form-control" id="extra'+indice+'-tDescripcion" name="extra['+indice+'][tDescripcion]" onkeyup="validarExtra('+indice+')"></td>';
    row.innerHTML += '<td><input type="text" class="form-control" id="extra'+indice+'-dImporte" name="extra['+indice+'][dImporte]" onkeyup="validarExtra('+indice+')"></td>';
        }
        
    calcular();
        
    }

//tienda

function validarTienda(indice)
    {
        var eCodTienda    =   document.getElementById('eCodTienda'+indice),
            nIndice         =   parseInt(indice)+1;
        
        if(eCodTienda.value)
            {
                agregarFilaTienda(nIndice);    
            }
    }
    
function agregarFilaTienda(indice)
    {
        var x = document.getElementById("tiendas").rows.length;
        
        
        var eCodTienda = document.getElementById('eCodTienda'+indice);
        if(eCodTienda)
            {}
        else
        {
           
    var table = document.getElementById("tiendas");
    var row = table.insertRow(x);
    row.id="tie"+(indice);
    row.innerHTML = '<td><i class="far fa-trash-alt" onclick="deleteRow(\'tie'+indice+'\',\'tiendas\')"></i></td>';
    row.innerHTML += '<td><input type="hidden" id="eCodTienda'+indice+'" name="tiendas['+indice+'][eCodTienda]"><input type="text" class="form-control" id="tTienda'+indice+'" name="tiendas['+indice+'][tTienda]" onkeyup="agregarTienda('+indice+')" onkeypress="agregarTienda('+indice+')" onblur="validarTienda('+indice+')"></td>';
        }
        
    }

//supervisor

function validarSupervisor(indice)
    {
        var eCodSupervisor    =   document.getElementById('eCodSupervisor'+indice),
            nIndice         =   parseInt(indice)+1;
        
        if(eCodSupervisor.value)
            {
                agregarFilaSupervisor(nIndice);    
            }
    }
    
function agregarFilaSupervisor(indice)
    {
        var x = document.getElementById("supervisores").rows.length;
        
        
        var eCodSupervisor = document.getElementById('eCodSupervisor'+indice);
        if(eCodSupervisor)
            {}
        else
        {
            
            var tablapromotor = '';
            
            tablapromotor = '<table id="promotores" width="100%"><tr id="pro0"><td><i class="far fa-trash-alt" onclick="deleteRow(\'pro'+indice+'\',\'promotores\')"></i></td><td><input type="hidden" id="eCodPromotor'+indice+'-0" name="promotores['+indice+'][0][eCodPromotor]"><input type="text" class="form-control" id="tPromotor'+indice+'-0" name="promotores['+indice+'][0][tPromotor]" onkeyup="agregarPromotor('+indice+',\'0\')" onkeypress="agregarPromotor('+indice+',\'0\')" onblur="validarPromotor('+indice+',\'0\')"></td></tr></table>';
           
    var table = document.getElementById("supervisores");
    var row = table.insertRow(x);
    row.id="sup"+(indice);
    row.innerHTML = '<td><table><tr><td><i class="far fa-trash-alt" onclick="deleteRow(\'sup'+indice+'\',\'supervisores\')"></i></td>';
    row.innerHTML += '<td><input type="hidden" id="eCodSupervisor'+indice+'" name="supervisores['+indice+'][eCodSupervisor]"><input type="text" class="form-control" id="tSupervisor'+indice+'" name="supervisores['+indice+'][tSupervisor]" onkeyup="agregarSupervisor('+indice+')" onkeypress="agregarSupervisor('+indice+')" onblur="validarSupervisor('+indice+')"></td><td><input type="hidden" id="eCodTienda'+indice+'" name="tiendas['+indice+'][eCodTienda]"><input type="text" class="form-control" id="tTienda'+indice+'" name="tiendas['+indice+'][tTienda]" onkeyup="agregarTienda('+indice+')" onkeypress="agregarTienda('+indice+')"></td></tr><tr><td></td><td>'+tablaPromotor+'</td><td></td></tr></table></td>';
        }
        
    }

//Promotor

function validarPromotor(indice,fila)
    {
        var eCodPromotor    =   document.getElementById('eCodPromotor'+indice+'-'+fila),
            nIndice         =   parseInt(fila)+1;
        
        if(eCodPromotor.value)
            {
                agregarFilaPromotor(indice,nIndice);    
            }
    }
    
function agregarFilaPromotor(indice,fila)
    {
        var x = document.getElementById("promotores").rows.length;
        
        
        var eCodPromotor = document.getElementById('eCodPromotor'+indice+'-'+fila);
        if(eCodPromotor)
            {}
        else
        {
           
    var table = document.getElementById("promotores");
    var row = table.insertRow(x);
    row.id="pro"+(indice)+'-'+(fila);
    row.innerHTML = '<td><i class="far fa-trash-alt" onclick="deleteRow(\'pro'+indice+'\',\'promotores\')"></i></td>';
    row.innerHTML += '<td><input type="hidden" id="eCodPromotor'+indice+'-'+fila+'" name="promotores['+indice+']['+fila+'][eCodPromotor]"><input type="text" class="form-control" id="tPromotor'+indice+'-'+fila+'" name="promotores['+indice+']['+fila+'][tPromotor]" onkeyup="agregarPromotor('+indice+','+fila+')" onkeypress="agregarPromotor('+indice+','+fila+')" onblur="validarPromotor('+indice+','+fila+')"></td>';
        }
        
    }

//Cliente

function validarCliente(indice)
    {
        var eCodCliente    =   document.getElementById('eCodCliente'+indice),
            nIndice         =   parseInt(indice)+1;
        
        if(eCodCliente.value)
            {
                agregarFilaCliente(nIndice);    
            }
    }
    
function agregarFilaCliente(indice)
    {
        var x = document.getElementById("clientes").rows.length;
        
        
        var eCodCliente = document.getElementById('eCodCliente'+indice);
        if(eCodCliente)
            {}
        else
        {
           
    var table = document.getElementById("clientes");
    var row = table.insertRow(x);
    row.id="cli"+(indice);
    row.innerHTML = '<td><i class="far fa-trash-alt" onclick="deleteRow(\'cli'+indice+'\',\'clientes\')"></i></td>';
    row.innerHTML += '<td><input type="hidden" id="eCodCliente'+indice+'" name="clientes['+indice+'][eCodCliente]"><input type="text" class="form-control" id="tCliente'+indice+'" name="clientes['+indice+'][tCliente]" onkeyup="agregarCliente('+indice+')" onkeypress="agregarCliente('+indice+')" onblur="validarCliente('+indice+')"></td>';
        }
        
    }

//Producto

function validarProducto(indice)
    {
        var eCodProducto    =   document.getElementById('eCodProducto'+indice),
            tProducto    =   document.getElementById('tProducto'+indice),
            nIndice         =   parseInt(indice)+1;
        
        if(eCodProducto.value || tProducto.value)
            {
                agregarFilaProducto(nIndice);    
            }
    }
    
function agregarFilaProducto(indice)
    {
        var x = document.getElementById("productos").rows.length;
        
        
        var eCodProducto = document.getElementById('eCodProducto'+indice);
        if(eCodProducto)
            {}
        else
        {
           
    var table = document.getElementById("productos");
    var row = table.insertRow(x);
    row.id="prd"+(indice);
    row.innerHTML = '<td><i class="far fa-trash-alt" onclick="deleteRow(\'prd'+indice+'\',\'productos\')"></i></td>';
    row.innerHTML += '<td><input type="hidden" id="eCodProducto'+indice+'" name="productos['+indice+'][eCodProducto]"><input type="text" class="form-control" id="tProducto'+indice+'" name="productos['+indice+'][tProducto]" onkeyup="agregarProducto('+indice+')" onkeypress="agregarProducto('+indice+')" onblur="validarProducto('+indice+')"><br><table id="presentaciones'+indice+'"><tr id="pre'+indice+'-0"><td><i class="far fa-trash-alt" onclick="deleteRow(\'pre'+indice+'-0\',\'presentaciones'+indice+'\')"></i></td><td><input type="hidden" id="eCodPresentacion'+indice+'-0" name="presentaciones['+indice+'][eCodPresentacion]"><input type="text" class="form-control" id="tPresentacion'+indice+'-0" name="presentaciones['+indice+'][tPresentacion]" onkeyup="agregarPresentacion('+indice+',\'0\')" onkeypress="agregarPresentacion('+indice+',\'0\')" onblur="validarPresentacion('+indice+',\'0\')"></td></tr></table></td>';
        }
        
    }