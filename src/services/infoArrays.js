export const restaurants = [
  {
    id: 0,
    name: "Burger Shot",
    type: 1,
    img: "https://cdn1.epicgames.com/ue/product/Screenshot/Image02-1920x1080-fa1a6bf20065289d788b7a0cd9d3df93.png?resize=1&w=1920",
    calification: 3,
    workTime: "09:30 - 23:00",
    pricesFrom: 4,
    description:
      "Especialistas en la preparación y venta de comidas como hamburguesas, papas fritas, hot dogs, pizzas, ensaladas etc",
    timeDelivery: "15-20 min",
  },
  {
    id: 1,
    name: "Pardes Restaurant",
    type: 1,
    img: "https://storage.googleapis.com/onmilwaukee-article-images/variants/pb1bo9jra9a0v7b1o99dvve5g3oy/ff35c9310a7d5016e76853b0df7d033449d793b6f6dc2e4a0b4bc844add6c385",
    calification: 4,
    workTime: "10:30 - 23:00",
    pricesFrom: 20,
    foods: 2,
    description:
      "Ofrecemos un menú variado que incluye pizzas clásicas como margarita, pepperoni, hawaiana, opciones vegetarianas, veganas y sin gluten ",
    timeDelivery: "30-50 min",
  },
  {
    id: 2,
    name: "Last Stop",
    type: 2,
    img: "https://toohotel.com/wp-content/uploads/2022/09/TOO_restaurant_Panoramique_vue_Paris_nuit_v2-scaled.jpg",
    calification: 5,
    workTime: "8:30 - 23:00",
    pricesFrom: 30,
    foods: 3,
    description:
      "los clientes pueden elegir entre una variedad de ensaladas, que pueden incluir lechugas variadas, verduras frescas.",
    timeDelivery: "1-2 horas",
  },
  {
    id: 3,
    name: "La Pastisseria",
    type: 2,
    img: "https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg",
    calification: 3,
    workTime: "11:30 - 21:00",
    pricesFrom: 25,
    foods: 4,
    description:
      "Los clientes pueden elegir entre una variedad de pastas frescas, que pueden incluir fettuccine, spaghetti, penne, gnocchi, lasagna, entre otras.",
    timeDelivery: "1-2 horas",
  },
];

export const infoFoods = [
  {
    id: 0,
    name: "Hamburguesa Clásica",
    img: "https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4e4293857c03d819e4ae51de1e86d66a.jpg",
    type: 0,
    restaurant: 0,
    price: 12000,
    description:
      " Hamburguesa de carne, queso cheddar, lechuga, tomate, cebolla y salsa especial.",
    aditions: [
      {
        id: 0,
        name: "Tocineta",
        price: 4000,
      },
      {
        id: 1,
        name: "Queso",
        price: 5000,
      },
      {
        id: 2,
        name: "salsa BBQ",
        price: 2000,
      },
    ],
  },
  {
    id: 1,
    name: "Hamburguesa BBQ",
    img: "https://chefeel.com/chefgeneralfiles/2022/06/burg-880x863.jpg",
    type: 0,
    restaurant: 0,
    price: 18000,
    description:
      "Hamburguesa de carne, queso cheddar, tocino, cebolla caramelizada, lechuga y salsa BBQ.",
    aditions: [
      {
        id: 0,
        name: "Tocineta",
        price: 4000,
      },
      {
        id: 1,
        name: "Queso",
        price: 5000,
      },
      {
        id: 2,
        name: "salsa BBQ",
        price: 2000,
      },
    ],
  },
  {
    id: 2,
    name: "Hamburguesa Mexicana",
    img: "https://merenderolasbrisas.co/wp-content/uploads/2017/10/Hamburguesa-Brisas-Mexicana1-2-7.jpg",
    type: 0,
    restaurant: 0,
    price: 22000,
    description:
      "Hamburguesa de carne, queso cheddar, jalapeños, guacamole, tomate y salsa picante.",
    aditions: [
      {
        id: 0,
        name: "Tocineta",
        price: 4000,
      },
      {
        id: 1,
        name: "Queso",
        price: 5000,
      },
      {
        id: 2,
        name: "salsa BBQ",
        price: 2000,
      },
    ],
  },
  {
    id: 3,
    name: "Hamburguesa vegetariana",
    img: "https://img2.rtve.es/imagenes/receta-hamburguesa-vegetariana/1625253973460.jpg",
    type: 0,
    restaurant: 0,
    price: 13000,
    description:
      "Hamburguesa de lentejas, queso de cabra, espinacas, tomate seco y salsa de yogur.",
    aditions: [
      {
        id: 0,
        name: "Carne de lentejas",
        price: 4000,
      },
      {
        id: 1,
        name: "Queso",
        price: 5000,
      },
      {
        id: 2,
        name: "salsa de soya",
        price: 2000,
      },
    ],
  },
  {
    id: 4,
    name: "Hamburguesa Hawaiana",
    img: "https://miraquereceta.com/wp-content/uploads/2020/07/Hamburguesa-hawaiana.png",
    type: 0,
    restaurant: 0,
    price: 13000,
    description:
      "Hamburguesa de pollo, queso cheddar, piña, lechuga y salsa teriyaki.",
    aditions: [
      {
        id: 0,
        name: "Tocineta",
        price: 4000,
      },
      {
        id: 1,
        name: "Queso",
        price: 5000,
      },
      {
        id: 2,
        name: "salsa BBQ",
        price: 2000,
      },
    ],
  },
  {
    id: 5,
    name: "Hamburguesa Deluxe",
    img: "https://www.elespectador.com/resizer/GTaYjwYgjDhrZyiy2WyadYurt-4=/arc-anglerfish-arc2-prod-elespectador/public/N5EPKUWMIVH4RCPNDM7OP5OKQQ.jpeg",
    type: 0,
    restaurant: 0,
    price: 20000,
    description:
      "Hamburguesa de carne, queso azul, tocino, huevo frito, lechuga y mayonesa.",
    aditions: [
      {
        id: 0,
        name: "Tocineta",
        price: 4000,
      },
      {
        id: 1,
        name: "Queso Azúl",
        price: 8000,
      },
      {
        id: 2,
        name: "Maices cremosos",
        price: 5000,
      },
    ],
  },
  {
    id: 6,
    name: "Papas Parmesanas",
    img: "http://assets.kraftfoods.com/recipe_images/opendeploy/201858_640x428.jpg",
    type: 1,
    restaurant: 0,
    price: 18000,
    description: "Papas fritas con queso parmesano rallado y hierbas.",
    aditions: [
      {
        id: 0,
        name: "Salchicha ranchera",
        price: 4000,
      },
      {
        id: 1,
        name: "Queso",
        price: 8000,
      },
      {
        id: 2,
        name: "Tocineta",
        price: 5000,
      },
    ],
  },
  {
    id: 7,
    name: "Papas Ajo y hierbas",
    img: "https://www.recetin.com/wp-content/uploads/2013/09/patatas_especias.jpg",
    type: 1,
    restaurant: 0,
    price: 15000,
    description:
      "Papas fritas con ajo picado y hierbas frescas como tomillo o romero.",
    aditions: [
      {
        id: 0,
        name: "Salchicha ranchera",
        price: 4000,
      },
      {
        id: 1,
        name: "Queso",
        price: 8000,
      },
      {
        id: 2,
        name: "Tocineta",
        price: 5000,
      },
    ],
  },
  {
    id: 8,
    name: "Papas Dulces",
    img: "https://images.cookforyourlife.org/wp-content/uploads/2015/08/shutterstock_762822427-Savory-Sweet-Potato-Fries.jpg",
    type: 1,
    restaurant: 0,
    price: 17000,
    description:
      "Papas fritas de batata o camote, sazonadas con canela y azúcar.",
    aditions: [
      {
        id: 0,
        name: "Salchicha ranchera",
        price: 4000,
      },
      {
        id: 1,
        name: "Queso",
        price: 8000,
      },
      {
        id: 2,
        name: "Tocineta",
        price: 5000,
      },
    ],
  },
  {
    id: 9,
    name: "Papas Cajún",
    img: "https://okdiario.com/img/2019/08/15/receta-de-patatas-cajun-al-microondas.jpg",
    type: 1,
    restaurant: 0,
    price: 23000,
    description: "Papas fritas sazonadas con una mezcla de especias cajún.",
    aditions: [
      {
        id: 0,
        name: "Salchicha ranchera",
        price: 4000,
      },
      {
        id: 1,
        name: "Queso",
        price: 8000,
      },
      {
        id: 2,
        name: "Tocineta",
        price: 5000,
      },
    ],
  },
  {
    id: 10,
    name: "Papas cargadas",
    img: "https://dopeysden.com/wp-content/uploads/2022/06/image-3-683x1024.png",
    type: 1,
    restaurant: 0,
    price: 25000,
    description:
      "Papas fritas cubiertas con queso cheddar, tocino y cebolla verde.",
    aditions: [
      {
        id: 0,
        name: "Salchicha ranchera",
        price: 4000,
      },
      {
        id: 1,
        name: "Queso",
        price: 8000,
      },
      {
        id: 2,
        name: "Tocineta",
        price: 5000,
      },
    ],
  },
  {
    id: 11,
    name: "Papas Clásicas",
    img: "https://img-global.cpcdn.com/recipes/eda404215497cd6c/680x482cq70/papas-clasicas-al-horno-con-tips-foto-principal.jpg",
    type: 1,
    restaurant: 0,
    price: 12000,
    description: "Papas fritas cortadas en bastones y sazonadas con sal.",
    aditions: [
      {
        id: 0,
        name: "Salchicha ranchera",
        price: 4000,
      },
      {
        id: 1,
        name: "Queso",
        price: 8000,
      },
      {
        id: 2,
        name: "Tocineta",
        price: 5000,
      },
    ],
  },
  {
    id: 12,
    name: "Burrito de cerdo",
    img: "https://www.goya.com/media/4141/chipotle-pork-burritos.jpg?quality=80",
    type: 2,
    restaurant: 0,
    price: 12000,
    description: "Cerdo asado, arroz, frijoles, queso, lechuga y salsa.",
    aditions: [
      {
        id: 0,
        name: "Chorizo argentino",
        price: 3000,
      },
      {
        id: 1,
        name: "Queso Chedar",
        price: 6000,
      },
      {
        id: 2,
        name: "Tocineta",
        price: 5000,
      },
    ],
  },
  {
    id: 13,
    name: "Burrito de pollo",
    img: "https://www.pequerecetas.com/wp-content/uploads/2012/01/burritos-de-pollo.jpg",
    type: 2,
    restaurant: 0,
    price: 9000,
    description:
      "Pollo a la parrilla, arroz, frijoles negros, queso, lechuga y salsa.",
    aditions: [
      {
        id: 0,
        name: "Queso crema",
        price: 3000,
      },
      {
        id: 1,
        name: "Queso Azúl",
        price: 6000,
      },
      {
        id: 2,
        name: "Tocineta",
        price: 5000,
      },
    ],
  },
  {
    id: 14,
    name: "Burrito clásico",
    img: "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09213530/RFB-2312-1-burrito.jpg",
    type: 2,
    restaurant: 0,
    price: 8000,
    description:
      "Carne de res, frijoles negros, arroz, queso, lechuga y salsa.",
    aditions: [
      {
        id: 0,
        name: "Queso crema",
        price: 3000,
      },
      {
        id: 1,
        name: "Queso Azúl",
        price: 6000,
      },
      {
        id: 2,
        name: "Tocineta",
        price: 5000,
      },
    ],
  },
  {
    id: 15,
    name: "Burrito vegetariano",
    img: "https://assets.epicurious.com/photos/57978b27c9298e54495917d5/master/w_1000,h_662,c_limit/black-bean-and-vegetable-burritos.jpg",
    type: 2,
    restaurant: 0,
    price: 9000,
    description:
      "Tofu o falafel, arroz integral, frijoles, aguacate, lechuga y salsa.",
    aditions: [
      {
        id: 0,
        name: "Queso crema",
        price: 3000,
      },
      {
        id: 1,
        name: "Queso Azúl",
        price: 6000,
      },
      {
        id: 2,
        name: "Tofu",
        price: 5000,
      },
    ],
  },
  {
    id: 16,
    name: "Burrito de camarones",
    img: "https://tofuu.getjusto.com/orioneat-local/resized2/CY39TZpJNDNxEF7YD-1200-1200.webp",
    type: 2,
    restaurant: 0,
    price: 21000,
    description:
      "Camarones salteados, arroz, frijoles, queso, lechuga y salsa.",
    aditions: [
      {
        id: 0,
        name: "Queso crema",
        price: 3000,
      },
      {
        id: 1,
        name: "Queso Azúl",
        price: 6000,
      },
      {
        id: 2,
        name: "Tocineta",
        price: 5000,
      },
    ],
  },
  {
    id: 17,
    name: "Burrito de desayuno",
    img: "https://www.goya.com/media/3172/black-bean-breakfast-burritos.jpg?quality=80",
    type: 2,
    restaurant: 0,
    price: 9000,
    description:
      "Huevos revueltos, tocino, papas fritas, queso, tomate y salsa.",
    aditions: [
      {
        id: 0,
        name: "Queso crema",
        price: 3000,
      },
      {
        id: 1,
        name: "Queso Azúl",
        price: 6000,
      },
      {
        id: 2,
        name: "Tocineta",
        price: 5000,
      },
    ],
  },
  {
    id: 18,
    name: "Pizza Margarita",
    img: "https://cdn.colombia.com/gastronomia/2011/08/25/pizza-margarita-3684-1.jpg",
    type: 0,
    restaurant: 1,
    price: 13000,
    description:
      "Salsa de tomate, mozzarella fresca, albahaca y aceite de oliva.",
    aditions: [
      {
        id: 0,
        name: "Tocino",
        price: 7000,
      },
      {
        id: 1,
        name: "Carne",
        price: 6000,
      },
      {
        id: 2,
        name: "Tocineta",
        price: 5000,
      },
      {
        id: 3,
        name: "Aceitunas",
        price: 2000,
      },
      {
        id: 4,
        name: "Anchoas",
        price: 3000,
      },
      {
        id: 5,
        name: "Salchicha",
        price: 6000,
      },
      {
        id: 6,
        name: "Tomate seco",
        price: 3000,
      },
      {
        id: 7,
        name: "Champiñones",
        price: 5000,
      },
    ],
  },
  {
    id: 19,
    name: "Pizza Hawaiana",
    img: "https://napolicartagena.com/wp-content/uploads/2022/01/La-Pizza-Hawaiana-de-Canada.jpg",
    type: 0,
    restaurant: 1,
    price: 15000,
    description: "Salsa de tomate, mozzarella, jamón, piña y jalapeños.",
    aditions: [
      {
        id: 0,
        name: "Tocino",
        price: 7000,
      },
      {
        id: 1,
        name: "Carne",
        price: 6000,
      },
      {
        id: 2,
        name: "Tocineta",
        price: 5000,
      },
      {
        id: 3,
        name: "Aceitunas",
        price: 2000,
      },
      {
        id: 4,
        name: "Anchoas",
        price: 3000,
      },
      {
        id: 5,
        name: "Salchicha",
        price: 6000,
      },
      {
        id: 6,
        name: "Tomate seco",
        price: 3000,
      },
      {
        id: 7,
        name: "Champiñones",
        price: 5000,
      },
    ],
  },
  {
    id: 20,
    name: "Pizza Cuatro Quesos",
    img: "https://www.cocinatis.com/archivos/202207/CTIS0093-receta-pizza-cuatro-quesos_B3N6zYV_large_16x9.jpg",
    type: 0,
    restaurant: 1,
    price: 23000,
    description: "Mozzarella, queso gorgonzola, queso brie y queso parmesano.",
    aditions: [
      {
        id: 0,
        name: "Tocino",
        price: 7000,
      },
      {
        id: 1,
        name: "Carne",
        price: 6000,
      },
      {
        id: 2,
        name: "Tocineta",
        price: 5000,
      },
      {
        id: 3,
        name: "Aceitunas",
        price: 2000,
      },
      {
        id: 4,
        name: "Anchoas",
        price: 3000,
      },
      {
        id: 5,
        name: "Salchicha",
        price: 6000,
      },
      {
        id: 6,
        name: "Tomate seco",
        price: 3000,
      },
      {
        id: 7,
        name: "Champiñones",
        price: 5000,
      },
    ],
  },
  {
    id: 21,
    name: "Pizza Barbacoa",
    img: "https://www.unileverfoodsolutions.es/dam/global-ufs/mcos/SPAIN/calcmenu/recipes/ES-recipes/general/pizza-barbacoa/main-header.jpg",
    type: 0,
    restaurant: 1,
    price: 25000,
    description:
      "Salsa de barbacoa, mozzarella, pollo a la parrilla, cebolla y cilantro.",
    aditions: [
      {
        id: 0,
        name: "Tocino",
        price: 7000,
      },
      {
        id: 1,
        name: "Carne",
        price: 6000,
      },
      {
        id: 2,
        name: "Tocineta",
        price: 5000,
      },
      {
        id: 3,
        name: "Aceitunas",
        price: 2000,
      },
      {
        id: 4,
        name: "Anchoas",
        price: 3000,
      },
      {
        id: 5,
        name: "Salchicha",
        price: 6000,
      },
      {
        id: 6,
        name: "Tomate seco",
        price: 3000,
      },
      {
        id: 7,
        name: "Champiñones",
        price: 5000,
      },
    ],
  },
  {
    id: 22,
    name: "Pizza Vegetariana",
    img: "https://chacarabertolin.com.br/wp-content/uploads/2018/07/pizza-frango-pimentao.jpg",
    type: 0,
    restaurant: 1,
    price: 20000,
    description:
      "Salsa de tomate, mozzarella, champiñones, pimientos, cebolla y aceitunas.",
    aditions: [
      {
        id: 0,
        name: "Tocino",
        price: 7000,
      },
      {
        id: 1,
        name: "Carne",
        price: 6000,
      },
      {
        id: 2,
        name: "Tocineta",
        price: 5000,
      },
      {
        id: 3,
        name: "Aceitunas",
        price: 2000,
      },
      {
        id: 4,
        name: "Anchoas",
        price: 3000,
      },
      {
        id: 5,
        name: "Salchicha",
        price: 6000,
      },
      {
        id: 6,
        name: "Tomate seco",
        price: 3000,
      },
      {
        id: 7,
        name: "Champiñones",
        price: 5000,
      },
    ],
  },
  {
    id: 23,
    name: "Pizza Pepperoni",
    img: "https://images.hola.com/imagenes/cocina/recetas/20220208204252/pizza-pepperoni-mozzarella/1-48-890/pepperoni-pizza-abob-t.jpg",
    type: 0,
    restaurant: 1,
    price: 24000,
    description: "Salsa de tomate, mozzarella y pepperoni.",
    aditions: [
      {
        id: 0,
        name: "Tocino",
        price: 7000,
      },
      {
        id: 1,
        name: "Carne",
        price: 6000,
      },
      {
        id: 2,
        name: "Tocineta",
        price: 5000,
      },
      {
        id: 3,
        name: "Aceitunas",
        price: 2000,
      },
      {
        id: 4,
        name: "Anchoas",
        price: 3000,
      },
      {
        id: 5,
        name: "Salchicha",
        price: 6000,
      },
      {
        id: 6,
        name: "Tomate seco",
        price: 3000,
      },
      {
        id: 7,
        name: "Champiñones",
        price: 5000,
      },
    ],
  },
  {
    id: 24,
    name: "Quesadilla de pollo",
    img: "https://www.recetasdejusticia.com/wp-content/uploads/2021/01/Receta_de_quesadillas_de_pollo.jpg",
    type: 1,
    restaurant: 1,
    price: 9000,
    description:
      "Pollo a la parrilla, queso cheddar y queso Monterey Jack en una tortilla de harina.",
    aditions: [
      {
        id: 0,
        name: "Jalapeños",
        price: 3000,
      },
      {
        id: 1,
        name: "Tomates dulces",
        price: 6000,
      },
      {
        id: 2,
        name: "Aguacate",
        price: 5000,
      },
    ],
  },
  {
    id: 25,
    name: "Quesadilla de verduras",
    img: "https://cdn2.cocinadelirante.com/sites/default/files/images/2016/09/quesadillaconverduras2_0.jpg",
    type: 1,
    restaurant: 1,
    price: 15000,
    description:
      "Una mezcla de vegetales a la parrilla (como calabacín, pimiento y cebolla), queso cheddar y queso Monterey Jack en una tortilla de harina.",
    aditions: [
      {
        id: 0,
        name: "Jalapeños",
        price: 3000,
      },
      {
        id: 1,
        name: "Tomates dulces",
        price: 6000,
      },
      {
        id: 2,
        name: "Aguacate",
        price: 5000,
      },
    ],
  },
  {
    id: 26,
    name: "Quesadilla de carne asada",
    img: "https://familiakitchen.com/wp-content/uploads/2022/07/iStock-1320209199-Anjie-quesadillas-carne-asada-3.jpg",
    type: 1,
    restaurant: 1,
    price: 26000,
    description:
      "Carne asada a la parrilla, queso cheddar y queso Monterey Jack en una tortilla de harina.",
    aditions: [
      {
        id: 0,
        name: "Jalapeños",
        price: 3000,
      },
      {
        id: 1,
        name: "Tomates dulces",
        price: 6000,
      },
      {
        id: 2,
        name: "Aguacate",
        price: 5000,
      },
    ],
  },
  {
    id: 27,
    name: "Quesadilla de camarones",
    img: "https://tropicalcheese.com/wp-content/uploads/2019/03/cheese-shrimp-avocado-quesadilla-1280x640.jpg",
    type: 1,
    restaurant: 1,
    price: 19000,
    description:
      "Camarones a la parrilla, queso cheddar y queso Monterey Jack en una tortilla de harina.",
    aditions: [
      {
        id: 0,
        name: "Jalapeños",
        price: 3000,
      },
      {
        id: 1,
        name: "Tomates dulces",
        price: 6000,
      },
      {
        id: 2,
        name: "Aguacate",
        price: 5000,
      },
    ],
  },
  {
    id: 28,
    name: "Quesadilla champiñones",
    img: "https://unareceta.com/wp-content/uploads/2016/08/receta-Quesadilla-de-champi%C3%B1ones.jpg",
    type: 1,
    restaurant: 1,
    price: 19000,
    description:
      "Espinacas, champiñones, queso cheddar y queso Monterey Jack en una tortilla de harina.",
    aditions: [
      {
        id: 0,
        name: "Jalapeños",
        price: 3000,
      },
      {
        id: 1,
        name: "Tomates dulces",
        price: 6000,
      },
      {
        id: 2,
        name: "Aguacate",
        price: 5000,
      },
    ],
  },
  {
    id: 29,
    name: "Quesadilla jamón y queso",
    img: "http://estoyhechouncocinillas.com/wp-content/uploads/2021/04/quesadillas-de-jamon-y-queso-sincronizadas.jpg",
    type: 1,
    restaurant: 1,
    price: 12000,
    description:
      "Jamón y queso cheddar y queso Monterey Jack en una tortilla de harina.",
    aditions: [
      {
        id: 0,
        name: "Jalapeños",
        price: 3000,
      },
      {
        id: 1,
        name: "Tomates dulces",
        price: 6000,
      },
      {
        id: 2,
        name: "Aguacate",
        price: 5000,
      },
    ],
  },
  {
    id: 30,
    name: "Alitas tradicionales",
    img: "https://www.recetasderechupete.com/wp-content/uploads/2018/06/alitas-de-pollo-horno.jpg",
    type: 2,
    restaurant: 1,
    price: 18000,
    description:
      "Alas de pollo fritas con una salsa picante, ajo y mantequilla.",
    aditions: [
      {
        id: 0,
        name: "Salsa de ajo",
        price: 2000,
      },
      {
        id: 1,
        name: "Miel mostaza",
        price: 3000,
      },
      {
        id: 2,
        name: "Cayena",
        price: 5000,
      },
    ],
  },
  {
    id: 31,
    name: "Alitas BBQ",
    img: "https://assets.unileversolutions.com/recipes-v2/231986.jpg",
    type: 2,
    restaurant: 1,
    price: 20000,
    description:
      "Alas de pollo cubiertas con salsa BBQ y a la parrilla o al horno.",
    aditions: [
      {
        id: 0,
        name: "Salsa de ajo",
        price: 2000,
      },
      {
        id: 1,
        name: "Miel mostaza",
        price: 3000,
      },
      {
        id: 2,
        name: "Cayena",
        price: 5000,
      },
    ],
  },
  {
    id: 32,
    name: "Alitas asiáticas",
    img: "https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2021/02/como-preparar-alitas-de-pollo-asiaticas.jpg",
    type: 2,
    restaurant: 1,
    price: 27000,
    description:
      "Alas de pollo fritas con una salsa picante y cremosa, generalmente acompañadas de zanahoria y apio fresco.",
    aditions: [
      {
        id: 0,
        name: "Salsa de ajo",
        price: 2000,
      },
      {
        id: 1,
        name: "Miel mostaza",
        price: 3000,
      },
      {
        id: 2,
        name: "Cayena",
        price: 5000,
      },
    ],
  },
  {
    id: 33,
    name: "Alitas Buffalo",
    img: "https://www.deliciosi.com/images/1100/1197/alitas-de-pollo-picantes.jpg",
    type: 2,
    restaurant: 1,
    price: 23000,
    description:
      "Alas de pollo fritas con una salsa picante y cremosa, generalmente acompañadas de zanahoria y apio fresco.",
    aditions: [
      {
        id: 0,
        name: "Salsa de ajo",
        price: 2000,
      },
      {
        id: 1,
        name: "Miel mostaza",
        price: 3000,
      },
      {
        id: 2,
        name: "Cayena",
        price: 5000,
      },
    ],
  },
  {
    id: 34,
    name: "Alitas teriyaki",
    img: "https://i.blogs.es/e9b585/alitas-teriyaki-180317-0001/450_1000.jpg",
    type: 2,
    restaurant: 1,
    price: 25000,
    description:
      "Alas de pollo fritas o asadas con salsa teriyaki y semillas de sésamo.",
    aditions: [
      {
        id: 0,
        name: "Salsa de ajo",
        price: 2000,
      },
      {
        id: 1,
        name: "Miel mostaza",
        price: 3000,
      },
      {
        id: 2,
        name: "Cayena",
        price: 5000,
      },
    ],
  },
  {
    id: 35,
    name: "Alitas limón y pimienta",
    img: "https://img.bylauragarcia.com/contenedorblog/bbfa2501-64c5-4a04-a937-1fba71b3ed2e_alitasdepollo2.jpg",
    type: 2,
    restaurant: 1,
    price: 24000,
    description:
      "Alas de pollo asadas o fritas con un adobo de limón y pimienta.",
    aditions: [
      {
        id: 0,
        name: "Salsa de ajo",
        price: 2000,
      },
      {
        id: 1,
        name: "Miel mostaza",
        price: 3000,
      },
      {
        id: 2,
        name: "Cayena",
        price: 5000,
      },
    ],
  },
  {
    id: 36,
    name: "Ensalada César",
    img: "https://cecotec.es/recetas/wp-content/uploads/2022/11/Cecofry_Ensalada-Cesar_ligera_RRSS-1.jpg",
    type: 0,
    restaurant: 2,
    price: 30000,
    description:
      "Lechuga romana, pollo a la parrilla, croutones, queso parmesano y aderezo César.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Tofu",
        price: 4000,
      },
      {
        id: 2,
        name: "Carne",
        price: 7000,
      },
    ],
  },
  {
    id: 37,
    name: "Ensalada Mediterránea",
    img: "https://elmen.pe/wp-content/uploads/2022/01/Ensalada-mediterranea.jpg",
    type: 0,
    restaurant: 2,
    price: 45000,
    description:
      "Lechuga mixta, tomates cherry, pepino, aceitunas, queso feta y aderezo de vinagreta.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Tofu",
        price: 4000,
      },
      {
        id: 2,
        name: "Carne",
        price: 7000,
      },
    ],
  },
  {
    id: 38,
    name: "Ensalada de pollo y aguacate",
    img: "https://okdiario.com/img/2019/08/10/receta-de-ensalada-con-aguacate-y-pollo-asado-1-655x368.jpg",
    type: 0,
    restaurant: 2,
    price: 25000,
    description:
      "Lechuga, pollo a la parrilla, aguacate, tomate, cebolla roja y aderezo ranch.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Tofu",
        price: 4000,
      },
      {
        id: 2,
        name: "Carne",
        price: 7000,
      },
    ],
  },
  {
    id: 39,
    name: "Ensalada de espinacas y fresas",
    img: "https://es.rc-cdn.community.thermomix.com/recipeimage/fqj2iquj-3e299-490562-88c8b-ing5uf77/05addd97-c10b-4725-a176-611c54e1458a/large/ensalada-de-espinacas-con-fresas-y-nueces.png",
    type: 0,
    restaurant: 2,
    price: 50000,
    description:
      "Espinacas frescas, fresas, queso de cabra, nueces caramelizadas y aderezo balsámico.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Tofu",
        price: 4000,
      },
      {
        id: 2,
        name: "Carne",
        price: 7000,
      },
    ],
  },
  {
    id: 40,
    name: "Ensalada de atún",
    img: "https://inmamamaggieskitchen.com/wp-content/uploads/2022/04/Ensalada-de-Atun.jpg",
    type: 0,
    restaurant: 2,
    price: 55000,
    description:
      "Lechuga, atún enlatado, huevo duro, tomate, pepino y aderezo de mostaza y miel.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Tofu",
        price: 4000,
      },
      {
        id: 2,
        name: "Carne",
        price: 7000,
      },
    ],
  },
  {
    id: 41,
    name: "Ensalada de col y zanahoria",
    img: "https://recetasconzanahoria.com/wp-content/uploads/2020/08/ensalada-repollo-zanahoria.jpg",
    type: 0,
    restaurant: 2,
    price: 28000,
    description:
      "Repollo y zanahoria rallados, pasas, manzana y aderezo de mayonesa y vinagre.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Pollo",
        price: 7000,
      },
      {
        id: 2,
        name: "Camarones",
        price: 15000,
      },
      {
        id: 3,
        name: "Tomates secos",
        price: 4000,
      },
      {
        id: 4,
        name: "Aceitunas",
        price: 6000,
      },
      {
        id: 5,
        name: "Esparragos",
        price: 6000,
      },
    ],
  },
  {
    id: 42,
    name: "Sopa de tomate",
    img: "https://t1.uc.ltmcdn.com/es/posts/3/0/9/como_hacer_sopa_de_tomate_casera_25903_orig.jpg",
    type: 1,
    restaurant: 2,
    price: 28000,
    description:
      "Sopa cremosa hecha con tomates frescos, cebolla y ajo, generalmente acompañada de croutones o pan tostado.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Pollo",
        price: 7000,
      },
      {
        id: 2,
        name: "Camarones",
        price: 15000,
      },
      {
        id: 3,
        name: "Carne de res",
        price: 6000,
      },
      {
        id: 4,
        name: "Papas salteadas",
        price: 6000,
      },
      {
        id: 5,
        name: "Zanahorias",
        price: 6000,
      },
      {
        id: 6,
        name: "Apio",
        price: 6000,
      },
    ],
  },
  {
    id: 43,
    name: "Sopa de champiñones",
    img: "https://images.hola.com/imagenes/cocina/recetas/20191023152380/sopa-de-champinones/0-737-313/sopa-champi-adobe-m.jpg",
    type: 1,
    restaurant: 2,
    price: 28000,
    description:
      "Sopa cremosa hecha con champiñones, cebolla y caldo de pollo, generalmente servida con pan tostado.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Pollo",
        price: 7000,
      },
      {
        id: 2,
        name: "Camarones",
        price: 15000,
      },
      {
        id: 3,
        name: "Carne de res",
        price: 6000,
      },
      {
        id: 4,
        name: "Papas salteadas",
        price: 6000,
      },
      {
        id: 5,
        name: "Zanahorias",
        price: 6000,
      },
      {
        id: 6,
        name: "Apio",
        price: 6000,
      },
    ],
  },
  {
    id: 44,
    name: "Sopa de lentejas",
    img: "https://imag.bonviveur.com/sopa-de-lentejas.jpg",
    type: 1,
    restaurant: 2,
    price: 28000,
    description:
      "Sopa hecha con lentejas, verduras y especias, generalmente servida con pan.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Pollo",
        price: 7000,
      },
      {
        id: 2,
        name: "Camarones",
        price: 15000,
      },
      {
        id: 3,
        name: "Carne de res",
        price: 6000,
      },
      {
        id: 4,
        name: "Papas salteadas",
        price: 6000,
      },
      {
        id: 5,
        name: "Zanahorias",
        price: 6000,
      },
      {
        id: 6,
        name: "Apio",
        price: 6000,
      },
    ],
  },
  {
    id: 45,
    name: "Sopa de pollo y verduras",
    img: "https://cocina-casera.com/wp-content/uploads/2017/12/Sopa-de-pollo.jpg",
    type: 1,
    restaurant: 2,
    price: 28000,
    description:
      " Sopa hecha con pollo, verduras y fideos, generalmente servida con pan.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Pollo",
        price: 7000,
      },
      {
        id: 2,
        name: "Camarones",
        price: 15000,
      },
      {
        id: 3,
        name: "Carne de res",
        price: 6000,
      },
      {
        id: 4,
        name: "Papas salteadas",
        price: 6000,
      },
      {
        id: 5,
        name: "Zanahorias",
        price: 6000,
      },
      {
        id: 6,
        name: "Apio",
        price: 6000,
      },
    ],
  },
  {
    id: 46,
    name: "Sopa de maíz",
    img: "https://www.recetasderechupete.com/wp-content/uploads/2021/04/Corn-Chowder-1.jpg",
    type: 1,
    restaurant: 2,
    price: 28000,
    description:
      "Sopa cremosa hecha con maíz fresco, leche y especias, generalmente servida con tortilla chips o pan tostado.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Pollo",
        price: 7000,
      },
      {
        id: 2,
        name: "Camarones",
        price: 15000,
      },
      {
        id: 3,
        name: "Carne de res",
        price: 6000,
      },
      {
        id: 4,
        name: "Papas salteadas",
        price: 6000,
      },
      {
        id: 5,
        name: "Zanahorias",
        price: 6000,
      },
      {
        id: 6,
        name: "Apio",
        price: 6000,
      },
    ],
  },
  {
    id: 47,
    name: "Sopa de cebolla",
    img: "https://images.hola.com/imagenes/cocina/recetas/20191115153963/sopa-cebolla-gratinada-queso/0-745-600/sopa-cebolla-adobe-m.jpg",
    type: 1,
    restaurant: 2,
    price: 28000,
    description:
      "Sopa hecha con cebolla caramelizada y caldo de carne, generalmente cubierta con queso gratinado y servida con pan tostado.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Pollo",
        price: 7000,
      },
      {
        id: 2,
        name: "Camarones",
        price: 15000,
      },
      {
        id: 3,
        name: "Carne de res",
        price: 6000,
      },
      {
        id: 4,
        name: "Papas salteadas",
        price: 6000,
      },
      {
        id: 5,
        name: "Zanahorias",
        price: 6000,
      },
      {
        id: 6,
        name: "Apio",
        price: 6000,
      },
    ],
  },
  {
    id: 48,
    name: "Frutas del bosque",
    img: "https://www.comedera.com/wp-content/uploads/2022/05/batidos-frutas-del-bosque.jpg",
    type: 2,
    restaurant: 2,
    price: 12000,
    description:
      "Sopa hecha con cebolla caramelizada y caldo de carne, generalmente cubierta con queso gratinado y servida con pan tostado.",
    aditions: [
      {
        id: 0,
        name: "Proteina",
        price: 7000,
      },
      {
        id: 1,
        name: "Avena",
        price: 2000,
      },
      {
        id: 2,
        name: "Miel",
        price: 2000,
      },
      {
        id: 3,
        name: "Jarabe de arce",
        price: 6000,
      },
      {
        id: 4,
        name: "Jengibre",
        price: 3000,
      },
      {
        id: 5,
        name: "Canela",
        price: 2000,
      },
    ],
  },
  {
    id: 49,
    name: "Plátano y maní",
    img: "https://www.gastrolabweb.com/u/fotografias/m/2021/6/16/f850x638-14846_92335_6842.jpg",
    type: 2,
    restaurant: 2,
    price: 14000,
    description:
      " Batido hecho con plátanos maduros, mantequilla de maní, leche o yogurt, y hielo.",
    aditions: [
      {
        id: 0,
        name: "Proteina",
        price: 7000,
      },
      {
        id: 1,
        name: "Avena",
        price: 2000,
      },
      {
        id: 2,
        name: "Miel",
        price: 2000,
      },
      {
        id: 3,
        name: "Jarabe de arce",
        price: 6000,
      },
      {
        id: 4,
        name: "Jengibre",
        price: 3000,
      },
      {
        id: 5,
        name: "Canela",
        price: 2000,
      },
    ],
  },
  {
    id: 50,
    name: "Mango y coco",
    img: "https://www.cocinavital.mx/wp-content/uploads/2017/08/licuadodemangoconcremadecoco.jpg",
    type: 2,
    restaurant: 2,
    price: 16000,
    description: "Batido hecho con mango fresco, leche de coco, miel y hielo.",
    aditions: [
      {
        id: 0,
        name: "Proteina",
        price: 7000,
      },
      {
        id: 1,
        name: "Avena",
        price: 2000,
      },
      {
        id: 2,
        name: "Miel",
        price: 2000,
      },
      {
        id: 3,
        name: "Jarabe de arce",
        price: 6000,
      },
      {
        id: 4,
        name: "Jengibre",
        price: 3000,
      },
      {
        id: 5,
        name: "Canela",
        price: 2000,
      },
    ],
  },
  {
    id: 51,
    name: "Piña y espinaca",
    img: "https://cocinarconrobot.com/wp-content/uploads/batido-pina-espinacas-naranja-thermomix.jpg",
    type: 2,
    restaurant: 2,
    price: 19000,
    description:
      "Batido hecho con piña fresca, espinacas, leche o yogurt y hielo.",
    aditions: [
      {
        id: 0,
        name: "Proteina",
        price: 7000,
      },
      {
        id: 1,
        name: "Avena",
        price: 2000,
      },
      {
        id: 2,
        name: "Miel",
        price: 2000,
      },
      {
        id: 3,
        name: "Jarabe de arce",
        price: 6000,
      },
      {
        id: 4,
        name: "Jengibre",
        price: 3000,
      },
      {
        id: 5,
        name: "Canela",
        price: 2000,
      },
    ],
  },
  {
    id: 52,
    name: "Chocolate",
    img: "https://www.lactaidenespanol.com/sites/lactaid_us/files/recipe-images/easy_chocolate_shakes.jpg",
    type: 2,
    restaurant: 2,
    price: 15000,
    description:
      "Batido hecho con leche, helado de chocolate, cacao en polvo y hielo.",
    aditions: [
      {
        id: 0,
        name: "Proteina",
        price: 7000,
      },
      {
        id: 1,
        name: "Avena",
        price: 2000,
      },
      {
        id: 2,
        name: "Miel",
        price: 2000,
      },
      {
        id: 3,
        name: "Jarabe de arce",
        price: 6000,
      },
      {
        id: 4,
        name: "Jengibre",
        price: 3000,
      },
      {
        id: 5,
        name: "Canela",
        price: 2000,
      },
    ],
  },
  {
    id: 53,
    name: "Café",
    img: "https://recetasdebatidos.com/wp-content/uploads/2018/07/Batido-de-cafe%CC%81-con-hielo-2.jpg",
    type: 2,
    restaurant: 2,
    price: 13000,
    description:
      "Batido hecho con café frío, leche, helado de vainilla y hielo.",
    aditions: [
      {
        id: 0,
        name: "Proteina",
        price: 7000,
      },
      {
        id: 1,
        name: "Avena",
        price: 2000,
      },
      {
        id: 2,
        name: "Miel",
        price: 2000,
      },
      {
        id: 3,
        name: "Jarabe de arce",
        price: 6000,
      },
      {
        id: 4,
        name: "Jengibre",
        price: 3000,
      },
      {
        id: 5,
        name: "Canela",
        price: 2000,
      },
    ],
  },

  {
    id: 54,
    name: "Spaghetti a la boloñesa",
    img: "https://assets.unileversolutions.com/recipes-v2/118368.jpg",
    type: 0,
    restaurant: 3,
    price: 18000,
    description: "Spaghetti con salsa de tomate y carne molida.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Pollo",
        price: 7000,
      },
      {
        id: 2,
        name: "Camarones",
        price: 15000,
      },
      {
        id: 3,
        name: "Tomates secos",
        price: 4000,
      },
      {
        id: 4,
        name: "Aceitunas",
        price: 6000,
      },
      {
        id: 5,
        name: "Esparragos",
        price: 6000,
      },
    ],
  },
  {
    id: 55,
    name: "Linguine con almejas",
    img: "https://recetaspasta.com/wp-content/uploads/2019/04/Linguini-con-almejas.jpg",
    type: 0,
    restaurant: 3,
    price: 22000,
    description: "Linguine con almejas en salsa de vino blanco y ajo.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Pollo",
        price: 7000,
      },
      {
        id: 2,
        name: "Camarones",
        price: 15000,
      },
      {
        id: 3,
        name: "Tomates secos",
        price: 4000,
      },
      {
        id: 4,
        name: "Aceitunas",
        price: 6000,
      },
      {
        id: 5,
        name: "Esparragos",
        price: 6000,
      },
    ],
  },
  {
    id: 56,
    name: "Penne arrabiata",
    img: "https://theclevermeal.com/wp-content/uploads/2021/07/penne-arrabbiata_1b.jpg",
    type: 0,
    restaurant: 3,
    price: 15000,
    description: "Penne con salsa de tomate picante, ajo y aceite de oliva.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Pollo",
        price: 7000,
      },
      {
        id: 2,
        name: "Camarones",
        price: 15000,
      },
      {
        id: 3,
        name: "Tomates secos",
        price: 4000,
      },
      {
        id: 4,
        name: "Aceitunas",
        price: 6000,
      },
      {
        id: 5,
        name: "Esparragos",
        price: 6000,
      },
    ],
  },
  {
    id: 57,
    name: "Fettuccine Alfredo",
    img: "https://plantbasedonabudget.com/wp-content/uploads/2020/10/Fettuccine-Alfredo-Plant-Based-on-a-Budget-1-2-500x500.jpg",
    type: 0,
    restaurant: 3,
    price: 25000,
    description:
      "Fettuccine en una salsa cremosa de mantequilla y queso parmesano.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Pollo",
        price: 7000,
      },
      {
        id: 2,
        name: "Camarones",
        price: 15000,
      },
      {
        id: 3,
        name: "Tomates secos",
        price: 4000,
      },
      {
        id: 4,
        name: "Aceitunas",
        price: 6000,
      },
      {
        id: 5,
        name: "Esparragos",
        price: 6000,
      },
    ],
  },
  {
    id: 58,
    name: "Lasagna",
    img: "https://bakingmischief.com/wp-content/uploads/2021/11/easy-lasagna-image-square-2.jpg",
    type: 0,
    restaurant: 3,
    price: 27000,
    description:
      "Capas de pasta con salsa de carne, queso ricotta y mozzarella.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Pollo",
        price: 7000,
      },
      {
        id: 2,
        name: "Camarones",
        price: 15000,
      },
      {
        id: 3,
        name: "Tomates secos",
        price: 4000,
      },
      {
        id: 4,
        name: "Aceitunas",
        price: 6000,
      },
      {
        id: 5,
        name: "Esparragos",
        price: 6000,
      },
    ],
  },
  {
    id: 59,
    name: "Rigatoni con vegetales",
    img: "https://www.confiesoquecocino.com/wp-content/uploads/2018/04/pasta-con-verduras-salteadas-portada.jpg",
    type: 0,
    restaurant: 3,
    price: 19000,
    description:
      "Capas de pasta con salsa de carne, queso ricotta y mozzarella.",
    aditions: [
      {
        id: 0,
        name: "Salmón",
        price: 12000,
      },
      {
        id: 1,
        name: "Pollo",
        price: 7000,
      },
      {
        id: 2,
        name: "Camarones",
        price: 15000,
      },
      {
        id: 3,
        name: "Tomates secos",
        price: 4000,
      },
      {
        id: 4,
        name: "Aceitunas",
        price: 6000,
      },
      {
        id: 5,
        name: "Esparragos",
        price: 6000,
      },
    ],
  },
  {
    id: 60,
    name: "Pan francés",
    img: "https://queapetito.com/wp-content/uploads/2019/09/baguettes-1-600x469.jpg",
    type: 1,
    restaurant: 3,
    price: 12000,
    description:
      "Un pan de estilo clásico, crujiente por fuera y suave por dentro, perfecto para acompañar una cena o para hacer un sándwich.",
    aditions: [
      {
        id: 0,
        name: "Queso",
        price: 4000,
      },
      {
        id: 1,
        name: "Salami",
        price: 7000,
      },
      {
        id: 2,
        name: "Jamón",
        price: 5000,
      },
    ],
  },
  {
    id: 61,
    name: "Pan de maíz",
    img: "https://www.goya.com/media/3991/skillet-cornbread.jpg?quality=80",
    type: 1,
    restaurant: 3,
    price: 15000,
    description:
      "Un pan hecho con harina de maíz, perfecto para acompañar una cena de barbacoa o una sopa.",
    aditions: [
      {
        id: 0,
        name: "Queso",
        price: 4000,
      },
      {
        id: 1,
        name: "Salami",
        price: 7000,
      },
      {
        id: 2,
        name: "Jamón",
        price: 5000,
      },
    ],
  },
  {
    id: 62,
    name: "Pan de ajo",
    img: "https://cdn.elcocinerocasero.com/imagen/receta/1000/2015-10-22-12-10-18/pan-de-ajo.jpeg",
    type: 1,
    restaurant: 3,
    price: 15000,
    description:
      "Un pan cubierto de ajo y mantequilla, perfecto como acompañamiento para la pasta o la pizza.",
    aditions: [
      {
        id: 0,
        name: "Queso",
        price: 4000,
      },
      {
        id: 1,
        name: "Salami",
        price: 7000,
      },
      {
        id: 2,
        name: "Jamón",
        price: 5000,
      },
    ],
  },
  {
    id: 63,
    name: "Baguette",
    img: "https://sivarious.com/wp-content/uploads/2022/03/pan-baguette-casera.jpg",
    type: 1,
    restaurant: 3,
    price: 18000,
    description:
      "Un pan largo y delgado de origen francés, perfecto para hacer bocadillos o para acompañar la cena.",
    aditions: [
      {
        id: 0,
        name: "Queso",
        price: 4000,
      },
      {
        id: 1,
        name: "Salami",
        price: 7000,
      },
      {
        id: 2,
        name: "Jamón",
        price: 5000,
      },
    ],
  },
  {
    id: 64,
    name: "Pan de nueces",
    img: "https://www.comedera.com/wp-content/uploads/2022/03/loaf-gfe57a13af_1920.jpg",
    type: 1,
    restaurant: 3,
    price: 20000,
    description:
      "Un pan hecho con nueces y pasas, perfecto para acompañar un queso o como acompañamiento para la cena.",
    aditions: [
      {
        id: 0,
        name: "Queso",
        price: 4000,
      },
      {
        id: 1,
        name: "Salami",
        price: 7000,
      },
      {
        id: 2,
        name: "Jamón",
        price: 5000,
      },
    ],
  },
  {
    id: 65,
    name: "Focaccia",
    img: "https://www.pequerecetas.com/wp-content/uploads/2020/11/focaccia-italiana-receta.jpg",
    type: 1,
    restaurant: 3,
    price: 25000,
    description:
      "Un pan italiano plano y horneado con aceite de oliva, ajo y hierbas, perfecto para servir como aperitivo o para hacer un sándwich.",
    aditions: [
      {
        id: 0,
        name: "Queso",
        price: 4000,
      },
      {
        id: 1,
        name: "Salami",
        price: 7000,
      },
      {
        id: 2,
        name: "Jamón",
        price: 5000,
      },
    ],
  },
  {
    id: 67,
    name: "Tiramisú",
    img: "https://cdn7.kiwilimon.com/recetaimagen/35448/960x640/42520.jpg.jpg",
    type: 2,
    restaurant: 3,
    price: 12000,
    description:
      "Un postre italiano hecho con capas de bizcochos de soletilla empapados en café y crema de mascarpone.",
    aditions: [
      {
        id: 0,
        name: "Crema chantilly",
        price: 4000,
      },
      {
        id: 1,
        name: "fresas",
        price: 7000,
      },
      {
        id: 2,
        name: "Arequipe",
        price: 5000,
      },
      {
        id: 3,
        name: "Helado",
        price: 5000,
      },
      {
        id: 4,
        name: "Caramelo",
        price: 3000,
      },
      {
        id: 5,
        name: "Molocotón",
        price: 8000,
      },
    ],
  },
  {
    id: 68,
    name: "Cheesecake",
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/10/No-bake-raspberry-cheesecake-cc1ee62.jpg",
    type: 2,
    restaurant: 3,
    price: 15000,
    description:
      "Un pastel de queso cremoso, a menudo hecho con una costra de galletas, y a menudo servido con una salsa de frutas o caramelo.",
    aditions: [
      {
        id: 0,
        name: "Crema chantilly",
        price: 4000,
      },
      {
        id: 1,
        name: "fresas",
        price: 7000,
      },
      {
        id: 2,
        name: "Arequipe",
        price: 5000,
      },
      {
        id: 3,
        name: "Helado",
        price: 5000,
      },
      {
        id: 4,
        name: "Caramelo",
        price: 3000,
      },
      {
        id: 5,
        name: "Molocotón",
        price: 8000,
      },
    ],
  },
  {
    id: 69,
    name: "Helado frito",
    img: "https://www.rebanando.com/uploads/media/helado_frito.jpg?1383327142",
    type: 2,
    restaurant: 3,
    price: 18000,
    description:
      " Un postre clásico, a menudo servido en bolas con jarabe, frutas y/o nueces.",
    aditions: [
      {
        id: 0,
        name: "Crema chantilly",
        price: 4000,
      },
      {
        id: 1,
        name: "fresas",
        price: 7000,
      },
      {
        id: 2,
        name: "Arequipe",
        price: 5000,
      },
      {
        id: 3,
        name: "Helado",
        price: 5000,
      },
      {
        id: 4,
        name: "Caramelo",
        price: 3000,
      },
      {
        id: 5,
        name: "Molocotón",
        price: 8000,
      },
    ],
  },
  {
    id: 70,
    name: "Brownies",
    img: "http://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/In-Development/FULL-BROWNIES.png",
    type: 2,
    restaurant: 3,
    price: 15000,
    description:
      "Un pastel de chocolate denso y húmedo, a menudo servido con helado y/o nueces.",
    aditions: [
      {
        id: 0,
        name: "Crema chantilly",
        price: 4000,
      },
      {
        id: 1,
        name: "fresas",
        price: 7000,
      },
      {
        id: 2,
        name: "Arequipe",
        price: 5000,
      },
      {
        id: 3,
        name: "Helado",
        price: 5000,
      },
      {
        id: 4,
        name: "Caramelo",
        price: 3000,
      },
      {
        id: 5,
        name: "Molocotón",
        price: 8000,
      },
    ],
  },
  {
    id: 71,
    name: "Crème brûlée",
    img: "https://www.cookingclassy.com/wp-content/uploads/2018/02/creme-brulee-7.jpg",
    type: 2,
    restaurant: 3,
    price: 20000,
    description:
      "Un postre francés hecho de crema de vainilla y cubierto con una capa de azúcar caramelizada.",
    aditions: [
      {
        id: 0,
        name: "Crema chantilly",
        price: 4000,
      },
      {
        id: 1,
        name: "fresas",
        price: 7000,
      },
      {
        id: 2,
        name: "Arequipe",
        price: 5000,
      },
      {
        id: 3,
        name: "Helado",
        price: 5000,
      },
      {
        id: 4,
        name: "Caramelo",
        price: 3000,
      },
      {
        id: 5,
        name: "Molocotón",
        price: 8000,
      },
    ],
  },
  {
    id: 72,
    name: "Frutas frescas",
    img: "https://cdn0.recetasgratis.net/es/posts/1/2/5/postre_de_frutas_para_navidad_57521_orig.jpg",
    type: 2,
    restaurant: 3,
    price: 16000,
    description:
      "Una opción más saludable de postre, a menudo se sirve como una ensalada de frutas o como frutas frescas cortadas.",
    aditions: [
      {
        id: 0,
        name: "Crema chantilly",
        price: 4000,
      },
      {
        id: 1,
        name: "fresas",
        price: 7000,
      },
      {
        id: 2,
        name: "Arequipe",
        price: 5000,
      },
      {
        id: 3,
        name: "Helado",
        price: 5000,
      },
      {
        id: 4,
        name: "Caramelo",
        price: 3000,
      },
      {
        id: 5,
        name: "Molocotón",
        price: 8000,
      },
    ],
  },
];
