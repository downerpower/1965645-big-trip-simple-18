/**
 * Базовое представление
 */
export default class BaseView extends HTMLElement {
  constructor() {
    super();
    this.insertAdjacentHTML(this.adjacentHmlPosition, this.createAdjacentHtml(...arguments));
  }

  /**
 * Позиция дополнительной html-разметки
 */
  get adjacentHmlPosition() {
    return 'beforeend';
  }

  /**
   * Создаст дополнительную html-разметку
   */
  createAdjacentHtml() {
    return '';
  }
}
