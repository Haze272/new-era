<template>
  <table class="table">
    <thead>
    <tr>
      <th>Дата</th>
      <th>Название</th>
      <th>Количество</th>
      <th>Расстояние (км)</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="item in this.paginatedData()" :key="item.name">
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
  pageNumber = 0
  tableSize = 6

  nextPage (): void {
    this.pageNumber++
  }

  previousPage (): void {
    if (this.pageNumber > 0) {
      this.pageNumber--
    }
  }

  pageCount (): number{
    return Math.floor(this.mockProducts.length / this.tableSize)
  }

  paginatedData(): Array<Product> {
    const start = this.pageNumber * this.tableSize,
        end = start + this.tableSize;
    return this.mockProducts.slice(start, end);
  }

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

</style>
