export class Character {
  constructor(data) {
    // Adapter pattern
    this.id = data._id // adapt the data to my needs
    this.name = data.name

    this.affiliation = data.affiliation
    this.allies = data.allies
    this.enemies = data.enemies
    this.picture = data.photoUrl
  }

  get CardTemplate() {
    return /*html*/`
      <div class="col-md-3 my-3">
        <div class="card h-100">
          <img src="${this.picture}" alt="">
            <div class="card-body">
             <h4>${this.name}</h4>
          </div>
        </div>
      </div>
    `
  }


}
