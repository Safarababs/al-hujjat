import React from "react";
import { Helmet } from "react-helmet";
import "./QuranVerseBannerList.css";

const verses = [
  {
    date: "01 Nov 2025",
    time: "Fri 06:55",
    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    english: "Indeed, Allah is with the patient.",
    urdu: "بیشک اللہ صبر کرنے والوں کے ساتھ ہے۔",
    reference: "Surah Al-Baqarah 2:153",
    tafseer:
      "Allah assures His support to those who remain patient through trials and difficulties.",
  },
  {
    date: "02 Nov 2025",
    time: "Sat 10:15",
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ",
    english: "So remember Me; I will remember you.",
    urdu: "پس تم مجھے یاد کرو، میں تمہیں یاد کروں گا۔",
    reference: "Surah Al-Baqarah 2:152",
    tafseer:
      "This verse highlights the mutual relationship between remembrance and divine attention.",
  },
  {
    date: "03 Nov 2025",
    time: "Sun 08:30",
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    english: "Indeed, with hardship comes ease.",
    urdu: "بیشک ہر مشکل کے ساتھ آسانی ہے۔",
    reference: "Surah Ash-Sharh 94:6",
    tafseer:
      "A reminder that every difficulty is followed by relief—encouraging hope and resilience.",
  },
  {
    date: "04 Nov 2025",
    time: "Mon 09:00",
    arabic: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ",
    english: "My success is only by Allah.",
    urdu: "میری کامیابی صرف اللہ کی طرف سے ہے۔",
    reference: "Surah Hud 11:88",
    tafseer: "True guidance and achievement come only through divine support.",
  },
  {
    date: "05 Nov 2025",
    time: "Tue 11:00",
    arabic: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ",
    english: "Allah is the Light of the heavens and the earth.",
    urdu: "اللہ آسمانوں اور زمین کا نور ہے۔",
    reference: "Surah An-Nur 24:35",
    tafseer:
      "This verse symbolizes divine guidance and presence in all creation.",
  },
  {
    date: "06 Nov 2025",
    time: "Wed 07:45",
    arabic: "إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ",
    english: "Indeed, Allah loves those who rely upon Him.",
    urdu: "بیشک اللہ توکل کرنے والوں سے محبت کرتا ہے۔",
    reference: "Surah Aal-e-Imran 3:159",
    tafseer: "Trust in Allah is a virtue that brings divine love and peace.",
  },
  {
    date: "07 Nov 2025",
    time: "Thu 10:00",
    arabic: "إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ",
    english: "Allah’s mercy is near to the doers of good.",
    urdu: "بیشک اللہ کی رحمت نیکوکاروں کے قریب ہے۔",
    reference: "Surah Al-A'raf 7:56",
    tafseer: "Good deeds attract divine mercy and spiritual closeness.",
  },
  {
    date: "08 Nov 2025",
    time: "Fri 06:30",
    arabic: "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا",
    english: "Hold firmly to the rope of Allah all together.",
    urdu: "اللہ کی رسی کو مضبوطی سے تھامے رکھو، سب مل کر۔",
    reference: "Surah Aal-e-Imran 3:103",
    tafseer:
      "Unity in faith and adherence to divine guidance is essential for strength.",
  },
  {
    date: "09 Nov 2025",
    time: "Sat 09:15",
    arabic: "لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",
    english: "Do not despair of Allah’s mercy.",
    urdu: "اللہ کی رحمت سے مایوس نہ ہو۔",
    reference: "Surah Az-Zumar 39:53",
    tafseer:
      "No matter the sin, Allah’s mercy is always open to sincere repentance.",
  },
  {
    date: "10 Nov 2025",
    time: "Sun 08:00",
    arabic: "وَاللَّهُ يُحِبُّ الصَّابِرِينَ",
    english: "Allah loves the patient.",
    urdu: "اللہ صبر کرنے والوں سے محبت کرتا ہے۔",
    reference: "Surah Aal-e-Imran 3:146",
    tafseer: "Patience is not just rewarded—it is beloved by Allah.",
  },
  {
    date: "11 Nov 2025",
    time: "Mon 10:30",
    arabic: "وَاللَّهُ غَفُورٌ رَّحِيمٌ",
    english: "Allah is Forgiving and Merciful.",
    urdu: "اللہ بخشنے والا اور رحم کرنے والا ہے۔",
    reference: "Surah Al-Baqarah 2:173",
    tafseer: "This verse invites hope and repentance through Allah’s mercy.",
  },
  {
    date: "12 Nov 2025",
    time: "Tue 07:00",
    arabic: "إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    english: "Allah has power over all things.",
    urdu: "اللہ ہر چیز پر قادر ہے۔",
    reference: "Surah Al-Baqarah 2:284",
    tafseer: "Reinforces belief in divine control and omnipotence.",
  },
  {
    date: "13 Nov 2025",
    time: "Wed 09:45",
    arabic: "وَاللَّهُ سَمِيعٌ عَلِيمٌ",
    english: "Allah is All-Hearing, All-Knowing.",
    urdu: "اللہ سننے والا اور جاننے والا ہے۔",
    reference: "Surah Al-Baqarah 2:244",
    tafseer: "Every prayer and intention is known to Allah—even in silence.",
  },
  {
    date: "14 Nov 2025",
    time: "Thu 11:15",
    arabic: "إِنَّ اللَّهَ لَا يُحِبُّ الْمُفْسِدِينَ",
    english: "Allah does not love the corrupters.",
    urdu: "اللہ فساد کرنے والوں سے محبت نہیں کرتا۔",
    reference: "Surah Al-Qasas 28:77",
    tafseer: "Condemns those who spread harm, injustice, and moral decay.",
  },
  {
    date: "15 Nov 2025",
    time: "Fri 06:20",
    arabic: "وَاللَّهُ يُحِبُّ الْمُتَطَهِّرِينَ",
    english: "Allah loves those who purify themselves.",
    urdu: "اللہ پاکیزگی اختیار کرنے والوں سے محبت کرتا ہے۔",
    reference: "Surah Al-Baqarah 2:222",
    tafseer: "Encourages both physical and spiritual cleanliness as a virtue.",
  },
  {
    date: "16 Nov 2025",
    time: "Sat 08:40",
    arabic: "إِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ",
    english: "Allah does not waste the reward of the good-doers.",
    urdu: "اللہ نیکوکاروں کا اجر ضائع نہیں کرتا۔",
    reference: "Surah At-Tawbah 9:120",
    tafseer: "Every sincere effort is preserved and rewarded by Allah.",
  },
  {
    date: "17 Nov 2025",
    time: "Sun 09:10",
    arabic: "وَاللَّهُ خَيْرُ الرَّازِقِينَ",
    english: "Allah is the best of providers.",
    urdu: "اللہ بہترین رزق دینے والا ہے۔",
    reference: "Surah Al-Jumu'ah 62:11",
    tafseer: "Trust in divine sustenance over worldly sources and means.",
  },
  {
    date: "18 Nov 2025",
    time: "Mon 07:30",
    arabic: "إِنَّ اللَّهَ يُحِبُّ الْمُقْسِطِينَ",
    english: "Allah loves those who act justly.",
    urdu: "اللہ انصاف کرنے والوں سے محبت کرتا ہے۔",
    reference: "Surah Al-Ma'idah 5:42",
    tafseer:
      "Justice is a divine attribute and a moral obligation for believers in all dealings.",
  },
  {
    date: "19 Nov 2025",
    time: "Tue 08:20",
    arabic: "إِنَّ اللَّهَ لَا يُحِبُّ الْخَائِنِينَ",
    english: "Allah does not love the treacherous.",
    urdu: "اللہ خیانت کرنے والوں سے محبت نہیں کرتا۔",
    reference: "Surah Al-Anfal 8:58",
    tafseer:
      "Betrayal and dishonesty are condemned in Islam and distance one from divine mercy.",
  },
  {
    date: "20 Nov 2025",
    time: "Wed 09:10",
    arabic: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا",
    english: "Do not weaken and do not grieve.",
    urdu: "کمزور نہ پڑو اور غم نہ کرو۔",
    reference: "Surah Aal-e-Imran 3:139",
    tafseer:
      "This verse uplifts the believer during hardship, encouraging strength and hope in Allah.",
  },
];

function QuranVerseBanner() {
  return (
    <>
      <Helmet>
        <title>Quranic Verses | AL Hujjat Online Quran Academy</title>
        <meta
          name="description"
          content="Reflect on Quranic verses with English and Urdu translations to inspire spiritual growth."
        />
        <meta
          name="keywords"
          content="Quranic inspiration, Shia Islamic verses, Urdu translation, Quran study, AL Hujjat Academy"
        />
        <link rel="canonical" href="https://yourdomain.com/quranic-verses" />
      </Helmet>

      <header className="container-fluid hero-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero-header-inner animated zoomIn">
                <h1 className="display-1 text-dark">Quranic Verses</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/pages">Pages</a>
                    </li>
                    <li
                      className="breadcrumb-item text-dark active"
                      aria-current="page"
                    >
                      Quranic Verses
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-fluid event py-5">
        <div className="container py-5">
          <h1 className="display-3 mb-5 wow fadeIn" data-wow-delay="0.1s">
            Quranic <span className="text-primary">Verses & Reflections</span>
          </h1>

          {verses.map((verse, index) => (
            <div
              className="row g-4 event-item wow fadeIn"
              data-wow-delay={`${0.1 + index * 0.2}s`}
              key={index}
            >
              {/* Date & Time */}
              <div className="col-3 col-lg-2 pe-0">
                <div className="text-center border-bottom border-dark py-3 px-2">
                  <h6>{verse.date}</h6>
                  <p className="mb-0">{verse.time}</p>
                </div>
              </div>

              {/* Verse & Translation */}
              <div className="col-12 col-lg-8 border-start border-dark border-bottom pb-2">
                <div className="ms-3">
                  <h4 className="mb-3 arabic-text pt-4">{verse.arabic}</h4>
                  <p className="mb-2 urdu-text">{verse.urdu}</p>
                  <p className="mb-4 text-center">{verse.english}</p>
                  <p className="mb-4 text-center">{verse.reference}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default QuranVerseBanner;
