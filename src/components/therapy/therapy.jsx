import css from './therapy.module.css';

function Therapy() {
  const getYearsExp = (year) => {
    const years = new Date().getFullYear() - year;

    if (years % 10 === 1 && years % 100 !== 11) {
      return `${years} рік`;
    } else if (
      [2, 3, 4].includes(years % 10) &&
      ![12, 13, 14].includes(years % 100)
    ) {
      return `${years} роки`;
    } else {
      return `${years} років`;
    }
  };

  return (
    <>
      <div className={css.container}>
        <h2 className={css.pageHeader}>Терапевтичне відділення</h2>

        <div className={css.section}>
          <h3 className={css.sectionName}>Про відділення</h3>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Керівництво відділення:</h4>
            <p>
              Відділення очолює Лазарєва Оксана Василівна, лікар-терапевт із
              багаторічним досвідом роботи. Під її керівництвом забезпечується
              високий рівень організації медичної допомоги, яка відповідає
              сучасним стандартам. Завдяки професіоналізму та лідерським якостям
              завідувачки, відділення успішно справляється з викликами,
              пов’язаними з наданням невідкладної допомоги пацієнтам у критичних
              станах.
            </p>
          </div>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Основні завдання:</h4>
            <p>
              Завдання терапевтичного відділення визначаються законодавством
              України про охорону здоров&apos;я населення, нормативними
              документами МОЗ України, Департаменту охорони здоров&apos;я КМДА
              та статутом КНП &quot;КМКЛШМД&quot;.
            </p>
            <p>
              Основні завдання терапевтичного відділення: надання
              висококваліфікованої лікувальної, діагностичної, консультативної
              допомого хворим з ургентними терапевтичними захворюваннями.
            </p>
            <p>
              Надання консультативної допомого хворим хірургічного профілю у
              відділеннях установи.
            </p>
            <p>
              Участь у консультаціях при наявності терапевтичної патології у
              хворих в відділенні інтенсивної терапії загального профілю,
              відділенні інтенсивної терапії невідкладних станів та відділення
              токсикології з палатою інтенсивної терапії та протишоковій палаті
              приймального відділення.
            </p>
          </div>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Щоденна діяльність:</h4>
            <p>
              Відділення працює цілодобово, надаючи невідкладну допомогу
              пацієнтам із широким спектром терапевтичних та критичних станів.
              Зокрема, сюди входять такі патології, як бронхо-легеневі
              захворювання, серцево-судинні розлади, порушення функцій
              ендокринної системи та захворювання органів травлення. Також
              відділення спеціалізується на лікуванні пацієнтів, які постраждали
              внаслідок утоплення, теплового або сонячного удару,
              переохолодження чи ураження електричним струмом.
            </p>
            <p>
              Завдяки висококваліфікованому персоналу та сучасному обладнанню
              тут забезпечується своєчасна допомога навіть у найскладніших
              ситуаціях, що дозволяє рятувати життя та мінімізувати наслідки
              критичних станів.
            </p>
          </div>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Статистика:</h4>
            <p>
              Відділення терапії розраховане на 50 ліжок, що дозволяє ефективно
              надавати допомогу пацієнтам у критичних станах.
            </p>
            <p>
              Щороку тут проходять лікування до 1500 осіб, яким потрібна
              невідкладна допомога, а також проводяться консультації для
              приблизно 2700 пацієнтів.
            </p>
            <p>
              Середня завантаженість відділення становить близько 10 ліжко-днів
              на одного пацієнта, що свідчить про високий рівень інтенсивності
              роботи та необхідність оперативного вирішення медичних проблем.
            </p>
            <p>
              Такий обсяг роботи підкреслює важливу роль відділення у системі
              надання екстреної медичної допомоги.
            </p>
          </div>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Діагностичні можливості:</h4>
            <p>
              Відділення має доступ до сучасних методів діагностики, що дозволяє
              проводити високоточні дослідження для встановлення діагнозу навіть
              у найскладніших випадках.
            </p>
            <p>
              Комп’ютерна томографія (КТ) забезпечує детальне пошарове
              зображення внутрішніх органів, що є надзвичайно корисним при
              оцінці травм чи онкологічних захворювань. Магнітно-резонансна
              томографія (МРТ) дозволяє отримати високоякісні зображення м’яких
              тканин, нервової системи та суглобів. Ультразвукові дослідження
              (УЗД) є безпечним та швидким методом для оцінки стану внутрішніх
              органів, судин і серця. Рентгенографія використовується для
              діагностики травм, пневмоній та інших патологій. Ехо-кардіографія
              дозволяє оцінити роботу серця та його клапанів, а доплерографія
              забезпечує дослідження кровотоку в судинах. Ендоскопічні
              дослідження допомагають виявляти захворювання шлунково-кишкового
              тракту та інших порожнистих органів, що сприяє своєчасному
              виявленню та лікуванню патологій.
            </p>
            <p>
              Завдяки цим передовим технологіям діагностика у відділенні є
              швидкою, точною та ефективною.
            </p>
          </div>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Контактні телефони:</h4>
            <p>
              <a href="tel:+380445276958">(044) 527-69-58</a> - завідувачка
              відділенням;
            </p>
            <p>
              <a href="tel:+380665283985">(066) 528-39-85</a> - черговий лікар
              відділення;
            </p>
          </div>
        </div>
        <div className={css.section}>
          <h3 className={css.sectionName}>Фотогалерея</h3>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Керівний склад</h4>
            <div className={css.headCard}>
              <img
                className={css.photo}
                src="/manager.jpg"
                alt="Завідуюча відділенням"
              />
              <div className={css.name}>
                <p>
                  <strong>Лазарєва Оксана Василівна</strong>
                </p>
                <br />
                <p>
                  <strong>Посада: </strong>Завідувачка відділенням,
                  лікар-терапевт
                </p>
                <br />
                <p>
                  <strong>Категорія: </strong>Друга
                </p>
                <br />
                <p>
                  <strong>Лікарський досвід: </strong>
                  {getYearsExp(2013)}
                </p>
              </div>
            </div>
          </div>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Лікарський склад</h4>
            <div className={css.card1}>
              <img className={css.photo} src="/doctor1.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Могільчук Надія Олександрівна</strong>
                </p>
                <br />
                <p>
                  <strong>Посада: </strong>Лікар-терапевт
                </p>
                <br />
                <p>
                  <strong>Категорія: </strong>Вища
                </p>
                <br />
                <p>
                  <strong>Лікарський досвід: </strong>
                  {getYearsExp(1989)}
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/doctor2.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Гамалій Валентина Михайлівна</strong>
                </p>
                <br />
                <p>
                  <strong>Посада: </strong>Лікар-терапевт
                </p>
                <br />
                <p>
                  <strong>Категорія: </strong>Вища
                </p>
                <br />
                <p>
                  <strong>Лікарський досвід: </strong>
                  {getYearsExp(1984)}
                </p>
              </div>
            </div>
            <div className={css.card1}>
              <img className={css.photo} src="/doctor1.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Лобода Леся Володимирівна</strong>
                </p>
                <br />
                <p>
                  <strong>Посада: </strong>Лікар-терапевт
                </p>
                <br />
                <p>
                  <strong>Категорія: </strong>Вища
                </p>
                <br />
                <p>
                  <strong>Лікарський досвід: </strong>
                  {getYearsExp(2000)}
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/doctor2.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Дідківська Марта Орестівна</strong>
                </p>
                <br />
                <p>
                  <strong>Посада: </strong>Лікар-терапевт
                </p>
                <br />
                <p>
                  <strong>Категорія: </strong>Перша
                </p>
                <br />
                <p>
                  <strong>Лікарський досвід: </strong>
                  {getYearsExp(2011)}
                </p>
              </div>
            </div>
            <div className={css.card1}>
              <img className={css.photo} src="/doctor1.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Малій Дар’я Олександрівна</strong>
                </p>
                <br />
                <p>
                  <strong>Посада: </strong>Лікар-терапевт
                </p>
                <br />
                <p>
                  <strong>Категорія: </strong>Спеціаліст
                </p>
                <br />
                <p>
                  <strong>Лікарський досвід: </strong>
                  {getYearsExp(2020)}
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/doctor2.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Барташевська Олена Вікторівна</strong>
                </p>
                <br />
                <p>
                  <strong>Посада: </strong>Лікар-терапевт
                </p>
                <br />
                <p>
                  <strong>Категорія: </strong>Спеціаліст
                </p>
                <br />
                <p>
                  <strong>Лікарський досвід: </strong>
                  {getYearsExp(2019)}
                </p>
              </div>
            </div>
            <div className={css.card1}>
              <img className={css.photo} src="/doctor1.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Сіденко Анастасія Михайлівна</strong>
                </p>
                <br />
                <p>
                  <strong>Посада: </strong>Лікар-терапевт
                </p>
                <br />
                <p>
                  <strong>Категорія: </strong>Спеціаліст
                </p>
                <br />
                <p>
                  <strong>Лікарський досвід: </strong>
                  {getYearsExp(2021)}
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/doctor2.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Гралюк Марина Іванівна</strong>
                </p>
                <br />
                <p>
                  <strong>Посада: </strong>Лікар-терапевт
                </p>
                <br />
                <p>
                  <strong>Категорія: </strong>Вища
                </p>
                <br />
                <p>
                  <strong>Лікарський досвід: </strong>
                  {getYearsExp(2007)}
                </p>
              </div>
            </div>
            <div className={css.card1}>
              <img className={css.photo} src="/doctor1.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Ковальчук Марія Володимирівна</strong>
                </p>
                <br />
                <p>
                  <strong>Посада: </strong>Лікар-невролог
                </p>
                <br />
                <p>
                  <strong>Категорія: </strong>Спеціаліст
                </p>
                <br />
                <p>
                  <strong>Лікарський досвід: </strong>
                  {getYearsExp(2019)}
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/doctor3.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Кропива Володимир Васильович</strong>
                </p>
                <br />
                <p>
                  <strong>Посада: </strong>Лікар-невролог
                </p>
                <br />
                <p>
                  <strong>Категорія: </strong>Вища
                </p>
                <br />
                <p>
                  <strong>Лікарський досвід: </strong>
                  {getYearsExp(2000)}
                </p>
              </div>
            </div>
          </div>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Сестринський склад</h4>
            <div className={css.headCard}>
              <img
                className={css.photo}
                src="/headnurse.jpg"
                alt="Старша м/с"
              />
              <div className={css.name}>
                <p>
                  <strong>Ткачук Марія Борисівна</strong>
                </p>
                <br />
                <p>
                  <strong>Посада: </strong>Старша медична сестра
                </p>
                <br />
                <p>
                  <strong>Категорія: </strong>Вища
                </p>
                <br />
                <p>
                  <strong>Досвід: </strong>
                  {getYearsExp(1993)}
                </p>
              </div>
            </div>
            <div className={css.card1}>
              <img className={css.photo} src="/nurses.jpg" alt="Медсестри" />
              <div className={css.name}>
                <p>
                  <strong>Омельченко Світлана Миколаївна</strong>, медична
                  сестра вищої категорії
                </p>
                <br />
                <p>
                  <strong>Перцова Діана Олександрівна</strong>, медична сестра
                </p>
                <br />
                <p>
                  <strong>Веремієць Людмила Миколаївна</strong>, медична сестра
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/nurses.jpg" alt="Медсестри" />
              <div className={css.name}>
                <p>
                  <strong>Павленко Галина Степанівна</strong>, медична сестра
                  вищої категорії
                </p>
                <br />
                <p>
                  <strong>Новак Анна Василівна</strong>, медична сестра вищої
                  категорії
                </p>
                <br />
                <p>
                  <strong>Домашевкська Світлана Анатоліївна</strong>, медична
                  сестра вищої категорії
                </p>
              </div>
            </div>
            <div className={css.card1}>
              <img className={css.photo} src="/nurses.jpg" alt="Медсестри" />
              <div className={css.name}>
                <p>
                  <strong>Приседько Ольга Андріївна</strong>, медична сестра
                  вищої категорії
                </p>
                <br />
                <p>
                  <strong>Стеценко Юлія Борисівна</strong>, медична сестра
                </p>
                <br />
                <p>
                  <strong>Бізіля Саміна Зафарівна</strong>, медична сестра
                </p>
              </div>
            </div>
          </div>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Молодший сестринський склад</h4>
            <div className={css.headCard}>
              <img
                className={css.photo}
                src="/nurseboss.jpg"
                alt="Сестра-господарка"
              />
              <div className={css.name}>
                <p>
                  <strong>Осьмачкіна Людмила Борисівна</strong>
                </p>
                <br />
                <p>
                  <strong>Посада: </strong>Працівник з господарської діяльності
                </p>
                <br />
                <p>
                  <strong>Досвід: </strong>
                  {getYearsExp(1996)}
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/nurses2.jpg" alt="Санітарки" />
              <div className={css.name}>
                <p>
                  <strong>Шестакова Валентина Григорівна</strong>, <br />
                  молодша медична сестра
                </p>
                <p>
                  <strong>Полонська Ніна Іванівна</strong>, <br />
                  молодша медична сестра
                </p>
                <p>
                  <strong>Обруч Ірина Миколаївна</strong>, <br />
                  молодша медична сестра
                </p>
                <p>
                  <strong>Бабич Ольга Петрівна</strong>, <br />
                  молодша медична сестра
                </p>
                <p>
                  <strong>Тригубенко Ольга Петрівна</strong>, <br />
                  молодша медична сестра
                </p>
              </div>
            </div>
            <div className={css.card1}>
              <img className={css.photo} src="/nurses2.jpg" alt="Санітарки" />
              <div className={css.name}>
                <p>
                  <strong>Рощук Валентина Петрівна</strong>, молодша медична
                  сестра
                </p>
                <br />
                <p>
                  <strong>Романенко Ольга Миколаївна</strong>, молодша медична
                  сестра
                </p>
                <br />
                <p>
                  <strong>Масленко Ніна Іванівна</strong>, молодша медична
                  сестра
                </p>
                <br />
                <p>
                  <strong>Гусак Людмила Павлівна</strong>, молодша медична
                  сестра
                </p>
                <br />
                <p>
                  <strong>Бабич Віра Михайлівна</strong>, молодша медична сестра
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img
                className={css.photo}
                src="/barmaids.jpg"
                alt="Санітарки-буфетниці"
              />
              <div className={css.name}>
                <p>
                  <strong>Ващук Світлана Анатоліївна</strong>, <br />
                  молодша медична сестра - буфетниця
                </p>
                <br />
                <p>
                  <strong>Калюжна Любов Георгіївна</strong>, <br />
                  молодша медична сестра - буфетниця
                </p>
              </div>
            </div>
          </div>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Відділення зсередини</h4>
            <div className={css.card1}>
              <img className={css.photo} src="/dep1.jpg" alt="Відділення" />
              <div className={css.name}>
                <p className={css.para}>
                  Коридори та приміщення відділення відзначаються зразковою
                  чистотою та порядком, що забезпечуються злагодженою роботою
                  висококваліфікованого персоналу. Завдяки чіткій організації і
                  професійному управлінню керівництва, підтримується бездоганна
                  гігієна, що створює комфортні та безпечні умови як для
                  пацієнтів, так і для медичного персоналу.
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/dep2.jpg" alt="Відділення" />
              <div className={css.name}>
                <p className={css.para}>
                  Палати відповідають сучасним стандартам, оснащені всім
                  необхідним для комфортного перебування пацієнтів. Вони добре
                  провітрюються, регулярно очищуються і підтримуються в
                  ідеальному стані відповідно до чинних санітарно-гігієнічних
                  норм. Такий підхід забезпечує чистоту, безпеку та сприятливі
                  умови для лікування й відновлення пацієнтів.
                </p>
              </div>
            </div>
            <div className={css.card1}>
              <img className={css.photo} src="/dep3.jpg" alt="Відділення" />
              <div className={css.name}>
                <p className={css.para}>
                  Харчування пацієнтів організовано безпосередньо у палатах, де
                  кожен отримує страви, підібрані за індивідуальним замовленням
                  відповідно до призначень лікаря. Меню складається з
                  урахуванням дієтичних показань і медичних потреб пацієнта,
                  забезпечуючи максимально сприятливі умови для відновлення
                  здоров’я.
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/dep4.jpg" alt="Відділення" />
              <div className={css.name}>
                <p className={css.para}>
                  Лікування та проведення ін’єкцій організовані з максимальною
                  зручністю для пацієнтів і здійснюються безпосередньо в
                  палатах. Такий підхід забезпечує комфорт, знижує стрес під час
                  процедур і сприяє швидшому відновленню. Увага персоналу до
                  потреб кожного пацієнта гарантує якість та ефективність
                  медичних послуг.
                </p>
              </div>
            </div>
            <div className={css.card1}>
              <img className={css.photo} src="/dep5.jpg" alt="Відділення" />
              <div className={css.name}>
                <p className={css.para}>
                  Сучасні методи лікування, які застосовуються у відділенні,
                  спрямовані на усунення або мінімізацію причин, що можуть
                  викликати хропіння у пацієнтів. Завдяки комплексному підходу,
                  який включає медикаментозну терапію, корекцію положення тіла
                  під час сну, а також ефективне лікування супутніх захворювань
                  (наприклад, проблем із дихальними шляхами), досягається висока
                  якість відпочинку пацієнтів та комфорт для всіх, хто перебуває
                  у відділенні.
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/dep6.jpg" alt="Відділення" />
              <div className={css.name}>
                <p className={css.para}>
                  Виписані пацієнти щиро висловлюють подяку своїм лікарям за
                  професіоналізм, турботу і врятоване здоров’я. Така вдячність
                  створює атмосферу взаємної радості, адже лікарі, які
                  присвятили свої зусилля відновленню здоров’я пацієнта, також
                  відчувають задоволення від досягнутого результату та щастя від
                  вдалого лікування.
                </p>
              </div>
            </div>
            <div className={css.card1}>
              <img className={css.photo} src="/dep7.jpg" alt="Відділення" />
              <div className={css.name}>
                <p className={css.para}>
                  Керівництво відділення демонструє стабільно високий рівень
                  організації роботи, ефективно реагуючи на будь-які скарги
                  пацієнтів. Проблеми вирішуються оперативно та професійно, що
                  сприяє підвищенню довіри до медичного персоналу. Регулярні
                  перевірки департаменту охорони здоров’я проходять без
                  ускладнень, завдяки чіткій відповідності стандартам і нормам,
                  а також завчасній підготовці. Такий підхід забезпечує
                  стабільність у роботі відділення і підтверджує його високий
                  професійний рівень.
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/dep8.jpg" alt="Відділення" />
              <div className={css.name}>
                <p className={css.para}>
                  Професійний і дружній колектив відділення щодня надає
                  високоякісну допомогу пацієнтам, навіть у надзвичайно складних
                  умовах. Незважаючи на постійний потік тяжкохворих, виснажливі
                  чергування, виклики на невідкладні стани, рутинні
                  адміністративні обов&apos;язки, скарги окремих пацієнтів і
                  регулярні перевірки керівництва, вони продовжують виконувати
                  свою роботу з посмішкою.
                </p>
                <p className={css.para}>
                  Усе це — в реаліях війни, коли навантаження зростає, а ресурси
                  стають обмеженішими. Проте їхня відданість справі залишається
                  незмінною.
                </p>
                <p className={css.para}>
                  Подякуйте лікарям. Вони дарують людям надію, здоров&apos;я та
                  життя. І пам’ятайте: найкраща подяка — це ваша щира вдячність,
                  а не коробка цукерок.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Therapy;
