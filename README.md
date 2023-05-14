Movie Tracker, Hoinaru Adela-Stefania, grupa 1120 

Link video: https://www.youtube.com/watch?v=RREd7z3_wTI

Link publicare: https://github.com/adelahoinaru/cc-proiect 

Link deploy: https://cc-proiect.vercel.app/ 

Documentația proiectului – Movie Tracker 


**Introducere:**

Scopul acestui proiect este de a permite utilizatorilor să găsească informații detaliate despre filme, cum ar fi numele, anul lansării, genul, actorii, producătorul, ratingul si dacă filmul a fost vizionat sau nu.
Proiectul utilizează tehnologii cloud pentru a asigura scalabilitate și fiabilitate, permițând utilizatorilor să acceseze informațiile dorite cu ușurință. Acest proiect constă într-o aplicație web care oferă utilizatorilor posibilitatea de a înregistra filmele pe care le-au vizionat deja sau pe care doresc să le vizioneze în viitor.


**Descriere problemă:**

Aplicația are rolul de a pune la dispoziție o sursă de conținut pentru filme, care să permită utilizatorilor să adauge detalii despre acestea într-o bază de date și să le marcheze ca fiind vizionate sau nevizionate, astfel ținând evidența lor.
De asemenea, există o componentă de chat ce poate oferi utilizatorului recomandări de filme, astfel ajutându-l să aleagă în funcție de gusturi și preferințe.


**Descriere API:**

API-ul utilizat pentru partea de backend este un API simplu, care permite funcționalități de get/post/delete într-o bază de date NOSQL.


**Flux de date:**

Utilizatorul intră în pagina de insert unde adaugă datele necesare despre film (numele, genul, director, actori, rating și dacă a fost vizionat sau nu) și salvează în baza de date. În urma salvării, datele sunt afișate în pagina principală. În această pagină datele pot sa fie vizualizate sau șterse. 
De asemenea, componenta de chat oferă posibilitatea de a discuta cu un ChatBot ce este antrenat să ofere recomandări despre filme.

**Exemple de Request/Response, metode HTTP și autorizare servicii:**

În cadrul componentei de Chat se folosește un API Call către OpenAI, unde este specificat ce fel de răspunsuri dorim să primim. Configurarea este următoarea:

	MESSAGE: {
			'role': 'system',
			'content': 'You are a movie critic. You respond with recommendations and other details about movies',
		},
		TEMPERATURE: 1,
		MAX_TOKENS: 100,
    
Pentru utilizarea acestui serviciu am folosit Secret KEY-ul oferit de OpenAI pe care l-am stocat in fișierul .env din proiect.

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

Răspunsul primit de la API-ul OpenAI este mai apoi afișat utilizatorului în componenta chat.


**Exemplu de request POST către backend (Metoda HTTP de tipul POST):**

Modul de trimitere date către backend-ul nostru:
	fetch("/api/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
    
Iar funcția de POST din cadrul serverului arată astfel:

	else if(req.method === 'POST') {
		const record = req.body;
		const result = await postRecord(record);
		return sendOk(res, result);
	}
  
  
**Descriere tehnologii cloud folosite:**

Pentru dezvoltarea proiectului, s-au utilizat următoarele tehnologii cloud:

Next.js: un framework React pentru crearea de aplicații web și mobile.

MongoDB: o bază de date NoSQL cu scalabilitate orizontală și verticală.

OpenAI API: un API care furnizează instrumente de inteligență artificială pentru dezvoltatori.

Vercel: o platformă de cloud care oferă funcționalități de deploy și hosting pentru aplicații web.



**Detalii despre aplicație:**

Aplicația este de tip SaaS (Software as a Service), oferind utilizatorului posibilatatea de a salva filmele pe care dorește să le vizioneze.
Aplicația propusă vine în întâmpinarea nevoii utilizatorilor de a avea o sursă centralizată de informații despre filme și posibilitatea de a gestiona aceste informații într-un mod personalizat. Utilizatorii vor putea adăuga detalii despre filme într-o bază de date, precum nume, anul lansării, genul, personajele și producătorul. De asemenea, ei vor putea marca filmele ca fiind vizionate sau nevizionate, permițându-le să țină evidența filmelor pe care le-au urmărit. Prin utilizarea tehnologiilor cloud, aplicația va fi scalabilă și va oferi o experiență fiabilă și ușor de utilizat. 
Pagina principală a aplicației conține o listă cu toate filmele introduse de utilizatori, care pot fi vizualizate și șterse. Aceasta oferă o modalitate simplă și eficientă de a gestiona filmele generate de utilizatorii aplicației.
De asemenea, cu ajutorul ChatBot-ului, utilizatorul poate primi recomandari detaliate de filme pe care, ulterior, le poate introduce pe pagina principală pentru a ține evidența lor.
 
 ![image](https://github.com/adelahoinaru/cc-proiect/assets/91604322/a1d32be6-98e5-4808-9aa7-1ac2a200e3b5)

![image](https://github.com/adelahoinaru/cc-proiect/assets/91604322/da058f72-48bc-4c1b-8c97-d0f29cbdaf15)

![image](https://github.com/adelahoinaru/cc-proiect/assets/91604322/7def4b3b-202f-4d0e-9e6b-a90d4c6cdca3)


 
