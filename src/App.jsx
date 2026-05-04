/**
 * ФАЙЛ: src/App.jsx
 * НАЗНАЧЕНИЕ: Лендинг Breporter - сервис автогенерации отчётов для маркетологов
 * СТИЛЬ: Linear + Notion + Supermetrics
 */
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <svg className="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="url(#logo-gradient)"/>
              <path d="M12 28V20M20 28V16M28 28V22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40">
                  <stop stopColor="#009688"/>
                  <stop offset="1" stopColor="#00BCD4"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="logo-text">Breporter</span>
          </div>
          <nav className="nav">
            <a href="#problems">Проблемы</a>
            <a href="#solution">Решение</a>
            <a href="#features">Возможности</a>
            <a href="#pricing">Тарифы</a>
          </nav>
          <button className="btn btn-primary cta-button">
            Попробовать бесплатно
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Ранний доступ открыт
          </div>
          
          <h1 className="hero-title">
            Перестаньте тратить <span className="highlight">5 часов в месяц</span> 
            на ручную сборку отчётов
          </h1>
          
          <p className="hero-subtitle">
            Breporter автоматически собирает данные из Google Ads, Meta Ads, Яндекс Директ 
            и GA4 в красивые брендированные отчёты. Отправляйте клиентам готовые PDF 
            по расписанию — без вашего участия.
          </p>
          
          <div className="hero-form">
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="email-input"
            />
            <button className="btn btn-primary btn-large">
              Начать бесплатно →
            </button>
          </div>
          <p className="hero-note">
            ✓ 14 дней бесплатно &nbsp;&nbsp; ✓ Карта не требуется &nbsp;&nbsp; ✓ Отмена в любой момент
          </p>

          {/* Platform Icons */}
          <div className="platform-section">
            <p className="platform-label">Интеграции со всеми рекламными платформами:</p>
            <div className="platform-icons">
              <div className="platform-icon google">
                <svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              </div>
              <div className="platform-icon meta">
                <svg viewBox="0 0 24 24"><path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
              <div className="platform-icon yandex">
                <svg viewBox="0 0 24 24"><path fill="#FC3F1D" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
              </div>
              <div className="platform-icon ga4">
                <svg viewBox="0 0 24 24"><path fill="#E37400" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z"/></svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dashboard Preview */}
        <div className="dashboard-preview">
          <div className="preview-container">
            <div className="preview-header">
              <div className="preview-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="preview-title">breporter.io/dashboard</span>
            </div>
            <div className="preview-content">
              <div className="preview-sidebar">
                <div className="sidebar-item active">📊 Обзор</div>
                <div className="sidebar-item">📈 Кампании</div>
                <div className="sidebar-item">👥 Аудитории</div>
                <div className="sidebar-item">⚙️ Настройки</div>
              </div>
              <div className="preview-main">
                <div className="preview-metrics">
                  <div className="metric-card">
                    <span className="metric-label">Расходы</span>
                    <span className="metric-value">$12,450</span>
                    <span className="metric-change positive">+12%</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-label">Конверсии</span>
                    <span className="metric-value">342</span>
                    <span className="metric-change positive">+8%</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-label">ROAS</span>
                    <span className="metric-value">4.2x</span>
                    <span className="metric-change positive">+15%</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-label">CTR</span>
                    <span className="metric-value">3.8%</span>
                    <span className="metric-change negative">-2%</span>
                  </div>
                </div>
                <div className="preview-chart">
                  <div className="chart-bars">
                    <div className="bar" style={{height: '60%'}}></div>
                    <div className="bar" style={{height: '80%'}}></div>
                    <div className="bar" style={{height: '45%'}}></div>
                    <div className="bar" style={{height: '90%'}}></div>
                    <div className="bar" style={{height: '70%'}}></div>
                    <div className="bar" style={{height: '85%'}}></div>
                    <div className="bar" style={{height: '65%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section id="problems" className="comparison-section">
        <div className="container">
          <h2 className="section-title">
            Вы всё ещё делаете это <span className="text-danger">вручную</span>?
          </h2>
          <p className="section-subtitle">
            Посмотрите, как меняется работа маркетолога с Breporter
          </p>
          
          <div className="comparison-grid">
            <div className="comparison-card before">
              <div className="comparison-header">
                <span className="comparison-icon">😫</span>
                <h3>Без Breporter</h3>
              </div>
              <ul className="comparison-list">
                <li className="comparison-item bad">
                  <span className="item-icon">❌</span>
                  <span>5+ часов каждый месяц на выгрузку данных</span>
                </li>
                <li className="comparison-item bad">
                  <span className="item-icon">❌</span>
                  <span>Данные разбросаны по 5+ кабинетам</span>
                </li>
                <li className="comparison-item bad">
                  <span className="item-icon">❌</span>
                  <span>Клиенты получают «сырые» скриншоты</span>
                </li>
                <li className="comparison-item bad">
                  <span className="item-icon">❌</span>
                  <span>Постоянные ошибки в формулах Excel</span>
                </li>
                <li className="comparison-item bad">
                  <span className="item-icon">❌</span>
                  <span>Невозможно доказать ROI за 5 минут</span>
                </li>
              </ul>
            </div>
            
            <div className="comparison-card after">
              <div className="comparison-header">
                <span className="comparison-icon">😎</span>
                <h3>С Breporter</h3>
              </div>
              <ul className="comparison-list">
                <li className="comparison-item good">
                  <span className="item-icon">✅</span>
                  <span>Отчёты генерируются сами по расписанию</span>
                </li>
                <li className="comparison-item good">
                  <span className="item-icon">✅</span>
                  <span>Все метрики в одном красивом PDF</span>
                </li>
                <li className="comparison-item good">
                  <span className="item-icon">✅</span>
                  <span>White-label с вашим логотипом</span>
                </li>
                <li className="comparison-item good">
                  <span className="item-icon">✅</span>
                  <span>Никаких ошибок — данные точные</span>
                </li>
                <li className="comparison-item good">
                  <span className="item-icon">✅</span>
                  <span>Клиент видит ROI сразу в письме</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="solution-section">
        <div className="container">
          <h2 className="section-title">
            Единая аналитика для всех ваших проектов
          </h2>
          <p className="section-subtitle">
            Забудьте о переключении между кабинетами. Вся картина — в одном месте.
          </p>
          
          <div className="solution-grid">
            <div className="solution-card">
              <div className="solution-number">01</div>
              <h3>Подключите источники за 2 минуты</h3>
              <p>OAuth-авторизация в Google Ads, Meta Ads, Яндекс Директ и GA4. Безопасно, без паролей.</p>
            </div>
            <div className="solution-card">
              <div className="solution-number">02</div>
              <h3>Выберите метрики, которые важны</h3>
              <p>Показы, клики, CPC, CPA, ROAS — настройте дашборд под задачи каждого клиента.</p>
            </div>
            <div className="solution-card">
              <div className="solution-number">03</div>
              <h3>Загрузите логотип и цвета</h3>
              <p>Клиенты получают отчёт с вашим брендом. Они даже не узнают про Breporter.</p>
            </div>
            <div className="solution-card">
              <div className="solution-number">04</div>
              <h3>Настройте расписание отправки</h3>
              <p>Раз в неделю, месяц или квартал. Отчёт уйдёт клиенту автоматически в нужный день.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">Всё, что нужно для профессиональных отчётов</h2>
          
          <div className="features-grid">
            <div className="feature-card large">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
                  <path d="M24 14v10l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Автоматизация по расписанию</h3>
              <p>Настройте один раз — получайте готовые отчёты каждый месяц. Экономьте 5+ часов на рутине.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 48 48" fill="none">
                  <rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 8h16v4H16z" fill="currentColor"/>
                </svg>
              </div>
              <h3>White-label брендирование</h3>
              <p>Ваш логотип, ваши цвета, ваш стиль. Клиенты видят только ваш бренд.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 48 48" fill="none">
                  <path d="M24 4l20 10v20L24 44 4 34V14L24 4z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M24 24l10-5M24 24l-10-5M24 24v12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Все платформы в одном отчёте</h3>
              <p>Google Ads, Meta Ads, Яндекс Директ, GA4 — сведены в единую картину.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 48 48" fill="none">
                  <path d="M8 24l8 8 16-16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Мгновенная отправка</h3>
              <p>Отчёт уходит клиенту на email сразу после генерации. Без вашего участия.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 48 48" fill="none">
                  <path d="M24 8v16l12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Гибкие шаблоны</h3>
              <p>Создавайте разные шаблоны для разных клиентов. Сохраняйте и переиспользуйте.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 48 48" fill="none">
                  <path d="M12 24c0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12S12 30.6 12 24z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M24 16v8l6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Безопасность данных</h3>
              <p>Данные не хранятся. Отчёты генерируются «на лету» и удаляются после отправки.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof-section">
        <div className="container">
          <h2 className="section-title">Уже используют маркетологи из</h2>
          <div className="logos-grid">
            <div className="logo-placeholder">Digital Agency</div>
            <div className="logo-placeholder">Marketing Pro</div>
            <div className="logo-placeholder">AdExperts</div>
            <div className="logo-placeholder">Growth Lab</div>
            <div className="logo-placeholder">ROI Masters</div>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>«Раньше я тратил целый день в начале каждого месяца на отчёты. Теперь это происходит само. Breporter окупился в первый же месяц.»</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">AK</div>
                <div className="author-info">
                  <span className="author-name">Алексей К.</span>
                  <span className="author-role">PPC-специалист, 12 клиентов</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>«Клиенты наконец-то видят понятные отчёты с моим логотипом. Это подняло мой статус в их глазах. White-label — киллер-фича!»</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">МВ</div>
                <div className="author-info">
                  <span className="author-name">Мария В.</span>
                  <span className="author-role">Соло-маркетолог</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>«Больше никаких ошибок в Excel. Данные точные, отчёты красивые, клиенты довольны. Что ещё нужно?»</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">ДП</div>
                <div className="author-info">
                  <span className="author-name">Дмитрий П.</span>
                  <span className="author-role">Владелец агентства</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="container">
          <h2 className="section-title">Простой тариф — без скрытых платежей</h2>
          <p className="section-subtitle">Одна цена. Все возможности. Отмена в любой момент.</p>
          
          <div className="pricing-card">
            <div className="pricing-badge">Популярный выбор</div>
            <div className="pricing-header">
              <h3>Pro</h3>
              <p className="pricing-description">Для соло-маркетологов и небольших агентств</p>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">19</span>
                <span className="period">/мес</span>
              </div>
            </div>
            
            <ul className="pricing-features">
              <li>
                <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Неограниченное количество отчётов</span>
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>White-label брендирование</span>
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Автогенерация по расписанию</span>
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Автоматическая отправка клиентам</span>
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Все интеграции (Google, Meta, Яндекс, GA4)</span>
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Приоритетная поддержка</span>
              </li>
            </ul>
            
            <button className="btn btn-primary btn-full btn-glow">
              Начать бесплатный пробный период
            </button>
            <p className="pricing-note">14 дней бесплатно. Карта не требуется.</p>
          </div>
          
          <div className="pricing-comparison">
            <div className="comparison-item">
              <span className="comparison-label">💰 Экономия времени:</span>
              <span className="comparison-value">5 часов/мес × $50/час = <strong>$250/мес</strong></span>
            </div>
            <div className="comparison-item">
              <span className="comparison-label">📊 Стоимость Breporter:</span>
              <span className="comparison-value highlight">$19/мес</span>
            </div>
            <div className="comparison-item total">
              <span className="comparison-label">🎯 Ваша выгода:</span>
              <span className="comparison-value profit"><strong>$231/мес</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-title">Готовы освободить 5 часов каждый месяц?</h2>
            <p className="cta-subtitle">
              Присоединяйтесь к маркетологам, которые уже автоматизировали отчёты. 
              Начните бесплатно сегодня.
            </p>
            <div className="cta-form">
              <input 
                type="email" 
                placeholder="name@company.com" 
                className="email-input large"
              />
              <button className="btn btn-accent btn-large">
                Создать бесплатный аккаунт
              </button>
            </div>
            <div className="cta-benefits">
              <span>✓ 14 дней бесплатно</span>
              <span>✓ Карта не требуется</span>
              <span>✓ Отмена за 1 клик</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <div className="logo">
              <svg className="logo-icon" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="url(#logo-gradient-footer)"/>
                <path d="M12 28V20M20 28V16M28 28V22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="logo-gradient-footer" x1="0" y1="0" x2="40" y2="40">
                    <stop stopColor="#009688"/>
                    <stop offset="1" stopColor="#00BCD4"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="logo-text">Breporter</span>
            </div>
            <p>Автоматические отчёты для маркетологов, которые ценят своё время.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Продукт</h4>
              <a href="#problems">Проблемы</a>
              <a href="#solution">Решение</a>
              <a href="#features">Возможности</a>
              <a href="#pricing">Тарифы</a>
            </div>
            <div className="footer-column">
              <h4>Компания</h4>
              <a href="#">О нас</a>
              <a href="#">Блог</a>
              <a href="#">Карьера</a>
            </div>
            <div className="footer-column">
              <h4>Ресурсы</h4>
              <a href="#">Документация</a>
              <a href="#">API</a>
              <a href="#">Статус</a>
            </div>
            <div className="footer-column">
              <h4>Поддержка</h4>
              <a href="#">FAQ</a>
              <a href="#">Контакты</a>
              <a href="#">Privacy</a>
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
