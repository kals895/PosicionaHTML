// JavaScript Document
var respeu = new Array;
var resped = new Array;
var respet = new Array;
var respec = new Array;
var respeq = new Array;
var respes = new Array;
var faite = new Array;
var scorevu = 0;
var scorevd = 0;
var scorevt = 0;
var scorevc = 0;
var scorevq = 0;
var scorevs = 0;

respeu[1] = "a";
respeu[2] = "c";

resped[3] = "c";
resped[4] = "b";

respet[5] = "c";
respet[6] = "d";

respec[7] = "a";
respec[8] = "b";

respeq[9] = "c";
respeq[10] = "a";

respes[11] = "c";
respes[12] = "b";

function Engine(question, repose) 
{

	if(question==1 || question==2){
		
			 if (repose != respeu[question]){
             if (!faite[question]){faite[question] = -1;}
                }
        else {
                if (!faite[question]) {
                        faite[question] = -1;
                        scorevu++;
                        }

                }
		}
		
		
		if(question==3 || question==4){
			 if (repose != resped[question]){
             if (!faite[question]){faite[question] = -1;}
				}
        else {
                if (!faite[question]) {
                        faite[question] = -1;
                        scorevd++;
                        }

                }
		}
		
		
		
			if(question==5 || question==6){
			 if (repose != respet[question]){
             if (!faite[question]){faite[question] = -1;}
				}
        else {
                if (!faite[question]) {
                        faite[question] = -1;
                        scorevt++;
                        }

                }
		}
		
		
				if(question==7 || question==8){
			 if (repose != respec[question]){
             if (!faite[question]){faite[question] = -1;}
				}
        else {
                if (!faite[question]) {
                        faite[question] = -1;
                        scorevc++;
                        }

                }
		}
		
				if(question==9 || question==10){
			 if (repose != respeq[question]){
             if (!faite[question]){faite[question] = -1;}
				}
        else {
                if (!faite[question]) {
                        faite[question] = -1;
                        scorevq++;
                        }

                }
		}
					if(question==11 || question==12){
			 if (repose != respes[question]){
             if (!faite[question]){faite[question] = -1;}
				}
        else {
                if (!faite[question]) {
                        faite[question] = -1;
                        scorevs++;
                        }

                }
		}
		
		
}

function Niveleu () {
      
    
                alert("Su puntuación en el examen 1 'FLOAT' es: "+ scorevu 
				+"\nLa puntuación máxima que podía obtener es 2")
                
}
function Niveled () {
      
    
                alert("Su puntuación en el examen 2 'MARGIN' es: "+ scorevd
				+"\nLa puntuación máxima que podía obtener es 2")
                
}
function Nivelet () {
      
    
                alert("Su puntuación en el examen 3 'POSCITION' es: "+ scorevt
				+"\nLa puntuación máxima que podía obtener es 2")
                
}

function Nivelec () {
      
    
                alert("Su puntuación en el examen 4 'DISPLAY' es: "+ scorevc
				+"\nLa puntuación máxima que podía obtener es 2")
                
}
function Niveleq () {
      
    
                alert("Su puntuación en el examen 5 'Over-flow 1' es: "+ scorevq
				+"\nLa puntuación máxima que podía obtener es 2")
                
}
function Niveles () {
      
    
                alert("Su puntuación en el examen 6 'Over-flow 2' es: "+ scorevs
				+"\nLa puntuación máxima que podía obtener es 2")
                
}


/*function Engine(question, repose) 
{
   if (repose != resp[question])
	 {
             if (!faite[question])
			        {faite[question] = -1;}
                }
        else {

                if (!faite[question]) {
                        faite[question] = -1;
                        score++;
                        alert("¡Correcto! Tu puntuación es : " + score );
                        }

                }
}



function NivelEU () {
      
        if (score >= 9 && score < 10) {
                alert(score + "/10 " + "Muy bien, prueba a superarlo");
                }
        if (score >= 7 && score < 8) {
                alert(score + "/10 " + "Bien, pero puedes hacerlo mejor");
                }
        if (score >= 5 && score < 6) {
                alert(score + "/10 " + "Aprobado por los pelos. No te fíes");
                }
        if (score >= 3 && score < 4) {
                alert(score + "/10 " + "Insuficiente. Has de estudiar más");
                }
        if (score < 2) {
                alert("Su puntuación es: "+ score 
				+"\nLa puntuación máxima que podía obtener es 10" 
				+"\nTiene que reviazar nuevamente sus lecciones" 
				+"\nSu porcentaje de aciertos es menos del 10%");
                }
}*/

