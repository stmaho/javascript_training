//変数_書き換えが可能：let
let neko = 'hello world';
//neko = 'hello world2!!';

//定数_絶対に中身を変えられたくないもの:const
const pt = 'he...hell...hello world';

//配列
let wanko = ['いち','にー','さーん']

//ループ文
///let index = 0;
// while(index < wanko.length ){
//   //繰り返したい命令
//   console.log(wanko[index])
//   index++;
// }

//if/else
// if(wanko.length > 3){
//   console.log('わん！！');
// }else {
//   console.log('わん！！わん！');
// }

//関数 1.同じ命令を何度も使いたい時.　2.任意のタイミングで命令を実行したいとき
const test = (arg) => {
  if(wanko.length > arg){
    console.log('わん！！');
  }else {
    console.log('わん！！わん！');
  }
};


//オブジェクト
const bird = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  BigFly: () => {
    console.log('hello world!');
  }
};

document.getElementsByTagName('button')[0].addEventListener('click', () => {
  window.alert('hello world')

});

//window windowのあらゆる情報が格納されている
//window.alert　ポップアップの表示が可能
//document 表示しているページの全体のオブジェクト

//evet
