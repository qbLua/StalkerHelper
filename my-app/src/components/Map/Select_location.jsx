import React from 'react';
import Location from './Location';

const Select_location = () => {
    const loc1 = ['Свалка', 'свалка', 'Низкая', 'green', ['Бандиты', 'Одиночки', '«Долг»', 'Военные'], ['Слепой пёс', 'Псевдособака', 'Кабан', 'Плоть', 'Кровосос'], ['Трамплин', 'Карусель', 'Электра', 'Жарка'], 'Средняя', 'Свалка — большая территория на месте могильника радиоактивной техники. Является пересечением дорог на основные локации юга Зоны: Кордон, Бар, Тёмная Долина, НИИ «Агропром», а также (в Чистом Небе) в Рыжий лес и на Военные Склады.', [1, 30, [10, 10, 0, 0], [40, 40], 20]];
    const loc2 = ['Тёмная долина', 'темная', 'Низкая', 'green', ['Бандиты', 'Одиночки', '«Долг»', 'Военные'], ['Слепой пёс', 'Псевдособака', 'Кабан', 'Плоть', 'Снорк', 'Кровосос', 'Тушкан'], ['Карусель', 'Воронка', 'Жарка', 'Жгучий пух'], 'Средняя', 'Тёмная Долина — локация, расположенная на северо-востоке от Кордона. Под заброшенным заводом располагается лаборатория X18. В Чистом Небе тут находилась база группировки «Свобода». Мрачное место. Многие нашли свою погибель на дождливых пустошах. Всё здесь окутано сырой теменью, каждый человек вызывает подозрения и осторожный сталкер, почему-то оказавшийся здесь, предпочтёт обойти любое здание стороной.', [2, 50, [10, 0, 10, 0], [20, 0], 30]];
    const loc3 = ['НИИ Агропром', 'нии', 'Средняя', 'yellow', ['Бандиты', 'Одиночки', 'Военные'], ['Слепой пес', 'Кабан', 'Плоть', 'Тушкан', 'Кровосос'], ['Трамплин', 'Воронка', 'Карусель'], 'Средняя', 'НИИ «Агропром» — локация на западе Зоны. Здесь находится научно-исследовательский институт «Агропром», в честь которого местность и получила своё название. Сталкеры называют эту территорию мертвой, тут слишком сильная радиация. Если продвигаться вглубь местности, то можно выйти на радиоактивные равнины, можно найти мелкое ржавое озеро. Все озеро заполнено останками машин, одна большая куча ржавой техники, слегка покрытая водой.', [3, 60, [0, 0, 30, 0], [20, 20], 20]];
    const loc4 = ['Дикая территория', 'дикая', 'Средняя', 'yellow', ['Бандиты', 'Одиночки', 'Военные', 'Ученые', '«Долг»', 'Замбированные'], ['Тушкан', 'Слепой пес', 'Псевдособака', 'Снорк', 'Кровосос', 'Полтергейст'], ['Электра', 'Жарка', 'Кисель', 'Воронка', 'Трамплин'], 'Низкая', 'Дикая территория — локация, представляющая из себя западную часть завода «Росток». Именно здесь зафиксирована наибольшая активность наёмников. Дикая территория совсем игнорировалась бы большинством сталкеров, если бы не её стратегически важное размещение: через территорию пролегает кратчайший путь из Бара к озеру Янтарь, где располагается мобильная лаборатория учёных. Этим маршрутом пользуются не только вольные сталкеры — здесь устраивают засады бандиты и наёмники. Поскольку Дикая территория относительно малонаселённа, эта локация изобилует большим количеством тайников.', [4, 60, [40, 30, 0, 0], [30, 0], 0]];
    const loc5 = ['Янтарь', 'янтарь', 'Средняя', 'yellow', ['Ученые', 'Замбированные', 'Одиночки', 'Бандиты', 'Военные'], ['Снорк', 'Контролер', 'Псевдогигант'], ['Жгучий пух', 'Жарка'], 'Средняя', 'Янтарь — долина, расположенная на месте пересохшего озера Янтарь, откуда и произошло название локации. Небольшой остаток этого озера сохранился, превратившись в болото. До отключения пси-установки локация Янтарь слабо населена людьми, так как значительная часть территории находится под интенсивным пси-излучением, по всей долине бродят агрессивные зомби, также обитают снорки. У сталкеров старый завод на Янтаре пользуется дурной славой, оттуда мало кто возвращается, так как там находится экспериментальный пси-излучатель Кайманова, прототип легендарного «Выжигателя мозгов». Скорее всего, установка под заводом «Янтарь» была предназначена для преграждения второго пути к центру Зоны (через Рыжий лес).', [5, 20, [10, 0, 40, 0], [100, 0], 40]];
    const loc6 = ['Армейские склады', 'склады', 'Средняя', 'yellow', ['«Свобода»', '«Долг»', 'Наемники', 'Одиночки', 'Военные', 'Зомбированные', 'Бандиты'], ['Слепой пес', 'Псевдособака', 'Плоть', 'Кровосос', 'Контролер'], ['Электра', 'Жарка', 'Воронка', 'Карусель', 'Трамплин'], 'Низкая', 'Армейские Склады — локация на северо-востоке Зоны. В 2012 году на этом месте находится главная база «Свободы». Если идти от Бара, то не доходя до базы, свернув направо, на хуторе можно найти заставу раскольников «Долга» и помочь им расправиться с членами группировки «Свобода», или наоборот — помочь «Свободе» уничтожить долговцев. Армейские Склады также являются последним оплотом цивилизации перед Радаром — постоянно блокпост «Свободы», называемый Барьером, отбивает волны мутантов и отрядов «Монолита», идущих с севера.', [6, 70, [10, 10, 0, 0], [40, 0], 20]];
    const loc7 = ['Радар', 'радар', 'Высокая', 'red', ['«Монолит»', '«Долг»', '«Свобода»', 'Одиночки', 'Военные', 'Наемники', 'Зомюированные'], ['Псевдособака', 'Кровосос', 'Снорк', 'Псевдогигант', 'Контролер', 'Полтергейст'], ['Электра', 'Воронка', 'Карусель'], 'Высокая', 'Радар — локация на северо-востоке Зоны, накрытая мощным пси-полем. Дорогу к бункеру — центру управления излучателем — прикрывают многочисленные и хорошо вооружённые отряды монолитовцев: на территории излучателя находится их полевой лагерь. Данная локация представляет собой Мёртвый лес и окрестности брошенной военной РЛС. Много аномалий, сильное ионизирующее излучение, особенно возле автомобилей и других металлических конструкций. На данной локации не стоит приближаться к различной технике, так как радиационный фон возле неё за секунду облучит полностью. При приближении к Выжигателю на сталкеров набрасываются фантомы, нанося урон психическому здоровью идущего.', [7, 90, [0, 10, 0, 30], [40, 20], 80]];
    const loc8 = ['Припять', 'припять', 'Высокая', 'red', ['«Монолит»', '«Долг»', '«Свобода»', 'Военные', 'Одиночки', 'Наемники', 'Зомбированные'], ['Тушкан', 'Слепой пес', 'Псевдособака', 'Снорк', 'Полтергейст', 'Псевдогигант', 'Кровосос', 'Контролер'], ['Жарка', 'Комета', 'Воронка', 'Трамплин', 'Карусель', 'Электра', 'Газировка', 'Кисель', 'Жгучий пух', 'Лифт', 'Вулкан', 'Лоза'], 'Высокая', 'Припять — город на севере Украины, основанный 4 февраля 1970 года и покинутый жителями через несколько дней после аварии на Чернобыльской АЭС 26 апреля 1986 года. Как в игре, так и в жизни город энергетиков заброшен. В игре он относится к Центру Зоны, а следовательно, из людей там остались только бойцы «Монолита» и редкие забредшие туда сталкеры. Город сделан по реальным снимкам и картам Припяти, многие места хорошо проработаны. Сам город, по сравнению с другими локациями, безлюден. Членов различных группировок можно встретить изредка и, как правило, это будут враги.', [8, 60, [30, 20, 30, 20], [60, 30], 90]];
    const loc9 = ['ЧАЭС', 'чаэс', 'Высокая', 'red', ['Военные', '«Монолит»', '«О-Сознание»'], ['Снорк'], ['Телепорт', 'Трамплин', 'Воронка', 'Карусель', 'Электра', 'Зона ЭМИ'], 'Высокая', 'ЧАЭС (Чернобыльская атомная электростанция) — атомная электростанция, построенная в 1977 году. Бывшая атомная станция, о которой хоть раз слышал каждый. Это самое сердце Зоны. Если верить легендам, где-то там находится некая аномалия, способная выполнить любое желание — её называют Монолитом.', [9, 100, [0, 30, 0, 60], [40, 0], 100]];
    
    return (
        <div>
            <Location name={loc1[0]} img={loc1[1]} lvl={loc1[2]} color={loc1[3]} groups={loc1[4]} mutants={loc1[5]} anomalies={loc1[6]} radiation={loc1[7]} desc={loc1[8]} stats={loc1[9]} />
            <Location name={loc2[0]} img={loc2[1]} lvl={loc2[2]} color={loc2[3]} groups={loc2[4]} mutants={loc2[5]} anomalies={loc2[6]} radiation={loc2[7]} desc={loc2[8]} stats={loc2[9]} />
            <Location name={loc3[0]} img={loc3[1]} lvl={loc3[2]} color={loc3[3]} groups={loc3[4]} mutants={loc3[5]} anomalies={loc3[6]} radiation={loc3[7]} desc={loc3[8]} stats={loc3[9]} />
            <Location name={loc4[0]} img={loc4[1]} lvl={loc4[2]} color={loc4[3]} groups={loc4[4]} mutants={loc4[5]} anomalies={loc4[6]} radiation={loc4[7]} desc={loc4[8]} stats={loc4[9]} />
            <Location name={loc5[0]} img={loc5[1]} lvl={loc5[2]} color={loc5[3]} groups={loc5[4]} mutants={loc5[5]} anomalies={loc5[6]} radiation={loc5[7]} desc={loc5[8]} stats={loc5[9]} />
            <Location name={loc6[0]} img={loc6[1]} lvl={loc6[2]} color={loc6[3]} groups={loc6[4]} mutants={loc6[5]} anomalies={loc6[6]} radiation={loc6[7]} desc={loc6[8]} stats={loc6[9]} />
            <Location name={loc7[0]} img={loc7[1]} lvl={loc7[2]} color={loc7[3]} groups={loc7[4]} mutants={loc7[5]} anomalies={loc7[6]} radiation={loc7[7]} desc={loc7[8]} stats={loc7[9]} />
            <Location name={loc8[0]} img={loc8[1]} lvl={loc8[2]} color={loc8[3]} groups={loc8[4]} mutants={loc8[5]} anomalies={loc8[6]} radiation={loc8[7]} desc={loc8[8]} stats={loc8[9]} />
            <Location name={loc9[0]} img={loc9[1]} lvl={loc9[2]} color={loc9[3]} groups={loc9[4]} mutants={loc9[5]} anomalies={loc9[6]} radiation={loc9[7]} desc={loc9[8]} stats={loc9[9]} />
        </div>
    );
}

export default Select_location;