import { question, questionInt } from "readline-sync";

const produkte = {
  1: ["Schokoriegel Classic", 1.5],
  2: ["Schokoriegel Nuss", 1.8],
  3: ["Schokoriegel Karamell", 2.0],
  4: ["Schokoriegel Zartbitter", 1.7],
  5: ["Schokoriegel Weiß", 1.9],
  6: ["Schokoriegel Mandel", 2.2],
  7: ["Schokoriegel Kokos", 2.0],
  8: ["Schokoriegel Erdbeer", 1.6],
  9: ["Schokoriegel Himbeer", 1.8],
  10: ["Schokoriegel Milch", 1.5],
};

function bestellverwaltung() {
  const name = question("Geben Sie Ihren Namen ein: ");
  console.log(`Willkommen, ${name}! Hier ist die Produktliste:`);

  for (const nummer in produkte) {
    const [produkt, preis] = produkte[nummer];
    console.log(`${nummer}: ${produkt} - ${preis.toFixed(2)} EUR`);
  }

  const produktNummer = questionInt(
    "Bitte geben Sie die Nummer des gewünschten Produkts ein: "
  );
  if (!produkte.hasOwnProperty(produktNummer)) {
    console.log("❌ Ungültige Produktnummer!");
    return;
  }

  const [produktname, preis] = produkte[produktNummer];
  const anzahl = questionInt(
    `Wie viele Einheiten von ${produktname} möchten Sie kaufen? `
  );

  if (anzahl <= 0) {
    console.log("❌ Die Menge muss größer als 0 sein!");
  } else {
    const gesamtpreis = anzahl * preis;
    console.log(
      `✅ ${anzahl}x ${produktname} kostet insgesamt ${gesamtpreis.toFixed(
        2
      )} EUR.`
    );
  }
}

bestellverwaltung();
