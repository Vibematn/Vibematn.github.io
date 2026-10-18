#!/usr/bin/env node

/**
 * وایب‌متن CLI // VibeMatn CLI
 * ابزار خط فرمان پالایش و استانداردسازی متن فارسی هوش مصنوعی
 * توسعه‌دهنده: ریک سانچز (@m4tinbeigi)
 */

const fs = require('fs');
const path = require('path');

const badPatterns = [
  { regex: /می[\s\u200c]*باشد/gu, replace: 'است' },
  { regex: /می[\s\u200c]*گردد/gu, replace: 'می‌شود' },
  { regex: /به\s*شمار\s*می[\s\u200c]*(?:رود|آید)/gu, replace: 'است' },
  { regex: /تلقی\s*می[\s\u200c]*(?:گردد|شود)/gu, replace: 'است' },
  { regex: /حائز\s*اهمیت\s*(?:می[\s\u200c]*باشد|است)/gu, replace: 'مهم است' },
  { regex: /دستخوش\s*تغییر\s*قرار\s*گرفت/gu, replace: 'تغییر کرد' },
  { regex: /مورد\s*استفاده\s*قرار\s*می[\s\u200c]*گیرد/gu, replace: 'استفاده می‌شود' },
  { regex: /مبادرت\s*به\s*(?:عمل\s*آورد|ورزید)/gu, replace: 'اقدام کرد' },
  { regex: /به\s*مرحله(?:[\s\u200c]*ی)?\s*اجرا\s*درآمد/gu, replace: 'اجرا شد' },
  { regex: /(?:صورت\s*می[\s\u200c]*پذیرد|تحقق\s*می[\s\u200c]*یابد)/gu, replace: 'انجام می‌شود' },
  { regex: /ایفای\s*نقش\s*می[\s\u200c]*(?:کند|نماید)/gu, replace: 'کمک می‌کند' },
  { regex: /(?:و\s+)?لازم\s*به\s*ذکر\s*است(?:\s*که)?/gu, replace: '' },
  { regex: /(?:و\s+)?شایان\s*ذکر\s*است(?:\s*که)?/gu, replace: '' },
  { regex: /(?:پرواضح|بدیهی)\s*است\s*که/gu, replace: '' },
  { regex: /نکته(?:[\s\u200c]*ی)?\s*حائز\s*اهمیت\s*(?:این\s*است\s*که|آن\s*است\s*که)/gu, replace: 'نکته مهم:' },
  { regex: /در\s*پایان\s*روز/gu, replace: 'در نهایت' },
  { regex: /نقش\s*بسزایی\s*ایفا\s*می[\s\u200c]*کند/gu, replace: 'بسیار مؤثر است' },
  { regex: /نقش\s*بسزایی/gu, replace: 'نقش مؤثری' },
  { regex: /به\s*اشتراک\s*بگذارید/gu, replace: 'ارسال کنید' },
  { regex: /در\s*دنیای\s*(?:پرشتاب|پویا|مدرن)(?:\s*و\s*(?:پرشتاب|پویا|مدرن))?\s*امروز(?:،)?/gu, replace: '' },
  { regex: /[—–]/gu, replace: '،' },
  { regex: /گاهاً/gu, replace: 'گاهی' },
  { regex: /ناچاراً/gu, replace: 'به‌ناچار' },
  { regex: /دوماً/gu, replace: 'دوم' },
  { regex: /سوماً/gu, replace: 'سوم' },
  { regex: /تلفناً/gu, replace: 'تلفنی' },
  { regex: /گزارشات/gu, replace: 'گزارش‌ها' },
  { regex: /سفارشات/gu, replace: 'سفارش‌ها' },
  { regex: /اساتید/gu, replace: 'استادان' },
  { regex: /کتب\b/gu, replace: 'کتاب‌ها' }
];

function toPersianDigits(str) {
  const p = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return str.replace(/[0-9]/g, w => p[+w]);
}

function formatNumberSeparator(str) {
  return str.replace(/\b(\d{4,})\b/g, m => Number(m).toLocaleString('en-US'));
}

function cleanText(text, tone = 'formal') {
  if (!text) return '';
  let res = text;

  // ۱. اصلاح حروف عربی و تطویل
  res = res.replace(/\u0640+/g, '');
  res = res.replace(/ي/g, 'ی').replace(/ك/g, 'ک').replace(/ى/g, 'ی');

  // ۲. گیومه و علائم نگارشی
  res = res.replace(/["“]([^"”]+)["”]/gu, '«$1»');
  res = res.replace(/\s*([،؛!؟\.])\s*/g, '$1 ');
  res = res.replace(/,/g, '،').replace(/\?/g, '؟').replace(/;/g, '؛');

  // ۳. نیم‌فاصله‌سازی
  res = res.replace(/\bمی\s+/g, 'می‌');
  res = res.replace(/\bنمی\s+/g, 'نمی‌');
  res = res.replace(/\s+ها\b/g, '‌ها');
  res = res.replace(/\s+های\b/g, '‌های');
  res = res.replace(/\s+تر\b/g, '‌تر');
  res = res.replace(/\s+ترین\b/g, '‌ترین');

  // ۴. پالایش الگوهای ماشینی
  badPatterns.forEach(item => {
    res = res.replace(item.regex, item.replace);
  });

  // ۵. پردازش لحن درخواستی
  if (tone === 'conversational') {
    res = res.replace(/\bمی‌شود\b/g, 'میشه');
    res = res.replace(/\bمی‌توانید\b/g, 'می‌تونید');
    res = res.replace(/\bمی‌خواهم\b/g, 'می‌خوام');
    res = res.replace(/\bمی‌کنیم\b/g, 'می‌کنیم');
    res = res.replace(/\bمی‌گویم\b/g, 'می‌گم');
    res = res.replace(/\bرا\b/g, 'رو');
  } else if (tone === 'ui-copy') {
    res = res.replace(/جهت\s+(?:ورود|لاگین)\s+کلیک\s+کنید/g, 'ورود');
    res = res.replace(/جهت\s+ثبت\s+کلیک\s+کنید/g, 'ثبت');
    res = res.replace(/ارسال\s+فرمایید/g, 'ارسال');
  }

  // ۶. اعداد و جداکننده
  res = formatNumberSeparator(res);
  res = toPersianDigits(res);
  res = res.replace(/,/g, '٬');

  // ۷. پاکسازی فاصله‌ها
  res = res.replace(/\s*،\s*،+/g, '، ');
  res = res.replace(/\s*،\s*که/g, ' که');
  res = res.replace(/\s{2,}/g, ' ').trim();

  return res;
}

const args = process.argv.slice(2);
if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
  console.log(`
وایب‌متن // VibeMatn CLI (نسخه 1.0.0)
استاندارد پالایش و انسان‌سازی متون فارسی هوش مصنوعی
توسعه‌دهنده: ریک سانچز (@m4tinbeigi)

استفاده:
  vibematn "متن مورد نظر شما"
  vibematn --tone conversational "متن برای شبکه‌های اجتماعی"
  vibematn --file path/to/file.md

گزینه‌ها:
  --tone [formal|conversational|ui-copy|cro]   انتخاب لحن خروجی
  --file <path>                                پالایش مستقیم یک فایل
  -h, --help                                   راهنما
`);
  process.exit(0);
}

let tone = 'formal';
let textToClean = '';

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--tone' && args[i + 1]) {
    tone = args[i + 1];
    i++;
  } else if (args[i] === '--file' && args[i + 1]) {
    try {
      textToClean = fs.readFileSync(args[i + 1], 'utf8');
      i++;
    } catch (e) {
      console.error('خطا در خواندن فایل:', e.message);
      process.exit(1);
    }
  } else {
    textToClean = args[i];
  }
}

const cleaned = cleanText(textToClean, tone);
console.log(cleaned);
