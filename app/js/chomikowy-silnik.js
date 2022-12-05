	
	function GetIPAdr()
    {
	    navigator.clipboard.writeText('zalegajo.maxc.pl');
    }
	
	function HideALL()
	{
		const btn = document.getElementById('tohide');
		btn.style.display = 'none';
		
		document.getElementById('adres_serwera').style.display ='block';
		document.getElementById('aktualnosci').style.display ='block';
		document.getElementById('pobierz').style.display ='block';
		document.getElementById('regulamin').style.display ='block';

	}
	
	function ShowAll()
	{
	const btn = document.getElementById('tohide');
	btn.style.display = 'block';
	}	

	window.onload = function() 
	{
		
		var rawFile = new XMLHttpRequest();
    		rawFile.open("GET", "http://zalegajo.gameclan.pl/data.txt", false);
    		rawFile.onreadystatechange = function ()
    		{
        	if(rawFile.readyState === 4)
        	{
            	if(rawFile.status === 200 || rawFile.status == 0)
            	{
                var data1 = rawFile.responseText;
		console.log(data1);
           	 }
       		 }
   		 }
		
		//let date_1 = new Date('04/10/2023');
		let date_2 = new Date();
		
		let difference = date_1.getTime() - date_2.getTime();
		
		let TotalDays = Math.ceil(difference / (1000 * 3600 * 24))-1;
		console.log(TotalDays + ' dni do końca serwera.');
		
		document.getElementById('dni').innerHTML=TotalDays;
	};
	
