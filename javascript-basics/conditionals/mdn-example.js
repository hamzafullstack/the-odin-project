// for reference visit : https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals
// اس سبق میں ویب پیجز پر کام کرنے کے تمام مثالوں کے کوڈ اس فائل میں موجود ہیں۔


// js code here..
const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    const choice = select.value;

    // conditionals
    if (choice === 'sunny') {
        para.textContent = "آج موسم نہایت خوشگوار اور دھوپ کھلی ہوئی ہے۔ ہلکے کپڑے پہنیں، ساحلِ سمندر یا پارک کی سیر کریں، اور ساتھ میں مزیدار آئس کریم کا لطف اٹھائیں۔";
    } else if (choice === 'rainy') {
        para.textContent = "باہر بارش ہو رہی ہے۔ رین کوٹ اور چھتری ساتھ لے جائیں، اور غیر ضروری طور پر زیادہ دیر باہر نہ رہیں۔";
    } else if (choice === 'snowing') {
        para.textContent = "برف باری زور و شور سے جاری ہے اور سردی اپنے عروج پر ہے۔ بہتر ہے کہ گرم چاکلیٹ کا کپ لے کر گھر میں آرام کریں، یا باہر جا کر ایک خوبصورت برف کا آدمی بنائیں۔";
    } else if (choice === 'overcast') {
        para.textContent = "اس وقت بارش تو نہیں ہو رہی، مگر آسمان پر گہرے بادل چھائے ہوئے ہیں۔ کسی بھی لمحے بارش شروع ہو سکتی ہے، اس لیے احتیاطاً رین کوٹ اپنے ساتھ رکھیں۔";
    } else {
        para.textContent = "کوئی خاص بات نہیں۔";
    }
}