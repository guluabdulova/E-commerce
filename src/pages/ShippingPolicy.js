import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import '../css/ShippingPolicy.css'
import '../Responsive.css'

const ShippingPolicy = () => {
  return (
    <>
    <Meta title={'Göndərmə Siyasəti'} />
      <BreadCrumb title='Göndərmə Siyasəti' />
      <div className="shipping-policy-container">
      <header>
        <h1>Göndərmə Siyasəti</h1>
        <p>Sonuncu yeniləmə: [24.12.2023]</p>
      </header>

      <section>
        <h2>1. Çatdırılma Müddəti</h2>
        <p>
          Sifarişlərin çatdırılma müddəti əsasən 3-5 iş günüdür. Çatdırılma müddəti
          əlavə olaraq, ünvan və çatdırılma xidmətinin yüklənməsindən təsirlənə bilər.
        </p>
      </section>

      <section>
        <h2>2. Çatdırılma Qiyməti</h2>
        <p>
          Çatdırılma qiyməti sifarişin çəkisinə və çatdırılma ünvanına görə dəyişir.
          Qiymətlər veb saytımızda göstərildiyi kimi hesablanır.
        </p>
      </section>

      <section>
        <h2>3. Çatdırılma Saatları</h2>
        <p>
          Çatdırılma saatları iş günü ərzində 9:00 - 18:00 arasında təyin edilmişdir.
          Çatdırılma saatlarını müəyyən etmək üçün müştəri xidmətlərimizə əlaqə saxlaya bilərsiniz.
        </p>
      </section>

      {/* Digər bölmələri əlavə edin */}

      <section>
        <h2>Bizimlə Əlaqə</h2>
        <p>
          Çatdırılma siyasəti ilə bağlı suallarınız və təəssüfləriniz varsa, bizimlə{' '}
          <a href="mailto:elektrogalaksi@mail.com">elektrogalaksi@mail.com</a>{' '}
          ünvanından əlaqə saxlaya bilərsiniz.
        </p>
      </section>

      <footer>
        <p>
          Bu Çatdırılma Siyasəti sonuncu dəfə [24.12.2023] tarixində yenilənmişdir.
        </p>
      </footer>
    </div>
    </>
  )
}

export default ShippingPolicy


