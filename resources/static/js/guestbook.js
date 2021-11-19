// 시간 구하기
function time() {
 
  // 연, 월, 일
  let today1 = new Date();

  let year = today1.getFullYear();
  let month = ('0' + (today1.getMonth() + 1)).slice(-2);
  let day = ('0' + today1.getDate()).slice(-2);
  
  // 시, 분, 초
  let today2 = new Date();   

  let hours = ('0' + today2.getHours()).slice(-2); 
  let minutes = ('0' + today2.getMinutes()).slice(-2);
  let seconds = ('0' + today2.getSeconds()).slice(-2); 
  
  return year + '-' + month  + '-' + day + ' ' + hours + ':' + minutes  + ':' + seconds;
}

const text_wrapper = document.querySelector('.text-wrapper');
const input_writer = document.querySelector('#writer');
const input_text = document.querySelector('#content');
const input_btn = document.querySelector('.input-btn');

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아온다.
  const writer = input_writer.value;
  const text = input_text.value;

  if(text === '' || writer === '') {
    input_writer.focus();
    return;
  }
  // 2. 새로운 아이템을 만든다.
  const item1 = createItem(writer, text);
  // 3. text-wrapper 컨테이너 안에 새로 만든 아이템을 추가한다.
  text_wrapper.appendChild(item1);
  // 4. input 을 초기화 한다.
  input_writer.value= '';
  input_text.value = '';
  input_writer.focus();
}

function createItem(writer, text) {
  const itemBox = document.createElement('div');
  itemBox.setAttribute('class', 'text');

  const itemBox_inner1 = document.createElement('div');
  itemBox_inner1.setAttribute('class', 'text__writer');

  const item_1 = document.createElement('span');
  item_1.innerText = writer;

  const itemBox_inner2 = document.createElement('div');
  itemBox_inner2.setAttribute('class', 'text__content');

  const item_2 = document.createElement('span');
  item_2.innerText = text;

  const itemBox_inner3 = document.createElement('div');
  itemBox_inner3.setAttribute('class', 'now_time');

  const item_3 = document.createElement('span');
  item_3.innerText = time();

  itemBox.appendChild(itemBox_inner1);
  itemBox_inner1.appendChild(item_1);
  itemBox.appendChild(itemBox_inner2);
  itemBox_inner2.appendChild(item_2);
  itemBox.appendChild(itemBox_inner3);
  itemBox_inner3.appendChild(item_3);

  return itemBox;
}

input_btn.addEventListener('click', () => {
  onAdd();
});

// enter 키로 입력을 해놓으면 줄바꿈이 안되기 때문에 해당 코드 삭제 처리
// input_text.addEventListener('keypress', (event) => {
//   if (event.key === 'Enter') {
//     onAdd();
//   }
// });