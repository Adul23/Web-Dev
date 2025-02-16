import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true, // Ensure standalone mode
  imports: [CommonModule], // Import CommonModule for directives like *ngFor
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'iPhone 13',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
      
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
      name: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
      description: 'Обзор смартфона Xiaomi Redmi 13C 8/256Gb Black · Данная модель оснащена IPS-дисплеем 6,74” с частотой обновления 90 Гц, а также тройной AI-фотокамерой на 50 Мп.',
      rating: 4.5,
      link: '',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h94/heb/84957845651486.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/h2d/84526902837278.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=gallery-medium',
      name: 'Мышь Wireless Mouse черный',
      description: 'Мышка средних габаритов удобно лежит в ладони любого размера, а симметричная форма позволяет использовать ее как правшам, так и левшам',
      rating: 5,
      link: '',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h6a/79480589680670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h80/hc6/63936669810718.jpg?format=gallery-medium',
      name: 'USB Flash карта Kingston DataTraveler Exodia DTX/64GB 64 Гб',
      description: 'Мышка средних габаритов удобно лежит в ладони любого размера, а симметричная форма позволяет использовать ее как правшам, так и левшам',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/kingston-datatraveler-exodia-dtx-64gb-64-gb-100759959/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8d/h23/63936672923678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h97/h9b/63936677380126.jpg?format=gallery-medium'
      ]
    }
    ,
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/h2b/69003730550814.jpg?format=gallery-medium',
      name: 'Сумка Portcase 9011 черный',
      description: 'Предназначен для удобной переноски и защиты устройства. Элегантный дизайн и функциональность позволяют использовать их как в повседневной жизни, так и в деловой обстановке. Внутренние отделения и мягкая подкладка помогают уберечь ноутбук от повреждений, а дополнительные карманы подходят для хранения аксессуаров и документов. Практичное решение для комфортного и безопасного использования вашего устройства.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfb/hea/69003731075102.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0c/hf8/69003731599390.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfc/hcb/79822872281118.jpg?format=gallery-medium'
      ]
    }, 
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/p8a/24789850.jpg?format=gallery-medium',
      name: 'Клавиатура AULA F75 белый',
      description: 'эргономическая.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h74/h31/85519448244254.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/hc3/85519448375326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb2/hfa/85519448178718.png?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h98/h11/82848377405470.png?format=gallery-medium',
      name: 'Операционная система Microsoft Windows 11 Professional 64-bit',
      description: 'проприетарная операционная система (ОС) для персональных компьютеров, разработанная компанией Microsoft в рамках семейства Windows NT',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/microsoft-windows-11-professional-64-bit-110955339/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h98/h11/82848377405470.png?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium',
      name: 'Ноутбук Lenovo IdeaPad 3 15.6" / 4 Гб / SSD 256 Гб / Без ОС / 15IGL05 / 81WQ00EMRK',
      description: 'IdeaPad 3 стоит, как обычный ноутбук для повседневного использования, однако это устройство способно на большее. Модель, оснащенная процессором Intel Celeron, оперативной памятью объемом 4 ГБ и SSD накопителем, превзойдет любые ваши ожидания. И в качестве бонуса — цифровая панель, с которой вы будете во всеоружии, если вам потребуется работать с электронными таблицами или рассчитать семейный бюджет.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-4-gb-ssd-256-gb-bez-os-15igl05-81wq00emrk-102878742/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h47/64373056897054.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hec/h98/64373091041310.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/h97/85277334405150.jpg?format=gallery-medium',
      name: 'Ноутбук ThundeRobot 911 X Wild Hunter G2L 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro / JT009500E',
      description: 'Игровой ноутбук THUNDEROBOT 911 X Wild Hunter G2L получил мощные компоненты, которые скрыты в тонком металлическом корпусе. Модель оснащена быстрым экраном, современной видеокартой на 105 Вт и производительным процессором, поэтому подходит для активного гейминга и работы с графикой. Операционная система Windows 11 Pro уже установлена.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2l-15-6-16-gb-ssd-512-gb-win-11-pro-jt009500e-116983567/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd3/h97/85277334405150.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haa/hc0/85277334470686.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h75/hd6/85277334536222.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      name: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3',
      description: 'MacBook Air 2022 года можно назвать одним из крупнейших обновлений линейки за всю историю. Он полностью изменился внешне, получил более новый и мощный процессор M2, улучшенную веб-камеру, квадрофонические динамики объёмного звучания, разъём MagSafe 3 и более новую клавиатуру, при этом вес ноутбука составляет всего 1240 граммов, а корпус, как и прежде, сделан из приятного алюминия.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h70/64509325803550.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/hb7/64509328457758.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h91/h27/85301691678750.jpg?format=gallery-medium',
      name: 'Ноутбук ThundeRobot 911S Core D 15.6" / 16 Гб / SSD 512 Гб / Без ОС / JT009K00F',
      description: 'Игровой ноутбук Thunderobot 911S Core D JT009K00F — 15.6-дюймовая модель с IPS-матрицей и разрешением 1920х1080 пикселей. Отличается высокой частотой обновления — достигает 144 Гц. Матовое покрытие экрана уменьшает количество бликов, обеспечивая комфортные условия для глаз.',
      rating: 4.98,
      link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/hf8/85301691613214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h91/h27/85301691678750.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h62/85527684087838.png?format=gallery-medium',
      name: 'Ноутбук ThundeRobot Zero Ultra XT R15 15.6" / 32 Гб / SSD 1000 Гб / Win 11 Pro /',
      description: 'Игровой ноутбук Thunderobot 911S Core D JT009K00F — 15.6-дюймовая модель с IPS-матрицей и разрешением 1920х1080 пикселей. Отличается высокой частотой обновления — достигает 144 Гц. Матовое покрытие экрана уменьшает количество бликов, обеспечивая комфортные условия для глаз.',
      rating: 4.99,
      link: 'https://kaspi.kz/shop/p/thunderobot-zero-ultra-xt-r15-15-6-32-gb-ssd-1000-gb-win-11-pro--117753657/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/h62/85527684087838.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h71/85527684153374.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he9/hb5/85527684218910.png?format=gallery-medium'
      ]
    }
  ];

  share(product: any, platform: string) {
    const url = encodeURIComponent(product.link);
    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${url}`, '_blank');
    } else if (platform === 'telegram') {
      window.open(`https://t.me/share/url?url=${url}`, '_blank');
    }
  }
}
