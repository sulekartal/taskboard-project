# TaskBoard — React Görev Takip Uygulaması

Web Geliştirme JavaScript proje yönergesi için hazırlanmış, React + Vite + CSS kullanan frontend CRUD uygulaması.

## Kurulum

Node.js 18+ kurulu olmalıdır.

```bash
npm install
npm run dev
```

Terminalde verilen yerel adresi (genellikle http://localhost:5173) tarayıcıda açın.

## Özellikler

- Görev oluşturma, listeleme, düzenleme ve silme (CRUD)
- Duruma göre filtreleme, metin araması, öncelik ve tarih bilgisi
- LocalStorage ile tarayıcıda kalıcı saklama (sunucu/veritabanı gerekmez)
- Mobil uyumlu arayüz
- `src/components`, `src/pages`, `src/interfaces` klasörleri

## Yayına alma

```bash
npm run build
```

Netlify üzerinde proje dizinini bağlayıp build komutunu `npm run build`, yayın dizinini `dist` seçin. Alternatif olarak `dist` klasörünü Netlify Drop'a yükleyin.

## Teslim

1. Uygulamayı tarayıcıda açıp en az bir ekran görüntüsü alın ve `screenshots/` içine koyun.
2. `node_modules` ve `dist` hariç proje kaynak kodunu public GitHub reposuna gönderin.
3. GitHub ve Netlify bağlantılarını teslim formuna ekleyin.

Not: Örnek görevler ilk açılışta görünür. Değişiklikler tarayıcınızın LocalStorage alanına kaydedilir.
