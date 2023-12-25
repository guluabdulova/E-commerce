import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import '../css/PrivacyPolicy.css'
import '../Responsive.css'


const PrivacyPolicy = () => {
  return (
    <>
    <Meta title={'Gizlilik Siyasəti'} />
      <BreadCrumb title='Gizlilik Siyasəti' />
      <header>
        <h1>Məxfilik Siyasəti</h1>
        <p>Sonuncu yeniləmə: [24.12.2023]</p>
      </header>

      <section>
        <h2>ElektroGalaksi'ya xoş gəlmisiniz</h2>
        <p>
          Bu Məxfilik Siyasəti, veb saytımızı və xidmətlərimizi istifadə etdikdən sonra
          şəxsi məlumatlarınızın necə toplandığını, istifadə edildiyini, açıqlandığını və
          qorunduğunu izah edir. ElektroGalaksi'ya daxil olmağınız və ya istifadə etməniz
          bu Məxfilik Siyasəsində təsvir edilən tədbirləri razılaşmağınız deməkdir.
        </p>
      </section>

      <section>
        <h2>Topladığımız Məlumatlar</h2>
        <h3>Şəxsi Məlumatlar</h3>
        <p>
          Bir hesab yaratdığınızda adınız, e-poçt ünvanınız, ünvanınız və
          telefon nömrəniz kimi şəxsi məlumatları toplaya bilərik.
        </p>

        <h3>Baxış Məlumatları</h3>
        <p>
          Cihazınız haqqında müəyyən məlumatları avtomatik olaraq toplayırıq, bu məlumatlar
          IP ünvanınızı, brauzer tipinizi və əməliyyat sistemini daxil edir. Həmçinin,
          ElektroGalaksi'də təcrübənizi artırmaq üçün kukilər və oxşar texnologiyalardan
          istifadə edə bilərik.
        </p>
      </section>

      <section>
        <h2>Məlumatlarınızı Necə İstifadə Etdiyimiz</h2>
        <p>
          Topladığımız məlumatları müxtəlif məqsədlərlə istifadə edirik, bunlar arasında
          sifarişlərinizi emal etmək və yerinə yetirmək, müştəri dəstəyi təmin etmək,
          təcrübənizi şəxsişləşdirmək, veb sayt istifadəsini təhlil etmək və xidmətlərimizi
          təkmilləşdirmək yer alır. Həmçinin, sizin razılığınızla təklif və yeniliklər göndərə bilərik.
        </p>
      </section>

      <section>
        <h2>Bizimlə Əlaqə</h2>
        <p>
          Məxfilik Siyasətimizlə bağlı suallarınız və təəssüfləriniz varsa, bizimlə{' '}
          <a href="mailto:elektrogalaksi@mail.com">elektrogalaksi@mail.com</a>{' '}
          ünvanından əlaqə saxlaya bilərsiniz.
        </p>
      </section>

      <footer>
        <p>
          Bu Məxfilik Siyasəti sonuncu dəfə [24.12.2023] tarixində yenilənmişdir.
        </p>
      </footer>
    </>
  )
}

export default PrivacyPolicy





