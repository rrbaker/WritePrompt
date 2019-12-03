export default class Words {
  async getWord() {
    try {
      let responseWords = await fetch(`https://random-word-api.herokuapp.com/word?key=VBJQ734S&number=20`);
      let jsonifiedResponse = await responseWords.json();
      return jsonifiedResponse;
    } catch(error) {
      alert("There was a problem with your request");
      return false;
    }
  }
}
