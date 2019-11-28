window.addEventListener("load", () =>{
	let lng;
	let lat;
	
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position => {
			lng = position.coords.longitude;
			lat = position.coords.latitude;
		
		const api =`https://api.darksky.net/forecast/d184d775f21462bf6596305fa4edb96d/${lng},${lat}`
		});
		
	}
	
});