import { EventConfig, FlagItem } from '../types';

export const EVENT_DATA: EventConfig = {
  eventName: "Lingofest ’26",
  subTitle: "LANGUAGE DAY CELEBRATIONS",
  presenter: "KULIYAPITIYA CENTRAL COLLEGE PRESENTS",
  occasion: "Annual Language Day Celebrations",
  invitationLead: "You are cordially invited to grace this special occasion with your esteemed presence.",
  invitationMessage: {
    p1: "The Language Club, cordially request the honour of your presence at the annual Language Day Celebrations.",
    p2: "Your invaluable presence will inspire our young linguists and add great honour to our celebration of linguistic harmony and world cultures.",
    p3: "We warmly look forward to welcoming you to this memorable occasion.",
  },
  details: {
    date: "20.10.2026",
    weekday: "Tuesday",
    formattedDate: "Tuesday, 20 October 2026",
    time: "9:00 AM",
    venueHall: "School Main Hall",
    venueSchool: "Kuliyapitiya Central College",
    locationCity: "Kuliyapitiya, Sri Lanka",
    timezone: "Asia/Colombo (UTC+05:30)",
  },
  closingLead: "We look forward to welcoming you.",
  organizer: {
    name: "Language Club",
    school: "Kuliyapitiya Central College",
  },
  programmeTitle: "Celebrating Languages. Connecting Cultures.",
  programmeSubtitle: "A curated celebration of global linguistic heritage, student eloquence, and vibrant world traditions.",
  programmes: [
    {
      id: "performances",
      title: "Multilingual Performances",
      description: "Celebrate the beauty and diversity of languages through captivating musical, dramatic, and poetic performances by students.",
      icon: "Music",
      highlight: "Celebrating Linguistic Harmony",
    },
    {
      id: "speeches",
      title: "Student Speeches",
      description: "Showcase the voices, articulate ideas, and confident expression of our young linguists across multiple world languages.",
      icon: "Mic",
      highlight: "Youth Eloquence & Leadership",
    },
    {
      id: "pageant",
      title: "A Celebration of World Cultures",
      description: "Feature the vibrant beauty pageant representing traditional attire, customs, and living heritage from different cultures across the globe.",
      icon: "Globe",
      highlight: "Global Diversity Pageant",
    },
  ],
};

// Featured 6 official international celebration countries
export const FLAGS_DATA: FlagItem[] = [
  { id: "lk", country: "Sri Lanka", language: "Sinhala & Tamil", greeting: "ආයුබෝවන්", script: "සිංහල", code: "LK" },
  { id: "gb", country: "United Kingdom", language: "English", greeting: "Welcome", script: "English", code: "GB" },
  { id: "cn", country: "China", language: "Mandarin", greeting: "你好", script: "中文", code: "CN" },
  { id: "de", country: "Germany", language: "German", greeting: "Guten Tag", script: "Deutsch", code: "DE" },
  { id: "jp", country: "Japan", language: "Japanese", greeting: "こんにちは", script: "日本語", code: "JP" },
  { id: "kr", country: "South Korea", language: "Korean", greeting: "안녕하세요", script: "한국어", code: "KR" },
];

export const MULTILINGUAL_GLYPHS = [
  { char: "ආ", lang: "Sinhala", name: "Sinhala Script" },
  { char: "அ", lang: "Tamil", name: "Tamil Script" },
  { char: "A", lang: "English", name: "Latin Script" },
  { char: "文", lang: "Chinese", name: "Hanzi" },
  { char: "語", lang: "Japanese", name: "Kanji" },
  { char: "ض", lang: "Arabic", name: "Arabic Script" },
  { char: "Ω", lang: "Greek", name: "Greek Alphabet" },
  { char: "Я", lang: "Cyrillic", name: "Cyrillic Script" },
  { char: "ॐ", lang: "Sanskrit", name: "Devanagari" },
  { char: "한", lang: "Korean", name: "Hangul" },
];
