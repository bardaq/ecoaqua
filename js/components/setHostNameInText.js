export function setHostNameInText() {
	const getHostNameRequires = document.getElementsByClassName('getHostName');
	if(getHostNameRequires.length > 0){
		const domain = window.location.hostname;
		for( let el of getHostNameRequires){
			el.innerHTML = domain
		}
	}
}