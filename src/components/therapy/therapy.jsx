import css from './therapy.module.css';

function Therapy() {
  return (
    <>
      <div className={css.container}>
        <h2 className={css.pageHeader}>Терапевтичне відділення</h2>

        <div className={css.section}>
          <h3 className={css.sectionName}>Про відділення</h3>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Завідуюча відділенням:</h4>
            <p>Лазарєва Оксана Василівна, лікар-терапевт.</p>
          </div>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Основна діяльність:</h4>
            <p>
              Відділення забезпечує цілодобову ургентну допомогу пацієнтам з
              терапевтичними та критичними станами, включаючи бронхо-легеневу,
              серцево-судинну патологію, патологію ендокринної системи,
              травлення, стани після утоплення, теплового удару,
              переохолодження, або ураження електричним струмом.
            </p>
            <p>
              Лікарі відділення консультують планово у третьому і четвертому
              хірургічних, першому травматологічному, а в ургентних випадках – у
              всіх інших відділеннях лікарні.
            </p>
          </div>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Статистика:</h4>
            <p>
              Місткість відділення інтенсивної терапії невідкладних станів
              становить 50 ліжок. Щороку тут приймають на лікування до ??? та
              консультують в межах 2.700 - 3.000 пацієнтів. Завантаженість
              відділення у середньому становить 11 ліжко-днів на одного
              пацієнта.
            </p>
            <p>Летальність зберігається на низькому рівні — близько 1,5%.</p>
          </div>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Діагностичні можливості:</h4>
            <p>
              Відділення має доступ до сучасних методів діагностики, таких як
              КТ, МРТ, УЗД, рентгенографія, ехо-кардіографія, доплерографія та
              ендоскопічні дослідження, що сприяє швидкому і точному
              встановленню діагнозу.
            </p>
          </div>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Наукова діяльність:</h4>
            <p>
              Відділення є навчальною базою кафедри невідкладних станів
              Національної медичної академії післядипломної освіти імені П. Л.
              Шупика, очолюваної професором І.С. Зозулею. Лікарі відділення
              беруть участь у наукових розробках напрямків, в яких працює
              кафедра, а також активно відвідують конференції та конгреси, що
              відбуваються у Києві та по всій Україні.
            </p>
          </div>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Контактні телефони:</h4>
            <p>
              <a href="tel:+380445276958">(044) 527-69-58</a> - завідуюча
              відділенням;
            </p>
            <p>
              <a href="tel:+380445186490">(044) 518-64-90</a> - ординаторська;
            </p>
          </div>
        </div>
        <div className={css.section}>
          <h3 className={css.sectionName}>Фотогалерея</h3>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Завідуюча відділенням</h4>
            <div className={css.card1}>
              <img
                className={css.photo}
                src="/manager.jpg"
                alt="Завідуюча відділенням"
              />
              <div className={css.name}>
                <p>
                  <strong>Лазарєва Оксана Василівна</strong>, лікар-терапевт{' '}
                </p>
                <br />
                <p>
                  <strong>Освіта:</strong>
                </p>
                <br />
                <p>
                  <strong>Досвід:</strong>
                </p>
                <br />
                <p>
                  <strong>Категорія:</strong>
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
                  <strong>Могільчук Надія Олександрівна</strong>, лікар-терапевт
                </p>
                <br />
                <p>
                  <strong>Освіта:</strong>
                </p>
                <br />
                <p>
                  <strong>Досвід:</strong>
                </p>
                <br />
                <p>
                  <strong>Категорія:</strong>
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/doctor2.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Гамалій Валентина Михайлівна</strong>, лікар-терапевт
                </p>
                <br />
                <p>
                  <strong>Освіта:</strong>
                </p>
                <br />
                <p>
                  <strong>Досвід:</strong>
                </p>
                <br />
                <p>
                  <strong>Категорія:</strong>
                </p>
              </div>
            </div>
            <div className={css.card1}>
              <img className={css.photo} src="/doctor1.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Лобода Леся Володимирівна</strong>, лікар-терапевт
                </p>
                <br />
                <p>
                  <strong>Освіта:</strong>
                </p>
                <br />
                <p>
                  <strong>Досвід:</strong>
                </p>
                <br />
                <p>
                  <strong>Категорія:</strong>
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/doctor2.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Дідківська Марта Орестівна</strong>, лікар-терапевт
                </p>
                <br />
                <p>
                  <strong>Освіта:</strong>
                </p>
                <br />
                <p>
                  <strong>Досвід:</strong>
                </p>
                <br />
                <p>
                  <strong>Категорія:</strong>
                </p>
              </div>
            </div>
            <div className={css.card1}>
              <img className={css.photo} src="/doctor1.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Малій Дар’я Олександрівна</strong>, лікар-терапевт
                </p>
                <br />
                <p>
                  <strong>Освіта:</strong>
                </p>
                <br />
                <p>
                  <strong>Досвід:</strong>
                </p>
                <br />
                <p>
                  <strong>Категорія:</strong>
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/doctor2.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Барташевська Олена Вікторівна</strong>, лікар-терапевт
                </p>
                <br />
                <p>
                  <strong>Освіта:</strong>
                </p>
                <br />
                <p>
                  <strong>Досвід:</strong>
                </p>
                <br />
                <p>
                  <strong>Категорія:</strong>
                </p>
              </div>
            </div>
            <div className={css.card1}>
              <img className={css.photo} src="/doctor1.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Сіденко Анастасія Михайлівна</strong>, лікар-терапевт
                </p>
                <br />
                <p>
                  <strong>Освіта:</strong>
                </p>
                <br />
                <p>
                  <strong>Досвід:</strong>
                </p>
                <br />
                <p>
                  <strong>Категорія:</strong>
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/doctor2.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Гралюк Марина Іванівна</strong>, лікар-терапевт
                </p>
                <br />
                <p>
                  <strong>Освіта:</strong>
                </p>
                <br />
                <p>
                  <strong>Досвід:</strong>
                </p>
                <br />
                <p>
                  <strong>Категорія:</strong>
                </p>
              </div>
            </div>
            <div className={css.card1}>
              <img className={css.photo} src="/doctor1.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Ковальчук Марія Володимирівна</strong>, лікар-невролог
                </p>
                <br />
                <p>
                  <strong>Освіта:</strong>
                </p>
                <br />
                <p>
                  <strong>Досвід:</strong>
                </p>
                <br />
                <p>
                  <strong>Категорія:</strong>
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/doctor3.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Кропива Володимир Васильович</strong>, лікар-невролог
                </p>
                <br />
                <p>
                  <strong>Освіта:</strong>
                </p>
                <br />
                <p>
                  <strong>Досвід:</strong>
                </p>
                <br />
                <p>
                  <strong>Категорія:</strong>
                </p>
              </div>
            </div>
            <div className={css.card1}>
              <img className={css.photo} src="/doctor1.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Савінова Діана Володимирівна</strong>, лікар-інтерн
                </p>
                <br />
                <p>
                  <strong>Освіта:</strong>
                </p>
                <br />
                <p>
                  <strong>Досвід:</strong>
                </p>
                <br />
                <p>
                  <strong>Категорія:</strong>
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/doctor2.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Шульган Тетяна Вікторівна</strong>, лікар-інтерн
                </p>
                <br />
                <p>
                  <strong>Освіта:</strong>
                </p>
                <br />
                <p>
                  <strong>Досвід:</strong>
                </p>
                <br />
                <p>
                  <strong>Категорія:</strong>
                </p>
              </div>
            </div>
          </div>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Сестринський склад</h4>
            <div className={css.card1}>
              <img
                className={css.photo}
                src="/headnurse.jpg"
                alt="Старша м/с"
              />
              <div className={css.name}>
                <p>
                  <strong>Ткачук Марія Борисівна</strong>, старша медсестра
                </p>
                <br />
                <p>
                  <strong>Освіта:</strong>
                </p>
                <br />
                <p>
                  <strong>Досвід:</strong>
                </p>
                <br />
                <p>
                  <strong>Категорія:</strong>
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/nurses.jpg" alt="Медсестри" />
              <div className={css.name}>
                <p>
                  <strong>Павленко Галина Степанівна</strong>, медсестра
                </p>
                <br />
                <p>
                  <strong>Омельченко Світлана Миколаївна</strong>, медсестра
                </p>
                <br />
                <p>
                  <strong>Перцова Діана Олександрівна</strong>, медсестра
                </p>
                <br />
                <p>
                  <strong>Веремієць Людмила Миколаївна</strong>, медсестра
                </p>
              </div>
            </div>
            <div className={css.card1}>
              <img className={css.photo} src="/nurses.jpg" alt="Медсестри" />
              <div className={css.name}>
                <p>
                  <strong>Приседько Ольга Андріївна</strong>, медсестра
                </p>
                <br />
                <p>
                  <strong>Новак Анна Василівна</strong>, медсестра
                </p>
                <br />
                <p>
                  <strong>Стеценко Юлія Борисівна</strong>, медсестра
                </p>
                <br />
                <p>
                  <strong>Бізіля Саміна Зафарівна</strong>, медсестра
                </p>
              </div>
            </div>
          </div>
          <div className={css.subsection}>
            <h4 className={css.subsectionName}>Молодший сестринський склад</h4>
            <div className={css.card1}>
              <img
                className={css.photo}
                src="/nurseboss.jpg"
                alt="Сестра-господарка"
              />
              <div className={css.name}>
                <p>
                  <strong>Осьмачкіна Людмила Борисівна</strong>,
                  сестра-господарка
                </p>
                <br />
                <p>
                  <strong>Освіта:</strong>
                </p>
                <br />
                <p>
                  <strong>Досвід:</strong>
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/nurses2.jpg" alt="Санітарки" />
              <div className={css.name}>
                <p>
                  <strong>Шестакова Валентина Григорівна</strong>, молодша
                  медсестра
                </p>
                <br />
                <p>
                  <strong>Полонська Ніна Іванівна</strong>, молодша медсестра
                </p>
                <br />
                <p>
                  <strong>Обруч Ірина Миколаївна</strong>, молодша медсестра
                </p>
                <br />
                <p>
                  <strong>Бабич Ольга Петрівна</strong>, молодша медсестра
                </p>
                <br />
                <p>
                  <strong>Тригубенко Ольга Петрівна</strong>, молодша медсестра
                </p>
              </div>
            </div>
            <div className={css.card1}>
              <img className={css.photo} src="/nurses2.jpg" alt="Санітарки" />
              <div className={css.name}>
                <p>
                  <strong>Рощук Валентина Петрівна</strong>, молодша медсестра
                </p>
                <br />
                <p>
                  <strong>Романенко Ольга Миколаївна</strong>, молодша медсестра
                </p>
                <br />
                <p>
                  <strong>Масленко Ніна Іванівна</strong>, молодша медсестра
                </p>
                <br />
                <p>
                  <strong>Гусак Людмила Павлівна</strong>, молодша медсестра
                </p>
                <br />
                <p>
                  <strong>Бабич Віра Михайлівна</strong>, молодша медсестра
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
                  <strong>Ващук Світлана Анатоліївна</strong>,
                  санітарка-буфетниця
                </p>
                <br />
                <p>
                  <strong>Калюжна Любов Георгіївна</strong>, санітарка-буфетниця
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
