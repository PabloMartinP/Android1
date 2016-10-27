var STORAGE_KEY_URL = "STORAGE_KEY_URL";
var STORAGE_KEY_CLAVE = "STORAGE_KEY_CLAVE";


var WS_POSIBLES_SERVICIOS = "/serviciows.asmx/PosiblesServicios";
var WS_SERVICIOSACTIVOS = "/serviciows.asmx/serviciosActivos";
var WS_PRACTICOS = "/serviciows.asmx/practicos";
var WS_SERVICIOSSINPRACTICO = "/serviciows.asmx/ServicioSinPracticos";
var WS_NOTASDESERVICIO = "/serviciows.asmx/ObtenerNotasDeServicio";
var WS_SERVICIOSACTIVOS_BAJADA = "/serviciows.asmx/serviciosActivosBajada";
var WS_SERVICIOSACTIVOS_SUBIDA = "/serviciows.asmx/ServiciosActivosSubida";
var WS_SERVICIOSACTIVOS_CAMPANA = "/serviciows.asmx/serviciosActivosCampana";


var WS_VALIDAR = "/consultasws.asmx/ValidarClave";
var WS_OBTENERCONSULTAS = "/consultasws.asmx/ObtenerConsultas";
var WS_OBTENERTABLA = "/consultasws.asmx/ObtenerTabla";



function acceso_ws_get_url(){
	 return window.localStorage.getItem(STORAGE_KEY_URL);
};

function acceso_ws_set_url(url){
	var lastChar = url.substr(url.length - 1);
	if(lastChar=="/")
		url = url.substr(0, url.length - 1);

	window.localStorage.setItem(STORAGE_KEY_URL, url);
};

function acceso_ws_get_clave(){
	return window.localStorage.getItem(STORAGE_KEY_CLAVE);
};

function acceso_ws_set_clave(clave){
	window.localStorage.setItem(STORAGE_KEY_CLAVE, clave);
};
