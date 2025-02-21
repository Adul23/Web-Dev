import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, ProductListComponent, ProductItemComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [
    {
      id: 1,
      name: 'Electronics',
      products: [
        { 
          id: 1, 
          name: 'iPhone 13', 
          description: 'Apple iPhone 13 with Super Retina XDR display.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
        },
        { 
          id: 2, 
          name: 'Xiaomi Redmi 13C', 
          description: 'Smartphone with a 6.74” IPS display and a 50 MP AI camera.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium', 
          link: '' 
        },
        { 
          id: 3, 
          name: 'Wireless Mouse', 
          description: 'Symmetrical design mouse, comfortable for both right and left-hand users.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=gallery-medium', 
          link: ''
        },
        { 
          id: 4, 
          name: 'USB Flash Drive Kingston', 
          description: '64GB USB flash drive, compact and fast.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/h80/hc6/63936669810718.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/kingston-datatraveler-exodia-dtx-64gb-64-gb-100759959/?c=750000000'
        },
        { 
          id: 5, 
          name: 'Portcase Bag', 
          description: 'Elegant and functional laptop bag with soft interior for protection.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/h93/h2b/69003730550814.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000'
        }
      ]
    },
    {
      id: 2,
      name: 'Accessories',
      products: [
        { 
          id: 6, 
          name: 'AULA F75 Keyboard', 
          description: 'Ergonomic design for long hours of work and gaming.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/p8a/24789850.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?c=750000000'
        },
        { 
          id: 7, 
          name: 'Клавиатура Ajazz AK820 черный', 
          description: ' Хорошая клавиатура за свою цену.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/p3f/p76/24839378.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/ajazz-ak820-chernyi-120925482/?c=750000000'
        },
        { 
          id: 8, 
          name: 'Windows 11 Professional', 
          description: 'Proprietary operating system with enhanced security and productivity features.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/h98/h11/82848377405470.png?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/microsoft-windows-11-professional-64-bit-110955339/?c=750000000'
        },
        { 
          id: 9, 
          name: 'Клавиатура Ajazz AK820 Pro белый', 
          description: 'Ajazz AK820 Pro- это не просто клавиатура, это совершенный инструмент для геймеров и профессионалов. С инновационным дизайном, выдающейся производительностью и функциональностью, эта клавиатура создана для тех, кто стремится к лучшему в играх и работе.Особенности:Механические Ключи с Hot Swap технологией: полностью механические клавиши с возможностью быстрой замены для индивидуальной настройки под ваши предпочтения.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/pbb/p20/24789953.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/ajazz-ak820-pro-belyi-115277471/?c=750000000'
        },
        { 
          id: 10, 
          name: 'Клавиатура X-Game XK-100UB черный', 
          description: 'Классическая клавиатура компактного дизайна, уменьшена благодаря оптимизации размеров рамки. Раскладка клавиатуры, разработанная специально для среднеазиатского региона, имеет красивый и ровный шрифт, нанесена при помощи точного лазера и защищена от стирания УФ-покрытием. Выполнена в трёхцветной палитре. Английская раскладка белого цвета, русская - розового, казахская - синего. Современный дизайн клавиатуры с классической формой клавиш идеально подходит для повседневной работы за компьютером.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/pe6/p77/24880216.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/x-game-xk-100ub-chernyi-9200019/?c=750000000'
        },
        { 
          id: 12, 
          name: 'Клавиатура B033 серый', 
          description: 'Клавиатура B033 — это удобное и функциональное устройство, предназначенное для использования с различными гаджетами, включая планшеты, смартфоны, ноутбуки и настольные компьютеры. Ее отличает компактный дизайн, тонкий корпус и эргономичная раскладка клавиш, что делает ее идеальным выбором для пользователей, ценящих портативность и комфорт в работе.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/p96/p14/24861708.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/b033-seryi-120371954/?c=750000000'
        },
        { 
          id: 13, 
          name: 'Клавиатура AULA F75 серый', 
          description: ' Очень удобная, приятная клавиатура. Идеально подошла как для работы, так для игр. Понравился такой форм-фактор при котором клавиатура укороченная, но все также имеет клавиши F, и стрелки.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/pa9/p84/24861823.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/aula-f75-seryi-120393754/?c=750000000'
        }
      ]
    },
    {
      id: 3,
      name: 'Laptops',
      products: [
        { 
          id: 8, 
          name: 'Lenovo IdeaPad 3', 
          description: 'Laptop with Intel Celeron processor and 4GB RAM, suitable for daily tasks.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-4-gb-ssd-256-gb-bez-os-15igl05-81wq00emrk-102878742/?c=750000000'
        },
        { 
          id: 9, 
          name: 'Thunderobot 911X Laptop', 
          description: 'Gaming laptop with high-end graphics and powerful components.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/h97/85277334405150.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2l-15-6-16-gb-ssd-512-gb-win-11-pro-jt009500e-116983567/?c=750000000'
        },
        { 
          id: 10, 
          name: 'Ноутбук ThundeRobot 911S Core D 15.6" / 16 Гб / SSD 512 Гб / Без ОС / JT009K00F', 
          description: 'Игровой ноутбук Thunderobot 911S Core D JT009K00F — 15.6-дюймовая модель с IPS-матрицей и разрешением 1920х1080 пикселей. Отличается высокой частотой обновления — достигает 144 Гц. Матовое покрытие экрана уменьшает количество бликов, обеспечивая комфортные условия для глаз.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000'
        },
        { 
          id: 11, 
          name: 'Ноутбук Acer Gadget E10 ETBook 14" / 16 Гб / SSD 512 Гб / Win 11 Home / 0167563995', 
          description: ' Тачпад чувствительный и отзывчивый, что делает работу с ним комфортной. Игры, такие как The Sims, ноутбук тянет без проблем - графика яркая и четкая.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/h1e/h68/86642069504030.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/acer-gadget-e10-etbook-14-16-gb-ssd-512-gb-win-11-home-0167563995-121895857/?c=750000000'
        },
        { 
          id: 12, 
          name: 'Ноутбук ThundeRobot Gravity 16 Max 16" / 32 Гб / SSD 1000 Гб / Win 11 Pro / JT009300G', 
          description: 'Ноутбук на новой платформе премиального уровня. Существенное отличие от платформ предыдущих поколений — устройство поддерживает зарядку и работу в офисном режиме от зарядного устройства USB-C PD 140 Вт, что позволяет добавить мобильности игровому ноутбуку, ранее привязанному к тяжелому и мощному блоку питания.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/h2d/h07/86600323399710.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/thunderobot-gravity-16-max-16-32-gb-ssd-1000-gb-win-11-pro-jt009300g-121721542/?c=750000000'
        }
      ]
    },
    {
      id: 4,
      name: 'Books',
      products: [
        { 
          id: 10, 
          name: 'Книга Клир Д.: Атомные привычки', 
          description: 'Лучшая деловая книга 2018 года по версии Fast Company.Лучшая книга по самопомощи 2018 года по версии Business Insider.Может ли одна монетка сделать человека богатым? Конечно нет, скажете вы. Но если добавить еще одну? И еще? И еще? В какой-то момент количество перейдет в качество.А теперь представьте, что одно крошечное изменение кардинально меняет всю жизнь. Звучит фантастически! Но, как и в случае с монетками, срабатывает эффект сложного процента.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/h9a/86244289314846.png?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/klir-d-atomnye-privychki-117680550/?c=750000000'
        },
        { 
          id: 11, 
          name: 'Книга Дамира Өмірзаққызы Ибрагим: Адамзаттың асыл тәжі', 
          description: 'Книга Дамира Өмірзаққызы Ибрагим "Адамзаттың асыл тәжі" посвящена жизни и деятельности Пророка Мухаммеда (мир ему и благословение) и его великому вкладу в развитие человечества. Автор исследует ключевые моменты из жизни пророка, подчеркивая его моральные качества, лидерские способности и влияние на становление исламской цивилизации. Книга наполнена глубокими размышлениями о важности духовных и нравственных принципов, пропагандируемых Пророком, и о том, как его учения помогают человечеству в поисках истины, справедливости и мира. "Адамзаттың асыл тәжі" служит ценным источником для тех, кто желает лучше понять наследие Пророка Мухаммеда и его роль в истории мировых религий.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/ha2/h5f/86166055419934.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/damira-m-rza-yzy-ibragim-adamzatty-asyl-t-zh--119954682/?c=750000000'
        },
        { 
          id: 12, 
          name: 'Книга Азамат Скаков: Sen. Әдет қалыптастыру әліппесі', 
          description: 'Азамат Скаков: Sen. Әдет қалыптастыру әліппесі — бұл кітап адам өміріндегі маңызды әдеттерді қалыптастыру мен олардың күнделікті өмірдегі рөліне арналады. Автор жеке дамуды, табысты болуды және психологиялық жайлылықты арттыру үшін қажетті дағдыларды дамытуға арналған практикалық кеңестер мен әдістер ұсынады. Кітапта күнделікті өмірде оң әдеттерді қалыптастыру, мақсатқа жету жолындағы қиындықтарды жеңу, және жеке тұлғаның психологиялық жағдайын жақсарту туралы айтылған. Sen. Әдет қалыптастыру әліппесі — бұл өзін-өзі дамытуға, жеке жетістікке жетуге және психологиялық тепе-теңдікті сақтауға бағытталған тиімді құрал.', 
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h4b/83690331635742.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/damira-m-rza-yzy-ibragim-adamzatty-asyl-t-zh--119954682/?c=750000000'
        },
        { 
          id: 13, 
          name: 'Книга Клейсон Д.: Самый богатый человек в Вавилоне', 
          description: '10 всемирно известных притч, которые полностью меняют ваше мышление. Оригинальная версия главной книги о богатстве теперь в самом полном и благозвучном переводе.',
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/hb9/h29/66560068780062.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/kleison-d-samyi-bogatyi-chelovek-v-vavilone-107914652/?c=750000000'
        },
        { 
          id: 14, 
          name: 'Книга Исабеков Д.: Гауһар тас', 
          description: ' Бұл шығарма қарапайым Алматы облысындағы ауылда тұратын отбасы туралы жазылаған және олардың тіршілігі керемет бейнеленген. Отбасының құрамы: Әкесі, Анасы, 2 баласы және отбасына жаңадан келген үлкен баланың әйелі. Д. Исабековтың «Гауһартас» шығармасы ағайындылардың екі түрлі тәрбие алуының нәтижесің көрсетеді. Үлкен баласы, Ыбыш, әкесі сияқты өте қатал, өз-өзін нағыз еркек деп санап, үнсіз, тек қана қажет кездерде сөйлейтін адам. Ал Ыбыштың інісі, Қайыркен, анасы сияқты таңғаларлық мейірімді, сезімшіл, әділ және шығармашылық адам. ',
          likes: 0,
          photo: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h99/64090025525278.jpg?format=gallery-medium', 
          link: 'https://kaspi.kz/shop/p/isabekov-d-gau-ar-tas-101501105/?c=750000000'
        }
      ]
    }
  ];

  selectedCategory: any = null;

  selectCategory(category: any) {
    this.selectedCategory = category;
  }

  onLike(productId: number) {
    const product = this.selectedCategory.products.find((p: any) => p.id === productId);
    if (product) {
      product.likes += 1;
    }
  }

  onRemove(productId: number) {
    this.selectedCategory.products = this.selectedCategory.products.filter((p: any) => p.id !== productId);
  }
}
