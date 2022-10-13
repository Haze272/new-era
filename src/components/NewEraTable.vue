<template>
  <nav>
    <ul class="topmenu">
      <li><a class="active">Фильтр</a>
        <ul class="submenu">
          <li>
            <a class="submenu-link">По названию товара</a>
            <ul class="submenu">
              <li><a>Равно<input type="text" @change="this.filterTableByEquality($event, 'name')"></a></li>
              <li><a>Содержит<input type="text" @change="this.filterTableByContent($event, 'name')"></a></li>
            </ul>
          </li>
          <li>
            <a class="submenu-link">По количеству</a>
            <ul class="submenu">
              <li><a>Равно<input type="number" @change="this.filterTableByEquality($event, 'quantity')"></a></li>
              <li><a>Больше<input type="number" @change="this.filterTableByMajority($event, 'quantity')"></a></li>
              <li><a>Меньше<input type="number" @change="this.filterTableByMinority($event, 'quantity')"></a></li>
            </ul>
          </li>
          <li>
            <a class="submenu-link">По расстоянию</a>
            <ul class="submenu">
              <li><a>Равно<input type="number" @change="this.filterTableByEquality($event, 'distance')"></a></li>
              <li><a>Больше<input type="number" @change="this.filterTableByMajority($event, 'distance')"></a></li>
              <li><a>Меньше<input type="number" @change="this.filterTableByMinority($event, 'distance')"></a></li>
            </ul>
          </li>
          <li>
            <a @click="this.resetFilter()">Сбросить фильтр</a>
          </li>
        </ul>
      </li>
      <li><a href="https://github.com/Haze272/new-era">Репозиторий</a></li>
      <li><a href="https://vk.com/haze27">Автор</a></li>
    </ul>
  </nav>
  <table class="table">
    <thead>
    <tr>
      <th>Дата</th>
      <th>
        Название
        <input type="checkbox" class="stateInput" name="stateInput1" id="stateInput1" @change="sortTable($event, 'name')">
        <label for="stateInput1" class="arrows"></label>
      </th>
      <th>
        Количество
        <input type="checkbox" class="stateInput" name="stateInput2" id="stateInput2" @change="sortTable($event,'quantity')">
        <label for="stateInput2" class="arrows"></label>
      </th>
      <th>
        Расстояние (км)
        <input type="checkbox" class="stateInput" name="stateInput3" id="stateInput3" @change="sortTable($event,'distance')">
        <label for="stateInput3" class="arrows"></label>
      </th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="item in this.currentData" :key="item.name">
        <td>{{ item.date.toLocaleString() }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.distance }}</td>
      </tr>
    </tbody>
  </table>
  <button @click="this.previousPage()">
    Previous
  </button>
  <button @click="this.nextPage()">
    Next
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class NewEraTable extends Vue {
  mockProducts: Product[] = [
    {
      "date": new Date(),
      "name": "CAPSA Клатч женский",
      "quantity": 14,
      "distance": 2
    },
    {
      "date": new Date(),
      "name": "Фосфор / Футболка женская с принтом хлопок модная",
      "quantity": 24,
      "distance": 21
    },
    {
      "date": new Date(),
      "name": "Сумка женская клатч маленькая",
      "quantity": 52,
      "distance": 4
    },
    {
      "date": new Date(),
      "name": "Блузка боди женская с длинным рукавом",
      "quantity": 24,
      "distance": 10
    },
    {
      "date": new Date(),
      "name": "Рубашка в клетку женская теплая оверсайз",
      "quantity": 31,
      "distance": 1
    },
    {
      "date": new Date(),
      "name": "Рубашка оверсайз / Рубашка базовая",
      "quantity": 65,
      "distance": 7
    },
    {
      "date": new Date(),
      "name": "Блузка женская офисный, Блуза белая",
      "quantity": 26,
      "distance": 34
    },
    {
      "date": new Date(),
      "name": "FABRIMO / Костюм женский с брюками палаццо / клеш",
      "quantity": 3,
      "distance": 2
    },
    {
      "date": new Date(),
      "name": "LAV U / Костюм спортивный женский теплый начес",
      "quantity": 39,
      "distance": 15
    },
    {
      "date": new Date(),
      "name": "EST / Куртки Базовая модель на каждый день",
      "quantity": 68,
      "distance": 27
    },
    {
      "date": new Date(),
      "name": "MONY / Косуха женская куртка кожаная oversize",
      "quantity": 115,
      "distance": 12
    },
    {
      "date": new Date(),
      "name": "BOSOMI / полупальто",
      "quantity": 53,
      "distance": 34
    },
    {
      "date": new Date(),
      "name": "Рубашка Рич - rubashka.rich / Рубашки оверсайз",
      "quantity": 41,
      "distance": 4
    },
    {
      "date": new Date(),
      "name": "OberronРубашки повседневная прямая",
      "quantity": 257,
      "distance": 33
    },
    {
      "date": new Date(),
      "name": "Nataly RikРубашки свободная",
      "quantity": 76,
      "distance": 20
    },
    {
      "date": new Date(),
      "name": "AilinБлузка белая с длинным рукавом офисная",
      "quantity": 43,
      "distance": 17
    },
    {
      "date": new Date(),
      "name": "Darya Selskaya / Рубашки классическая прямая",
      "quantity": 17,
      "distance": 5
    },
    {
      "date": new Date(),
      "name": "SH&SH Классическая женская рубашка в клетку",
      "quantity": 56,
      "distance": 19
    },
    {
      "date": new Date(),
      "name": "Iho wear / Рубашки оверсайз",
      "quantity": 62,
      "distance": 24
    },
  ]
  pageNumber = 0
  tableSize = 6
  currentData: Product[] = []
  products: Product[] = this.mockProducts

  mounted () {
    this.currentData = this.paginatedData()
  }

  nextPage (): void {
    this.pageNumber++
    this.currentData = this.paginatedData()
  }

  previousPage (): void {
    if (this.pageNumber > 0) {
      this.pageNumber--
      this.currentData = this.paginatedData()
    }
  }

  pageCount (): number{
    return Math.floor(this.products.length / this.tableSize)
  }

  paginatedData(): Array<Product> {
    const start = this.pageNumber * this.tableSize,
        end = start + this.tableSize;
    return this.products.slice(start, end);
  }

  sortTable($event: Event, field: string) {
    const target = $event.currentTarget as HTMLInputElement

    if (field === 'name' && target.checked) {
      this.products.sort((a: Product, b: Product): number => {
        return a.name.localeCompare(b.name)
      })
    }
    else if (field === 'name' && !target.checked) {
      this.products.sort((a: Product, b: Product): number => {
        return b.name.localeCompare(a.name)
      })
    }
    else if (field === 'quantity' && target.checked) {
      this.products.sort((a: Product, b: Product): number => {
        return (a.quantity > b.quantity) ? 1 : (a.quantity === b.quantity) ? 0 : -1
      })
    }
    else if (field === 'quantity' && !target.checked) {
      this.products.sort((a: Product, b: Product): number => {
        return (a.quantity > b.quantity) ? -1 : (a.quantity === b.quantity) ? 0 : 1
      })
    }
    else if (field === 'distance' && target.checked) {
      this.products.sort((a: Product, b: Product): number => {
        return (a.distance > b.distance) ? 1 : (a.distance === b.distance) ? 0 : -1
      })
    }
    else if (field === 'distance' && !target.checked) {
      this.products.sort((a: Product, b: Product): number => {
        return (a.distance > b.distance) ? -1 : (a.distance === b.distance) ? 0 : 1
      })
    }

    this.currentData = this.paginatedData()
  }

  public filterTableByEquality($event: Event, field: string) {
    this.products = this.mockProducts
    const target = $event.currentTarget as HTMLInputElement
    const value = target.value

    if (field === 'name') {
      this.products = this.products.filter((item) => {
        return item.name == value
      })
    }
    else if (field === 'quantity') {
      this.products = this.products.filter((item) => {
        return item.quantity == Number(value)
      })
    }
    else if (field === 'distance') {
      this.products = this.products.filter((item) => {
        return item.distance == Number(value)
      })
    }

    this.currentData = this.paginatedData()
    target.value = ''
  }

  public filterTableByContent($event: Event, field: string) {
    this.products = this.mockProducts
    const target = $event.currentTarget as HTMLInputElement
    const value = target.value

    if (field === 'name') {
      this.products = this.products.filter(item => item.name.match(value));
    }

    this.currentData = this.paginatedData()
    target.value = ''
  }

  public filterTableByMajority($event: Event, field: string) {
    this.products = this.mockProducts
    const target = $event.currentTarget as HTMLInputElement
    const value = target.value

    if (field === 'quantity') {
      this.products = this.products.filter((item) => {
        return item.quantity > Number(value)
      })
    }
    else if (field === 'distance') {
      this.products = this.products.filter((item) => {
        return item.distance > Number(value)
      })
    }

    this.currentData = this.paginatedData()
    target.value = ''
  }

  public filterTableByMinority($event: Event, field: string) {
    this.products = this.mockProducts
    const target = $event.currentTarget as HTMLInputElement
    const value = target.value

    if (field === 'quantity') {
      this.products = this.products.filter((item) => {
        return item.quantity < Number(value)
      })
    }
    else if (field === 'distance') {
      this.products = this.products.filter((item) => {
        return item.distance < Number(value)
      })
    }

    this.currentData = this.paginatedData()
    target.value = ''
  }

  public resetFilter() {
    this.products = this.mockProducts
    this.currentData = this.paginatedData()
  }
}

interface Product {
  date: Date;
  name: string;
  quantity: number;
  distance: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

// Navigation


nav {
  background-color: white;
  box-shadow: 0 2px 0 0 #ECF1F2;
  border-top: 1px solid #ECF1F2;
  text-align: center;

  & a {
    text-decoration: none;
    display: block;
    transition: .3s linear;
  }

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

.topmenu {
  & > li {
    display: inline-block;
    position: relative;
    margin-right: -4px;
    border-left: 1px solid #ECF1F2;

    &:last-child {
      border-right: 1px solid #ECF1F2;
    }

    & > a {
      font-weight: bold;
      padding: 20px 30px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #1c1c1c;
    }
  }
}

.active:after, .submenu-link:after {
  content: "\f107";
  font-family: "FontAwesome";
  color: inherit;
  margin-left: 10px;
}

.topmenu .active,
.topmenu > li > a:hover,
.submenu li a:hover {
  color: #ddbe86;
  cursor: pointer;
}

.submenu {
  position: absolute;
  left: -1px;
  z-index: 5;
  width: 240px;
  border-bottom: 1px solid #ECF1F2;
  visibility: hidden;
  opacity: 0;
  transform: translateY(10px);
  transition: .3s ease-in-out;

  & li {
    position: relative;
  }

  & a {
    background: white;
    border-top: 1px solid #ECF1F2;
    border-right: 1px solid #ECF1F2;
    border-left: 1px solid #ECF1F2;
    color: #1c1c1c;
    text-align: left;
    font-size: 14px;
    letter-spacing: 1px;
    padding: 10px 20px;
  }

  & .submenu {
    position: absolute;
    top: 0;
    left: calc(100% - 1px);
    left: -webkit-calc(100% - 1px);
  }
}

nav li:hover > .submenu {
  visibility: visible;
  opacity: 1;
  transform: translateY(0px);
}


//  Table


.table {
  width: 100%;
  border: none;
  margin-bottom: 20px;
}
.table thead th {
  font-weight: bold;
  text-align: left;
  border: none;
  padding: 10px 15px;
  background: #d8d8d8;
  font-size: 14px;
}
.table thead tr th:first-child {
  border-radius: 8px 0 0 8px;
}
.table thead tr th:last-child {
  border-radius: 0 8px 8px 0;
}
.table tbody td {
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
}
.table tbody tr:nth-child(even){
  background: #f3f3f3;
}
.table tbody tr td:first-child {
  border-radius: 8px 0 0 8px;
}
.table tbody tr td:last-child {
  border-radius: 0 8px 8px 0;
}


//  Sort arrows

.arrows {
  position: relative;
  cursor: pointer;
}

.stateInput {
  display: none;
}

.stateInput + .arrows:after {
  content: ' ';
  position: absolute;
  left: 5px;
  bottom: -13px;
  border: 10px solid transparent;
  border-top: 10px solid #ddbe86;
  border-width: 9px 7px;
}

.stateInput:checked + .arrows:after {
  content: ' ';
  position: absolute;
  left: 5px;
  bottom: -13px;
  border: 10px solid transparent;
  border-top: 10px solid gray;
  border-width: 9px 7px;
}

.stateInput + .arrows:before {
  content: ' ';
  position: absolute;
  left: 5px;
  bottom: 9px;
  border: 10px solid transparent;
  border-bottom: 10px solid gray;
  border-width: 9px 7px;
}

.stateInput:checked + .arrows:before {
  content: ' ';
  position: absolute;
  left: 5px;
  bottom: 9px;
  border: 10px solid transparent;
  border-bottom: 10px solid #ddbe86;
  border-width: 9px 7px;
}



</style>
