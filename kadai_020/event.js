// 変更対象のHTML要素を取得
const target = document.getElementById('text');

// クリック対象のHTML要素を取得
const btn = document.getElementById('btn');

// クリック時の処理追加
btn.addEventListener('click',()=>{

    // テキスト変更
    target.textContent = 'ボタンをクリックしました';

});