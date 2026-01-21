Ontwerp en maak een responsive notificatiemeldingenpagina voor Campspace.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# Notificatiemeldingenpagina
De notificatiemeldingenagina voor campspace houdt in dat de gebruiker de notificatiemledingen naar zkjn voorkeuren kan aan- en uitzetten.

## Beschrijving
Op de notificatiemeldingenpagina bevindt zich de titel van de pagina met daaronder 2 navigaties. De eerste navigatie is de adminrol die laat als wie (huurder of verhuurder) de notificaties aan het aanpassen bent. 
Horizontaal daaronder bevindt een navigatie voor de drie soorten secties. Reservations, cancelations en Reminders, hier kan je als gebruiker naar toe springen, zodat je een notificatiemelding gemakkelijker kan vinden. De navigatie voor de secties wordt tijdens het scrollen sticky en komt aan de linkerkant de staan. Deze blijft altijd in beeld, zolang er notificaties in zicht zijn. 
Daaronder bevindt zich de content van alle notificaties binnen de 3 benoemde secties. Elke sectie toont 3 soorten meldingen waarnaast aan de rechterkant een checkslider gecentreerd staat. 

<!-- Voeg een mooie poster visual toe 📸 -->

Link naar Github Pages 🌐: https://ahlamad.github.io/the-startup-responsive-interactive-website/

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->

### HTML
Het HTML document is opgebouwd met semantische elementen die classen hebben gekregen die de elementen beschrijven voor wat zij bedoeld zijn. 

Het document bevat 4 navigaties. Twee daarvan horen eigenlijk bij elkaar maar staan in het document uit elkaar, zodat de stijling uitgevoerd kon worden zoals dat van de opdrachtgever. De website campspace zelf heb ik aangehouden voor het ontwepen van deze navigaties. Dat zijn home-bar en nav-bar, dit zijn echte navigaties van de website zelf. Hiermee kan je navigeren naar andere pagina's. 

De derde navigatie bevindt zich binnen de header, die geeft weer via welke rollen je kan navigeren als gebruiker. Zodat het duidelijk is dat je als verschillende adminrollen je notificatiemeldingen kan aanpassen.

De vierde en laatste navigatie bevindt zich tussen de header en main in. Dit is laatste toegevoegd voor een duidelijk overzicht van de secties. 

Binnen de main zitten geneste fieldsets binnen een form. Dit zit twee keer in de main, vanwege de verschillende soorten notificatiemelding voorkeuren. De gast heeft andere verplichte notificatmeldingen dan de host. Tot slot zit er een submit button onderaan in het formulier.

### CSS
De CSS is gebouwd in dezelfde volgorde van het HTML document. Hierdoor vindt je het sneller. Het CSS document bevat geneste selectoren met media queries voor de responsiviteit. Het ontwerp veranderd ook nadat het vergroot is tot desktop. Op desktop krijgt de pagina een sidbar navigatie voor de vertoning van de sectieindeling.



## Bronnen


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


