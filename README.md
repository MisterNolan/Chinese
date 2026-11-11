# Mandarin Ninja 華語忍者

A side-scrolling ninja game for Mandarin listening practice. Each lesson is a level.
You hear a word or sentence, then run and jump to the lantern with the right meaning
(or collect the pieces of a sentence in order). Wrong lanterns and red oni foes cost hearts;
stomp the oni from above.

Works on a laptop (keyboard) and a phone (on-screen buttons, landscape).

## Put it on GitHub Pages

1. Create a new GitHub repository (for example `mandarin-ninja`).
2. Upload everything in this folder to the root of the repo
   (`index.html`, `lessons.js`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`).
3. In the repo go to **Settings → Pages**, set **Source** to *Deploy from a branch*,
   choose the `main` branch and the `/ (root)` folder, and save.
4. After a minute or two the game is live at `https://<your-username>.github.io/mandarin-ninja/`.
5. On your phone, open that link, then use the browser's **Add to Home Screen**.

Free GitHub Pages sites are public, so anyone with the link can play. Don't put anything private in the repo.

## Add a new lesson

Open `lessons.js` on GitHub (pencil icon), copy a whole lesson block, paste it after the last one,
change the `id` and `title`, and replace the words and sentences. Commit. The page updates within
a minute or two (refresh the page; on a phone you may need to close and reopen it once).

* Words: `{ type: "word", zh: "菜單", py: "càidān", en: "menu" }`
* Sentences: add `parts` (the sentence cut into 3 to 5 pieces) to get the word-order boss rounds.
  Without `parts` the sentence becomes a "pick the meaning" round.
* `group: "pay"` stops near-identical items being used as wrong answers for each other.

You can also add a lesson inside the game (menu → **＋ Add a lesson**) by pasting
`Chinese,pinyin,English` lines. Those lessons live on that device only; use **Copy** on the menu
to turn one into code you can paste into `lessons.js`.

## Sound

The game uses the browser's built-in Mandarin voice (Taiwan Mandarin if the device has it).
Voice quality depends on your device. Settings lets you pick a voice and slow the speed.

For real recordings, put MP3 files in an `audio/` folder and add `audio: "audio/caidan.mp3"`
to an item in `lessons.js`. The game will play the recording instead of the computer voice.

## Controls

| | Laptop | Phone |
|---|---|---|
| Move | ← → or A D | ◀ ▶ buttons |
| Jump | Space, ↑ or W | ⤒ button |
| Replay sound | R | 🔊 button |
| Pause | P or Esc | ⏸ button |

## Modes (Settings)

* **Easy**: you hear the word and see its pinyin; choose the English.
* **Listening**: sound only; choose the English.
* **Reverse**: you see the English; choose the matching pinyin.

Progress (best score and stars per level) is saved in the browser on each device.
