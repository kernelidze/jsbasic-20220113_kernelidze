/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {
  constructor(rows) {
    this.rows = rows;

    const myTable = document.createElement('table');
    myTable.innerHTML = this.tableTemplate();
    this.elem = myTable;

    const tableRows = myTable.querySelectorAll('tr');

    for (let i = 1; i < tableRows.length; i++) {
      tableRows[i].lastElementChild.onclick = () => {
        tableRows[i].remove();
      };
    }
  }

  tableTemplate() {
    return `
    <table>
      <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
      </thead>
      <tbody>
      ${this.rows.map(row => `<tr>
            <td>${row.name}</td>
            <td>${row.age}</td>
            <td>${row.salary}</td>
            <td>${row.city}</td>
            <td><button>X</button></td>
        </tr>`).join('')
      }
      </tbody>
    </table>
    `;
  }
}
