// import Question1 from '../question-images/Question1.png';
// import Question2 from '../question-images/Question2.png';
// import Question3 from '../question-images/Question3.png';
// import Question4 from '../question-images/Question4.png';
// import Question5 from '../question-images/Question5.png';
// import Question6 from '../question-images/Question6.png';
// import Question7 from '../question-images/Question7.png';
// import Question8 from '../question-images/Question8.png';
// import Question9 from '../question-images/Question9.png';
// import Question10 from '../question-images/Question10.png';
// import Question11 from '../question-images/Question11.png';
// import Question12 from '../question-images/Question12.png';

const QuestionData = [
  {
    id: 1,
    title: '산책하던 중 떡잎공원에서 놀고 있는 떡잎마을 방범대가 보인다!',
    image:
      'https://velog.velcdn.com/images/youa7878/post/860532f5-f9cf-4e57-a55e-ec63e61b1920/image.png',
    answerA: '나도 같이 놀자! 떡잎마을 방범대에 합류한다',
    answerB: '애들아 안녕 ㅎㅎ 인사하고 놀자고 권유받길 기다린다',
    gauge: 0,
    type: 'EI',
  },
  {
    id: 2,
    title:
      '떡잎마을에 자신과 똑같은 모습을 한 분신이 있다는 흉흉한 소문이 돌고 있다!',
    image:
      'https://velog.velcdn.com/images/youa7878/post/02234855-31a1-4c98-8d60-979736387928/image.png',
    answerA: '이 세상에 동일인물은 없다. 그러려니 한다',
    answerB: '어쩌면 이미 내 분신이 있을지도...? 만나면 어떡하지? 상상해 본다',
    gauge: 8.3,
    type: 'SN',
  },
  {
    id: 3,
    title:
      '짱구가 자신의 동생인 짱아가 주사를 맞으러 갔다고 한다. 이때 나의 반응은?',
    image:
      'https://velog.velcdn.com/images/youa7878/post/d5203ac3-296e-4d5c-b9b5-e3a42ae8a485/image.png',
    answerA: '어디가 아파서 갔대? 짱아의 상태를 확인한다',
    answerB: '헐... 짱아 괜찮아? 주사 아픈데 ㅠㅠ 어디 아픈가? 걱정한다',
    gauge: 16.6,
    type: 'TF',
  },
  {
    id: 4,
    title:
      '채성아 선생님께서 내일 가면 만들기에 쓰일 쇼핑백을 준비해 오라 하셨다. 준비물이 있을 때 보통 나는?',
    image:
      'https://velog.velcdn.com/images/youa7878/post/29cd39d7-3873-4859-b642-29ea6839e7ad/image.png',
    answerA: '하루 전에 미리 마음에 드는 쇼핑백을 준비한다',
    answerB: '아 맞다! 준비물이 있었지! 챙기기만 하면 된 거 아닌가?',
    gauge: 24.9,
    type: 'JP',
  },
  {
    id: 5,
    title: '짱구네 집에 놀러갔는데 집에 아무도 없다...',
    image:
      'https://velog.velcdn.com/images/youa7878/post/0f71e667-1f10-4956-8e4c-86ce5236f7a2/image.png',
    answerA:
      '아무도 없나? 심심한데 언제 오는 거야! 따분하다. 빨리 짱구가 오면 좋겠다',
    answerB:
      '조용하네 짱구 올 동안 TV나 보고 있을까 ㅎㅎ 혼자 있는 이 순간이 편하다',
    gauge: 33.2,
    type: 'EI',
  },
  {
    id: 6,
    title:
      '비상! 친구들끼리 다리를 건너는데 다리가 무너질 것 같다... 급박한 위기 상황에서 나는?',
    image:
      'https://velog.velcdn.com/images/youa7878/post/01bcf785-03ab-403d-afea-8fef02b94ae1/image.png',
    answerA: '일단 뛰어!!!!!! 먼저 도착하면 친구들을 구할 방법을 생각한다',
    answerB:
      '떨어지면 어떡하지?!! 하늘을 나는 능력이 있다면 살텐데 ㅠㅠ!!! 무서워서 별 생각을 다 한다',
    gauge: 41.5,
    type: 'SN',
  },
  {
    id: 7,
    title: '이웃 닭살부부 민희와 정훈이 싸운 것 같다...',
    image:
      'https://velog.velcdn.com/images/youa7878/post/22d0fefb-eb2e-4911-a7ed-d1d5730eccbb/image.png',
    answerA: '무슨 일로 싸웠어요? 이야기를 들어보고 해결방안을 생각해 본다',
    answerB:
      '무슨 일이길래 표정이 그렇게 안 좋아요... 이야기를 듣고 둘의 화해를 위해 위로와 격려를 해 준다',
    gauge: 49.8,
    type: 'TF',
  },
  {
    id: 8,
    title: '내일은 유치원 소풍 가는 날! 소풍 전날의 나는?',
    image:
      'https://velog.velcdn.com/images/youa7878/post/f53dc31c-6fab-4ca8-b65a-9a616424bbf1/image.png',
    answerA: '가방까지 이미 준비완! 내일 입을 옷까지 생각해 두었다',
    answerB: '짐은 대충 쌌지만 옷은 아침에 일어나 끌리는 걸 입는다',
    gauge: 58.1,
    type: 'JP',
  },
  {
    id: 9,
    title:
      '장미반의 치타가 축구 경기를 하자고 한다. 장미반 애들이랑 친하지 않는데... 어쩌지? ',
    image:
      'https://velog.velcdn.com/images/youa7878/post/09737f08-acee-47c8-bc35-f37cb38e77d5/image.png',
    answerA: '재미있겠는데? 나 할래! 재미있는 놀이엔 내가 빠지면 섭섭하다',
    answerB: '어쩌지... 고민하던 중, 친구들이 하자고 해서 그냥 한다',
    gauge: 66.4,
    type: 'EI',
  },
  {
    id: 10,
    title: '짱구가 멍때리기 게임을 하자고 한다!',
    image:
      'https://velog.velcdn.com/images/youa7878/post/52df3ecb-570e-42dd-b97e-e4e4da8fd23a/image.png',
    answerA: '오케이 생각을 안 하면 되는 거지? 진짜 아무 생각 안 한다',
    answerB:
      '어떻게 아무런 생각을 안 해!! 이미 아무생각 안 하는 상상을 하고 있다',
    gauge: 74.7,
    type: 'SN',
  },
  {
    id: 11,
    title:
      '달갑지 않은 이웃인 오수가 또 시험에 떨어진 모양이다. 나름대로 위로를 건낼 때 나는...',
    image:
      'https://velog.velcdn.com/images/youa7878/post/18f35cd4-5181-47a5-9a45-b2d8e81f7847/image.png',
    answerA: '그렇구나... 이번 시험 어려웠어?',
    answerB: '아... 괜찮아...? 다음엔 꼭 붙을 수 있을 거야...!',
    gauge: 83,
    type: 'TF',
  },
  {
    id: 12,
    title: '떡잎마을 방범대 록밴드를 결성했다! 어떤 노래를 부르지?',
    image:
      'https://velog.velcdn.com/images/youa7878/post/84bf2130-d93a-489d-a11d-5ffee4f7e054/image.png',
    answerA: '록? 유명한 노래를 검색해 보고 친구들과 부른다',
    answerB: '되는대로 일단 부른다! 내가 부르는 게 곧 록이다!!!',
    gauge: 91.3,
    type: 'JP',
  },
];

export default QuestionData;
