import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import '../css/TermAndContions.css'
import '../Responsive.css'

const TermAndContions = () => {
  return (
    <>
    <Meta title={'Xidmət Şərtləri'} />
      <BreadCrumb title='Xidmət Şərtləri' />

      <div className="service-terms-container">
      <header>
        <h1>Xidmət Şərtləri</h1>
        <p>Sonuncu yeniləmə: [24.12.2023]</p>
      </header>

      <section>
        <h2>1. Xidmətin İstifadəsi</h2>
        <p>
          Bu veb saytı istifadə etmək üçün 18 yaş və ya daha yuxarı yaşda olmalısınız. Xidmətimizi
          istifadə edərək bu şərtləri qəbul edir və razılıq göstərirsiniz.
        </p>
      </section>

      <section>
        <h2>2. Hüquqi Məhdudiyyətlər</h2>
        <p>
          Xidmətimizi istifadə edərkən, yerli və beynəlxalq hüquq normativlərinə riayət etməlisiniz.
          Hər hansı bir qanunsuz əməliyyat etmək və ya başqalarının hüquqlarına təsir etmək qadağandır.
        </p>
      </section>

      <section>
        <h2>3. Təhlükəsizlik</h2>
        <p>
          Xidmətimizi istifadə edərkən şəxsi məlumatlarınızın təhlükəsizliyində özəlliklə diqqətli
          olmalısınız. İstifadəçi hesabınızın təhlükəsizliyini qorumaq sizin öhdəliyinizdir.
        </p>
      </section>

      <section>
        <h2>Bizimlə Əlaqə</h2>
        <p>
          Xidmət şərtləri ilə bağlı suallarınız və təəssüfləriniz varsa, bizimlə{' '}
          <a href="elektrogalaksi@mail.com">elektrogalaksi@mail.com</a>{' '}
          ünvanından əlaqə saxlaya bilərsiniz.
        </p>
      </section>

      <footer>
        <p>
          Bu Xidmət Şərtləri sonuncu dəfə [24.12.2023] tarixində yenilənmişdir.
        </p>
      </footer>
    </div>
    </>
  )
}

export default TermAndContions;





