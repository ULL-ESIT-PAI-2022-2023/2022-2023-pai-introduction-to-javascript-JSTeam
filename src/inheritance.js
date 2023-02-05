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

/**
 * @description Class to represent a square with a height and width 
 */
class Square extends Polygon {
  /**
   * @description Calculate the area of the Square
   * @returns {number}
   */
  area() {
    return this.height_* this.width_;
  }
};

let square = new Square(10, 15);
console.log(square.area());


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

let polygon = Polygon(10, 20);
console.log(polygon.toString()); // (10, 20)