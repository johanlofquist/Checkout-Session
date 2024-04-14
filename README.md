# Webshop med Stripe-integration

## Projektbeskrivning
I det här projektet skulle vi bygga en webshop med stripe integration. Användaren ska kunna regga sig och placera produkter i en kundvagn. Han ska sedan via kundvagnen kunna checka ut med hjälp av Stripe och genomföra sin betalning. För VG krävs också att användaren får söka upp sitt närmaste utlämningställe via Postnords API

### Teknikstack
- **Frontend:** React, TypeScript
- **Backend:** Node.js med Express
- **Databehandling:** JSON-filer för lagring av användardata och ordrar
- **Övrigt:** Stripe för betalningar, PostNord API för utlämningsställen.

## Installation
1. Klona detta GitHub-repository.
2. Installera beroenden i både server- och client-mappen.
  - För server:
  ```
  cd server
  npm install
  ```

  - För client:

  ```
  cd client
  npm install
  ```

## Konfiguration
Skapa en `.env`-fil i `server`. Dessa filer ska innehålla nödvändiga API-nycklar och konfigurationer specifika för din miljö.

`.env` i server:
```
STRIPE_KEY="DIN_NYCKEL_HÄR"
POSTNORD_KEY="DIN_NYCKEL_HÄR"
```

## Körning av projektet
För att starta servern och klienten, kör följande kommandon i separata terminalfönster:
- För servern:
```
cd server
npm start
```

- För klienten:
```
cd client
npm run dev
```
   
## Uppgiftsbeskrivning och betygskriterier
### Krav för godkänt:
1. Produkter ska listas på en sida.
2. Produkter som visas och köps skall hämtas ifrån Stripe.
3. Det ska gå att lägga till produkter i en kundvagn.
4. Baserad på kundvagnen skall det gå att lägga en order genom Stripe.
5. Man skall kunna registrera sig som en användare i webbshoppen. Detta skall resultera i att en ”Customer” skapas i Stripe och användaren sparas i en JSON-fil. (samtliga lösenord skall sparas krypterade).
6. Man skall kunna logga in som kund. Den inloggade kunden (som även är sparad i Stripe) skall användas vid placering av order.
7. Man skall inte kunna placera en order om man inte är inloggad.
8. Samtliga placerade ordrar skall sparas till en lista i en JSON-fil.
9. Ordern får inte under några omständigheter sparas utan genomförd betalning! (dvs. Spara aldrig ett orderobjekt såvida ni inte fått bekräftelse tillbaka ifrån stripe att betalningen gått igenom) 

Ordern skall som minst innehålla information om ordernummer, datum, kund, produkter, totalpris och utlämningsställe.

#### _Uppfyllda krav godkänt: 1-9_

### Krav för väl godkänt:
1. Alla punkter för godkänt är uppfyllda
2. Det skall gå att ange en rabattkod för att få rabatt på sitt köp (Detta görs genom Stripe)
3. Man skall som inloggad kunna se sina lagda ordrar.
4. Innan man betalar behöver användaren fylla i sin adress och utifrån adressen välja ett utlämningsställe där paketet skall hämtas (PostNord API).

#### _Uppfyllda krav väl godkänt: 1-4_
