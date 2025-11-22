(function () {
  // ====== DOM REFERENCES ======
  const searchInput    = document.getElementById('searchInput');
  const searchBtn      = document.getElementById('searchBtn');
  const randomBtn      = document.getElementById('randomBtn');
  const kategoriRow    = document.getElementById('kategoriRow');

  const articleTitle   = document.getElementById('articleTitle');
  const articleExtract = document.getElementById('articleExtract');
  const articleContent = document.getElementById('articleContent');
  const articleLabel   = document.getElementById('articleLabel');
  const articleMeta    = document.getElementById('articleMeta');

  const statusArea     = document.getElementById('statusArea');
  const statusText     = document.getElementById('statusText');
  const apiStatusText  = document.getElementById('apiStatusText');
  const sourceLabel    = document.getElementById('sourceLabel');
  const sourceValue    = document.getElementById('sourceValue');

  const headerPill     = document.getElementById('headerPill');
  const headerSubtitle = document.getElementById('headerSubtitle');

  const searchBtnLabel = document.getElementById('searchBtnLabel');
  const randomBtnLabel = document.getElementById('randomBtnLabel');

  const recTitle       = document.getElementById('recTitle');
  const recSubtitle    = document.getElementById('recSubtitle');
  const recBadge       = document.getElementById('recBadge');

  const infoText       = document.getElementById('infoText');

  const modeLabel      = document.getElementById('modeLabel');
  const modeWikiLabel  = document.getElementById('modeWikiLabel');
  const modeDictLabel  = document.getElementById('modeDictLabel');

  const saveBtn        = document.getElementById('saveBtn');
  const saveBtnLabel   = document.getElementById('saveBtnLabel');
  const openLibraryBtn = document.getElementById('openLibraryBtn');
  const openLibraryBtnLabel = document.getElementById('openLibraryBtnLabel');

  const libTitle       = document.getElementById('libTitle');
  const libSubtitle    = document.getElementById('libSubtitle');
  const libEmptyText   = document.getElementById('libEmptyText');
  const clearLibraryBtn    = document.getElementById('clearLibraryBtn');
  const clearLibraryLabel  = document.getElementById('clearLibraryLabel');
  const libraryList    = document.getElementById('libraryList');

  const onlineStatusDot  = document.getElementById('onlineStatusDot');
  const onlineStatusPill = document.getElementById('onlineStatusPill');

  const themeToggle    = document.getElementById('themeToggle');
  const soundToggle    = document.getElementById('soundToggle');
  const bgMusic        = document.getElementById('bgMusic');

  const langButtons    = document.querySelectorAll('.lang-btn');
  const modeButtons    = document.querySelectorAll('.mode-btn');

  // ====== CONSTANTS ======
  const LIB_KEY   = 'ensiklomini.library.v1';
  const THEME_KEY = 'ensiklomini.theme.v1';

  // Wikipedia REST summary endpoints
  const WIKI_BASES = {
    id: 'https://id.wikipedia.org/api/rest_v1/page/summary/',
    en: 'https://en.wikipedia.org/api/rest_v1/page/summary/'
  };

  // Dictionary APIs
  const DICT_EN_BASE  = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  const DICT_ID_BASE  = 'https://new-kbbi-api.herokuapp.com/cari/';

  // Random topics & words
  const randomTopics = {
    id: [
      'Gravitasi', 'Fotosintesis', 'Air', 'Energi surya', 'Listrik',
      'Gunung Merapi', 'Pulau Jawa', 'Otak', 'Bintang', 'Galaksi',
      'Atmosfer', 'Tekanan udara', 'Sel', 'DNA', 'Gunung Semeru'
    ],
    en: [
      'Gravity', 'Photosynthesis', 'Water', 'Solar energy', 'Electricity',
      'Mount Merapi', 'Java (island)', 'Brain', 'Star', 'Galaxy',
      'Atmosphere', 'Air pressure', 'Cell (biology)', 'DNA', 'Mount Semeru'
    ]
  };

  const randomWordsEn = [
    'gravity', 'energy', 'language', 'education', 'science',
    'computer', 'internet', 'atom', 'culture', 'knowledge',
    'history', 'biology', 'chemistry', 'physics', 'universe'
  ];

  const randomWordsId = [
    'buku', 'cinta', 'rumah', 'listrik', 'bahasa',
    'sains', 'bumi', 'pohon', 'laut', 'gunung',
    'sejarah', 'teknologi', 'budaya', 'musik', 'komputer'
  ];

  // ==== TRANSLATIONS ====
  const translations = {
    id: {
      headerSubtitle: 'Pengetahuan singkat, padat, dan mudah dipahami — diambil dari Wikipedia dan sumber terbuka lain.',
      headerPill: 'Ensiklopedia Mini',
      searchPlaceholder: 'Cari topik atau kata (mis. "gravitasi", "internet", "education")…',
      searchBtn: 'Cari',
      randomBtnWiki: 'Artikel acak',
      randomBtnDict: 'Kata acak',
      recTitle: 'Topik rekomendasi hari ini',
      recSubtitle: 'Klik salah satu untuk memuat ringkasan dari Wikipedia.',
      recBadge: 'Auto dari wiki',
      infoText:
        'EnsikloMini mengambil ringkasan langsung dari <b>Wikipedia Indonesia &amp; Inggris</b>, makna kata Inggris dari <b>Free Dictionary API</b>, dan makna kata Bahasa Indonesia dari <b>New KBBI API</b>. Gunakan mode <b>Ensiklopedia</b> untuk konsep umum dan <b>Kamus</b> untuk arti kata.',
      articleLabelWiki: 'Ringkasan artikel',
      articleLabelDict: 'Makna kata (kamus)',
      articleTitleInitial: 'Mulai dengan mencari topik di atas',
      articleTitleInitialDict: 'Mulai dengan mencari kata di atas',
      articleMetaWiki:
        '💡 Tips: coba cari <b>"Air"</b>, <b>"Energi Surya"</b>, atau <b>"Fotosintesis"</b>.',
      articleMetaDict:
        '💡 Tips: coba kata Inggris seperti <b>"education"</b>, <b>"science"</b>, atau <b>"computer"</b>, atau kata Indonesia seperti <b>"cinta"</b>.',
      articleIntroWiki:
        'EnsikloMini akan menampilkan ringkasan ringkas dari Wikipedia tentang topik yang kamu cari. Gulir ke bawah untuk melihat tautan penelitian dan referensi lanjutan.',
      articleIntroDict:
        'Mode kamus menggunakan Free Dictionary API (Inggris) dan New KBBI API (Bahasa Indonesia) untuk menampilkan arti kata, kelas kata, contoh, dan sinonim (jika tersedia). Kamu bisa menyimpan hasilnya ke Library agar dapat diakses saat offline.',
      apiReadyWiki: 'API Wikipedia siap digunakan',
      apiReadyDict: 'API kamus siap digunakan',
      source: 'Sumber:',
      wikiLangLabelId: 'Wikipedia (id)',
      wikiLangLabelEn: 'Wikipedia (en)',
      dictLangLabelEn: 'Free Dictionary API (en)',
      dictLangLabelId: 'New KBBI API (id)',
      loading: title => 'Mengambil ringkasan "' + title + '" dari Wikipedia…',
      loadingDict: word => 'Mengambil arti kata "' + word + '" dari kamus…',
      loadErrorTitle: 'Gagal memuat artikel',
      loadErrorTitleDict: 'Gagal memuat arti kata',
      loadErrorBody: title =>
        '<p>Maaf, artikel "<b>' + title + '</b>" tidak dapat diambil dari Wikipedia.</p>' +
        '<p>Coba periksa ejaan, ganti bahasa (ID/EN), atau gunakan kata kunci lain.</p>',
      loadErrorBodyDictEn: word =>
        '<p>Maaf, makna untuk kata "<b>' + word + '</b>" tidak ditemukan di kamus bahasa Inggris.</p>' +
        '<p>Coba gunakan kata lain, atau ubah mode ke Ensiklopedia untuk mencari via Wikipedia.</p>',
      loadErrorBodyDictId: word =>
        '<p>Maaf, makna untuk kata "<b>' + word + '</b>" tidak ditemukan di KBBI API.</p>' +
        '<p>Coba gunakan kata Indonesia lain, atau ubah mode ke Ensiklopedia untuk mencari via Wikipedia.</p>',
      saveBtn: 'Simpan ke Library',
      openLibraryBtn: 'Lihat Library',
      libTitle: 'Library offline',
      libSubtitle: 'Item yang kamu simpan bisa dibuka ulang tanpa internet.',
      libEmpty: 'Belum ada item tersimpan.',
      clearLibrary: 'Bersihkan',
      libItemTypeWiki: 'Ensiklopedia',
      libItemTypeDict: 'Kamus',
      libOpen: 'Buka',
      libDelete: 'Hapus',
      modeLabel: 'Mode:',
      modeWiki: 'Ensiklopedia',
      modeDict: 'Kamus',
      researchLabel: 'Referensi & riset lanjutan:',
      researchScholar: 'Google Scholar',
      researchSemantic: 'Semantic Scholar',
      researchWeb: 'Pencarian web',
      wikiMore: 'Baca lebih lengkap di Wikipedia: ',
      dictSections: {
        phonetic: 'Pelafalan',
        definitions: 'Definisi',
        examples: 'Contoh kalimat',
        synonyms: 'Sinonim',
        lemma: 'Lema',
        pos: 'Kelas kata'
      },
      offlineOnline: 'Online: bisa mengambil data baru & membuka Library',
      offlineOnlyLib: 'Offline: hanya Library yang tersimpan yang bisa dibuka',
      themeDark: 'Mode gelap',
      themeLight: 'Mode terang'
    },
    en: {
      headerSubtitle: 'Short, concise knowledge sourced from Wikipedia and other open resources.',
      headerPill: 'Mini Encyclopedia',
      searchPlaceholder: 'Search a topic or word (e.g. "gravity", "internet", "education")…',
      searchBtn: 'Search',
      randomBtnWiki: 'Random article',
      randomBtnDict: 'Random word',
      recTitle: 'Suggested topics',
      recSubtitle: 'Click one to load a short summary from Wikipedia.',
      recBadge: 'From wiki',
      infoText:
        'EnsikloMini fetches summaries from <b>Indonesian &amp; English Wikipedia</b>, English meanings from <b>Free Dictionary API</b>, and Indonesian meanings from <b>New KBBI API</b>. Use <b>Encyclopedia</b> mode for concepts and <b>Dictionary</b> mode for word meanings.',
      articleLabelWiki: 'Article summary',
      articleLabelDict: 'Word meaning (dictionary)',
      articleTitleInitial: 'Start by searching a topic above',
      articleTitleInitialDict: 'Start by searching a word above',
      articleMetaWiki:
        '💡 Tip: try searching for <b>"Water"</b>, <b>"Solar energy"</b>, or <b>"Photosynthesis"</b>.',
      articleMetaDict:
        '💡 Tip: try English words like <b>"education"</b>, <b>"science"</b>, or <b>"computer"</b>, or Indonesian words like <b>"cinta"</b>.',
      articleIntroWiki:
        'EnsikloMini shows concise summaries from Wikipedia about the topic you search for. Scroll down for research links and extended reading suggestions.',
      articleIntroDict:
        'Dictionary mode uses the Free Dictionary API (English) and New KBBI API (Indonesian) to show meanings, part of speech, examples, and synonyms (when available). You can save entries to the Library for offline access.',
      apiReadyWiki: 'Wikipedia API is ready',
      apiReadyDict: 'Dictionary API is ready',
      source: 'Source:',
      wikiLangLabelId: 'Wikipedia (id)',
      wikiLangLabelEn: 'Wikipedia (en)',
      dictLangLabelEn: 'Free Dictionary API (en)',
      dictLangLabelId: 'New KBBI API (id)',
      loading: title => 'Fetching summary for "' + title + '" from Wikipedia…',
      loadingDict: word => 'Fetching dictionary entry for "' + word + '"…',
      loadErrorTitle: 'Failed to load article',
      loadErrorTitleDict: 'Failed to load word meaning',
      loadErrorBody: title =>
        '<p>Sorry, the article "<b>' + title + '</b>" could not be fetched from Wikipedia.</p>' +
        '<p>Please check the spelling, switch language (ID/EN), or try a different keyword.</p>',
      loadErrorBodyDictEn: word =>
        '<p>Sorry, the English dictionary entry for "<b>' + word + '</b>" could not be found.</p>' +
        '<p>Try another word, or switch to Encyclopedia mode to search via Wikipedia.</p>',
      loadErrorBodyDictId: word =>
        '<p>Sorry, the Indonesian dictionary entry for "<b>' + word + '</b>" could not be found.</p>' +
        '<p>Try another word, or switch to Encyclopedia mode to search via Wikipedia.</p>',
      saveBtn: 'Save to Library',
      openLibraryBtn: 'Open Library',
      libTitle: 'Offline library',
      libSubtitle: 'Anything you save here can be opened again without internet.',
      libEmpty: 'No items saved yet.',
      clearLibrary: 'Clear',
      libItemTypeWiki: 'Encyclopedia',
      libItemTypeDict: 'Dictionary',
      libOpen: 'Open',
      libDelete: 'Delete',
      modeLabel: 'Mode:',
      modeWiki: 'Encyclopedia',
      modeDict: 'Dictionary',
      researchLabel: 'Further reading & research:',
      researchScholar: 'Google Scholar',
      researchSemantic: 'Semantic Scholar',
      researchWeb: 'Web search',
      wikiMore: 'Read more on Wikipedia: ',
      dictSections: {
        phonetic: 'Phonetics',
        definitions: 'Definitions',
        examples: 'Example sentences',
        synonyms: 'Synonyms',
        lemma: 'Lemma',
        pos: 'Part of speech'
      },
      offlineOnline: 'Online: you can fetch new data & open the Library',
      offlineOnlyLib: 'Offline: only saved Library items can be opened',
      themeDark: 'Dark theme',
      themeLight: 'Light theme'
    }
  };

  // ====== STATE ======
  let currentLang   = 'id';
  let currentMode   = 'wiki'; // 'wiki' | 'dict'
  let currentTheme  = 'dark';
  let library       = [];

  // Menyimpan random terakhir untuk menghindari duplikasi berurutan
  const lastRandom = {
    wiki: { id: null, en: null },
    dict: { id: null, en: null }
  };

  // ====== UTILS ======
  function getWikiBase() {
    return WIKI_BASES[currentLang] || WIKI_BASES.id;
  }

  function t() {
    return translations[currentLang] || translations.id;
  }

  function pickRandom(list, keyMode) {
    if (!list || !list.length) return '';
    const lastKey = lastRandom[keyMode][currentLang];
    let choice = list[Math.floor(Math.random() * list.length)];
    if (list.length > 1) {
      let safety = 0;
      while (choice === lastKey && safety < 5) {
        choice = list[Math.floor(Math.random() * list.length)];
        safety++;
      }
    }
    lastRandom[keyMode][currentLang] = choice;
    return choice;
  }

  function clearActiveChips() {
    document.querySelectorAll('.chip').forEach(chip => chip.classList.remove('active'));
  }

  function clearArticleExtras() {
    // hapus semua .article-extra (wikiMore + research links)
    const parent = articleContent;
    parent.querySelectorAll('.article-extra').forEach(el => el.remove());
  }

  // ---- Online status ----
  function updateOnlineStatus() {
    const trans = t();
    if (navigator.onLine) {
      onlineStatusDot.classList.remove('offline');
      apiStatusText.textContent = currentMode === 'wiki'
        ? trans.apiReadyWiki
        : trans.apiReadyDict;
      onlineStatusPill.title = trans.offlineOnline;
    } else {
      onlineStatusDot.classList.add('offline');
      apiStatusText.textContent = trans.offlineOnlyLib;
      onlineStatusPill.title = trans.offlineOnlyLib;
    }
  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  // ---- Loading ----
  function setLoading(isLoading, type, value) {
    const trans = t();
    if (isLoading) {
      statusArea.style.display = 'flex';
      let msg = '';
      if (type === 'wiki') msg = trans.loading(value || '');
      else if (type === 'dict') msg = trans.loadingDict(value || '');
      else msg = 'Loading…';
      statusText.textContent = msg;
    } else {
      statusArea.style.display = 'none';
    }
  }

  // ---- Research links (Scholar, Semantic, Web) ----
  function attachResearchLinks(title) {
    const trans = t();
    const scholarUrl  = 'https://scholar.google.com/scholar?q=' + encodeURIComponent(title);
    const semanticUrl = 'https://www.semanticscholar.org/search?q=' + encodeURIComponent(title);
    const webUrl      = 'https://www.google.com/search?q=' + encodeURIComponent(title);

    const researchDiv = document.createElement('div');
    researchDiv.className = 'article-extra';
    researchDiv.style.marginTop = '10px';
    researchDiv.style.fontSize = '11px';

    researchDiv.innerHTML =
      '<div class="research-label">' + trans.researchLabel + '</div>' +
      '<div class="research-links-row">' +
        '<a class="article-link" href="' + scholarUrl + '" target="_blank" rel="noopener noreferrer">' +
        trans.researchScholar + ' ↗</a>' +
        '<a class="article-link" href="' + semanticUrl + '" target="_blank" rel="noopener noreferrer">' +
        trans.researchSemantic + ' ↗</a>' +
        '<a class="article-link" href="' + webUrl + '" target="_blank" rel="noopener noreferrer">' +
        trans.researchWeb + ' ↗</a>' +
      '</div>';

    const footer = articleContent.querySelector('.article-footer');
    if (footer) {
      articleContent.insertBefore(researchDiv, footer);
    } else {
      articleContent.appendChild(researchDiv);
    }
  }

  // ---- Membuat paragraf minimal 2 dari extract Wikipedia ----
  function buildParagraphHtmlFromExtract(text) {
    if (!text) return '';
    let cleaned = text.trim();
    if (cleaned.length > 4000) cleaned = cleaned.slice(0, 4000) + '…';

    let paragraphs = cleaned
      .split(/\n\s*\n/)
      .map(p => p.trim())
      .filter(Boolean);

    if (paragraphs.length < 2) {
      const sentences = cleaned.split(/(?<=[.!?])\s+/);
      if (sentences.length > 1) {
        const mid = Math.ceil(sentences.length / 2);
        const p1 = sentences.slice(0, mid).join(' ');
        const p2 = sentences.slice(mid).join(' ');
        paragraphs = [p1, p2].filter(p => p && p.trim().length > 0);
      }
    }

    if (paragraphs.length === 1) {
      const half = Math.floor(paragraphs[0].length / 2);
      paragraphs = [paragraphs[0].slice(0, half), paragraphs[0].slice(half)];
    }

    paragraphs = paragraphs.slice(0, 4);

    return paragraphs
      .map(p => '<p>' + p.replace(/\n/g, '<br>') + '</p>')
      .join('');
  }

  // ---- Ambil gambar Wikipedia sebagai dataURL (base64) ----
  async function fetchImageAsBase64(url) {
    try {
      const resp = await fetch(url, { mode: 'cors' });
      if (!resp.ok) throw new Error('Image HTTP ' + resp.status);
      const blob = await resp.blob();

      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result); // data:image/...
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (err) {
      console.error('Gagal konversi gambar ke base64:', err);
      return null;
    }
  }

  // ====== TRANSLATION APPLY ======
  function applyTranslations(lang, keepContent) {
    const trans = translations[lang] || translations.id;
    document.documentElement.lang = lang;

    headerPill.textContent = trans.headerPill;
    headerSubtitle.textContent = trans.headerSubtitle;
    searchInput.placeholder = trans.searchPlaceholder;
    searchBtnLabel.textContent = trans.searchBtn;

    recTitle.textContent = trans.recTitle;
    recSubtitle.textContent = trans.recSubtitle;
    recBadge.textContent = trans.recBadge;
    infoText.innerHTML = trans.infoText;

    modeLabel.textContent = trans.modeLabel;
    modeWikiLabel.textContent = trans.modeWiki;
    modeDictLabel.textContent = trans.modeDict;

    saveBtnLabel.textContent = trans.saveBtn;
    openLibraryBtnLabel.textContent = trans.openLibraryBtn;
    libTitle.textContent = trans.libTitle;
    libSubtitle.textContent = trans.libSubtitle;
    libEmptyText.textContent = trans.libEmpty;
    clearLibraryLabel.textContent = trans.clearLibrary;
    sourceLabel.textContent = trans.source;

    if (currentMode === 'wiki') {
      randomBtnLabel.textContent = trans.randomBtnWiki;
      articleLabel.textContent = trans.articleLabelWiki;
      sourceValue.textContent = currentLang === 'en'
        ? trans.wikiLangLabelEn
        : trans.wikiLangLabelId;
    } else {
      randomBtnLabel.textContent = trans.randomBtnDict;
      articleLabel.textContent = trans.articleLabelDict;
      sourceValue.textContent = currentLang === 'en'
        ? trans.dictLangLabelEn
        : trans.dictLangLabelId;
    }

    // update state button mode
    modeButtons.forEach(b => {
      const m = b.getAttribute('data-mode');
      b.classList.toggle('active', m === currentMode);
    });

    // update label bahasa di chip dan rekomendasi
    document.querySelectorAll('.rec-item').forEach(item => {
      const dataTitle = item.getAttribute('data-title-' + lang);
      const dataMeta  = item.getAttribute('data-meta-' + lang);
      const titleEl   = item.querySelector('.rec-title');
      const metaEl    = item.querySelector('.rec-meta');
      if (dataTitle && titleEl) titleEl.textContent = dataTitle;
      if (dataMeta && metaEl) metaEl.textContent = dataMeta;
    });

    document.querySelectorAll('.chip').forEach(chip => {
      const label = chip.getAttribute('data-label-' + lang);
      if (label) chip.textContent = label;
    });

    // jika tidak keepContent → reset konten awal
    if (!keepContent) {
      if (currentMode === 'wiki') {
        articleTitle.textContent = trans.articleTitleInitial;
        articleMeta.innerHTML = '<span>' + trans.articleMetaWiki + '</span>';
        articleExtract.textContent = trans.articleIntroWiki + ' ' + trans.articleIntroDict;
      } else {
        articleTitle.textContent = trans.articleTitleInitialDict;
        articleMeta.innerHTML = '<span>' + trans.articleMetaDict + '</span>';
        articleExtract.textContent = trans.articleIntroDict + ' ' + trans.articleIntroWiki;
      }
      clearArticleExtras();
    }

    updateOnlineStatus();
  }

  // ====== WIKIPEDIA LOADER (dengan base64 & snapshot panjang) ======
  async function loadArticle(title, opts) {
    if (!title) return;

    const options = Object.assign({ showLoading: true }, opts || {});
    articleContent.classList.remove('show');

    if (options.showLoading) {
      setLoading(true, 'wiki', title);
    }

    const url = getWikiBase() + encodeURIComponent(title);

    try {
      const resp = await fetch(url);
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      const data = await resp.json();
      const trans = t();

      const effectiveTitle = data.title || title;
      articleTitle.textContent = effectiveTitle;

      const extract =
        data.extract ||
        (currentLang === 'en'
          ? 'No summary is available for this topic.'
          : 'Tidak ada ringkasan yang tersedia untuk topik ini.');

      let html = '';

      // Thumbnail → base64
      let thumbDataUrl = null;
      if (data.thumbnail && data.thumbnail.source) {
        thumbDataUrl = await fetchImageAsBase64(data.thumbnail.source);
      }

      if (thumbDataUrl || (data.thumbnail && data.thumbnail.source)) {
        const thumbSrc = thumbDataUrl || data.thumbnail.source;
        html += `
          <div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">
            <img src="${thumbSrc}" alt="${effectiveTitle}" class="article-thumb">
            <div style="font-size:11px;opacity:.8;max-width:60%;">
              ${
                currentLang === 'en'
                  ? 'This summary is fetched automatically from Wikipedia and may not always be complete.'
                  : 'Ringkasan ini diambil otomatis dari Wikipedia dan mungkin tidak selalu lengkap.'
              }
            </div>
          </div>
        `;
      }

      // Ringkasan jadi 2–4 paragraf
      html += buildParagraphHtmlFromExtract(extract);
      articleExtract.innerHTML = html;

      const pageUrl =
        data.content_urls && data.content_urls.desktop
          ? data.content_urls.desktop.page
          : currentLang === 'en'
          ? 'https://en.wikipedia.org/wiki/' + encodeURIComponent(effectiveTitle)
          : 'https://id.wikipedia.org/wiki/' + encodeURIComponent(effectiveTitle);

      clearArticleExtras();

      // blok "baca lebih lengkap"
      const wikiMoreDiv = document.createElement('div');
      wikiMoreDiv.className = 'article-extra';
      wikiMoreDiv.style.marginTop = '8px';
      wikiMoreDiv.style.fontSize = '11px';
      wikiMoreDiv.style.opacity = '.82';
      wikiMoreDiv.innerHTML =
        t().wikiMore +
        `<a class="article-link" href="${pageUrl}" target="_blank" rel="noopener noreferrer">${effectiveTitle} ↗</a>`;

      const footer = articleContent.querySelector('.article-footer');
      if (footer) {
        articleContent.insertBefore(wikiMoreDiv, footer);
      } else {
        articleContent.appendChild(wikiMoreDiv);
      }

      // riset lanjutan
      attachResearchLinks(effectiveTitle);

      sourceValue.textContent =
        currentLang === 'en' ? trans.wikiLangLabelEn : trans.wikiLangLabelId;

      setLoading(false);
      requestAnimationFrame(() => articleContent.classList.add('show'));
    } catch (err) {
      console.error(err);
      setLoading(false);
      const trans = t();
      articleTitle.textContent = trans.loadErrorTitle;
      articleExtract.innerHTML = trans.loadErrorBody(title);
      clearArticleExtras();
      attachResearchLinks(title);
      articleContent.classList.add('show');
    }
  }

  // ====== DICTIONARY RENDERERS ======
  function renderDictionaryResultEn(word, data) {
    const trans = t();
    const entry = data[0];
    const phonetic =
      entry.phonetic ||
      (entry.phonetics && entry.phonetics[0] && entry.phonetics[0].text) ||
      '';
    const meanings = entry.meanings || [];
    let html = '';

    if (phonetic) {
      html +=
        '<div style="margin-bottom:6px;font-size:12px;"><b>' +
        trans.dictSections.phonetic +
        ':</b> ' +
        phonetic +
        '</div>';
    }

    if (meanings.length) {
      html +=
        '<div style="margin-bottom:6px;font-size:12px;"><b>' +
        trans.dictSections.definitions +
        ':</b></div>';
      html += '<ul style="padding-left:18px;margin-top:2px;">';
      meanings.forEach(m => {
        const part = m.partOfSpeech
          ? '<span style="opacity:.8;font-size:11px;">(' + m.partOfSpeech + ')</span> '
          : '';
        (m.definitions || []).forEach(d => {
          if (!d.definition) return;
          html +=
            '<li style="margin-bottom:4px;font-size:12px;">' +
            part +
            d.definition +
            '</li>';
        });
      });
      html += '</ul>';
    }

    const examples = [];
    meanings.forEach(m => {
      (m.definitions || []).forEach(d => {
        if (d.example) examples.push(d.example);
      });
    });

    if (examples.length) {
      html +=
        '<div style="margin-top:6px;font-size:12px;"><b>' +
        trans.dictSections.examples +
        ':</b></div>';
      html += '<ul style="padding-left:18px;margin-top:2px;">';
      examples.slice(0, 4).forEach(ex => {
        html += '<li style="margin-bottom:4px;font-size:12px;">' + ex + '</li>';
      });
      html += '</ul>';
    }

    const synonymsSet = new Set();
    meanings.forEach(m => {
      (m.synonyms || []).forEach(s => synonymsSet.add(s));
      (m.definitions || []).forEach(d => {
        (d.synonyms || []).forEach(s => synonymsSet.add(s));
      });
    });

    const synonyms = Array.from(synonymsSet);
    if (synonyms.length) {
      html +=
        '<div style="margin-top:6px;font-size:12px;"><b>' +
        trans.dictSections.synonyms +
        ':</b> ' +
        synonyms.slice(0, 12).join(', ') +
        '</div>';
    }

    articleExtract.innerHTML =
      html ||
      (currentLang === 'en'
        ? 'No definition details are available for this word.'
        : 'Tidak ada detail definisi yang tersedia untuk kata ini.');
  }

  function renderDictionaryResultId(word, dataObj) {
    const trans = t();
    let html = '';
    if (!dataObj || !dataObj.status || !Array.isArray(dataObj.data) || !dataObj.data.length) {
      articleExtract.innerHTML =
        currentLang === 'en'
          ? 'No Indonesian definition is available.'
          : 'Tidak ada arti kata yang tersedia.';
      return;
    }

    const ent = dataObj.data[0];
    if (ent.lema) {
      html +=
        '<div style="margin-bottom:4px;font-size:12px;"><b>' +
        trans.dictSections.lemma +
        ':</b> ' +
        ent.lema +
        '</div>';
    }

    const arti = ent.arti || [];
    if (arti.length) {
      html +=
        '<div style="margin-bottom:6px;font-size:12px;"><b>' +
        trans.dictSections.definitions +
        ':</b></div>';
      html += '<ol style="padding-left:18px;margin-top:2px;">';
      arti.forEach(a => {
        const kelas = a.kelas_kata
          ? '<div style="font-size:11px;opacity:.8;"><b>' +
            trans.dictSections.pos +
            ':</b> ' +
            a.kelas_kata +
            '</div>'
          : '';
        html +=
          '<li style="margin-bottom:6px;font-size:12px;">' +
          (a.deskripsi || '') +
          kelas +
          '</li>';
      });
      html += '</ol>';
    }

    articleExtract.innerHTML =
      html ||
      (currentLang === 'en'
        ? 'No Indonesian definition is available.'
        : 'Tidak ada arti kata yang tersedia.');
  }

  // ====== DICTIONARY LOADER ======
  function loadDictionary(word, opts) {
    if (!word) return;
    const options = Object.assign({ showLoading: true }, opts || {});

    articleContent.classList.remove('show');
    if (options.showLoading) {
      setLoading(true, 'dict', word);
    }

    const isIndonesian = currentLang === 'id';
    const url = isIndonesian
      ? DICT_ID_BASE + encodeURIComponent(word)
      : DICT_EN_BASE + encodeURIComponent(word);

    fetch(url)
      .then(resp => {
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        return resp.json();
      })
      .then(data => {
        const trans = t();
        if (isIndonesian) {
          articleTitle.textContent = word;
          articleMeta.innerHTML = '<span>' + trans.articleMetaDict + '</span>';
          renderDictionaryResultId(word, data);
        } else {
          articleTitle.textContent = (data[0] && data[0].word) || word;
          articleMeta.innerHTML = '<span>' + trans.articleMetaDict + '</span>';
          renderDictionaryResultEn(word, data);
        }

        clearArticleExtras();
        attachResearchLinks(word);

        sourceValue.textContent = isIndonesian
          ? trans.dictLangLabelId
          : trans.dictLangLabelEn;

        setLoading(false);
        requestAnimationFrame(() => articleContent.classList.add('show'));
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
        const trans = t();
        articleTitle.textContent = trans.loadErrorTitleDict;
        const isIndonesian2 = currentLang === 'id';
        articleExtract.innerHTML = isIndonesian2
          ? trans.loadErrorBodyDictId(word)
          : trans.loadErrorBodyDictEn(word);
        clearArticleExtras();
        attachResearchLinks(word);
        articleContent.classList.add('show');
      });
  }

  // ====== LIBRARY (OFFLINE SNAPSHOT) ======
  function loadLibraryFromStorage() {
    try {
      const raw = localStorage.getItem(LIB_KEY);
      library = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(library)) library = [];
    } catch (e) {
      library = [];
    }
    renderLibrary();
  }

  function saveLibraryToStorage() {
    try {
      localStorage.setItem(LIB_KEY, JSON.stringify(library));
    } catch (e) {
      console.error('Failed to save library', e);
    }
  }

  function renderLibrary() {
    const trans = t();
    libraryList.querySelectorAll('.lib-item').forEach(el => el.remove());

    if (!library.length) {
      libEmptyText.style.display = 'block';
      return;
    }
    libEmptyText.style.display = 'none';

    library
      .slice()
      .reverse()
      .forEach(item => {
        const row = document.createElement('div');
        row.className = 'lib-item';
        row.dataset.id = item.id;

        const header = document.createElement('div');
        header.className = 'lib-item-header';

        const titleEl = document.createElement('div');
        titleEl.className = 'lib-title';
        titleEl.textContent = item.title;

        const metaEl = document.createElement('div');
        metaEl.className = 'lib-meta';

        const typeLabel =
          item.mode === 'dict' ? trans.libItemTypeDict : trans.libItemTypeWiki;
        const langLabel = item.lang === 'en' ? 'EN' : 'ID';

        const dateStr = item.savedAt
          ? new Date(item.savedAt).toLocaleString()
          : '';

        metaEl.textContent = [typeLabel, langLabel, dateStr]
          .filter(Boolean)
          .join(' • ');

        header.appendChild(titleEl);
        header.appendChild(metaEl);

        const actions = document.createElement('div');
        actions.className = 'lib-actions';

        const openBtn = document.createElement('button');
        openBtn.className = 'btn-mini-secondary';
        openBtn.innerHTML = '📖 ' + trans.libOpen;
        openBtn.addEventListener('click', () => {
          openLibraryItem(item.id);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn-mini-secondary';
        deleteBtn.innerHTML = '🗑 ' + trans.libDelete;
        deleteBtn.addEventListener('click', () => {
          deleteLibraryItem(item.id);
        });

        actions.appendChild(openBtn);
        actions.appendChild(deleteBtn);

        row.appendChild(header);
        row.appendChild(actions);

        libraryList.appendChild(row);
      });
  }

  function saveCurrentToLibrary() {
    const title = articleTitle.textContent.trim();
    const bodyHtml = articleExtract.innerHTML.trim();
    if (!title || !bodyHtml) return;

    // snapshot extra blok (wikiMore + research links)
    const extrasHtml = Array.from(articleContent.querySelectorAll('.article-extra'))
      .map(el => el.outerHTML)
      .join('');

    const metaHtml  = articleMeta.innerHTML;
    const srcText   = sourceValue.textContent;

    const item = {
      id: Date.now().toString(),
      title: title,
      articleHtml: bodyHtml,
      extrasHtml: extrasHtml,
      metaHtml: metaHtml,
      mode: currentMode,
      lang: currentLang,
      source: srcText,
      savedAt: new Date().toISOString()
    };

    library.push(item);
    saveLibraryToStorage();
    renderLibrary();
  }

  function openLibraryItem(id) {
    const item = library.find(it => it.id === id);
    if (!item) return;

    // set mode dari item
    currentMode = item.mode || 'wiki';
    modeButtons.forEach(b => {
      const m = b.getAttribute('data-mode');
      b.classList.toggle('active', m === currentMode);
    });

    // set language dari item
    if (item.lang === 'id' || item.lang === 'en') {
      currentLang = item.lang;
      langButtons.forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        btn.classList.toggle('active', lang === currentLang);
      });
    }

    applyTranslations(currentLang, true);

    articleTitle.textContent = item.title;
    if (item.metaHtml) articleMeta.innerHTML = item.metaHtml;
    if (item.articleHtml) articleExtract.innerHTML = item.articleHtml;
    if (item.source) sourceValue.textContent = item.source;

    clearArticleExtras();
    if (item.extrasHtml) {
      const temp = document.createElement('div');
      temp.innerHTML = item.extrasHtml;
      const footer = articleContent.querySelector('.article-footer');
      Array.from(temp.children).forEach(node => {
        if (footer) {
          articleContent.insertBefore(node, footer);
        } else {
          articleContent.appendChild(node);
        }
      });
    }

    articleContent.classList.add('show');
  }

  function deleteLibraryItem(id) {
    library = library.filter(it => it.id !== id);
    saveLibraryToStorage();
    renderLibrary();
  }

  // ====== THEME ======
  function applyTheme(theme) {
    currentTheme = theme === 'light' ? 'light' : 'dark';
    const body = document.body;
    const trans = t();
    if (currentTheme === 'light') {
      body.classList.add('theme-light');
      body.classList.remove('theme-dark');
      themeToggle.textContent = '☀️';
      themeToggle.title = trans.themeDark;
    } else {
      body.classList.add('theme-dark');
      body.classList.remove('theme-light');
      themeToggle.textContent = '🌙';
      themeToggle.title = trans.themeLight;
    }
    try {
      localStorage.setItem(THEME_KEY, currentTheme);
    } catch (e) {}
  }

  function initThemeFromStorage() {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') {
        applyTheme(saved);
      } else {
        applyTheme('dark');
      }
    } catch (e) {
      applyTheme('dark');
    }
  }

  // ====== EVENT HANDLERS ======
  // Search
  function triggerSearch() {
    const val = searchInput.value.trim();
    if (!val) return;
    clearActiveChips();
    if (currentMode === 'wiki') loadArticle(val, { from: 'search' });
    else loadDictionary(val, { from: 'search' });
  }

  searchBtn.addEventListener('click', triggerSearch);

  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') triggerSearch();
  });

  // Kategori chip
  if (kategoriRow) {
    kategoriRow.addEventListener('click', e => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      const dataTitle = chip.getAttribute('data-title-' + currentLang);
      if (!dataTitle) return;
      clearActiveChips();
      chip.classList.add('active');
      searchInput.value = dataTitle;
      if (currentMode === 'wiki') loadArticle(dataTitle, { from: 'category' });
      else loadDictionary(dataTitle, { from: 'category' });
    });
  }

  // Rekomendasi klik
  document.querySelectorAll('.rec-item').forEach(item => {
    item.addEventListener('click', () => {
      const dataTitle = item.getAttribute('data-title-' + currentLang);
      if (!dataTitle) return;
      clearActiveChips();
      searchInput.value = dataTitle;
      if (currentMode === 'wiki') loadArticle(dataTitle, { from: 'recommendation' });
      else loadDictionary(dataTitle, { from: 'recommendation' });
    });
  });

  // Random
  randomBtn.addEventListener('click', () => {
    clearActiveChips();
    if (currentMode === 'wiki') {
      const list = randomTopics[currentLang] || randomTopics.id;
      const randomTitle = pickRandom(list, 'wiki');
      searchInput.value = randomTitle;
      loadArticle(randomTitle, { from: 'random' });
    } else {
      const pool = currentLang === 'id' ? randomWordsId : randomWordsEn;
      const randomWord = pickRandom(pool, 'dict');
      searchInput.value = randomWord;
      loadDictionary(randomWord, { from: 'random' });
    }
  });

  // Bahasa toggle
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (!lang || lang === currentLang) return;

      currentLang = lang;
      langButtons.forEach(b => {
        const l = b.getAttribute('data-lang');
        b.classList.toggle('active', l === currentLang);
      });

      const hasContent = articleExtract.innerHTML.trim().length > 0;
      applyTranslations(currentLang, hasContent);

      const val = searchInput.value.trim();
      if (val && hasContent && currentMode === 'wiki') {
        loadArticle(val, { from: 'lang-switch', showLoading: false });
      }
    });
  });

  // Mode toggle (Ensiklopedia / Kamus)
  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-mode');
      if (!mode || mode === currentMode) return;

      currentMode = mode;
      modeButtons.forEach(b => {
        const m = b.getAttribute('data-mode');
        b.classList.toggle('active', m === currentMode);
      });

      const hasContent = articleExtract.innerHTML.trim().length > 0;
      applyTranslations(currentLang, hasContent);

      const val = searchInput.value.trim();
      if (val && hasContent) {
        if (currentMode === 'wiki') {
          loadArticle(val, { from: 'mode-switch', showLoading: false });
        } else {
          loadDictionary(val, { from: 'mode-switch', showLoading: false });
        }
      }
    });
  });

  // Save & Library
  saveBtn.addEventListener('click', saveCurrentToLibrary);

  openLibraryBtn.addEventListener('click', () => {
    libraryList.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  clearLibraryBtn.addEventListener('click', () => {
    if (!library.length) return;
    if (!confirm('Hapus semua item di Library?')) return;
    library = [];
    saveLibraryToStorage();
    renderLibrary();
  });

  // Theme toggle
  themeToggle.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // Sound toggle
  let isPlaying = false;
  if (bgMusic) {
    soundToggle.addEventListener('click', () => {
      if (!bgMusic.src) return;
      if (isPlaying) {
        bgMusic.pause();
        isPlaying = false;
        soundToggle.textContent = '🔈';
      } else {
        const playPromise = bgMusic.play();
        if (playPromise && playPromise.catch) {
          playPromise.catch(() => {});
        }
        isPlaying = true;
        soundToggle.textContent = '🔊';
      }
    });
  }

  // ====== INIT ======
  loadLibraryFromStorage();
  initThemeFromStorage();
  applyTranslations(currentLang, false);

  // Saat pertama kali buka: langsung tampilkan artikel rekomendasi
  const firstTitle =
    pickRandom(randomTopics[currentLang], 'wiki') || 'Gravitasi';
  searchInput.value = firstTitle;
  loadArticle(firstTitle, { showLoading: false, from: 'init' });

  articleContent.classList.add('show');
  updateOnlineStatus();
})();
