# Przyjęcia towaru

Prosta aplikacja (PWA) na iPhone'a do rejestrowania towaru przychodzącego do firmy.

**Zakładka „Dziś”**
- dodawanie pozycji: nazwa, ilość (opcjonalnie, klawiatura numeryczna), jednostka **brak / szt. / mb / kpl.**
- data odbioru uzupełnia się automatycznie
- podpowiedzi nazw pojawiają się dopiero podczas pisania; po wyborze jednostka ustawia się sama
- pod formularzem tylko dzisiejsza lista z przyciskiem **Kopiuj** (gotowy tekst do Slacka):

  ```
  Przyjęty towar z dnia: 28.10.2026

  • Śruby M8 ocynk – 150 szt.
  • Karton z folią – 3
  • Paleta zwrotna
  ```

**Zakładka „Listy”**
- listy z poprzednich dni, pogrupowane po miesiącach i zwinięte – dotknij daty, aby rozwinąć
- dzisiejsza lista przenosi się tutaj automatycznie o północy
- wyszukiwarka: wpisz frazę, a aplikacja pokaże, w których listach (datach) występuje towar, z podświetlonymi pozycjami
- przy każdej liście: Kopiuj / Udostępnij, znacznik „✓ skopiowano” i ostrzeżenie o zmianach po skopiowaniu

Dotknięcie pozycji otwiera edycję (nazwa, ilość, jednostka, data) i usuwanie.
Dane zapisują się tylko na telefonie; kopia zapasowa w menu ⋯. Aplikacja działa bez internetu.

## Pliki

| Plik | Do czego służy |
|---|---|
| `index.html` | cała aplikacja |
| `manifest.webmanifest` | nazwa i ikona po dodaniu do ekranu początkowego |
| `sw.js` | działanie offline |
| `icons/` | ikony aplikacji |

## Publikacja na GitHub Pages

1. W repozytorium kliknij **Add file** → **Upload files** (przy pustym repo: link **uploading an existing file**).
2. Przeciągnij **zawartość** folderu (pliki i folder `icons`, nie sam folder nadrzędny) → **Commit changes**.
3. **Settings** → **Pages** → Branch `main`, `/ (root)` → **Save**.
4. Po 1–2 minutach aplikacja działa pod adresem `https://bernaskacper.github.io/przyjecia/`.

## Instalacja na iPhonie

Otwórz adres w **Safari** → **Udostępnij** → **Do ekranu początkowego**.
Uruchamiaj aplikację zawsze z ikony (dane w Safari i w aplikacji z ikony są osobne).

## Aktualizacja aplikacji

1. Wgraj nowe pliki tak samo (Add file → Upload files) – GitHub zastąpi stare.
2. Przed wgraniem podnieś numer wersji w `sw.js` (`przyjecia-v2` → `przyjecia-v3`).
3. Na telefonie nowa wersja pojawi się po drugim uruchomieniu aplikacji (pierwsze pobiera ją w tle).
   Dane zostają.
