Ontwerp en maak een responsive notificatiemeldingenpagina voor Campspace.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# Campspace - Notificatievoorkeuren
Campspace is een platform voor gasten en verhuurders waar ze kampeerplekken kunnen boeken en verhuren. Deze pagina houdt in dat de gebruiker de notificatiemledingen naar zijn voorkeuren kan aan- en uitzetten binnen de huisstijl van Campspace.

## Beschrijving
Op de notificatiemeldingenpagina bevindt zich de titel van de pagina met daaronder 2 navigaties. De gebruiker switchen tussen twee rollen (huurder of verhuurder), waarbij je de notificaties aan het aanpassen bent. 
De pagina is mobile-first ontworpen en responsief. Op mobiel staat de navigatie horizontaal, terwijl op desktop een zijbalknavigatie zichtbaar wordt voor extra overzicht.

De gebruiker kan per notificatie aangeven of hij meldingen wil ontvangen via:

* e-mail
* pushnotificaties
* SMS/WhatsApp

Sommige notificaties zijn verplicht en kunnen niet worden uitgezet. Dit wordt duidelijk gecommuniceerd via disabled checksliders en labels.

<img width="269" height="516" alt="Schermafbeelding 2026-01-25 222130" src="https://github.com/user-attachments/assets/4b028d7d-be79-4134-bdce-36bdb307928f" />
<img width="458" height="442" alt="image" src="https://github.com/user-attachments/assets/105af21d-33aa-47a2-afa0-e5a5fdd12012" />


### Link naar Github Pages 🌐: 
https://ahlamad.github.io/the-startup-responsive-interactive-website/

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->

### HTML
Het HTML document is opgebouwd met semantische elementen die classen hebben gekregen die de elementen beschrijven voor wat zij bedoeld zijn. 

Het document bevat 4 navigaties. Twee daarvan horen eigenlijk bij elkaar maar staan in het document uit elkaar, zodat de stijling uitgevoerd kon worden zoals dat van de opdrachtgever. De website campspace zelf heb ik aangehouden voor het ontwepen van deze navigaties. Dat zijn home-bar en nav-bar, dit zijn echte navigaties van de website zelf. Hiermee kan je navigeren naar andere pagina's. 

De derde navigatie bevindt zich binnen de header, die geeft weer via welke rollen je kan navigeren als gebruiker. Zodat het duidelijk is dat je als verschillende adminrollen je notificatiemeldingen kan aanpassen.

De vierde en laatste navigatie bevindt zich tussen de header en main in. Dit is laatste toegevoegd voor een duidelijk overzicht van de secties. 

Binnen de main zitten geneste fieldsets binnen een form. Dit zit twee keer in de main, vanwege de verschillende soorten notificatiemelding voorkeuren. De gast heeft andere verplichte notificatmeldingen dan de host. Tot slot zit er een submit button onderaan in het formulier.

### Ademruimte en inspringen

In de HTML is bewust gebruikgemaakt van inspringing (indentatie) en witruimte om de hiërarchie van elementen zichtbaar te maken. Door geneste elementen zoals `<nav>`, `<form>`, `<fieldset>` en `<label>` in te springen, is direct te zien welke onderdelen bij elkaar horen.

Dit is vooral belangrijk bij de geneste fieldsets binnen de formulieren, waar notificatie-opties logisch onder elkaar vallen. Hierdoor is de HTML beter leesbaar.

https://github.com/ahlamad/the-startup-responsive-interactive-website/blob/1213a19c8832eb9b25b0e5b89597fd40d018e87a/index.html#L240-L296
### CSS
De CSS is gebouwd in dezelfde volgorde van het HTML document. Hierdoor vindt je het sneller en kan code beter onderhouden worden. 
Het CSS document bevat geneste selectoren met media queries voor de responsiviteit. Het ontwerp veranderd ook nadat het vergroot is tot desktop. Op desktop krijgt de pagina een sidebar navigatie voor de vertoning van de sectieindeling.
https://github.com/ahlamad/the-startup-responsive-interactive-website/blob/1213a19c8832eb9b25b0e5b89597fd40d018e87a/styles/style.css#L21-L53

#### Codeconventies
* De classnamen zijn gekozen op basis van hun functie en betekenis. Voorbeeld: .role-navigation
* De naamgevingen zijn consistent.

#### Nesten van media queries
De layout verandert van mobiel naar desktop met behulp van geneste media queries binnen componenten. Dit maakt het overzichtelijker en weet je waar de media queriy iets wijzigt.

Voorbeelden:
* De sectienavigatie verandert van horizontaal (mobiel) naar verticaal (desktop)
* De main-layout schakelt van een enkele kolom naar een grid met sidebar
* Hover-effecten worden alleen meer toegepast op grotere schermen

https://github.com/ahlamad/the-startup-responsive-interactive-website/blob/1213a19c8832eb9b25b0e5b89597fd40d018e87a/styles/style.css#L111-L133

### JavaScript
De JavaScript is gericht op één functionaliteit: het wisselen tussen gast- en verhuurderrollen.
1. DOM-elementen worden eerst opgeslagen in variabelen
2. Functies hebben een duidelijke verantwoordelijkheid met een duidelijke naamgeving
3. CSS-classes (.hidden, .active) worden gebruikt

https://github.com/ahlamad/the-startup-responsive-interactive-website/blob/1213a19c8832eb9b25b0e5b89597fd40d018e87a/scripts/script.js#L1-L19

## Bronnen
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input
https://campspace.com/nl
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset
https://accessibilityinsights.io/docs/web/overview/
https://validator.w3.org/

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


