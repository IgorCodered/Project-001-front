/**
 * ФАЙЛ: src/App.jsx
 * НАЗНАЧЕНИЕ: Лендинг Breporter - сервис автогенерации PDF-отчётов для соло-маркетологов
 */
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <span className="logo-icon">📊</span>
            <span className="logo-text">Breporter</span>
          </div>
          <nav className="nav">
            <a href="#features">Возможности</a>
            <a href="#how-it-works">Как это работает</a>
            <a href="#pricing">Тарифы</a>
          </nav>
          <button className="btn btn-primary cta-button">
            Получить ранний доступ
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-badge">
            🚀 Скоро запуск
          </div>
          <h1 className="hero-title">
            Автоматические PDF-отчёты из 
            <span className="gradient-text"> GA4 и Meta Ads</span>
          </h1>
          <p className="hero-subtitle">
            Соло-маркетологи тратят 4–6 часов в месяц на ручную сборку отчётов. 
            Breporter делает это автоматически по расписанию — с вашим логотипом 
            и прямой отправкой клиентам.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">4-6 ч</span>
              <span className="stat-label">экономии в месяц</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">$19</span>
              <span className="stat-label">в месяц</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">White-label</span>
              <span className="stat-label">брендирование</span>
            </div>
          </div>
          <div className="hero-form">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="email-input"
            />
            <button className="btn btn-primary btn-large">
              Получить доступ за $19/мес
            </button>
          </div>
          <p className="hero-note">
            🔒 Никакого спама. Только уведомления о запуске.
          </p>
        </div>
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <h2 className="section-title">Знакомая ситуация?</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">⏰</div>
              <h3>Часы ручной работы</h3>
              <p>Выгрузка данных из GA4, скриншоты из Meta Ads, копирование в Google Docs...</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🎨</div>
              <h3>Нет брендирования</h3>
              <p>Клиенты получают «сырые» отчёты без вашего логотипа и фирменного стиля</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📧</div>
              <h3>Ручная отправка</h3>
              <p>Каждый месяц напоминаете себе отправить отчёт, теряете время на рассылку</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">Что вы получаете</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Автогенерация по расписанию</h3>
              <p>Настройте раз в месяц — получайте готовые PDF-отчёты автоматически</p>
            </div>
            <div className="feature-card featured">
              <div className="feature-icon">🏷️</div>
              <h3>White-label брендирование</h3>
              <p>Ваш логотип, ваши цвета, ваш стиль. Клиенты видят только ваш бренд</p>
              <span className="featured-badge">Популярно</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>GA4 + Meta Ads в одном отчёте</h3>
              <p>Все ключевые метрики из обеих платформ в едином профессиональном формате</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📧</div>
              <h3>Автоматическая отправка</h3>
              <p>Отчёт уходит клиенту на email сразу после генерации — без вашего участия</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Адаптивный дизайн</h3>
              <p>Отчёты отлично выглядят на любом устройстве — от телефона до десктопа</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Безопасность данных</h3>
              <p>Ваши данные не хранятся. Отчёты генерируются «на лету» и удаляются после отправки</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">Как это работает</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Подключите источники</h3>
                <p>Авторизуйтесь в GA4 и Meta Ads через безопасное OAuth-подключение</p>
              </div>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Настройте шаблон</h3>
                <p>Загрузите логотип, выберите цвета и метрики для отображения</p>
              </div>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Укажите расписание</h3>
                <p>Выберите дату генерации и email клиента для автоматической отправки</p>
              </div>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Готово!</h3>
                <p>Breporter всё сделает сам. Вы экономите 4-6 часов каждый месяц</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="container">
          <h2 className="section-title">Простой тариф</h2>
          <p className="section-subtitle">Одна цена. Все возможности.</p>
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Pro</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">19</span>
                <span className="period">/мес</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li>✅ Неограниченное количество отчётов</li>
              <li>✅ White-label брендирование</li>
              <li>✅ Автогенерация по расписанию</li>
              <li>✅ Автоматическая отправка клиентам</li>
              <li>✅ GA4 + Meta Ads интеграция</li>
              <li>✅ Приоритетная поддержка</li>
            </ul>
            <button className="btn btn-primary btn-full">
              Начать использовать
            </button>
            <p className="pricing-note">14 дней бесплатно после запуска</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Готовы освободить 4-6 часов в месяц?</h2>
          <p className="cta-subtitle">
            Оставьте email — сообщим о запуске и дадим ранний доступ со скидкой 50%
          </p>
          <div className="cta-form">
            <input 
              type="email" 
              placeholder="Ваш рабочий email" 
              className="email-input large"
            />
            <button className="btn btn-accent btn-large">
              Получить ранний доступ
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">📊</span>
              <span className="logo-text">Breporter</span>
            </div>
            <p>Автоматические отчёты для соло-маркетологов</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Продукт</h4>
              <a href="#features">Возможности</a>
              <a href="#pricing">Тарифы</a>
            </div>
            <div className="footer-column">
              <h4>Компания</h4>
              <a href="#">О нас</a>
              <a href="#">Блог</a>
            </div>
            <div className="footer-column">
              <h4>Поддержка</h4>
              <a href="#">FAQ</a>
              <a href="#">Контакты</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2025 Breporter. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
