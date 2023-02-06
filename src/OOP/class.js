/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Alvarez Mesa
 * @author       Sergio de la Barrera Garcia
 * @since 03.02.2023
 */

'use strict'

/**
 * @description Class to represent a polygon with a height and width 
 */
class Polygon {
  /** @property {number} @private */
  height_;

  /** @property {number} @private */
  width_;

  /**
   * @description Constructor of the class
   * @param {number} height 
   * @param {number} width 
   */
  constructor(height, width) { 
    this.height_ = height; 
    this.width_ = width;
  }

  /**
   * @description Return the dimension of the polygon
   * @returns {string} Return the dimension with the formart (height, width)
   */
  toString() { 
    return `(${this.height_}, ${this.width_})`;
  } 
};

let polyObj = new Polygon(10, 20); 
console.log(polyObj.toString());


class Polygon {
  height_;
  width_;

  constructor(height, width) { 
    this.height_ = height; 
    this.width_ = width;
  }

  toString() { 
    return `(${this.height_}, ${this.width_})`;
  } 
};

let polyObj = new Polygon(10, 20); 
console.log(polyObj.toString());