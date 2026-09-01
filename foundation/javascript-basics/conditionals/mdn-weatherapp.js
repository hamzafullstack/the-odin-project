// for reference visit : https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals
// اس سبق میں ویب پیجز پر کام کرنے کے تمام مثالوں کے کوڈ اس فائل میں موجود ہیں۔


// سلیکٹ عنصر حاصل کریں
const select = document.querySelector('select');

// پیراگراف عنصر حاصل کریں
const para = document.querySelector('p');

// انتخاب تبدیل ہونے پر فنکشن چلائیں
select.addEventListener('change', setWeather);

// موسم کے مطابق پیغام دکھائیں
function setWeather() {

    // منتخب کردہ موسم حاصل کریں
    const choice = select.value;

    // موسم کے مطابق فیصلہ کریں
    switch (choice) {

        // دھوپ والا موسم
        case 'sunny':
            para.textContent = "آج موسم نہایت خوشگوار اور دھوپ کھلی ہوئی ہے۔ ہلکے کپڑے پہنیں، ساحلِ سمندر یا پارک کی سیر کریں، اور مزیدار آئس کریم کا لطف اٹھائیں۔";
            break;

        // بارش والا موسم
        case "rainy":
            para.textContent = "باہر بارش ہو رہی ہے۔ رین کوٹ اور چھتری ساتھ لے جائیں، اور غیر ضروری طور پر زیادہ دیر باہر نہ رہیں۔";
            break;

        // برف باری والا موسم
        case "snowing":
            para.textContent = "برف باری زور و شور سے جاری ہے اور سردی اپنے عروج پر ہے۔ بہتر ہے کہ گرم چاکلیٹ کا کپ لے کر گھر میں آرام کریں، یا باہر جا کر ایک خوبصورت برف کا آدمی بنائیں۔";
            break;

        // ابر آلود موسم
        case "overcast":
            para.textContent = "اس وقت بارش تو نہیں ہو رہی، مگر آسمان پر گہرے بادل چھائے ہوئے ہیں۔ کسی بھی لمحے بارش شروع ہو سکتی ہے، اس لیے احتیاطاً رین کوٹ اپنے ساتھ رکھیں۔";
            break;

        // اگر کوئی انتخاب نہ ہو
        default:
            para.textContent = "براہِ کرم ایک موسم منتخب کریں۔";
    }
}