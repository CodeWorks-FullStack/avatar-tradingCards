import { appState } from "../AppState.js";
import { charactersService } from "../Services/CharactersService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function drawAvatarCharacters() {
  let template = ''
  appState.characters.forEach(c => template += c.CardTemplate)
  setHTML('api-characters', template)
}

export class CharactersController {
  constructor() {
    appState.on('characters', drawAvatarCharacters)
    this.getAvatarCharacters()
  }


  // NOTE IMPORTANT ALWAYS when making an async call use a try catch
  async getAvatarCharacters() {
    try {
      await charactersService.getAvatarCharacters()
    } catch (error) {
      console.error('[getAvatarCharacters]', error)
      Pop.error(error)
    }
  }


}