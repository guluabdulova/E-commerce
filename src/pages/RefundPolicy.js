import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import '../css/RefundPolicy.css';
import '../Responsive.css'


const RefundPolicy = () => {
  return (
    <>
    <Meta title={'Geri qaytarma siyasəti'} />
      <BreadCrumb title='Geri qaytarma siyasəti' />
      <div className="refund-policy-container">
      <header>
        <h1>Geri Qaytarılma Siyasəti</h1>
        <p>Sonuncu yeniləmə: [24.12.2023]</p>
      </header>

      <section>
        <h2>1. Sifariş İptalı</h2>
        <p>
          Müştərilər sifarişlərini qəbul etdikdən sonra 24 saat ərzində sifarişi ləğv edə
          bilərlər. 24 saatdan sonra sifariş ləğv edilməsi mümkün olmayacaq.
        </p>
      </section>

      <section>
        <h2>2. Malın Təhvil Alınması</h2>
        <p>
          Təhvil alınan malların və ya xidmətlərin keyfiyyətsizliyi və ya sifarişinizə
          tam uyğun gəlməməsi halında, lütfən müştəri xidmətlərimizlə əlaqə saxlayın.
        </p>
      </section>

      <section>
        <h2>3. Əldən Qaytarılma</h2>
        <p>
          Keyfiyyətsiz və ya problemli məhsulları 14 iş günü ərzində əldən qaytarmağınız
          mümkündür. Əldən qaytarılma haqqında daha ətraflı məlumat üçün müştəri
          xidmətlərimizə müraciət edin.
        </p>
      </section>

      <section>
        <h2>Bizimlə Əlaqə</h2>
        <p>
          Geri qaytarılma siyasəti ilə bağlı suallarınız və şikayətləriniz varsa, bizimlə{' '}
          <a href="mailto:elektrogalaksi@mail.com">elektrogalaksi@mail.com</a>{' '}
          ünvanından əlaqə saxlaya bilərsiniz.
        </p>
      </section>

      <footer>
        <p>
          Bu Geri Qaytarılma Siyasəti sonuncu dəfə [24.12.2023] tarixində yenilənmişdir.
        </p>
      </footer>
    </div>
    </>
  )
}

export default RefundPolicy;

