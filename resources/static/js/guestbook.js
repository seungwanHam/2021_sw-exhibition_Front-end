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

  const item = document.createElement('span');
  item.innerText = writer + "\n\n" + text;

  itemBox.appendChild(item);

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