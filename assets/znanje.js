// EKORUSTIKA – baza znanja asistenta Data
// Ovdje se uređuju pozdravi, prijedlozi i odgovori. Bez plaćenog AI-ja.
// "kljucne" su riječi (dijelovi riječi) po kojima Data prepoznaje temu.
// "pitanja" određuju što Data pita prije slanja upita.
// Pravilo: ne obećavati cijene, rokove ni neprovjerene tehničke karakteristike.

export const pozdrav = {
  digital: "Dobro došli u EKORUSTIKA Digital. Ja sam Data. Trebate web-stranicu, digitalnu vizitku ili automatizaciju?",
  montaze: "Dobro došli u EKORUSTIKA Montaže. Ja sam Data. Trebate SPC obloge, TV zid ili montažu kuhinje?",
  opci: "Bok, ja sam Data, EkoRustika AI asistent. Pomažem s digitalnim alatima (web-stranice, vizitke, AI asistenti, automatizacija) i montažama (SPC, MDF, WPC, TV zidovi, kuhinje). Odaberite prijedlog ili napišite što trebate."
};

export const prijedlozi = {
  digital: ["Trebam web-stranicu", "Želim digitalnu vizitku", "AI asistent za obrt", "Automatizacija posla", "Želim poslati upit"],
  montaze: ["SPC zidne obloge", "TV zid", "Montaža kuhinje", "MDF i akustični paneli", "WPC obloga"],
  opci: ["Web-stranica ili vizitka", "SPC zidne obloge", "TV zid", "Montaža kuhinje", "Želim poslati upit"]
};

export const pitanjeUsluga = {
  digital: "Koja usluga vas zanima: web-stranica, digitalna vizitka, AI asistent, mala aplikacija ili automatizacija?",
  montaze: "Koja montaža vas zanima: SPC obloge, MDF i akustični paneli, WPC, TV zid, kuhinja ili namještaj?",
  opci: "Što vas zanima? Digitalno: web-stranica, vizitka, AI asistent, automatizacija. Montaže: SPC, MDF, WPC, TV zid, kuhinja, namještaj."
};

export const pitanja = {
  ime: "Kako se zovete?",
  kontakt: "Koji je vaš broj telefona ili e-pošta?",
  lokacija: "U kojem mjestu je prostor (grad ili naselje)?",
  dimenzije: "Koje su približne dimenzije? Npr. širina × visina zida ili broj m².",
  fotografije: "Imate li fotografiju prostora? Napišite da ili ne. Fotografiju ćete priložiti u WhatsApp poruci.",
  projekt: "U jednoj rečenici: što točno trebate?"
};

// Odgovori na pitanja o cijeni i roku (bez obećanja).
export const pravila = [
  { kljucne: ["cijen", "košta", "kosta", "koliko je", "eur", "€", "jeftin", "skup"],
    odgovor: "Cijenu ne mogu obećati. Robert šalje ponudu nakon što vidi podatke i fotografije." },
  { kljucne: ["rok", "kada možete", "kad možete", "koliko traje", "termin", "brzo"],
    odgovor: "Rok i termin potvrđuje Robert osobno, nakon pregleda upita." }
];

export const teme = [
  // ---------- DIGITAL ----------
  { id: "vizitka", podrucje: "digital", naziv: "Digitalna vizitka", kljucne: ["vizitk"],
    odgovor: "Digitalna vizitka spaja poziv, WhatsApp, e-poštu, QR i spremanje kontakta. Mogu je složiti i za tvoj obrt.",
    pitanja: ["projekt"] },
  { id: "ai", podrucje: "digital", naziv: "AI asistent", kljucne: ["ai ", "ai-", "asistent", "chatbot", "chat bot"],
    odgovor: "AI asistent odgovara kupcima na česta pitanja i prikuplja upite, u izgledu vašeg obrta.",
    pitanja: ["projekt"] },
  { id: "automatizacija", podrucje: "digital", naziv: "Automatizacija", kljucne: ["automat"],
    odgovor: "Automatizacijom smanjujemo ručni posao: upiti, ponude, podsjetnici i evidencije.",
    pitanja: ["projekt"] },
  { id: "web", podrucje: "digital", naziv: "Web-stranica", kljucne: ["web", "stranic", "sajt"],
    odgovor: "Web-stranica može biti kratka prezentacija obrta, s kontaktom i mjestom za upit.",
    pitanja: ["projekt"] },
  { id: "aplikacija", podrucje: "digital", naziv: "Mala aplikacija", kljucne: ["aplikac", "app"],
    odgovor: "Male aplikacije radimo kao alate: ponude, kalkulatori i asistenti, u tvom izgledu.",
    pitanja: ["projekt"] },
  { id: "alat", podrucje: "digital", naziv: "Digitalni alat", kljucne: ["alat", "digital"],
    odgovor: "Za većinu obrta krenemo od vizitke ili jednostavne stranice. Ako treba više, složimo mali alat.",
    pitanja: ["projekt"] },

  // ---------- MONTAŽE ----------
  { id: "spc", podrucje: "montaze", naziv: "SPC zidne obloge", kljucne: ["spc"],
    odgovor: "SPC zidne obloge su naša glavna usluga. Montiramo ih na zidove u stanovima i kućama. Izbor obloge i način montaže Robert potvrđuje nakon pregleda.",
    pitanja: ["lokacija", "dimenzije", "fotografije"] },
  { id: "tv", podrucje: "montaze", naziv: "TV zid", kljucne: ["tv", "televiz"],
    odgovor: "TV zid radimo po mjeri prostora. Izgled možete složiti u konfiguratoru: https://ekorustika.lovable.app/",
    pitanja: ["lokacija", "dimenzije", "fotografije"] },
  { id: "mdf", podrucje: "montaze", naziv: "MDF i akustični paneli", kljucne: ["mdf", "akust", "lamel", "panel"],
    odgovor: "Montiramo MDF i akustične panele za zidove, TV zone i dnevne boravke.",
    pitanja: ["lokacija", "dimenzije", "fotografije"] },
  { id: "wpc", podrucje: "montaze", naziv: "WPC obloga", kljucne: ["wpc", "teras", "fasad", "vanjsk"],
    odgovor: "Montiramo WPC obloge. Prikladnost za vaš prostor Robert potvrđuje nakon pregleda.",
    pitanja: ["lokacija", "dimenzije", "fotografije"] },
  { id: "kuhinja", podrucje: "montaze", naziv: "Montaža kuhinje", kljucne: ["kuhinj"],
    odgovor: "Montiramo kuhinje. Za upit nam treba mjesto, približna veličina i fotografija prostora ili nacrta.",
    pitanja: ["lokacija", "dimenzije", "fotografije"] },
  { id: "namjestaj", podrucje: "montaze", naziv: "Montaža namještaja", kljucne: ["namješt", "namjest", "ormar", "plakar", "komod"],
    odgovor: "Montiramo namještaj: ormare, plakare, komode i slično.",
    pitanja: ["lokacija", "fotografije"] },
  { id: "montaza", podrucje: "montaze", naziv: "Montaža", kljucne: ["montaž", "montaz", "oblog", "zid"],
    odgovor: "Radimo SPC obloge, MDF i akustične panele, WPC, TV zidove te montažu kuhinja i namještaja.",
    pitanja: ["lokacija", "dimenzije", "fotografije"] }
];
