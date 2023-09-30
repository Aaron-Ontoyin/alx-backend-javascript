export default class Building {
  constructor(sqft) {
    if (typeof this.evacuationWarningMessage !== 'function'
      && this.constructor !== 'Building') {
      throw new Error('Error: Class extending Building must override evacuationWarningMessage');
    }

    if (typeof sqft !== 'number') throw TypeError('sqft must be a number');
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') throw TypeError('sqft must be a number');
    this._sqft = sqft;
  }
}
