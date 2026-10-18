---
name: vibematn-messaging-email
description: استاندارد پیامک تراکنشی و ایمیل مارکتینگ ایران
version: 1.0.0
author: Hermes Agent
license: MIT
metadata:
  hermes:
    tags: [sms, email-marketing, transactional-sms, otp, iran-telecom, copywriting]
    category: marketing
---

# شیوه‌نامه جامع پیامک و ایمیل مارکتینگ بومی ایران (VibeMatn Messaging & Email)

این مهارت اصول فنی، کپی‌رایتینگ بهینه‌سازی‌شده، الگوهای پیامکی زیر ۷۰ کاراکتر و ساختار ایمیل‌های تبادلی و تعاملی را برای کسب‌وکارهای فعال در بازار ایران تبیین می‌کند.

---

## ۱. زیرساخت پیامک در ایران و قوانین مخابراتی

ارسال پیامک در ایران تفاوت‌های زیربنایی با استانداردهای بین‌المللی دارد:

1. **محدودیت ۷۰ کاراکتری زبان فارسی:**
   - پیامک‌های تک‌بخشی با کدینگ UCS-2 حداکثر ۷۰ کاراکتر ظرفیت دارند.
   - عبور از ۷۰ کاراکتر، پیام را به بسته‌های ۶۷ کاراکتری می‌شکند. این امر هزینه ارسال را دو یا سه برابر کرده و خطر به هم ریختن ترتیب پارت‌ها در اپراتورهای همراه اول و ایرانسل را بالا می‌برد.
   - تمام پیامک‌های تراکنشی حیاتی باید در سقف ۷۰ کاراکتر باقی بمانند.

2. **خطوط خدماتی در برابر خطوط تبلیغاتی:**
   - **خط خدماتی (اشتراکی یا اختصاصی):** عبور تضمینی از بلک‌لیست مخابراتی (کسانی که کد #800* یا عدد 11 را برای عدم دریافت تبلیغات فعال کرده‌اند). این خطوط منحصرا برای پیام‌های تراکنشی (OTP، تایید سفارش، ارسال مرسوله) مجاز هستند.
   - **خط تبلیغاتی:** برای بازاریابی عمومی استفاده می‌شود و برای شماره‌های بلک‌لیست مخابرات ارسال نمی‌شود.

3. **ارسال بر پایه الگو (Pattern / Verify Lookup):**
   - برای خطوط خدماتی، ثبت و تایید قالب متنی ثابت الزامی است. فقط متغیرها (توکن‌ها) به صورت پویا جای‌گذاری می‌شوند.
   - سرعت تحویل در حالت پترن زیر ۵ ثانیه است زیرا نیاز به صف بازبینی دستی ندارد.

---

## ۲. فرمول‌های پیامک تراکنشی (حداکثر ۷۰ کاراکتر)

تمام متون زیر با در نظر گرفتن داده‌های واقعی و طول متغیرها، دقیقا در بازه مجاز تک‌پارت قرار دارند.

### الف) کد احراز هویت و ورود (OTP)
- **فرمول:**
  ```text
  کد ورود به [برند]: [کد]
  اعتبار: [زمان] دقیقه
  ```
- **نمونه آماده (طول: ۳۸ کاراکتر):**
  ```text
  کد ورود به پاتوق: ۱۲۳۴۵
  اعتبار: ۳ دقیقه
  ```
- **نمونه با تذکر امنیتی (طول: ۶۰ کاراکتر):**
  ```text
  کد ورود به دیوار: ۵۴۳۲۱
  اعتبار: ۲ دقیقه
  امنیتی: به کسی ندهید
  ```

### ب) تایید سفارش و پرداخت موفق
- **فرمول:**
  ```text
  سفارش [کد] در [برند] ثبت شد.
  مبلغ: [مبلغ] تومان
  پیگیری: [لینک]
  ```
- **نمونه آماده (طول: ۶۶ کاراکتر):**
  ```text
  سفارش ۹۸۷۶ در شاپ ثبت شد.
  مبلغ: ۲۵۰٬۰۰۰ تومان
  پیگیری: shop.ir/o/98
  ```

### ج) ارسال مرسوله و کد رهگیری پستی
- **فرمول:**
  ```text
  مرسوله سفارش [کد] تحویل پست شد.
  رهگیری: [لینک یا کد]
  ```
- **نمونه آماده (طول: ۵۴ کاراکتر):**
  ```text
  مرسوله سفارش ۹۸۷۶ تحویل پست شد.
  رهگیری: post.ir/t/9876
  ```

### د) یادآوری نوبت و جلسه
- **فرمول:**
  ```text
  نوبت شما در [مرکز]: [روز] ساعت [ساعت].
  تغییر یا لغو: [تلفن]
  ```
- **نمونه آماده (طول: ۶۲ کاراکتر):**
  ```text
  نوبت شما در کلینیک مهر: فردا ساعت ۱۶:۳۰.
  لغو یا تغییر: ۰۲۱۸۸۸۸
  ```

---

## ۳. استانداردهای پیامک‌های لید و بازیابی مشتری (Anti-Spam)

برای بازیابی سبد خرید یا بازگرداندن کاربران قبلی بدون ایجاد مزاحمت و بدون مسدود شدن خط، رعایت اصول زیر الزامی است:

1. **ساعات ارسال:** فقط بین ساعت ۰۹:۰۰ تا ۲۱:۰۰. ارسال پس از ساعت ۲۱ نقض قوانین رگولاتوری است.
2. **شفافیت هویت:** نام برند یا فروشگاه حتما در ابتدای پیام ذکر شود.
3. **لینک کوتاه اختصاصی:** از کوتاه کننده‌های عمومی خارجی مثل bit.ly یا tinyurl استفاده نکنید؛ بسیاری از سرورهای اپراتور این لینک‌ها را فیشینگ تلقی کرده و پیام را فیلتر می‌کنند. حتما از زیردامنه اختصاصی برند استفاده کنید (مانند brand.ir/c).
4. **امکان لغو عضویت:** قرار دادن عبارت «لغو ۱۱» یا «لغو ۱» در انتهای پیام تبلیغاتی اجباری است.
5. **پرهیز از واژگان اسپم و کلیک‌بیت:** کلماتی مانند «برنده»، «جایزه میلیونی»، «وام بدون ضامن»، یا استفاده مکرر از علامت تعجب منجر به بلاک شدن پیام در فیلتر هوشمند اپراتورها می‌شود.

### الگوهای بازاریابی و بازیابی:

#### ۱. بازیابی سبد خرید رها شده (طول: ۶۲ کاراکتر)
```text
سبد خرید شما در دیجی ذخیره شد.
تکمیل با ۵٪ تخفیف:
digi.ir/c/12
```

#### ۲. تخفیف شخصی‌سازی‌شده و وفادارسازی (طول: ۶۰ کاراکتر)
```text
علی عزیز، ۲۰٪ هدیه خرید امروز شما:
کد: NOW20
خرید: digi.ir/d
```

#### ۳. تمدید اشتراک یا یادآوری انقضا (طول: ۶۳ کاراکتر)
```text
رضا عزیز، ۳ روز تا پایان اشتراک شما.
تمدید با تخفیف ویژه:
app.ir/re
```

---

## ۴. الگوهای استاندارد ایمیل مارکتینگ بومی

ایمیل‌های شرکتی و تراکنشی در ایران باید راست‌چین (`dir="rtl"`)، ریسپانسیو و بهینه‌سازی‌شده برای جیمیل و کلاینت‌های موبایل باشند. فونت پیشنهادی: `Vazirmatn, Tahoma, Arial, sans-serif`.

### الگوی ۱: ایمیل آنبوردینگ و خوش‌آمدگویی (Onboarding)

- **عنوان ایمیل:** به [نام برند] خوش آمدید | فعال‌سازی حساب کاربری
- **پیش‌نمایش (Preheader):** حساب کاربری شما با موفقیت ساخته شد. برای شروع کلیک کنید.
- **متن ایمیل:**

```html
<div dir="rtl" style="font-family: Tahoma, 'Vazirmatn', sans-serif; line-height: 1.8; color: #1e293b; background-color: #f8fafc; padding: 24px;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
    <tr>
      <td style="padding: 32px 24px; text-align: center; background-color: #0f172a; color: #ffffff;">
        <h1 style="margin: 0; font-size: 22px; font-weight: bold;">خوش آمدید به [نام پلتفرم]</h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px 24px;">
        <p style="font-size: 15px; margin-top: 0;">سلام [نام کاربر] عزیز،</p>
        <p style="font-size: 14px; color: #475569;">
          از اینکه به جمع کاربران ما پیوستید خوشحالیم. برای تکمیل ثبت‌نام و فعال‌سازی کامل امکانات، لطفا روی دکمه زیر کلیک کنید:
        </p>
        <div style="text-align: center; margin: 32px 0;">
          <a href="https://example.ir/verify?token=XYZ" style="background-color: #2563eb; color: #ffffff; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
            فعال‌سازی حساب کاربری
          </a>
        </div>
        <div style="background-color: #f1f5f9; padding: 16px; border-radius: 8px; font-size: 13px; color: #334155;">
          <strong>سه گام سریع برای شروع:</strong>
          <ol style="margin: 8px 0 0 0; padding-right: 20px;">
            <li>پروفایل کاری خود را تکمیل کنید.</li>
            <li>اولین پروژه خود را بسازید.</li>
            <li>از بخش راهنما، ویدیوی ۵ دقیقه‌ای معرفی را مشاهده کنید.</li>
          </ol>
        </div>
        <p style="font-size: 13px; color: #64748b; margin-top: 24px;">
          اگر سوالی دارید، کافیست به همین ایمیل پاسخ دهید. تیم پشتیبانی همراه شماست.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding: 16px 24px; text-align: center; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
        © [سال] [نام شرکت یا برند]. تمامی حقوق محفوظ است.
      </td>
    </tr>
  </table>
</div>
```

---

### الگوی ۲: فاکتور خرید و تایید تراکنش (Purchase Invoice)

- **عنوان ایمیل:** صورت‌حساب خرید سفارش [شماره فاکتور] | [نام برند]
- **پیش‌نمایش (Preheader):** رسید پرداخت و جزئیات سفارش [شماره فاکتور]
- **متن ایمیل:**

```html
<div dir="rtl" style="font-family: Tahoma, 'Vazirmatn', sans-serif; line-height: 1.8; color: #1e293b; background-color: #f8fafc; padding: 24px;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
    <tr>
      <td style="padding: 24px; border-bottom: 2px solid #3b82f6;">
        <table width="100%">
          <tr>
            <td style="font-size: 18px; font-weight: bold; color: #0f172a;">صورت‌حساب رسمی الکترونیکی</td>
            <td align="left" style="font-size: 13px; color: #64748b; direction: ltr;">#INV-84920</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding: 24px;">
        <p style="font-size: 14px; margin: 0 0 16px 0;">
          کاربر گرامی [نام کاربر]، پرداخت شما با موفقیت تایید شد.
        </p>
        <table width="100%" style="border-collapse: collapse; margin-bottom: 20px; font-size: 13px;">
          <tr style="background-color: #f1f5f9; text-align: right;">
            <th style="padding: 10px; border-bottom: 1px solid #cbd5e1;">شرح خدمت / محصول</th>
            <th style="padding: 10px; border-bottom: 1px solid #cbd5e1; text-align: center;">تعداد</th>
            <th style="padding: 10px; border-bottom: 1px solid #cbd5e1; text-align: left;">مبلغ (تومان)</th>
          </tr>
          <tr>
            <td style="padding: 12px 10px; border-bottom: 1px solid #e2e8f0;">اشتراک سالانه پلن حرفه‌ای</td>
            <td style="padding: 12px 10px; border-bottom: 1px solid #e2e8f0; text-align: center;">۱</td>
            <td style="padding: 12px 10px; border-bottom: 1px solid #e2e8f0; text-align: left;">۱٬۲۰۰٬۰۰۰</td>
          </tr>
          <tr>
            <td colspan="2" style="padding: 10px; font-weight: bold; text-align: right;">مبلغ کل پرداخت شده:</td>
            <td style="padding: 10px; font-weight: bold; text-align: left; color: #16a34a; font-size: 15px;">۱٬۲۰۰٬۰۰۰ تومان</td>
          </tr>
        </table>
        <div style="background-color: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 6px; padding: 12px; font-size: 12px; color: #475569;">
          <div>کد پیگیری شاپرک: <strong>948301827401</strong></div>
          <div>تاریخ و زمان تراکنش: <strong>۱۴۰۳/۰۷/۲۶ ساعت ۱۴:۲۰</strong></div>
          <div>روش پرداخت: <strong>درگاه پرداخت اینترنتی</strong></div>
        </div>
        <div style="margin-top: 24px; text-align: center;">
          <a href="https://example.ir/panel/invoices/84920" style="color: #2563eb; font-size: 13px; text-decoration: none; font-weight: bold;">
            دانلود نسخه PDF صورت‌حساب
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>
```

---

### الگوی ۳: تغییر تعرفه‌ها و پلن‌ها (Pricing & Plan Update)

- **عنوان ایمیل:** به‌روزرسانی تعرفه خدمات [نام برند] از [تاریخ]
- **پیش‌نمایش (Preheader):** تغییر تعرفه‌ها و امکان تمدید با نرخ فعلی تا پایان ماه
- **متن ایمیل:**

```html
<div dir="rtl" style="font-family: Tahoma, 'Vazirmatn', sans-serif; line-height: 1.8; color: #1e293b; background-color: #f8fafc; padding: 24px;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
    <tr>
      <td style="padding: 24px; background-color: #0f172a; color: #ffffff;">
        <h2 style="margin: 0; font-size: 18px;">اطلاعیه مهم: به‌روزرسانی تعرفه‌های خدمات</h2>
      </td>
    </tr>
    <tr>
      <td style="padding: 28px 24px;">
        <p style="font-size: 14px; margin-top: 0;">همراه گرامی، سلام.</p>
        <p style="font-size: 14px; color: #475569;">
          هدف ما همواره توسعه زیرساخت و ارائه پایدارترین سرویس با بالاترین استاندارد کیفی بوده است. با توجه به افزایش هزینه‌های زیرساخت ابری و سرورها و به منظور اضافه کردن قابلیت‌های جدید، تعرفه اشتراک‌های ما از تاریخ <strong>۱ آبان</strong> تغییر خواهد کرد.
        </p>
        <div style="background-color: #eff6ff; border-right: 4px solid #3b82f6; padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <h4 style="margin: 0 0 8px 0; color: #1e40af; font-size: 14px;">فرصت تمدید با قیمت فعلی برای کاربران وفادار</h4>
          <p style="margin: 0; font-size: 13px; color: #1e3a8a;">
            شما می‌توانید تا پیش از ۳۰ مهر، اشتراک خود را با تعرفه قبلی تمدید یا ارتقا دهید. اشتراک‌های فعال تا پایان دوره اعتبار خود بدون هیچ هزینه اضافه‌ای فعال خواهند ماند.
          </p>
        </div>
        <div style="text-align: center; margin: 28px 0;">
          <a href="https://example.ir/pricing" style="background-color: #0f172a; color: #ffffff; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
            مشاهده تعرفه‌های جدید و تمدید
          </a>
        </div>
        <p style="font-size: 13px; color: #64748b;">
          از همراهی و اعتماد شما سپاسگزاریم. چنانچه نیاز به مشاوره یا سوالی دارید، پشتیبانی ما آماده راهنمایی شماست.
        </p>
      </td>
    </tr>
  </table>
</div>
```

---

## ۵. چک‌لیست بازبینی پیش از انتشار (Pre-flight QA)

قبل از فشردن کلید ارسال در پنل پیامک یا سرویس ایمیل، موارد زیر را کنترل کنید:

- [ ] **خط خدماتی در برابر تبلیغاتی:** آیا پیامک تراکنشی (OTP، تاییدیه) قطعا با خط خدماتی ارسال می‌شود تا به لیست سیاه مخابرات برسد؟
- [ ] **شمارش کاراکتر یونیکد:** آیا متن پیامک با متغیرهای حداکثر طول در سقف ۷۰ کاراکتر قرار دارد؟
- [ ] **دامنه شورت‌لینک:** آیا دامنه لینک کوتاه متعلق به برند است و از سرویس‌های عمومی مانند bit.ly استفاده نشده است؟
- [ ] **زمان ارسال تبلیغاتی:** آیا زمان ارسال بین ۹ صبح تا ۹ شب قرار دارد؟
- [ ] **دستور لغو عضویت:** آیا متن پیامک بازاریابی شامل «لغو ۱۱» است؟
- [ ] **جهت متن ایمیل:** آیا `dir="rtl"` در المان‌های اصلی ایمیل تنظیم شده است؟
- [ ] **نمایش مبالغ:** آیا واحد پول به صورت «تومان» و اعداد با جداکننده هزارگان درج شده‌اند؟
- [ ] **پرهیز از ام‌دش:** متن فاقد هرگونه خط تیره کشیده (em-dash) باشد.
