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
            <p>(044) 527-69-58 - зав. відділенням;</p>
            <p>(044) 518-64-90 - ординаторська;</p>
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
                <p>
                  <strong>Освіта:</strong> ВНМУ ім. Н.А.Пирогова
                </p>
                <p>
                  <strong>Досвід:</strong> 10 років
                </p>
                <p>
                  <strong>Категорія:</strong> Перша
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
                <p>
                  <strong>Освіта:</strong>
                </p>
                <p>
                  <strong>Досвід:</strong>
                </p>
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
                <p>
                  <strong>Освіта:</strong>
                </p>
                <p>
                  <strong>Досвід:</strong>
                </p>
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
                <p>
                  <strong>Освіта:</strong>
                </p>
                <p>
                  <strong>Досвід:</strong>
                </p>
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
                <p>
                  <strong>Освіта:</strong>
                </p>
                <p>
                  <strong>Досвід:</strong>
                </p>
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
                <p>
                  <strong>Освіта:</strong>
                </p>
                <p>
                  <strong>Досвід:</strong>
                </p>
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
                <p>
                  <strong>Освіта:</strong>
                </p>
                <p>
                  <strong>Досвід:</strong>
                </p>
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
                <p>
                  <strong>Освіта:</strong>
                </p>
                <p>
                  <strong>Досвід:</strong>
                </p>
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
                <p>
                  <strong>Освіта:</strong>
                </p>
                <p>
                  <strong>Досвід:</strong>
                </p>
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
                <p>
                  <strong>Освіта:</strong>
                </p>
                <p>
                  <strong>Досвід:</strong>
                </p>
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
                <p>
                  <strong>Освіта:</strong>
                </p>
                <p>
                  <strong>Досвід:</strong>
                </p>
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
                <p>
                  <strong>Освіта:</strong>
                </p>
                <p>
                  <strong>Досвід:</strong> 1 рік
                </p>
                <p>
                  <strong>Категорія:</strong> Інтерн
                </p>
              </div>
            </div>
            <div className={css.card2}>
              <img className={css.photo} src="/doctor2.jpg" alt="Доктор" />
              <div className={css.name}>
                <p>
                  <strong>Шульган Тетяна Вікторівна</strong>, лікар-інтерн
                </p>
                <p>
                  <strong>Освіта:</strong>
                </p>
                <p>
                  <strong>Досвід:</strong> 1 рік
                </p>
                <p>
                  <strong>Категорія:</strong> Інтерн
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
