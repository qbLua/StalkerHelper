export const storage = {
  data: {
  character: {
    artefacts: [['Здоровье', 'Выносливость', 'Удар', 'Разрыв', 'Пулестойкость', 'Электрошок', 'Кровотечение', 'Ожог', 'Хим. ожог', 'Радиация', 'Стоимость'],
      [['Пусто', 'none', ['', '', '', '', '', '', '', '', '', '', '']],
      ['Бенгальский огонь', 'Бенгальский_огонь(ico)', ['', '+36', '', '', '', '10', '', '', '', '', '1000']],
      ['Вспышка', 'Вспышка(ico)', ['', '+73', '', '', '', '10', '', '', '', '', '2500']],
      ['Лунный свет', 'Лунный_свет(ico)', ['', '+109', '', '', '', '10', '', '', '', '', '5000']],
      ['Кровь камня', 'Кровь_камня(ico)', ['+200%', '', '-10%', '-10%', '-10%', '', '', '', '', '', '1000']],
      ['Ломоть мяса', 'Ломоть_мяса(ico)', ['+400%', '', '-10%', '-10%', '-10%', '', '', '', '', '', '2500']],
      ['Душа', 'Душа(ico)', ['+600%', '', '-10%', '-10%', '-10%', '', '', '', '', '', '5000']],
      ['Слизь', 'Слизь(ico)', ['', '', '', '', '', '', '+133%', '-10%', '-10%', '', '1000']],
      ['Слизняк', 'Слизняк(ico)', ['', '', '', '', '', '', '+267%', '-10%', '-10%', '', '2500']],
      ['Слюда', 'Слюда(ico)', ['', '', '', '', '', '', '+400%', '-10%', '-10%', '', '5000']],
      ['Медуза', 'Медуза(ico)', ['', '', '', '', '+2%', '', '', '', '', '+5%', '1000']],
      ['Каменный цветок', 'Каменный_цветок(ico)', ['', '', '', '', '+3%', '', '', '', '', '+5%', '2500']],
      ['Ночная звезда', 'Ночная_звезда(ico)', ['', '', '', '', '+5%', '', '', '', '', '+5%', '5000']],
      ['Выверт', 'Выверт(ico)', ['', '', '', '+2%', '', '', '', '', '', '+5%', '1000']],
      ['Грави', 'Грави(ico)', ['', '', '', '+3%', '', '', '', '', '', '+5%', '2500']],
      ['Золотая рыбка', 'Золотая_рыбка(ico)', ['', '', '', '+5%', '', '', '', '', '', '+5%', '5000']],
      ['Колобок', 'Колобок(ico)', ['', '', '', '+5%', '', '', '', '', '', '', '5000']],
      ['Колючка', 'Колючка(ico)', ['', '', '', '', '', '', '-100%', '', '', '-10%', '1000']],
      ['Кристальная колючка', 'Кристальная_колючка(ico)', ['', '', '', '', '', '', '-100%', '', '', '-20%', '2500']],
      ['Морской ёж', 'Морской_ёж(ico)', ['', '', '', '', '', '', '-100%', '', '', '-30%', '5000']],
      ['Капли', 'Капли(ico)', ['', '-18', '', '', '', '', '', '', '', '-10%', '1000']],
      ['Огненный шар', 'Огненный_шар(ico)', ['', '-18', '', '', '', '', '', '', '', '-20%', '2500']],
      ['Кристалл', 'Кристалл(ico)', ['', '-18', '', '', '', '', '', '', '', '-30%', '5000']],
      ['Пустышка', 'Пустышка(ico)', ['', '', '', '', '', '', '', '+30%', '', '', '5000']],
      ['Плёнка', 'Плёнка(ico)', ['', '', '', '', '', '', '', '', '+30%', '', '5000']],
      ['Пружина', 'Пружина(ico)', ['', '', '+30%', '', '', '', '', '', '', '', '5000']],
      ['Батарейка', 'Батарейка(ico)', ['', '', '', '', '', '+30%', '', '', '', '', '5000']]]],
    guns: [
      ['Класс', 'Боеприпасы', 'Темп огня', 'Точность', 'Дальность', 'Отдача', 'Магазин', 'Вес', 'Ресурс', 'Стоимость'],
      [['Пусто', 'none', ['', '', '', '', '', '', '', '', '', '', '']],
      ['АКМ-74/2', 'Иконка_АКМ', ['Штурмовые винтовки', '5,45x39 5,45x39ммБП', ' 600 выс./мин.', '0,2 гр.', '1000 м.', '0,15 гр.', '30 патр.', '3,30 кг.', '10000 выст.', '2000 RU', 50]],
      ['Бульдог-6', 'Иконка_Бульдога-6', ['Ручные гранатометы', 'ВОГ-25 ВОГ-25Р', '100 выс./мин.', '0,5 гр.', '100 м', '4,0 гр.', '6 гранат', '6,20 кг', '33333 выстрелов', '12000 RU', 60]],
      ['Винтарь-ВС', 'Иконка_Винтарь-ВС', ['Снайперские винтовки', '9х39ммСП-5 9х39ммСП-6 9х39ммПАБ-9', '600 выс./мин.', '0,05 гр.', '400 м', '0,125 гр.', '10 патр.', '3,20 кг', '5000 выстрелов', '12000 RU', 100]],
      ['Гадюка-5', 'Гадюка-5', ['Пистолеты-пулемёты', '9х19ммFMJ 9x19ммJHP', '800  выс./мин.', '0.25 гр.', '200  м', '0.2 гр.', '30 патр.', '2.50 кг', '5000 выстрелов', '1100 RU', 40]],
      ['Гаусс-пушка', 'Иконка_гаусс-пушки', ['Снайперские винтовки', 'Аккумуляторы', '30  выс./мин.', '0,01 гр.', '1000  м', '0,05 гр.', '10 патр.', '5,5 кг', '100000 выстрелов', '25000 RU', 80]],
      ['ГП37', 'ГП37', ['Штурмовые винтовки', '5,56х45мм 5,56x45ммAP', '850 выс./мин.', '0,14 гр.', '600 м', '0.2 гр.', '30 патр.', '3.60 кг', '5000 выстрелов', '18000 RU', 90]],
      ['Гром-С14', 'Гром-С14', ['Штурмовые винтовки', '9х39ммПАБ-9 9х39ммСП-5 9х39ммСП-6', '750 выс./мин.', '0.18 гр.', '400 м', '0.3 гр.', '20 патр.', '3.20 кг', '10000 выстрелов', '10000 RU', 70]],
      ['ИЛ86', 'ИЛ86', ['Штурмовые винтовки', '5,56х45мм 5,56x45ммAP', '650 выс./мин.', '0.25 гр.', '800 м', '0.15 гр.', '30 патр.', '5.00 кг', '5000 выстрелов', '4000 RU', 60]],
      ['Обрез', 'Иконка_обреза',  ['Дробовики', '2х70дробь 12x76жекан 12x76дротик', '500 выс./мин.', '0,5 гр.', '50 м', '4,0 гр.', '2 патр.', '1,90 кг', '1000 выстрелов', '400 RU', 30]],
      ['РПГ-7у', 'Иконка_РПГ-7у', ['Гранатомёты', 'ГранатаОГ-7B', 'одиночный выстрел.', '1.5 гр.', '400  м', '6.0 гр.', '1 граната', '6.30 кг', '33333 выстрелов', '10000 RU', 50]],
      ['СА «ЛАВИНА»', 'Иконка_СА_«Лавина»', ['Штурмовые винтовки', '9х39ммСП-5 9х39ммСП-6 9х39ммПАБ-9', '650 выс./мин.', '0.14 гр.', '400  м', '0.3 гр.', '20 патр.', '2.50 кг', '5000 выстрелов', '9000 RU', 80]],
      ['СВДм-2', 'Иконка_СВДм-2', ['Снайперские винтовки', '7,62x54мм7H1 7,62х54Rмм7Н14 7,62x54ммБП', '120 выс./мин.', '0,03 гр.', '1000 м', '2,0 гр.', '10 патр.', '4,90 кг', '5000 выстрелов', '15000 RU', 90]],
      ['СПСА-14', 'Иконка_СПСА-14', ['Дробовики', '12х70дробь 12x76жекан 12x76дротик', '150 выс./мин.', '0.5 гр.', '50 м', '5.0 гр.', '8 патр.', '4.4 кг', '3333 выстрелов', '2000 RU', 40]],
      ['ТРс-301', 'Иконка_ТРс-301_ТЧ', ['Штурмовые винтовки', '5,56х45мм 5,56x45ммAP', '750 выс./мин.', '0.18 гр.', '400 м', '0.15 гр.', '30 патр.', '2.70 кг', '10000 выстрелов', '5000 RU', 50]],
      ['ФТ-200М', 'ФТ-200М', ['Штурмовые винтовки', '5,56х45мм 5,56x45ммAP M203', '860 выс./мин.', '0.2 гр.', '400 м', '0.2 гр.', '30 патр.', '4.60 кг', '5000 выстрелов', '17000 RU', 100]]]
    ],
    suits: [['Ожог', 'Электорошок', 'Удар', 'Разрыв', 'Радиация', 'Хим. ожог', 'Взрыв', 'Пулестойкость', 'Стоимость'],
      [['Пусто', 'none', ['', '', '', '', '', '', '', '', '', '', '']],
      ['Армейский бронежилет', 'Армейский_бронежилет(ico)', ['30%', '15%', '20%', '10%', '10%', '15%', '20%', '20%', '5000 RU']],
      ['Куртка бандита"', 'Иконка_куртки_бандита', ['10%', '10%', '10%', '15%', '0%', '10%', '10%', '15%', '3000 RU']],
      ['Бронекостюм «Берилл-5М»', 'Старая_иконка_Берилл', ['30%', '30%', '20%', '40%', '30%', '30%', '40%', '45%', '12000 RU']],
      ['Бронекостюм «Булат»', 'Старая_иконка_Булата', ['60%', '70%', '80%', '70%', '70%', '50%', '70%', '55%', '40000 RU']],
      ['Кожаная куртка', 'Иконка_кожаной_куртки', ['10%', '10%', '10%', '10%', '10%', '10%', '10%', '10%', '1000 RU']],
      ['Комбинезон «Ветер свободы»', 'Старая_иконка_Ветра_свободы', ['30%', '50%', '50%', '30%', '50%', '50%', '25%', '30%', '10000 RU']],
      ['Комбинезон «Заря»', 'Старая_иконка_Зари', ['50%', '50%', '50%', '40%', '50%', '50%', '30%', '30%', '15000 RU']],
      ['Комбинезон «Монолита»', 'Иконка_комбинезона_Монолита', ['50%', '60%', '50%', '40%', '50%', '50%', '40%', '40%', '10000 RU']],
      ['Комбинезон «СЕВА»', 'Иконка_комбинезона_СЕВА', ['80%', '90%', '50%', '50%', '90%', '70%', '50%', '40%', '30000 RU']],
      ['Комбинезон «Страж свободы»', 'Иконка_комбинезона_Страж_свободы', ['50%', '50%', '60%', '50%', '50%', '50%', '45%', '40%', '12500 RU']],
      ['Комбинезон ССП-99М', 'Иконка_ССП-99М', ['90%', '90%', '50%', '50%', '90%', '90%', '60%', '40%', '24000 RU']],
      ['ПСЗ-9д «Броня "Долга"»', 'Старая_иконка_ПС5-М', ['50%', '50%', '50%', '50%', '50%', '50%', '40%', '40%', '14000 RU']],
      ['ССП-99 «Эколог»', 'Иконка_ССП-99', ['90%', '90%', '50%', '15%', '90%', '90%', '40%', '20%', '15000 RU']],
      ['Экзоскелет', 'Старая_иконка_экзоскелета', ['50%', '50%', '90%', '80%', '30%', '50%', '80%', '60%', '50000 RU']]]]
    },
  bag: [
  ['1', 'Антирадиационные препараты', 'antiradX', '0'],
  ['2', 'Аптечка', 'apte4ka', '0'],
  ['3', 'Армейская аптечка', 'apte4ka-army', '0'],
  ['4', 'Научная аптечка', 'apte4ka-scient', '0'],
  ['5', 'Бинт', 'bint', '0'],
  ['6', 'Энергитический напиток "NonStop"', 'nonstop', '0'],
  ['7', 'Тушёнка "Радость туриста"', 'tushenka', '0'],
  ['8', 'Колбаса "Практическая"', 'kolbasa', '0'],
  ['9', 'Хлеб', 'hleb', '0'],
  ['10', 'Аккумулятор', 'Иконка_аккумулятора', '0'],
  ['11', '12x70 дробь', 'Иконка_Дробь', '0'],
  ['12', '12x76 жекан', 'Иконка_Жекан', '0'],
  ['13', '12x76 дротик', 'Иконка_Дротик', '0'],
  ['14', '5,45x39 мм', 'Иконка_5,45', '0'],
  ['15', '5,56x45 мм AP', 'Иконка_5,56AP', '0'],
  ['16', 'Граната ВОГ-25', 'Граната_ВОГ-25(ico)', '0'],
  ['17', 'Граната ВОГ-25P', 'ВОГ-25Р(ico)', '0'],
  ['18', '7,62БП', 'Иконка_7,62_БП', '0'],
  ['19', 'name', 'Иконка_7,62_7Н14', '0'],
  ['20', 'name', 'Иконка_7,62_7Н1', '0'],
  ['21', 'name', 'Граната_ОГ-7B(ico)', '0'],
  ['22', 'name', 'Иконка_9х39-ПАБ-9', '0'],
  ['23', 'name', 'Иконка_9х39-СП-5', '0'],
  ['24', 'name', 'Иконка_9х39-СП-6', '0'],
  ['25', 'name', 'Иконка_9х19_JHP', '0'],
  ['26', 'name', 'Иконка_9х19_FMJ', '0'],
  ['27', 'name', 'Граната_M203(ico)', '0'],
  ['28', 'name', 'Иконка_5,45_БП', '0'],
  ['29', 'name', 'Иконка_5,56', '0'],
  ],
  locations: [
  ['Свалка', 'свалка', 'Низкая', 'green', ['Бандиты', 'Одиночки', '«Долг»', 'Военные'], ['Слепой пёс', 'Псевдособака', 'Кабан', 'Плоть', 'Кровосос'], ['Трамплин', 'Карусель', 'Электра', 'Жарка'], 'Средняя', 'Свалка — большая территория на месте могильника радиоактивной техники. Является пересечением дорог на основные локации юга Зоны: Кордон, Бар, Тёмная Долина, НИИ «Агропром», а также (в Чистом Небе) в Рыжий лес и на Военные Склады.', [1, 30, [10, 10, 0, 0], [40, 40], 20]],
  ['Тёмная долина', 'темная', 'Низкая', 'green', ['Бандиты', 'Одиночки', '«Долг»', 'Военные'], ['Слепой пёс', 'Псевдособака', 'Кабан', 'Плоть', 'Снорк', 'Кровосос', 'Тушкан'], ['Карусель', 'Воронка', 'Жарка', 'Жгучий пух'], 'Средняя', 'Тёмная Долина — локация, расположенная на северо-востоке от Кордона. Под заброшенным заводом располагается лаборатория X18. В Чистом Небе тут находилась база группировки «Свобода». Мрачное место. Многие нашли свою погибель на дождливых пустошах. Всё здесь окутано сырой теменью, каждый человек вызывает подозрения и осторожный сталкер, почему-то оказавшийся здесь, предпочтёт обойти любое здание стороной.', [2, 50, [10, 0, 10, 0], [20, 0], 30]],
  ['НИИ Агропром', 'нии', 'Средняя', 'yellow', ['Бандиты', 'Одиночки', 'Военные'], ['Слепой пес', 'Кабан', 'Плоть', 'Тушкан', 'Кровосос'], ['Трамплин', 'Воронка', 'Карусель'], 'Средняя', 'НИИ «Агропром» — локация на западе Зоны. Здесь находится научно-исследовательский институт «Агропром», в честь которого местность и получила своё название. Сталкеры называют эту территорию мертвой, тут слишком сильная радиация. Если продвигаться вглубь местности, то можно выйти на радиоактивные равнины, можно найти мелкое ржавое озеро. Все озеро заполнено останками машин, одна большая куча ржавой техники, слегка покрытая водой.', [3, 60, [0, 0, 30, 0], [20, 20], 20]],
  ['Дикая территория', 'дикая', 'Средняя', 'yellow', ['Бандиты', 'Одиночки', 'Военные', 'Ученые', '«Долг»', 'Замбированные'], ['Тушкан', 'Слепой пес', 'Псевдособака', 'Снорк', 'Кровосос', 'Полтергейст'], ['Электра', 'Жарка', 'Кисель', 'Воронка', 'Трамплин'], 'Низкая', 'Дикая территория — локация, представляющая из себя западную часть завода «Росток». Именно здесь зафиксирована наибольшая активность наёмников. Дикая территория совсем игнорировалась бы большинством сталкеров, если бы не её стратегически важное размещение: через территорию пролегает кратчайший путь из Бара к озеру Янтарь, где располагается мобильная лаборатория учёных. Этим маршрутом пользуются не только вольные сталкеры — здесь устраивают засады бандиты и наёмники. Поскольку Дикая территория относительно малонаселённа, эта локация изобилует большим количеством тайников.', [4, 60, [40, 30, 0, 0], [30, 0], 0]],
  ['Янтарь', 'янтарь', 'Средняя', 'yellow', ['Ученые', 'Замбированные', 'Одиночки', 'Бандиты', 'Военные'], ['Снорк', 'Контролер', 'Псевдогигант'], ['Жгучий пух', 'Жарка'], 'Средняя', 'Янтарь — долина, расположенная на месте пересохшего озера Янтарь, откуда и произошло название локации. Небольшой остаток этого озера сохранился, превратившись в болото. До отключения пси-установки локация Янтарь слабо населена людьми, так как значительная часть территории находится под интенсивным пси-излучением, по всей долине бродят агрессивные зомби, также обитают снорки. У сталкеров старый завод на Янтаре пользуется дурной славой, оттуда мало кто возвращается, так как там находится экспериментальный пси-излучатель Кайманова, прототип легендарного «Выжигателя мозгов». Скорее всего, установка под заводом «Янтарь» была предназначена для преграждения второго пути к центру Зоны (через Рыжий лес).', [5, 20, [10, 0, 40, 0], [100, 0], 40]],
  ['Армейские склады', 'склады', 'Средняя', 'yellow', ['«Свобода»', '«Долг»', 'Наемники', 'Одиночки', 'Военные', 'Зомбированные', 'Бандиты'], ['Слепой пес', 'Псевдособака', 'Плоть', 'Кровосос', 'Контролер'], ['Электра', 'Жарка', 'Воронка', 'Карусель', 'Трамплин'], 'Низкая', 'Армейские Склады — локация на северо-востоке Зоны. В 2012 году на этом месте находится главная база «Свободы». Если идти от Бара, то не доходя до базы, свернув направо, на хуторе можно найти заставу раскольников «Долга» и помочь им расправиться с членами группировки «Свобода», или наоборот — помочь «Свободе» уничтожить долговцев. Армейские Склады также являются последним оплотом цивилизации перед Радаром — постоянно блокпост «Свободы», называемый Барьером, отбивает волны мутантов и отрядов «Монолита», идущих с севера.', [6, 70, [10, 10, 0, 0], [40, 0], 20]],
  ['Радар', 'радар', 'Высокая', 'red', ['«Монолит»', '«Долг»', '«Свобода»', 'Одиночки', 'Военные', 'Наемники', 'Зомюированные'], ['Псевдособака', 'Кровосос', 'Снорк', 'Псевдогигант', 'Контролер', 'Полтергейст'], ['Электра', 'Воронка', 'Карусель'], 'Высокая', 'Радар — локация на северо-востоке Зоны, накрытая мощным пси-полем. Дорогу к бункеру — центру управления излучателем — прикрывают многочисленные и хорошо вооружённые отряды монолитовцев: на территории излучателя находится их полевой лагерь. Данная локация представляет собой Мёртвый лес и окрестности брошенной военной РЛС. Много аномалий, сильное ионизирующее излучение, особенно возле автомобилей и других металлических конструкций. На данной локации не стоит приближаться к различной технике, так как радиационный фон возле неё за секунду облучит полностью. При приближении к Выжигателю на сталкеров набрасываются фантомы, нанося урон психическому здоровью идущего.', [7, 90, [0, 10, 0, 30], [40, 20], 80]],
  ['Припять', 'припять', 'Высокая', 'red', ['«Монолит»', '«Долг»', '«Свобода»', 'Военные', 'Одиночки', 'Наемники', 'Зомбированные'], ['Тушкан', 'Слепой пес', 'Псевдособака', 'Снорк', 'Полтергейст', 'Псевдогигант', 'Кровосос', 'Контролер'], ['Жарка', 'Комета', 'Воронка', 'Трамплин', 'Карусель', 'Электра', 'Газировка', 'Кисель', 'Жгучий пух', 'Лифт', 'Вулкан', 'Лоза'], 'Высокая', 'Припять — город на севере Украины, основанный 4 февраля 1970 года и покинутый жителями через несколько дней после аварии на Чернобыльской АЭС 26 апреля 1986 года. Как в игре, так и в жизни город энергетиков заброшен. В игре он относится к Центру Зоны, а следовательно, из людей там остались только бойцы «Монолита» и редкие забредшие туда сталкеры. Город сделан по реальным снимкам и картам Припяти, многие места хорошо проработаны. Сам город, по сравнению с другими локациями, безлюден. Членов различных группировок можно встретить изредка и, как правило, это будут враги.', [8, 60, [30, 20, 30, 20], [60, 30], 90]],
  ['ЧАЭС', 'чаэс', 'Высокая', 'red', ['Военные', '«Монолит»', '«О-Сознание»'], ['Снорк'], ['Телепорт', 'Трамплин', 'Воронка', 'Карусель', 'Электра', 'Зона ЭМИ'], 'Высокая', 'ЧАЭС (Чернобыльская атомная электростанция) — атомная электростанция, построенная в 1977 году. Бывшая атомная станция, о которой хоть раз слышал каждый. Это самое сердце Зоны. Если верить легендам, где-то там находится некая аномалия, способная выполнить любое желание — её называют Монолитом.', [9, 100, [0, 30, 0, 60], [40, 0], 100]],
  ],
  notes: [
    ['Lorem', '03.04.2020', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore nesciunt quibusdam ullam nisi dolorem aliquam quae suscipit, autem dolor, assumenda voluptates aspernatur atque soluta numquam. Cum facere neque et.'],
    ['Ipsum', '03.04.2020', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore nesciunt quibusdam ullam nisi dolorem aliquam quae suscipit, autem dolor, assumenda voluptates aspernatur atque soluta numquam. Cum facere neque et.'],
    ['Dolor', '03.04.2020', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore nesciunt quibusdam ullam nisi dolorem aliquam quae suscipit, autem dolor, assumenda voluptates aspernatur atque soluta numquam. Cum facere neque et.'],
    ['Sit', '03.04.2020', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore nesciunt quibusdam ullam nisi dolorem aliquam quae suscipit, autem dolor, assumenda voluptates aspernatur atque soluta numquam. Cum facere neque et.'],
    ['Amet', '03.04.2020', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore nesciunt quibusdam ullam nisi dolorem aliquam quae suscipit, autem dolor, assumenda voluptates aspernatur atque soluta numquam. Cum facere neque et.'],
  ]
},
  addNote(newNote) {
    storage.data.notes.push(newNote);
  }
}

export default storage;