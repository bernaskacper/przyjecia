# Przyjęcia towaru

Prosta aplikacja (PWA) na iPhone'a do rejestrowania towaru przychodzącego do firmy.

- dodawanie pozycji: nazwa, ilość (klawiatura numeryczna), jednostka **szt. / mb / kpl.**
- data odbioru uzupełnia się automatycznie (można ją zmienić w edycji)
- podpowiedzi nazw z pamięci aplikacji – najczęściej używane na górze, jednostka dobiera się sama
- wyszukiwanie pozycji po nazwie (bez względu na polskie znaki i wielkość liter)
- edycja i usuwanie pozycji (dotknij pozycji na liście)
- przycisk **Kopiuj** przy każdym dniu – gotowy tekst do wklejenia w Slacku:

  ```
  Przyjęty towar z dnia: 21.10.2026

  • Śruby M8 ocynk – 150 szt.
  • Rura stalowa 40x40 – 6,5 mb
  ```
- znacznik „✓ skopiowano” oraz ostrzeżenie, gdy lista dnia zmieniła się po skopiowaniu
- działa bez internetu; dane zapisują się tylko na telefonie
- kopia zapasowa danych (menu ⋯)

## Pliki

| Plik | Do czego służy |
|---|---|
| `index.html` | cała aplikacja |
| `manifest.webmanifest` | nazwa i ikona po dodaniu do ekranu początkowego |
| `sw.js` | działanie offline |
| `icons/` | ikony aplikacji |

## Publikacja na GitHub Pages

1. Na github.com kliknij **+** (prawy górny róg) → **New repository**.
2. Nazwa, np. `przyjecia`, zaznacz **Public**, kliknij **Create repository**.
3. Na stronie nowego repozytorium kliknij link **uploading an existing file**.
4. Przeciągnij pliki `index.html`, `manifest.webmanifest`, `sw.js`, `README.md` **oraz cały folder `icons`** → **Commit changes**.
5. **Settings** → **Pages** → w „Branch” wybierz `main` i `/ (root)` → **Save**.
6. Po 1–2 minutach aplikacja jest pod adresem `https://TWOJA-NAZWA.github.io/przyjecia/`.

## Instalacja na iPhonie

1. Otwórz adres w **Safari**.
2. **Udostępnij** → **Do ekranu początkowego** → **Dodaj**.
3. Uruchamiaj aplikację zawsze z ikony na ekranie (dane w Safari i w aplikacji z ikony są osobne).

## Aktualizacja aplikacji

Po wgraniu zmienionych plików podnieś numer wersji w pierwszej linii `sw.js`
(`przyjecia-v1` → `przyjecia-v2`). Nowa wersja pojawi się na telefonie po drugim uruchomieniu aplikacji.
